'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import profileImage from '../images/profile pic.jpeg';
import fraudSenseImage from '../images/fraud-sense.png';
import smartTaxImage from '../images/smart tax poster.png';
import stockAnalysisImage from '../images/MCB poster.png';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'FraudSense', href: '#fraud-sense' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

const skillGroups = [
  {
    title: 'Programming & Analysis',
    items: ['Python', 'MATLAB', 'Machine Learning', 'Web Development'],
  },
  {
    title: 'Financial & Quantitative Methods',
    items: [
      'Financial Mathematics',
      'Portfolio Management',
      'Operations Research',
      'Optimization Theory',
      'Time Series Analysis',
    ],
  },
  {
    title: 'Tools',
    items: ['MS Office', 'AutoCAD Architecture', 'App Deployment', 'Graphic Designing'],
  },
  {
    title: 'Professional',
    items: ['Report Writing', 'Project Management', 'Event Management', 'Teamwork'],
  },
];

const projectCards = [
  {
    title: 'FraudSense',
    type: 'Final Year Project • 2025-2026',
    description:
      'FraudSense is a machine learning-based credit card fraud detection system designed to identify suspicious financial activity using predictive modeling, data analysis, and mathematical reasoning for real-world security challenges.',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    image: fraudSenseImage,
    link: '#fraud-sense',
  },
  {
    title: 'Smart Tax Optimization',
    type: 'Concept Idea • 2025-2026',
    description:
      'This concept proposes a practical approach to improving tax planning and financial decision-making through optimization strategies and strategic problem solving.',
    tags: ['Finance', 'Optimization', 'Strategy'],
    image: smartTaxImage,
    link: '#contact',
  },
  {
    title: 'MCB Stock Analysis',
    type: 'Quantitative Research • 2025',
    description:
      'This project explores historical stock prices, volatility, and return behavior to understand trends and estimate risk using time-series analysis and statistical modeling.',
    tags: ['Time Series', 'MATLAB', 'Python', 'Finance'],
    image: stockAnalysisImage,
    link: '#projects',
  },
];

const fraudSenseHighlights = [
  'Built a predictive fraud detection model to classify suspicious transactions with analytical precision.',
  'Combined mathematical modeling with data cleaning, feature engineering, and evaluation metrics to improve reliability.',
  'Focused on practical financial security applications using real-world fraud patterns and behavioral indicators.',
];

const experience = [
  {
    title: 'Business Incubation Center & Council, BZU',
    period: '2025-2026',
    details: [
      'Contributed to idea development, teamwork, and cross-functional collaboration.',
      'Presented an original business concept at the Business Starter Expo.',
      'Proposed the Smart Tax Optimization concept at the Idea to Career Competition.',
    ],
  },
];

const education = [
  {
    title: 'BS Mathematics (Finance Specialization)',
    school: 'Bahauddin Zakariya University, Multan',
    period: '2022-2026',
    details: 'Focus on Pure, Applied, and Computational Mathematics.',
  },
  {
    title: 'FSc Pre-Engineering',
    school: 'Aspire College, Multan',
    period: '2020-2022',
    details: '',
  },
  {
    title: 'Matriculation (Science)',
    school: 'Mushtaq Public School, Multan',
    period: '2016-2018',
    details: '',
  },
];

const achievements = [
  'First Position, Badminton Competition (2022)',
  'Winning Trophy, Cricket Tournament (2023)',
  'Runner-Up Trophy, Badminton Competition (2023)',
  'Participation Certificate, Business Startup Expo (2024)',
  'Appreciation Certificate, Event Organisation of Business Start-Up Expo (2024)',
];

const interests = ['🎨 Painting', '📖 Reading', '🏸 Badminton'];

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const scrollToSection = (sectionId: string) => {
    if (typeof document === 'undefined') return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('zara-theme');
    const nextMode = savedTheme ? savedTheme === 'dark' : true;
    setDarkMode(nextMode);
    document.documentElement.classList.toggle('dark', nextMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('zara-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-[#f7f5f3] text-slate-900 transition-colors duration-300 dark:bg-[#111315] dark:text-white">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f5f3]/85 backdrop-blur-xl transition-colors dark:border-slate-800 dark:bg-[#111315]/85">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.12em] text-slate-900 dark:text-white">
            ZARA MALIK
          </a>

          <div className="hidden items-center gap-6 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => {
                  if (!item.href.startsWith('#')) return;
                  event.preventDefault();
                  scrollToSection(item.href.replace('#', ''));
                }}
                className="text-slate-700 transition hover:text-accent-600 dark:text-slate-300 dark:hover:text-accent-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/Portfolio-Website/Zara_Malik_ATS_CV.pdf"
              download="Zara_Malik_ATS_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-accent-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent-600 transition hover:bg-accent-600 hover:text-white sm:inline-flex"
            >
              Download CV
            </a>
            <button
              type="button"
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode((value) => !value)}
              className="rounded-full border border-slate-300 bg-white p-2 text-lg text-slate-700 shadow-sm transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </header>

      <div id="home" className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <section className="grid items-center gap-12 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-accent-200 bg-accent-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-accent-700 dark:border-accent-900/60 dark:bg-accent-900/10 dark:text-accent-300">
              Available for opportunities
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Zara Malik
              </h1>
              <p className="text-xl font-medium text-accent-600 dark:text-accent-400">
                Mathematics Graduate | Data Analysis & Machine Learning
              </p>
              <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
                Turning quantitative analysis into practical, user-focused solutions.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('projects');
                }}
                className="inline-flex items-center justify-center rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-700"
              >
                View Projects
              </a>
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection('contact');
                }}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center gap-4 pt-2 text-sm text-slate-600 dark:text-slate-300">
              <a href="https://www.linkedin.com/in/zara-malik-8577a5394/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-slate-300 bg-white p-3 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900">
                in
              </a>
              <a href="mailto:malikamiraqsa@gmail.com" aria-label="Email" className="rounded-full border border-slate-300 bg-white p-3 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900">
                ✉
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-slate-300 bg-white p-3 transition hover:border-accent-500 hover:text-accent-600 dark:border-slate-700 dark:bg-slate-900">
                gh
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="rounded-full border border-slate-200 bg-white p-3 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full bg-gradient-to-br from-accent-100 via-white to-slate-200 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 sm:h-[280px] sm:w-[280px] lg:h-[320px] lg:w-[320px]">
                <Image
                  src={profileImage}
                  alt="Zara Malik portrait"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">About</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Analytical thinker with a quantitative edge</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-300">
              Analytical BS Mathematics graduate specializing in Finance, with a strong foundation in Time Series Analysis, Financial Mathematics,
              Portfolio Management, Operations Research, and Optimization Theory. Skilled in Python, MATLAB, and applied machine learning, with hands-on
              experience building predictive models and generative AI applications.
            </p>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Focus</p>
              <ul className="mt-4 space-y-3 text-slate-700 dark:text-slate-200">
                <li>• Financial and quantitative analysis</li>
                <li>• Predictive modeling and data-driven decision support</li>
                <li>• Machine learning and generative AI applications</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">Skills</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Technical and professional strengths</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="mb-5 text-lg font-semibold text-slate-900 dark:text-white">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">Projects</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Selected work and ideas</h2>
          </div>

          <div className="space-y-6">
            {projectCards.map((project, index) => (
              <article
                key={project.title}
                className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-[1.08fr_0.92fr]"
              >
                <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-7">
                  <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">{project.type}</span>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300 sm:text-[15px]">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    onClick={(event) => {
                      const sectionId = project.link.replace('#', '');
                      if (!sectionId) return;
                      event.preventDefault();
                      scrollToSection(sectionId);
                    }}
                    className="mt-5 inline-flex w-fit items-center rounded-full bg-accent-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-accent-700"
                  >
                    View Project
                  </a>
                </div>

                <div className={`relative min-h-[220px] overflow-hidden border-t border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800 lg:min-h-[240px] ${index % 2 === 1 ? 'lg:order-first lg:border-r' : 'lg:border-l'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain object-center bg-white p-3 transition duration-300 group-hover:scale-[1.02] dark:bg-slate-900"
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="fraud-sense" className="scroll-mt-24 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">Final Year Project</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">FraudSense</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <Image src={fraudSenseImage} alt="FraudSense project preview" className="h-[260px] w-full rounded-2xl object-cover object-center sm:h-[300px] lg:h-[360px]" />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm uppercase tracking-[0.18em] text-accent-600 dark:text-accent-400">Project Summary</p>
              <p className="mt-4 text-lg leading-8 text-slate-700 dark:text-slate-300">
                FraudSense is a machine learning-driven credit card fraud detection project focused on identifying suspicious transactions and improving financial security with data-driven decision support.
              </p>
              <ul className="mt-6 space-y-4 text-slate-700 dark:text-slate-200">
                {fraudSenseHighlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-accent-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'Data Analysis', 'Fraud Detection'].map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">Experience</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Professional involvement</h2>
          </div>

          <div className="relative border-l border-slate-300 pl-6 dark:border-slate-700">
            {experience.map((item) => (
              <div key={item.title} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[2.1rem] top-2 h-4 w-4 rounded-full border-4 border-[#f7f5f3] bg-accent-600 dark:border-[#111315]" />
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <span className="text-sm font-medium text-accent-600 dark:text-accent-400">{item.period}</span>
                  </div>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-accent-500" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="scroll-mt-24 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">Education</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Academic background</h2>
          </div>

          <div className="relative border-l border-slate-300 pl-6 dark:border-slate-700">
            {education.map((item) => (
              <div key={item.title} className="relative mb-8 last:mb-0">
                <span className="absolute -left-[2.1rem] top-2 h-4 w-4 rounded-full border-4 border-[#f7f5f3] bg-accent-600 dark:border-[#111315]" />
                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <span className="text-sm font-medium text-accent-600 dark:text-accent-400">{item.period}</span>
                  </div>
                  <p className="text-base font-medium text-slate-700 dark:text-slate-200">{item.school}</p>
                  {item.details ? <p className="mt-3 text-slate-600 dark:text-slate-300">{item.details}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="achievements" className="scroll-mt-24 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">Achievements & Certifications</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Recognition and participation</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement) => (
              <div key={achievement} className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                {achievement}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="mb-8 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">Interests</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span key={interest} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                {interest}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400">Contact</p>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">Open to opportunities in data analysis, machine learning, and finance.</h2>
              <div className="mt-7 space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">Email:</span>{' '}
                  <a href="mailto:malikamiraqsa@gmail.com" className="text-accent-600 hover:text-accent-700 dark:text-accent-400">
                    malikamiraqsa@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">LinkedIn:</span>{' '}
                  <a
                    href="https://www.linkedin.com/in/zara-malik-8577a5394/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent-600 hover:text-accent-700 dark:text-accent-400"
                  >
                    Zara Malik
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">Location:</span> Multan, Pakistan
                </p>
              </div>
            </div>

            <form
              action="mailto:malikamiraqsa@gmail.com?subject=Portfolio%20Inquiry"
              method="post"
              encType="text/plain"
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="grid gap-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Name</span>
                  <input type="text" name="name" required className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-accent-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</span>
                  <input type="email" name="email" required className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-accent-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">Message</span>
                  <textarea name="message" rows={5} required className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-accent-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white" />
                </label>
                <button type="submit" className="inline-flex w-fit rounded-full bg-accent-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-700">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>

      <footer className="border-t border-slate-200 bg-white/80 py-8 dark:border-slate-800 dark:bg-slate-950/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-600 sm:px-6 lg:flex-row lg:px-8 dark:text-slate-300">
          <p>© 2026 Zara Malik. All rights reserved.</p>
          <a
            href="/Portfolio-Website/Zara_Malik_ATS_CV.pdf"
            download="Zara_Malik_ATS_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-accent-600 hover:text-accent-700 dark:text-accent-400"
          >
            Download CV
          </a>
        </div>
      </footer>
    </main>
  );
}
