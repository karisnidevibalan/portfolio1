import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { 
  Github, Linkedin, Mail, ExternalLink, Code2, 
  Database, Layout, Smartphone, User, Briefcase, 
  GraduationCap, MessageSquare, Send, Sparkles, 
  ChevronRight, Terminal, Globe, Palette, Cpu,
  FileCode, Monitor, Zap
} from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function App() {
  return (
    <div className="min-h-screen text-slate-100 overflow-x-hidden">
      <div className="orb -top-24 -left-24 w-96 h-96 bg-cyan-500/20" />
      <div className="orb top-1/2 -right-24 w-80 h-80 bg-fuchsia-500/10" />
      <div className="orb -bottom-24 left-1/4 w-96 h-96 bg-blue-500/10" />
      
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-24 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4">
        <div className={`glass rounded-2xl px-6 py-3 flex items-center justify-between transition-all ${
          scrolled ? "bg-slate-900/80 border-white/5 shadow-xl" : "bg-transparent border-transparent"
        }`}>
          <div className="flex items-center gap-2 font-bold tracking-tighter text-xl text-white">
            <span className="bg-gradient-to-tr from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">MD.</span>
            <span className="text-xs uppercase tracking-[0.3em] font-normal text-slate-400 ml-1">Portfolio</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-slate-300">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 transition-colors relative group">
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white hover:scale-105 transition-transform shadow-lg shadow-cyan-500/20"
            >
              Hire Me ⚡
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const techStack = [
    { icon: <Cpu size={24} />, name: "Java", color: "text-red-500", x: 15, y: 20, delay: 0.1 },
    { icon: <Terminal size={24} />, name: "JavaScript", color: "text-yellow-400", x: 45, y: 10, delay: 0.2 },
    { icon: <Globe size={24} />, name: "React", color: "text-cyan-400", x: 75, y: 25, delay: 0.3 },
    { icon: <Zap size={24} />, name: "Vite", color: "text-purple-400", x: 25, y: 50, delay: 0.4 },
    { icon: <Database size={24} />, name: "SQL", color: "text-emerald-400", x: 60, y: 45, delay: 0.5 },
    { icon: <Layout size={24} />, name: "UI Design", color: "text-fuchsia-400", x: 85, y: 60, delay: 0.6 },
    { icon: <Briefcase size={24} />, name: "MERN", color: "text-blue-400", x: 10, y: 75, delay: 0.7 },
    { icon: <Github size={24} />, name: "Git", color: "text-white", x: 50, y: 80, delay: 0.8 },
  ];

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-8" onMouseMove={handleMouseMove}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid lg:grid-cols-[1.2fr,1fr] items-center gap-16 w-full"
      >
        <motion.div variants={item} className="space-y-8">
          <div className="premium-badge animate-bounce-slow">
            <Sparkles size={12} className="text-cyan-400" />
            Hey there! 👋
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500">Manimegalai</span>
            </h1>
          </div>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-light">
            I love learning new technologies and building solutions that make a difference. 
            Focused on building impactful software through <span className="text-cyan-300 font-bold">MERN</span>, <span className="text-emerald-300 font-bold">Java</span>, and <span className="text-blue-300 font-bold">DBMS</span>.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              View My Work <ChevronRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 rounded-full border border-slate-700 font-bold hover:bg-white/5 transition-colors"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex items-center gap-6 pt-8 text-slate-500">
            <a href="https://github.com/Manimegalaid123" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/manimegalai-d-33b857328" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
            <a href="https://leetcode.com/u/Manimegalai123" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors"><Code2 size={20} /></a>
            <a href="mailto:kalai28082006@gmail.com" className="hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
          </div>
        </motion.div>

        <motion.div 
          variants={item}
          className="relative hidden lg:block h-[500px]"
        >
          {/* Constellation SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
            <motion.line x1="15%" y1="20%" x2="45%" y2="10%" stroke="white" strokeWidth="0.5" className="glow-line" />
            <motion.line x1="45%" y1="10%" x2="75%" y2="25%" stroke="white" strokeWidth="0.5" className="glow-line" />
            <motion.line x1="15%" y1="20%" x2="25%" y2="50%" stroke="white" strokeWidth="0.5" className="glow-line" />
            <motion.line x1="25%" y1="50%" x2="60%" y2="45%" stroke="white" strokeWidth="0.5" className="glow-line" />
            <motion.line x1="60%" y1="45%" x2="75%" y2="25%" stroke="white" strokeWidth="0.5" className="glow-line" />
            <motion.line x1="60%" y1="45%" x2="85%" y2="60%" stroke="white" strokeWidth="0.5" className="glow-line" />
            <motion.line x1="25%" y1="50%" x2="10%" y2="75%" stroke="white" strokeWidth="0.5" className="glow-line" />
            <motion.line x1="60%" y1="45%" x2="50%" y2="80%" stroke="white" strokeWidth="0.5" className="glow-line" />
          </svg>

          {techStack.map((tech) => (
            <ConstellationIcon key={tech.name} tech={tech} mouseX={mouseX} mouseY={mouseY} />
          ))}
          
          {/* Enhanced Background Glows */}
          <div className="absolute -inset-20 bg-cyan-500/5 blur-[120px] rounded-full -z-20 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-fuchsia-600/5 blur-[120px] rounded-full -z-20 delay-1000 animate-pulse" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ConstellationIcon({ tech, mouseX, mouseY }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Magnetic drift effect
  const driftX = useSpring(useTransform(mouseX, [0, 800], [-10, 10]));
  const driftY = useSpring(useTransform(mouseY, [0, 800], [-10, 10]));

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: tech.delay }}
      style={{ 
        position: 'absolute', 
        left: `${tech.x}%`, 
        top: `${tech.y}%`,
        x: driftX,
        y: driftY
      }}
      className="constellation-icon group"
    >
      <div className={`${tech.color} relative z-10 transition-all duration-300`}>
        {tech.icon}
      </div>
      
      {/* Radial Glow on Hover */}
      <div className={`absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-current -z-10`} />
      
      {/* Label */}
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[8px] font-black uppercase tracking-widest text-cyan-400 whitespace-nowrap">
        {tech.name}
      </span>
    </motion.div>
  );
}


function SectionHeading({ title, badge, center }) {
  return (
    <div className={`space-y-4 mb-12 ${center ? "text-center mx-auto" : ""}`}>
      <div className={`premium-badge ${center ? "mx-auto" : ""}`}>{badge}</div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative text-white">
      <SectionHeading title="About Me" badge="Identity" />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div variants={item} className="space-y-6">
          <p className="text-lg text-slate-300 leading-relaxed font-light">
            I am currently pursuing my Bachelor of Computer Science and Engineering at <span className="text-cyan-400 font-medium">Kongu Engineering College</span> (CGPA 8.32 till 5th semester). 
            I enjoy building full-stack web applications and solving complex algorithmic problems with efficient code.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-4 rounded-2xl border-l-4 border-l-cyan-400 shadow-cyan-500/10 shadow-lg">
              <h4 className="text-cyan-400 font-bold text-2xl">8.32</h4>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Current CGPA</p>
            </div>
            <div className="glass p-4 rounded-2xl border-l-4 border-l-fuchsia-400 shadow-fuchsia-500/10 shadow-lg">
              <h4 className="text-fuchsia-400 font-bold text-2xl">5th</h4>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Semester</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={item} className="grid grid-cols-2 gap-4">
          <div className="glass aspect-square rounded-3xl flex flex-col items-center justify-center gap-3 group hover:border-cyan-500/50 transition-all cursor-default">
            <Layout className="text-cyan-400 group-hover:scale-110 transition-transform" size={32} />
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Frontend</span>
          </div>
          <div className="glass aspect-square rounded-3xl mt-8 flex flex-col items-center justify-center gap-3 group hover:border-fuchsia-500/50 transition-all cursor-default">
            <Terminal className="text-fuchsia-400 group-hover:scale-110 transition-transform" size={32} />
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Backend</span>
          </div>
          <div className="glass aspect-square rounded-3xl flex flex-col items-center justify-center gap-3 group hover:border-emerald-500/50 transition-all cursor-default text-white">
            <Code2 className="text-emerald-400 group-hover:scale-110 transition-transform" size={32} />
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Java Dev</span>
          </div>
          <div className="glass aspect-square rounded-3xl mt-8 flex flex-col items-center justify-center gap-3 group hover:border-orange-500/50 transition-all cursor-default">
            <Database className="text-orange-400 group-hover:scale-110 transition-transform" size={32} />
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">DBMS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Appointment Scheduler",
    stack: "MERN Stack",
    description: "Multi-business slot booking application with real-time availability and dynamic scheduling.",
    github: "https://github.com/Manimegalaid123/Appointment-Schedule-App",
    color: "from-amber-400 to-orange-500"
  },
    {
    title: "SMT Agency Forecasting",
    stack: "MERN Stack",
    description: "Sales and demand forecasting system with real-time stock tracking and predictive analytics for agencies.",
    github: "https://github.com/Manimegalaid123/SMTAgencyProject",
    color: "from-fuchsia-500 to-purple-600"
  },
  {
    title: "Resumify | ATS Builder",
    stack: "React, Tailwind, ATS Logic",
    description: "Professional ATS Resume Builder with live scoring, job-specific templates, and real-time verification.",
    github: "https://github.com/Manimegalaid123/resumebuilder",
    demo: "https://resumebuilder-jet.vercel.app/",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Project Management Pro",
    stack: "MERN Stack, JWT",
    description: "Role-based project tracking with automated email alerts and advanced dashboard statistics.",
    github: "https://github.com/Manimegalaid123/TaskManagement",
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "Rock Paper Scissors",
    stack: "HTML, CSS, JavaScript",
    description: "Interactive game with animations, sound effects, and a balance system. Play against the computer and test your luck!",
    github: "https://github.com/Manimegalaid123/SPS",
    demo: "https://sps-black.vercel.app/",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Currency Convertor",
    stack: "JavaScript, API Integration",
    description: "Real-time exchange rate converter with multi-currency support and accurate dynamic calculations.",
    github: "https://github.com/Manimegalaid123/currency-Convertor",
    color: "from-blue-600 to-indigo-500"
  }
];

function Projects() {
  return (
    <section id="projects" className="text-white">
      <SectionHeading title="Recent Works" badge="Portfolio" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            variants={item}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-3xl blur opacity-10 group-hover:opacity-40 transition-opacity`} />
            <div className="relative glass p-8 rounded-3xl h-full flex flex-col justify-between overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-slate-500">Project 0{idx + 1}</span>
                  <div className="flex gap-3">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors"><Github size={18} /></a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors"><ExternalLink size={18} /></a>
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm text-cyan-200/80 font-medium">{project.stack}</p>
                <p className="text-slate-400 leading-relaxed font-light text-sm">{project.description}</p>
              </div>
              <div className="pt-6">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                  Explore Repo <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const skillGroups = [
  { title: "Languages", items: ["Java", "JavaScript", "C"] },
  { title: "Frontend", items: ["React.js", "Vite"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Database", items: ["MySQL", "MongoDB"] },
  { title: "Authentication", items: ["JWT"] },
  { title: "Tools", items: ["Git & GitHub", "Postman", "VS Code"] },
];

function Skills() {
  return (
    <section id="skills" className="text-white">
      <SectionHeading title="Technical Expertise" badge="Capabilities" center />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <motion.div key={group.title} variants={item} className="space-y-6">
            <h4 className="text-xs uppercase font-bold tracking-[0.3em] text-cyan-400 pl-4 border-l-2 border-cyan-800">{group.title}</h4>
            <div className="flex flex-col gap-3">
              {group.items.map((skill) => (
                <div key={skill} className={`glass py-3 px-5 rounded-xl text-sm font-medium transition-all hover:bg-white/5 ${['Java', 'React.js', 'Node.js', 'MySQL'].includes(skill) ? 'border-cyan-500 bg-cyan-500/5 text-cyan-200' : 'hover:border-white/20'}`}>
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const history = [
  { role: "Executive Member", org: "CSE Coding Club", period: "Present", type: "Leadership" },
  { role: "Core Member", org: "Red Ribbon Club", period: "2024 - 2025", type: "Social" },
  { role: "Active Contributor", org: "Rotract Club", period: "2024 - 2025", type: "Social" },
];

function Experience() {
  return (
    <section id="experience" className="text-white">
      <SectionHeading title="Responsible Roles" badge="Leadership" />
      <div className="space-y-6">
        {history.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="group glass p-6 md:p-8 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-cyan-500/20 transition-all"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 font-bold group-hover:scale-110 transition-transform">
                {exp.org[0]}
              </div>
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-slate-400 font-light italic">{exp.org}</p>
              </div>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[10px] uppercase font-bold tracking-widest text-fuchsia-400">
                {exp.type}
              </span>
              <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">{exp.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="text-white">
      <SectionHeading title="Educational Path" badge="Journey" center />
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={item} className="glass p-8 rounded-3xl space-y-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <GraduationCap size={160} />
          </div>
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">2023 - 2027</span>
          <h3 className="text-2xl font-bold max-w-[80%]">Bachelor of Computer Science and Engineering</h3>
          <p className="text-slate-400 font-light italic text-lg">Kongu Engineering College, Erode</p>
          <div className="pt-4 flex items-center gap-3">
             <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
             <span className="text-sm font-bold tracking-widest text-slate-300">CGPA: 8.32</span>
          </div>
        </motion.div>

        <motion.div variants={item} className="glass p-8 rounded-3xl space-y-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Sparkles size={160} />
          </div>
          <span className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest">2022 - 2023</span>
          <h3 className="text-2xl font-bold max-w-[80%]">Higher Secondary Certificate (HSC)</h3>
          <p className="text-slate-400 font-light italic text-lg">Government Model School, Cuddalore</p>
          <div className="pt-4 flex items-center gap-3">
             <div className="h-2 w-2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_#d946ef]" />
             <span className="text-sm font-bold tracking-widest text-slate-300">Grade: 89%</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="text-white">
      <SectionHeading title="Get In Touch" badge="Contact" center />
      <div className="glass p-8 md:p-12 rounded-[2.5rem] grid md:grid-cols-2 gap-16 relative overflow-hidden">
        <div className="orb -bottom-24 -right-24 w-80 h-80 bg-cyan-500/10" />
        
        <div className="space-y-8 relative z-10">
          <h3 className="text-4xl font-bold leading-tight">Let's build something <span className="text-cyan-400 italic">visionary</span> together.</h3>
          <p className="text-slate-400 font-light text-lg">
            Whether you have an internship opportunity, a project to collaborate on, or just want to say hi, my inbox is always open.
          </p>
          <div className="space-y-6">
            <ContactInfo icon={<Mail className="text-cyan-400" />} label="Email Me" value="kalai28082006@gmail.com" href="mailto:kalai28082006@gmail.com" />
            <ContactInfo icon={<Smartphone className="text-fuchsia-400" />} label="Call Me" value="+91 63825 81068" href="tel:+916382581068" />
          </div>
        </div>

        <form className="space-y-6 relative z-10 text-white">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 pl-1">Name</label>
              <input className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-4 px-6 focus:outline-none focus:border-cyan-500/50 transition-all font-light" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 pl-1">Email</label>
              <input className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-4 px-6 focus:outline-none focus:border-cyan-500/50 transition-all font-light" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 pl-1">Message</label>
            <textarea rows="4" className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-4 px-6 focus:outline-none focus:border-cyan-500/50 transition-all font-light resize-none" placeholder="Tell me about your idea..." />
          </div>
          <button className="w-full py-4 rounded-2xl bg-white text-slate-950 font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all group">
            Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
}

function ContactInfo({ icon, label, value, href }) {
  return (
    <a href={href} className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{label}</p>
        <p className="text-slate-200 group-hover:text-white transition-colors">{value}</p>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-slate-900 text-center space-y-6">
      <div className="flex items-center justify-center gap-2 font-bold tracking-tighter text-xl text-white">
        <span className="bg-gradient-to-tr from-cyan-400 to-fuchsia-500 text-transparent bg-clip-text">MD.</span>
      </div>
      <p className="text-xs text-slate-500 font-medium uppercase tracking-[0.2em]">
        Design inspired by excellence • Built with passion
      </p>
      <div className="flex justify-center gap-6 text-slate-600">
        <a href="https://github.com/Manimegalaid123" target="_blank" rel="noreferrer"><Github size={16} className="hover:text-white transition-colors cursor-pointer" /></a>
        <a href="https://linkedin.com/in/manimegalai-d-33b857328" target="_blank" rel="noreferrer"><Linkedin size={16} className="hover:text-white transition-colors cursor-pointer" /></a>
        <a href="https://leetcode.com/u/Manimegalai123" target="_blank" rel="noreferrer"><Code2 size={16} className="hover:text-white transition-colors cursor-pointer" /></a>
        <a href="mailto:kalai28082006@gmail.com"><Mail size={16} className="hover:text-white transition-colors cursor-pointer" /></a>
      </div>
    </footer>
  );
}

export default App;