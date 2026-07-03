import { useState, useEffect, useRef } from 'react';
import FadeIn from './FadeIn';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [showSoundHint, setShowSoundHint] = useState(true);

  const ensurePlaying = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const playPromise = v.play();
    if (playPromise) {
      playPromise.catch(() => {});
    }
  };

  // Auto-hide "Tap for sound" hint after 5 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowSoundHint(false), 5000);
    return () => clearTimeout(t);
  }, []);

  // Keep the video alive while scrolling so it does not stop off-screen
  useEffect(() => {
    ensurePlaying();

    const onVisibilityChange = () => {
      if (!document.hidden) {
        ensurePlaying();
      }
    };

    const onScroll = () => {
      const v = videoRef.current;
      if (v?.paused) {
        ensurePlaying();
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Mobile Safari is stricter about inline autoplay, so set the attributes directly too.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute('muted', '');
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', 'true');
    v.load();
    ensurePlaying();
  }, []);

  // Make sure playback resumes whenever the hero comes back into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ensurePlaying();
        }
      },
      { threshold: 0, rootMargin: '-50% 0px 0px 0px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Snap-scroll: one wheel tick / keypress while at top → jump to About
  useEffect(() => {
    let fired = false;

      const goToAbout = () => {
        if (fired) return;
        fired = true;
        const about = document.getElementById('about');
        if (about) about.scrollIntoView({ behavior: 'auto', block: 'start' });
      };

    const onWheel = (e: WheelEvent) => {
      if (fired) return;
      if (e.deltaY <= 0) return;
      if (window.scrollY > 50) return;
      e.preventDefault();
      goToAbout();
    };

    const onKey = (e: KeyboardEvent) => {
      if (fired) return;
      if (window.scrollY > 50) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToAbout();
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    setShowSoundHint(false);
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-black md:h-screen md:overflow-hidden">
      {/* Mobile hero stack */}
      <div className="md:hidden">
        <div className="relative h-[58svh] w-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted={muted}
            loop
            playsInline
            preload="metadata"
            onLoadedData={ensurePlaying}
            onCanPlay={ensurePlaying}
            className="absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src="/tarun-avator-potfolio-video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/35" />

          <div className="absolute left-0 right-0 top-0 z-10 px-4 pt-4">
            <div className="flex items-center justify-between">
              <ul className="flex items-center gap-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/80 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Email me
              </a>
            </div>
          </div>
        </div>

        <div className="px-4 pt-5 pb-7 text-center">
          <FadeIn delay={0.15} y={18}>
            <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.32em] text-white/60">
              PORTFOLIO · 2026
            </p>
          </FadeIn>

          <FadeIn delay={0.25} y={24}>
            <h1
              className="mx-auto max-w-[7.2ch] font-black uppercase leading-[0.82] tracking-[-0.04em] text-white"
              style={{ fontSize: 'clamp(2.4rem, 13vw, 4rem)' }}
            >
              TARUN<br />KUMAR<br />MAKODE
            </h1>
          </FadeIn>

          <FadeIn delay={0.35} y={16}>
            <p className="mx-auto mt-3 max-w-[20rem] text-[9px] font-medium uppercase tracking-[0.24em] text-white/75">
              AI DEVELOPER · CONTENT CREATOR · AUTOMATION
            </p>
          </FadeIn>

          <FadeIn delay={0.45} y={16}>
            <p className="mx-auto mt-3 max-w-[22rem] text-[12px] leading-relaxed text-white/78">
              I build AI-powered websites, apps, chatbots, voice agents, and automation systems that help businesses move faster.
            </p>
          </FadeIn>

          <FadeIn delay={0.55} y={14}>
            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0C0C0C] transition hover:scale-[1.03]"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-[1.03]"
              >
                Let&apos;s talk
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.65} y={12}>
            <div className="mt-5 flex items-center justify-between text-[8px] uppercase tracking-[0.3em] text-white/55">
              <span>Scroll</span>
              <button
                onClick={toggleMute}
                aria-label={muted ? 'Unmute video' : 'Mute video'}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
              >
                {muted ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Desktop hero */}
      <div className="relative hidden h-full flex-col md:flex">
        {/* Video background */}
        <video
          ref={videoRef}
          autoPlay
          muted={muted}
          loop
          playsInline
          preload="metadata"
          onLoadedData={ensurePlaying}
          onCanPlay={ensurePlaying}
          className="absolute inset-0 h-full w-full object-cover object-top"
        >
          <source src="/tarun-avator-potfolio-video.mp4" type="video/mp4" />
        </video>

        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

        {/* Content layer */}
        <div className="relative z-10 flex h-full flex-col">
        {/* Top bar */}
        <FadeIn delay={0} y={-20} className="relative">
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8">
            <ul className="flex items-center gap-3 sm:gap-5 md:gap-12">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[10px] sm:text-sm font-medium uppercase tracking-[0.18em] text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 sm:px-5 sm:py-2.5 text-[9px] sm:text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-[1.03]"
            >
              Email me
            </a>
          </div>
        </FadeIn>

        {/* Middle-left: PORTFOLIO + Name + Subtitle */}
        <div className="flex flex-1 items-end justify-center px-4 sm:px-6 md:items-center md:justify-start md:px-10 pb-10 sm:pb-12 md:pb-0">
          <div className="w-full max-w-md translate-y-8 text-center sm:max-w-2xl sm:translate-y-6 md:max-w-7xl md:translate-y-0 md:text-left">
            <FadeIn delay={0.3} y={20}>
              <p className="mb-3 text-[10px] sm:mb-4 sm:text-xs font-medium uppercase tracking-[0.35em] text-white/60 md:text-left">
                PORTFOLIO · 2026
              </p>
            </FadeIn>

            <FadeIn delay={0.5} y={40}>
              <h1
                className="mx-auto max-w-[7.2ch] font-black uppercase leading-[0.82] tracking-[-0.04em] text-white md:mx-0"
                style={{ fontSize: 'clamp(1.8rem, 6.2vw, 7rem)' }}
              >
                TARUN<br />KUMAR<br />MAKODE
              </h1>
            </FadeIn>

            <FadeIn delay={0.85} y={20}>
              <p className="mx-auto mt-3 max-w-[20rem] text-[9px] sm:mt-4 sm:text-xs md:mx-0 md:mt-7 md:max-w-none md:text-sm font-medium uppercase tracking-[0.24em] text-white/75">
                AI DEVELOPER · CONTENT CREATOR · AUTOMATION
              </p>
            </FadeIn>

            <FadeIn delay={1} y={20}>
              <p className="mx-auto mt-3 max-w-[21rem] text-[12px] leading-relaxed text-white/72 sm:mt-4 sm:max-w-md sm:text-base md:mx-0 md:max-w-xl md:text-lg">
                I build AI-powered websites, apps, chatbots, voice agents, and automation systems that help businesses move faster.
              </p>
            </FadeIn>

            <FadeIn delay={1.1} y={18}>
              <div className="mx-auto mt-5 flex max-w-[21rem] flex-col gap-2.5 sm:mt-6 sm:flex-row sm:gap-4 sm:max-w-md md:mx-0 md:max-w-xl">
                <a
                  href="#projects"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#0C0C0C] transition hover:scale-[1.03] sm:w-auto"
                >
                  View projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-[1.03] sm:w-auto"
                >
                  Let&apos;s talk
                </a>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-end justify-between px-4 sm:px-6 md:px-10 pb-6 sm:pb-10 md:pb-12">
          {/* Scroll indicator */}
          <FadeIn delay={1.1} y={20}>
            <a href="#about" aria-label="Scroll to next section" className="group flex flex-col items-center gap-3">
              <span className="text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 transition group-hover:text-white">
                Scroll
              </span>
              <div className="relative h-12 w-px overflow-hidden bg-white/20">
                <span
                  className="absolute inset-x-0 top-0 h-1/2 w-full bg-white"
                  style={{ animation: 'scrollLine 1.8s ease-in-out infinite' }}
                />
              </div>
            </a>
          </FadeIn>

          {/* Mute toggle + Sound hint */}
          <FadeIn delay={1.1} y={20}>
            <div className="flex items-center gap-3">
              {showSoundHint && (
                <span
                  className="hidden sm:inline text-[10px] font-medium uppercase tracking-[0.25em] text-white/80"
                  style={{ animation: 'pulseFade 2s ease-in-out infinite' }}
                >
                  Tap to mute
                </span>
              )}
              <button
                onClick={toggleMute}
                aria-label={muted ? 'Unmute video' : 'Mute video'}
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-110"
              >
                {muted ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes pulseFade {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
