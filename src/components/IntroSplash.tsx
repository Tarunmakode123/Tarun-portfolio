import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroSplashProps {
  onComplete?: () => void;
}

const IntroSplash = ({ onComplete }: IntroSplashProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleComplete = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenIntro', 'true');
    if (onComplete) onComplete();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt autoplay with sound
    video.muted = false;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser prevented autoplay with sound, fall back to muted autoplay
        setIsMuted(true);
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !isMuted;
    video.muted = newMuted;
    setIsMuted(newMuted);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden select-none"
        >
          {/* Logo animation video */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            onEnded={handleComplete}
            className="h-full w-full object-cover"
          >
            <source src="/TAi_logo_reveal_effect_20260927201853-cleaned.mp4" type="video/mp4" />
          </video>

          {/* Top Controls: Sound Toggle + Skip Button */}
          <div className="absolute top-6 right-6 z-10 flex items-center gap-3">
            <button
              onClick={toggleMute}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur-md transition hover:bg-white/20 hover:text-white"
            >
              {isMuted ? 'Unmute 🔇' : 'Mute 🔊'}
            </button>

            <button
              onClick={handleComplete}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white/25 hover:scale-105"
            >
              Skip Intro →
            </button>
          </div>

          {/* Bottom Branding / Progress line */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
            <span>TARUN AI</span>
            <span>INTRO REVEAL</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroSplash;
