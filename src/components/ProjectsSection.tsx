import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  summary: string;
  liveUrl: string;
  image: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'Personal · Marketplace',
    name: 'AgentHub – AI Agent Marketplace',
    summary: 'A marketplace for discovering and comparing AI agents in one place.',
    liveUrl: 'https://ai-agent-marketplace-eta.vercel.app',
    image: '/project1.png',
  },
  {
    number: '02',
    category: 'Institutional · Placement Platform',
    name: 'PlaceIQ – Placement Management Platform',
    summary: 'A streamlined platform for managing placements, tracking progress, and guiding students.',
    liveUrl: 'https://placementiq-suite.vercel.app',
    image: '/project 2.png',
  },
  {
    number: '03',
    category: 'Automation · SaaS',
    name: 'CampusShortlist – Automated Eligibility Filtering',
    summary: 'An automation tool that filters candidates based on eligibility and saves manual review time.',
    liveUrl: 'https://talent-filter-pro.vercel.app',
    image: '/project 3.png',
  },
  {
    number: '04',
    category: 'GovTech · Discovery Platform',
    name: 'SarkariSahayak – Government Scheme Discovery Platform',
    summary: 'A discovery platform that helps users find relevant government schemes faster.',
    liveUrl: 'https://scheme-seeker-nine.vercel.app',
    image: '/project 4.png',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

const ProjectCard = ({ project, index, total, containerRef }: ProjectCardProps) => {
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
      className="sticky top-20 sm:top-24 md:top-32 min-h-[72vh] sm:min-h-[85vh] w-full"
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
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Project
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mx-auto max-w-7xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            total={PROJECTS.length}
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
