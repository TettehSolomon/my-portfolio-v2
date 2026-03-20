import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaBars,
  FaBriefcase,
  FaBootstrap,
  FaCommentDots,
  FaCloud,
  FaCode,
  FaCss3Alt,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaHome,
  FaHtml5,
  FaJsSquare,
  FaLinkedinIn,
  FaNodeJs,
  FaPhoneAlt,
  FaPhp,
  FaReact,
  FaServer,
  FaTools,
  FaUser,
  FaWhatsapp
} from "react-icons/fa";
import {
  SiExpress,
  SiExpo,
  SiFirebase,
  SiGithub,
  SiGit,
  SiInstagram,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPython,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWordpress
} from "react-icons/si";

const navLinks = ["home", "about", "skills", "projects", "contact"];
const mobileLinks = [
  { key: "home", icon: FaHome, label: "Home" },
  { key: "about", icon: FaUser, label: "About" },
  { key: "skills", icon: FaTools, label: "Skills" },
  { key: "projects", icon: FaBriefcase, label: "Projects" },
  { key: "contact", icon: FaEnvelope, label: "Contact" }
];

const skills = [
  { label: "HTML5", icon: <FaHtml5 className="text-orange-500" />, tone: "from-orange-50 to-amber-100" },
  { label: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, tone: "from-sky-50 to-blue-100" },
  { label: "JavaScript", icon: <FaJsSquare className="text-yellow-500" />, tone: "from-yellow-50 to-amber-100" },
  { label: "Bootstrap", icon: <FaBootstrap className="text-purple-600" />, tone: "from-purple-50 to-violet-100" },
  { label: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" />, tone: "from-cyan-50 to-sky-100" },
  { label: "TypeScript", icon: <SiTypescript className="text-blue-500" />, tone: "from-blue-50 to-indigo-100" },
  { label: "ReactJS", icon: <FaReact className="text-cyan-500" />, tone: "from-cyan-50 to-teal-100" },
  { label: "NextJS", icon: <SiNextdotjs className="text-zinc-900" />, tone: "from-zinc-50 to-zinc-200" },
  { label: "React Router", icon: <FaReact className="text-rose-500" />, tone: "from-rose-50 to-pink-100" },
  { label: "Vite", icon: <SiVite className="text-violet-500" />, tone: "from-violet-50 to-fuchsia-100" },
  { label: "NodeJS", icon: <FaNodeJs className="text-green-600" />, tone: "from-green-50 to-emerald-100" },
  { label: "ExpressJS", icon: <SiExpress className="text-zinc-700" />, tone: "from-zinc-50 to-slate-200" },
  { label: "PHP", icon: <FaPhp className="text-indigo-500" />, tone: "from-indigo-50 to-blue-100" },
  { label: "Python", icon: <SiPython className="text-blue-500" />, tone: "from-blue-50 to-yellow-100" },
  { label: "NestJS", icon: <SiNestjs className="text-rose-600" />, tone: "from-rose-50 to-red-100" },
  { label: "MongoDB", icon: <SiMongodb className="text-green-600" />, tone: "from-lime-50 to-green-100" },
  { label: "MySQL", icon: <SiMysql className="text-blue-500" />, tone: "from-sky-50 to-cyan-100" },
  { label: "PostgreSQL", icon: <SiPostgresql className="text-indigo-500" />, tone: "from-indigo-50 to-sky-100" },
  { label: "Firebase", icon: <SiFirebase className="text-amber-500" />, tone: "from-amber-50 to-orange-100" },
  { label: "Redis", icon: <SiRedis className="text-red-500" />, tone: "from-red-50 to-orange-100" },
  { label: "Git", icon: <SiGit className="text-orange-500" />, tone: "from-orange-50 to-red-100" },
  { label: "Github", icon: <SiGithub className="text-zinc-900" />, tone: "from-zinc-50 to-zinc-200" },
  { label: "WordPress", icon: <SiWordpress className="text-sky-500" />, tone: "from-sky-50 to-blue-100" },
  { label: "Expo", icon: <SiExpo className="text-zinc-800" />, tone: "from-zinc-50 to-slate-200" },
  { label: "VSCode", icon: <FaCode className="text-blue-500" />, tone: "from-blue-50 to-cyan-100" },
  { label: "Cursor", icon: <FaCode className="text-violet-500" />, tone: "from-violet-50 to-indigo-100" },
  { label: "Google Apps Script", icon: <FaGoogle className="text-yellow-500" />, tone: "from-amber-50 to-yellow-100" },
  { label: "Google Stitch", icon: <FaGoogle className="text-blue-500" />, tone: "from-sky-50 to-indigo-100" },
  { label: "cPanel", icon: <FaServer className="text-orange-500" />, tone: "from-orange-50 to-amber-100" },
  { label: "Hetzner", icon: <FaCloud className="text-rose-500" />, tone: "from-rose-50 to-pink-100" },
  { label: "PM2", icon: <FaServer className="text-emerald-500" />, tone: "from-emerald-50 to-green-100" }
];

const skillGroups = [
  {
    title: "Front End",
    accent: "from-cyan-100 to-sky-100",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "React Router",
      "Tailwind CSS",
      "Vite",
      "Framer Motion"
    ]
  },
  {
    title: "Back End",
    accent: "from-orange-100 to-amber-100",
    items: ["NodeJS", "ExpressJS", "NestJS", "PHP", "Python", "JWT", "Nodemailer", "BullMQ"]
  },
  {
    title: "Database / ORM",
    accent: "from-emerald-100 to-lime-100",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Sequelize", "TypeORM", "Mongoose"]
  },
  {
    title: "Tools",
    accent: "from-violet-100 to-indigo-100",
    items: [
      "Git",
      "Github",
      "VSCode",
      "Cursor",
      "Google Apps Script",
      "Google Stitch",
      "Firebase",
      "Supabase",
      "Expo",
      "React Native",
      "Chart.js",
      "Recharts",
      "XLSX",
      "Google Sheets API",
      "Groq SDK",
      "Axios"
    ]
  },
  {
    title: "Cloud / DevOps",
    accent: "from-cyan-100 to-blue-100",
    items: [
      "Hetzner",
      "PM2",
      "cPanel",
      "Redis",
      "BullMQ",
      "Worker Processes",
      "Queue Backpressure",
      "Webhooks",
      "Database Migrations",
      "Deployment",
      "Monitoring",
      "Server Management",
      "Docker"
    ]
  },
  {
    title: "CMS / Platforms",
    accent: "from-sky-100 to-indigo-100",
    items: ["WordPress", "Elementor", "LearnPress", "WooCommerce", "Content Management"]
  }
];

const projects = [
  {
    title: "The Panel Conference",
    link: "https://thepanel.com.ng",
    description:
      "Built a central conference platform that solved fragmented event communication, manual registration stress, and poor attendee engagement. Unified registration, payment routing, live webinar/game experiences, and admin tools into one scalable flow.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1400&q=80",
    stacks: ["ReactJS", "Tailwind CSS", "React Router", "Vite", "ExpressJS", "MySQL", "Sequelize", "JWT"]
  },
  {
    title: "UltimateYP",
    link: "https://ultimateyp.com.ng",
    description:
      "Created an interactive platform that solved low audience participation during live sessions. Enabled real-time quizzes, polls, raffles, Zoom-linked engagement, and leaderboard mechanics that drive retention, competition, and measurable activity.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
    stacks: ["ReactJS", "Tailwind CSS", "Vite", "Framer Motion", "ExpressJS", "MySQL", "Sequelize", "Redis"]
  },
  {
    title: "Pharmacademy",
    link: "https://pharmacademy.com.ng",
    description:
      "Delivered a structured learning hub for pharmacy professionals to solve access-to-training and continuous development gaps. Organized course discovery, LMS-based learning flow, and easier access to practical, relevant industry knowledge.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80",
    stacks: ["WordPress", "PHP", "MySQL", "Elementor", "LearnPress", "Custom CSS"]
  },
  {
    title: "Pharmalliance",
    link: "https://pharmalliance.com.ng",
    description:
      "Built a business-network digital presence that solved weak visibility of shared value and member resources. Improved trust, discoverability, and conversion through clearer value positioning, resource access, and structured brand storytelling.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    stacks: ["WordPress", "PHP", "MySQL", "Elementor", "Custom CSS", "SEO"]
  },
  {
    title: "Oyetty Foundation",
    link: "https://oyettyspecialfoundation.com/",
    description:
      "Designed a nonprofit platform that solved low awareness and weak support coordination for parents of special children. Improved donation pathways, volunteer discovery, and impact communication through structured storytelling and outreach pages.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1400&q=80",
    stacks: ["WordPress", "PHP", "MySQL", "Elementor", "Blog CMS", "Responsive Design"]
  },
  {
    title: "Moxie",
    link: "https://moxie.ng/",
    description:
      "Developed a health brand site that solved poor product education and weak parent-focused conversion flow. Combined product visibility, continuous health education content, and action-driven CTAs to improve trust and buying intent.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    stacks: ["WordPress", "PHP", "MySQL", "Elementor", "WooCommerce", "Content Marketing"]
  },
  {
    title: "Laptop Affairs",
    link: "https://laptopaffairs.com.ng",
    description:
      "Built a retail/support-focused web presence that solved unclear product access and slow customer inquiry handling. Improved discoverability of offerings, repair/service trust signals, and faster lead capture for purchase decisions.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1400&q=80",
    stacks: ["WordPress", "PHP", "MySQL", "Elementor", "E-commerce", "Responsive Design"]
  },
  {
    title: "Fontcare Pharmacy",
    link: "https://fontcarepharmacy.com.ng",
    description:
      "Created a community pharmacy experience that solved limited digital access to trusted pharmaceutical guidance. Made services, consultation touchpoints, and care information easier to reach for both local and online customers.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80",
    stacks: ["WordPress", "PHP", "MySQL", "Elementor", "Custom CSS", "SEO"]
  },
  {
    title: "Rebeca",
    link: "https://rebeca.pharmalliance.com.ng/",
    description:
      "Built a business calculator tool that solved guesswork in pharmacy profitability planning. Enabled operators to model expenses, break-even targets, and required sales output so decisions become data-backed instead of intuitive.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    stacks: ["JavaScript", "WordPress", "PHP", "MySQL", "Calculator Logic", "Responsive UI"]
  }
];

const projectRadiusClasses = [
  "radius-style-a",
  "radius-style-b",
  "radius-style-c",
  "radius-style-d",
  "radius-style-e",
  "radius-style-f"
];

const projectButtonColorClasses = [
  "view-color-a",
  "view-color-b",
  "view-color-c",
  "view-color-d",
  "view-color-e",
  "view-color-f"
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const Motion = motion;

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-zinc-50 to-cyan-50/30 text-zinc-800">
      <header className="fixed top-0 z-50 w-full border-b border-zinc-200/80 bg-white/85 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <a href="#home" className="text-xl font-semibold tracking-wider text-zinc-900">
            Solomon
          </a>
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-sm font-medium uppercase tracking-widest text-zinc-600 transition hover:text-cyan-700"
              >
                {link}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="rounded-md border border-zinc-300 p-2 text-zinc-700 lg:hidden"
            aria-label="Open profile menu"
          >
            <FaUser />
          </button>
        </div>
        <div
          className={`overflow-hidden border-t border-zinc-200 bg-white px-4 transition-all duration-300 lg:hidden ${
            isMenuOpen ? "max-h-72 py-4" : "max-h-0 py-0"
          }`}
        >
          <div className="mx-auto w-full max-w-xs rounded-2xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
              alt="Profile preview"
              className="h-56 w-full rounded-xl object-cover"
            />
            <p className="mt-3 text-center text-sm font-semibold text-zinc-800">Tetteh Solomon</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-24 pt-20 md:px-8 md:pb-0">
        <section id="home" className="mx-1 pt-0 pb-16 md:-mx-8 md:mx-0 md:pb-20">
          <div className="hero-shell text-center">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1800&q=80"
              alt="Hero background"
              className="hero-bg-image"
            />
            <div className="hero-overlay" />
            <div className="relative z-10 px-5 py-14 md:px-8 md:py-20">
              <Motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="mx-auto mb-4 inline-flex items-center rounded-full border border-cyan-300/40 bg-cyan-500/20 px-4 py-1 text-xs font-semibold tracking-wider text-cyan-100"
              >
                AI ENGINEERING JOURNEY
              </Motion.div>
              <Motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-2 text-zinc-100"
              >
                My name is
              </Motion.p>
              <Motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-white md:text-6xl"
              >
                Tetteh Solomon
              </Motion.h1>
              <Motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mx-auto mt-6 max-w-xl text-zinc-100"
              >
                FullStack Software Developer focused on creating scalable and clean digital products.
              </Motion.p>
              <Motion.a
                href="https://drive.google.com/drive/u/0/folders/1QPoJ3fbJL5nVDUQU0JlFzW509cEGWPVk"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block rounded-full bg-cyan-600 px-7 py-3 font-semibold text-white transition hover:bg-cyan-700"
              >
                View CV
              </Motion.a>
            </div>
          </div>
        </section>

        <div className="section-ticks" />
        <section id="about" className="rounded-3xl bg-white/70 py-16 md:py-24">
          <h2 className="mb-8 text-center text-3xl font-semibold md:text-4xl">ABOUT ME</h2>
          <p className="mx-auto max-w-4xl text-center leading-8 text-zinc-600">
            I am a FullStack Software Developer with about 5 years of hands-on experience (started in
            February 2021), building production-ready web applications with React, Next.js, Tailwind,
            Node.js/Express, NestJS, PHP, and WordPress, backed by MySQL, MongoDB, PostgreSQL, and Redis.
            Over the years, I have delivered systems for dashboards, payment routing, live webinar/game
            experiences, analytics, and practical business workflows. Beyond feature delivery, I design and
            maintain the underlying architecture: queue-backed workloads using Redis + BullMQ, worker services,
            migration-safe database workflows, webhook integrations, and server operations with PM2 on Hetzner
            infrastructure. I am currently growing deeper into AI Engineering, focused on building useful
            AI-driven products by integrating LLM APIs, workflow automation, and intuitive product UX.
          </p>
        </section>

        <div className="section-ticks" />
        <section id="skills" className="rounded-3xl bg-zinc-50/80 py-16 md:py-24">
          <h2 className="mb-10 text-center text-3xl font-semibold md:text-4xl">SKILLS</h2>
          <div className="mb-8 hidden grid-cols-2 gap-4 md:grid lg:grid-cols-6">
            {skills.map((skill, idx) => (
              <Motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.02 }}
                whileHover={{ y: -6 }}
                className={`elev-card rounded-xl border border-zinc-200/80 bg-linear-to-br ${skill.tone} p-4 shadow-sm`}
              >
                <div className="mb-3 text-2xl">{skill.icon}</div>
                <p className="text-sm font-semibold text-zinc-800">{skill.label}</p>
              </Motion.div>
            ))}
          </div>

          <div className="grid gap-4 md:hidden">
            {skillGroups.map((group, idx) => (
              <Motion.article
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="elev-card rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className={`mb-4 rounded-xl bg-linear-to-r ${group.accent} px-4 py-3`}>
                  <h3 className="text-base font-semibold text-zinc-800">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Motion.article>
            ))}
          </div>
        </section>

        <div className="section-ticks" />
        <section id="projects" className="rounded-3xl bg-white/70 py-16 md:py-24">
          <h2 className="mb-10 text-center text-3xl font-semibold md:text-4xl">PROJECTS</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              (() => {
                const radiusClass = projectRadiusClasses[idx % projectRadiusClasses.length];
                const buttonColorClass = projectButtonColorClasses[idx % projectButtonColorClasses.length];

                return (
              <Motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className={`project-card elev-card ${radiusClass} overflow-hidden border border-zinc-200 bg-white shadow-sm`}
              >
                <img src={project.image} alt={project.title} className="h-44 w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
                <div className="project-box-inner">
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="project-desc mb-4 text-sm text-zinc-600">{project.description}</p>
                  {project.stacks && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.stacks.slice(0, 6).map((stack) => (
                        <span
                          key={stack}
                          className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className={`project-view-btn ${radiusClass} ${buttonColorClass} inline-block px-5 py-2 text-sm font-semibold text-white transition`}
                    >
                      View
                    </button>
                  </div>
                </div>
              </Motion.article>
                );
              })()
            ))}
        </div>
        </section>

        <div className="section-ticks" />
        <section id="contact" className="rounded-3xl bg-zinc-50/80 py-16 md:py-24">
          <h2 className="mb-10 text-center text-3xl font-semibold md:text-4xl">Contact Me</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <form className="elev-card rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-600"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-600"
              />
              <textarea
                rows="6"
                placeholder="Message"
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-600"
              />
        <button
                type="submit"
                className="rounded-full bg-cyan-600 px-7 py-3 text-sm font-semibold text-white hover:bg-cyan-700"
        >
                Submit
        </button>
            </form>
            <div className="elev-card rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Reach Me</h3>
              <p className="mb-2 text-zinc-600">+234 81 6290 6023</p>
              <p className="mb-2 text-zinc-600">+234 80 9871 4507</p>
              <p className="mb-8 text-zinc-600">tettehsolomon106@gmail.com</p>
              <div className="flex gap-3">
                {[FaFacebookF, FaWhatsapp, FaLinkedinIn, FaGithub].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="rounded-full border border-zinc-300 p-3 text-zinc-600 transition hover:border-cyan-600 hover:text-cyan-700"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

     

      <section className="border-t border-zinc-200 bg-white/70 py-10 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left md:px-8">
          <div className="elev-card rounded-2xl border border-zinc-200/80 bg-white/70 p-5 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-800">Contact</h3>
            <p className="text-sm text-zinc-600">+234 81 6290 6023</p>
            <p className="text-sm text-zinc-600">+234 80 9871 4507</p>
            <p className="text-sm text-zinc-600">tettehsolomon106@gmail.com</p>
          </div>
          <div className="elev-card rounded-2xl border border-zinc-200/80 bg-white/70 p-5 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-800">What I Build</h3>
            <p className="text-sm text-zinc-600">High-conversion websites</p>
            <p className="text-sm text-zinc-600">Business web applications</p>
            <p className="text-sm text-zinc-600">Admin dashboards & tools</p>
          </div>
          <div className="elev-card rounded-2xl border border-zinc-200/80 bg-white/70 p-5 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-800">How I Work</h3>
            <p className="text-sm text-zinc-600">Discovery & planning</p>
            <p className="text-sm text-zinc-600">Clean implementation</p>
            <p className="text-sm text-zinc-600">Launch support & iteration</p>
          </div>
          <div className="elev-card rounded-2xl border border-zinc-200/80 bg-white/70 p-5 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-800">Open To</h3>
            <p className="text-sm text-zinc-600">Freelance projects</p>
            <p className="text-sm text-zinc-600">Contract collaboration</p>
            <p className="text-sm text-zinc-600">Product partnerships</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white/85 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
          <p className="text-sm text-zinc-500">© 2021–2026 Tetteh Solomon. All rights reserved.</p>
        </div>
      </footer>

      <nav className="mobile-dock lg:hidden">
        {mobileLinks.map((item) => {
          const DockIcon = item.icon;

          return (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="mobile-dock-item"
              onClick={() => setIsMenuOpen(false)}
            >
              <DockIcon />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>

      <div className="chatbot-wrap">
        <AnimatePresence>
          {isChatOpen && (
            <Motion.div
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.92 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="chatbot-panel"
            >
              <a
                href="https://wa.me/2348162906023"
                target="_blank"
                rel="noreferrer"
                className="chatbot-item chat-whatsapp"
                aria-label="Open WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a href="tel:+2348162906023" className="chatbot-item chat-phone" aria-label="Call phone number">
                <FaPhoneAlt />
              </a>
              <a
                href="https://www.linkedin.com/in/solomon-tetteh-a48237198"
                target="_blank"
                rel="noreferrer"
                className="chatbot-item chat-linkedin"
                aria-label="Open LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/solkane10/"
                target="_blank"
                rel="noreferrer"
                className="chatbot-item chat-instagram"
                aria-label="Open Instagram"
              >
                <SiInstagram />
              </a>
            </Motion.div>
          )}
        </AnimatePresence>
        <button
          type="button"
          onClick={() => setIsChatOpen((prev) => !prev)}
          className="chatbot-toggle"
          aria-label="Toggle contact shortcuts"
        >
          <FaCommentDots />
        </button>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
        </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="project-modal-backdrop"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.96 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="project-modal-card"
        onClick={(event) => event.stopPropagation()}
      >
        <img src={project.image} alt={project.title} className="project-modal-image" />
        <div className="project-modal-content">
          <h3 className="text-2xl font-semibold text-zinc-900">{project.title}</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            {project.description}
          </p>
          <p className="mt-3 text-sm leading-7 text-zinc-600">
            This solution focuses on improving user flow, reducing manual friction, and increasing conversion with clean responsive UX and clear action paths.
          </p>
          <div className="mt-6 flex items-center justify-end gap-3">
            <button type="button" onClick={onClose} className="project-modal-close-btn">
              Close
            </button>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-modal-link-btn">
              Visit Link
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;
