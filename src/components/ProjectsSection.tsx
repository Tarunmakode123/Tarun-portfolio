import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface ProjectData {
  number: string;
  category: string;
  tagCategory: 'AI PRODUCTS' | 'INSTITUTIONAL' | 'AUTOMATION' | 'GOVTECH';
  name: string;
  summary: string;
  liveUrl: string;
  image: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'Personal · Marketplace',
    tagCategory: 'AI PRODUCTS',
    name: 'AgentHub – AI Agent Marketplace',
    summary: 'A marketplace for discovering and comparing AI agents in one place.',
    liveUrl: 'https://ai-agent-marketplace-eta.vercel.app',
    image: '/project1.png',
  },
  {
    number: '02',
    category: 'Institutional · Placement Platform',
    tagCategory: 'INSTITUTIONAL',
    name: 'PlaceIQ – Placement Management Platform',
    summary: 'A streamlined platform for managing placements, tracking progress, and guiding students.',
    liveUrl: 'https://placementiq-suite.vercel.app',
    image: '/project2.png',
  },
  {
    number: '03',
    category: 'Automation · SaaS',
    tagCategory: 'AUTOMATION',
    name: 'CampusShortlist – Automated Eligibility Filtering',
    summary: 'An automation tool that filters candidates based on eligibility and saves manual review time.',
    liveUrl: 'https://talent-filter-pro.vercel.app',
    image: '/project3.png',
  },
  {
    number: '04',
    category: 'GovTech · Discovery Platform',
    tagCategory: 'GOVTECH',
    name: 'SarkariSahayak – Government Scheme Discovery Platform',
    summary: 'A discovery platform that helps users find relevant government schemes faster.',
    liveUrl: 'https://scheme-seeker-nine.vercel.app',
    image: '/project4.png',
  },
];

const CATEGORIES = ['ALL', 'AI PRODUCTS', 'INSTITUTIONAL', 'AUTOMATION', 'GOVTECH'];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const ProjectCard = ({ project, index, total }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll progress for THIS card relative to the whole projects scroll range.
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  // Cards further down the stack stay full-size; earlier cards scale DOWN
  // as later cards stack on top of them.
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-20 sm:top-24 md:top-32 min-h-[72vh] sm:min-h-[85vh] w-full mb-8 sm:mb-12"
      style={{ top: `${96 + index * 28}px` }}
    >
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto flex h-full w-full flex-col gap-3 sm:gap-6 md:gap-8 rounded-[32px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3.5 sm:p-6 md:p-8"
      >
        {/* Top row: number + meta + button */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="flex w-full min-w-0 flex-row items-start gap-2.5 sm:gap-6 md:gap-10">
            <div
              className="shrink-0 font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2rem, 14vw, 140px)' }}
            >
              {project.number}
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-1 pt-1 sm:gap-3 sm:pt-3 md:pt-4">
              <span
                className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
                style={{ fontSize: 'clamp(0.6rem, 2.8vw, 1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] leading-tight"
                style={{ fontSize: 'clamp(1rem, 4.6vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
              <p className="max-w-2xl text-[12px] leading-relaxed text-[#D7E2EA]/68 sm:text-base">
                {project.summary}
              </p>
            </div>
          </div>

          <div className="w-full shrink-0 pt-0 sm:w-auto sm:self-auto sm:pt-2 md:pt-3">
            <LiveProjectButton href={project.liveUrl} className="w-full sm:w-auto" />
          </div>
        </div>

        {/* Bottom row: single large image */}
        <div className="flex-1 min-h-0">
          <div
            className="h-full overflow-hidden rounded-[28px] sm:rounded-[50px] md:rounded-[60px]"
            style={{ height: 'clamp(200px, 58vw, 520px)' }}
          >
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="h-full w-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tagCategory === activeCategory);

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-6 sm:mb-8"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* Category Filter Pills */}
      <FadeIn delay={0.15} y={20}>
        <div className="mb-14 sm:mb-20 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-[#0C0C0C] shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105 font-bold'
                    : 'border border-white/20 bg-white/5 text-white/70 hover:bg-white/15 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.number}
                project={project}
                index={i}
                total={filteredProjects.length}
                containerRef={containerRef}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 80+ Repos GitHub CTA Banner */}
        <FadeIn delay={0.2} y={30}>
          <div className="mt-16 sm:mt-24 text-center">
            <a
              href="https://github.com/Tarunmakode123?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md transition hover:bg-white/20 hover:scale-105"
            >
              <span>Explore All 80+ Repositories on GitHub</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProjectsSection;
