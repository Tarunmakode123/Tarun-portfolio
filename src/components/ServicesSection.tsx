import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    title: 'AI Product Development',
    keywords: 'OpenAI • Gemini • Claude • RAG',
    description:
      'Building intelligent products powered by modern AI technologies. From concept to deployment, I create practical solutions that solve real-world problems using large language models, automation, and scalable architectures.',
  },
  {
    number: '02',
    title: 'AI Agents & Automation',
    keywords: 'n8n • APIs • Workflows • Integrations',
    description:
      'Designing AI agents and automated workflows that eliminate repetitive tasks, improve efficiency, and help businesses scale operations with minimal manual intervention.',
  },
  {
    number: '03',
    title: 'LLM Integration',
    keywords: 'Prompt Engineering • Function Calling • RAG • APIs',
    description:
      'Integrating large language models into applications, internal tools, and customer experiences. Creating seamless AI-powered features that deliver real value to users.',
  },
  {
    number: '04',
    title: 'Full-Stack Development',
    keywords: 'React • Next.js • Tailwind • JavaScript',
    description:
      'Building fast, modern, and scalable web applications using React, Next.js, Tailwind CSS, and cloud deployment platforms with a strong focus on performance and user experience.',
  },
  {
    number: '05',
    title: 'Data Analytics & Insights',
    keywords: 'Python • Pandas • SQL • Power BI',
    description:
      'Transforming raw data into meaningful insights through analysis, visualization, dashboards, and reporting systems that support better decision-making.',
  },
];

const HIGHLIGHTS = [
  'AI-powered websites',
  'AI-powered apps',
  'AI chatbots',
  'AI voice agents',
  'AI automation systems',
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40} duration={0.85}>
        <h2
          className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          What I Build
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm font-medium uppercase tracking-[0.22em] text-[#0C0C0C]/66 sm:text-base">
          I build AI systems that automate work, improve support, and create better digital experiences.
        </p>
        <div className="mx-auto mt-7 h-px w-24 bg-[#0C0C0C]/12 sm:mt-8" />
      </FadeIn>

      <FadeIn y={24} delay={0.12}>
        <div className="mx-auto mt-10 max-w-5xl rounded-[28px] border border-[#0C0C0C]/12 bg-[#F5F7FA] px-5 py-6 sm:px-8 sm:py-7 md:px-10 md:py-8 shadow-[0_14px_40px_rgba(12,12,12,0.06)]">
          <p className="text-center text-[10px] font-semibold uppercase tracking-[0.42em] text-[#0C0C0C]/48 sm:text-xs">
            I build
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3 sm:gap-4">
            {HIGHLIGHTS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#0C0C0C]/12 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0C0C0C] shadow-sm sm:px-5 sm:py-2.5 sm:text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1} y={30}>
            <motion.div
              className="group flex cursor-default flex-row items-start gap-6 py-8 sm:gap-10 sm:py-10 md:gap-14 md:py-12"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: [0.22, 0.61, 0.36, 1],
              }}
              whileHover="hover"
              whileTap={{ scale: 0.995 }}
              style={{
                borderTop: '1px solid rgba(12, 12, 12, 0.14)',
                ...(i === SERVICES.length - 1
                  ? { borderBottom: '1px solid rgba(12, 12, 12, 0.14)' }
                  : {}),
              }}
            >
              <motion.div
                className="shrink-0 font-black leading-none text-[#0C0C0C]"
                style={{ fontSize: 'clamp(2.35rem, 7.8vw, 112px)' }}
                variants={{ hover: { scale: 1.04 } }}
                transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
              >
                {service.number}
              </motion.div>

              <div className="group flex flex-col gap-3 pt-2 sm:gap-4 sm:pt-3 md:gap-5 md:pt-4">
                <motion.h3
                  className="relative inline-block w-fit font-medium uppercase leading-tight text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  variants={{ hover: { x: 7 } }}
                  transition={{ duration: 0.38, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  {service.title}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[#0C0C0C]/60 transition-all duration-500 group-hover:w-full group-hover:bg-[#0C0C0C]/88" />
                </motion.h3>

                <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-[#0C0C0C]/52 transition-opacity duration-300 group-hover:text-[#0C0C0C]/70 sm:text-xs">
                  {service.keywords}
                </p>

                <motion.p
                  className="max-w-[32rem] font-light leading-[1.8] text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.05vw, 1rem)',
                    opacity: 0.78,
                  }}
                  variants={{ hover: { opacity: 0.9 } }}
                  transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
