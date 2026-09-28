import { Mail, MessageCircle, Linkedin, Github, FileText, ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';

interface ContactMethod {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  download?: boolean;
}

const CONTACT_METHODS: ContactMethod[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'aiwithtarun1@gmail.com',
    href: 'mailto:aiwithtarun1@gmail.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 83050 59502',
    href: 'https://wa.me/918305059502',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Tarun Kumar Makode',
    href: 'https://www.linkedin.com/in/tarun-kumar-makode-805719290/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@Tarunmakode123',
    href: 'https://github.com/Tarunmakode123',
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'Download CV (PDF)',
    href: '/resume.pdf',
    download: true,
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20"
    >
      {/* Heading */}
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Get in touch
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={20}>
        <p
          className="text-center font-light uppercase tracking-widest text-[#D7E2EA]/60 mb-12 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1.1rem)' }}
        >
          Need an AI website, chatbot, voice agent, or automation system? Let&apos;s build it.
        </p>
      </FadeIn>

      {/* Contact cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
        {CONTACT_METHODS.map((method, i) => {
          const Icon = method.icon;

          return (
            <FadeIn key={method.label} delay={i * 0.1} y={30}>
              <a
                href={method.href}
                download={method.download ? 'Tarun_Kumar_Makode_Resume.pdf' : undefined}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${method.label}: ${method.value}`}
                className="group relative flex h-full w-full min-w-0 flex-col justify-between gap-6 overflow-hidden rounded-[24px] sm:rounded-[28px] border-2 border-[#D7E2EA]/20 bg-[#141418] p-4 sm:p-5 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#D7E2EA]/55 hover:bg-[#1a1a20] hover:shadow-[0_16px_45px_rgba(215,226,234,0.08)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D7E2EA]/0 via-[#D7E2EA]/0 to-[#D7E2EA]/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="flex items-start justify-between">
                  <div className="rounded-full border border-[#D7E2EA]/20 p-2.5 sm:p-3 transition-colors duration-300 group-hover:border-[#D7E2EA]/50">
                    <Icon
                      className="text-[#D7E2EA]"
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>
                  <ArrowUpRight
                    className="text-[#D7E2EA]/40 transition-all duration-300 group-hover:text-[#D7E2EA] group-hover:rotate-12"
                    size={20}
                    strokeWidth={1.5}
                  />
                </div>

                <div className="relative flex min-w-0 flex-col gap-1.5">
                  <span className="font-light uppercase tracking-widest text-[#D7E2EA]/50 text-[10px] sm:text-[11px]">
                    {method.label}
                  </span>
                  <div className="min-h-[2.5rem] flex items-start">
                    <span className="font-medium text-[#D7E2EA] leading-snug tracking-tight text-[12px] sm:text-[13px] md:text-sm break-all sm:break-normal">
                      {method.value}
                    </span>
                  </div>
                </div>
              </a>
            </FadeIn>
          );
        })}
      </div>

      {/* Footer line */}
      <FadeIn delay={0.4} y={20}>
        <div className="mx-auto mt-20 sm:mt-24 md:mt-28 flex max-w-5xl flex-col items-center gap-3 border-t border-[#D7E2EA]/10 pt-8 text-center sm:flex-row sm:justify-between">
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
            style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
          >
            © 2026 Tarun Kumar Makode
          </span>
          <span
            className="font-light uppercase tracking-widest text-[#D7E2EA]/50"
            style={{ fontSize: 'clamp(0.7rem, 1.1vw, 0.9rem)' }}
          >
            Building AI products, automation systems & digital solutions
          </span>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactSection;
