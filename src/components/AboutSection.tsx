import { motion } from 'framer-motion';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';

const ABOUT_TEXT =
  'I build AI-powered products, automation systems, and intelligent digital experiences that solve real-world problems.';

const ABOUT_TEXT_SECONDARY =
  'Focused on the intersection of artificial intelligence, software development, and innovation, I transform complex ideas into practical tools that help people work smarter and achieve more.';

const SKILL_GROUPS = [
  {
    label: 'AI ENGINEERING',
    items: ['OpenAI', 'Claude', 'Gemini', 'Prompt Engineering', 'RAG'],
  },
  {
    label: 'AUTOMATION',
    items: ['n8n', 'Workflow Automation', 'APIs', 'Integrations'],
  },
  {
    label: 'DEVELOPMENT',
    items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'Python'],
  },
];

const STATS = [
  '10+ Projects Built',
  '3+ AI Products',
  '500K+ Content Reach',
  '2026 Portfolio',
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 sm:px-8 md:px-10 py-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_38%,rgba(255,255,255,0)_72%)] blur-[0.2px] sm:h-[24rem] sm:w-[24rem] lg:left-[67%] lg:top-[44%] lg:h-[30rem] lg:w-[30rem]"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 4, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ opacity: 0.12 }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 sm:h-[22rem] sm:w-[22rem] lg:left-[67%] lg:top-[44%] lg:h-[27rem] lg:w-[27rem]"
          animate={{
            rotate: [0, -8, 0],
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ opacity: 0.11 }}
        >
          <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
          <div className="absolute inset-[10%] rounded-full border border-white/10" />
          <div className="absolute inset-[20%] rounded-full border border-white/5 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.08),rgba(255,255,255,0)_70%)]" />
        </motion.div>

        <svg
          className="absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 sm:h-[26rem] sm:w-[26rem] lg:left-[67%] lg:top-[44%] lg:h-[32rem] lg:w-[32rem]"
          viewBox="0 0 320 320"
          fill="none"
          aria-hidden="true"
          style={{ opacity: 0.11 }}
        >
          <defs>
            <radialGradient id="orbGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160 120) rotate(90) scale(130 130)">
              <stop stopColor="white" stopOpacity="0.18" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="160" cy="160" r="128" stroke="url(#orbGlow)" strokeWidth="1.2" />
          <circle cx="160" cy="160" r="88" stroke="rgba(255,255,255,0.14)" strokeWidth="1" strokeDasharray="2 8" />
          <g stroke="rgba(255,255,255,0.12)" strokeWidth="0.8">
            <line x1="52" y1="108" x2="120" y2="76" />
            <line x1="120" y1="76" x2="200" y2="88" />
            <line x1="200" y1="88" x2="255" y2="140" />
            <line x1="255" y1="140" x2="226" y2="216" />
            <line x1="226" y1="216" x2="146" y2="244" />
            <line x1="146" y1="244" x2="86" y2="208" />
            <line x1="86" y1="208" x2="52" y2="108" />
            <line x1="96" y1="136" x2="160" y2="160" />
            <line x1="160" y1="160" x2="224" y2="128" />
            <line x1="120" y1="216" x2="160" y2="160" />
            <line x1="160" y1="160" x2="194" y2="216" />
          </g>
          <g fill="rgba(255,255,255,0.22)">
            <circle cx="52" cy="108" r="2.2" />
            <circle cx="120" cy="76" r="2" />
            <circle cx="200" cy="88" r="2.2" />
            <circle cx="255" cy="140" r="2" />
            <circle cx="226" cy="216" r="2.2" />
            <circle cx="146" cy="244" r="2" />
            <circle cx="86" cy="208" r="2.2" />
            <circle cx="160" cy="160" r="2.6" />
          </g>
        </svg>

        <motion.span
          className="absolute left-[18%] top-[30%] h-1.5 w-1.5 rounded-full bg-white/30 blur-[1px]"
          animate={{ y: [0, -14, 0], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ opacity: 0.15 }}
        />
        <motion.span
          className="absolute left-[28%] top-[68%] h-1 w-1 rounded-full bg-white/35 blur-[1px]"
          animate={{ y: [0, 10, 0], opacity: [0.12, 0.24, 0.12] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          style={{ opacity: 0.14 }}
        />
        <motion.span
          className="absolute right-[18%] top-[24%] h-1.5 w-1.5 rounded-full bg-white/25 blur-[1px]"
          animate={{ y: [0, -8, 0], opacity: [0.14, 0.28, 0.14] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          style={{ opacity: 0.12 }}
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-12 sm:gap-14 md:gap-16 text-center">
        <FadeIn delay={0} y={34} duration={0.85}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex w-full max-w-4xl flex-col items-center gap-10 sm:gap-12 md:gap-14">
          <FadeIn delay={0.12} y={26} duration={0.8}>
            <div className="flex flex-col gap-5 sm:gap-6">
              <AnimatedText
                text={ABOUT_TEXT}
                className="mx-auto max-w-4xl text-balance font-medium leading-relaxed text-[#D7E2EA]"
                style={{ fontSize: 'clamp(1.05rem, 2vw, 1.5rem)' }}
              />
              <AnimatedText
                text={ABOUT_TEXT_SECONDARY}
                className="mx-auto max-w-4xl text-balance font-medium leading-relaxed text-[#D7E2EA]/86"
                style={{ fontSize: 'clamp(1.02rem, 1.8vw, 1.32rem)' }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.18} y={24} duration={0.8} className="w-full">
            <div className="grid gap-4 sm:gap-5">
              {SKILL_GROUPS.map((group, groupIndex) => (
                <div
                  key={group.label}
                  className="grid gap-3 rounded-[1.5rem] border border-[#D7E2EA]/10 bg-white/[0.015] px-4 py-4 transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#D7E2EA]/18 hover:bg-white/[0.025] sm:px-5 sm:py-5 md:grid-cols-[180px_1fr] md:items-center md:px-6"
                >
                  <span className="text-xs font-medium uppercase tracking-[0.35em] text-[#D7E2EA]/45 md:text-right">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap justify-center gap-2.5 md:justify-start">
                    {group.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{
                          delay: 0.04 * (groupIndex + itemIndex),
                          duration: 0.45,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="rounded-full border border-[#D7E2EA]/12 bg-[#D7E2EA]/[0.04] px-3.5 py-1.5 text-sm text-[#D7E2EA]/82 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition-colors hover:border-[#D7E2EA]/28 hover:bg-[#D7E2EA]/[0.07] hover:text-[#F1F6FA]"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.28} y={22} duration={0.8} className="w-full">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.06 * index, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                  className="rounded-[1.25rem] border border-[#D7E2EA]/10 bg-white/[0.02] px-4 py-4 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.015)_inset] transition-colors hover:border-[#D7E2EA]/20 hover:bg-white/[0.035] sm:px-5 sm:py-5"
                >
                  <div className="text-sm font-medium tracking-wide text-[#F0F5F9]">
                    {stat}
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.36} y={18} duration={0.7}>
            <p className="text-xs uppercase tracking-[0.4em] text-[#D7E2EA]/38">
              Scroll to Explore ↓
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
