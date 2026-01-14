"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  Terminal, Shield, Globe, Code, Cpu, Mail, Linkedin, 
  Phone, ExternalLink, Award, Gamepad2, Zap, Smartphone, 
  ChevronRight, Lock, Database, Server, Bug, Search,
  Coffee, Download, Layers, Eye, Binary, Radio, Languages
} from 'lucide-react';

const DATA = {
  profile: {
    name: "DANIEL HEREDIA ESTRADA",
    title: {
      en: "System Engineer & Security Researcher",
      es: "Ingeniero de Sistemas e Investigador de Seguridad"
    },
    location: "Hidalgo del Parral, Chihuahua",
    email: "danyhere516@gmail.com",
    phone: "+52 649 196 8052",
    linkedin: "https://www.linkedin.com/in/daniel-heredia-a57762275/",
  },
  education: {
    institution: "Instituto Tecnológico de Parral",
    degree: {
      en: "B.Sc. in Computer Systems Engineering",
      es: "Ingeniería en Sistemas Computacionales"
    },
    date: "Aug 2021 - Dec 2025",
    achievements: {
      en: [
        "National Innovation Finalist (TecNM) - Represented institution twice with high-impact software projects.",
        "Strong foundation in computer networks, artificial intelligence methodologies, and full-cycle software development.",
      ],
      es: [
        "Finalista Nacional de Innovación (TecNM) - Representé a la institución dos veces con proyectos de software de alto impacto.",
        "Sólida base en redes de computadoras, metodologías de inteligencia artificial y desarrollo de software de ciclo completo.",
      ]
    }
  },
  experience: [
    {
      company: "AXIS 3D",
      role: {
        en: "E-Commerce Manager",
        es: "Gerente de E-Commerce"
      },
      date: "Feb 2025 - Present",
      desc: {
        en: "Increased online sales by 50% through strategic product optimization, UI/UX improvements, and digital marketing. Redesigned and deployed a secure, scalable online store with modern front-end architecture.",
        es: "Incrementé las ventas en línea un 50% mediante optimización estratégica de productos, mejoras de UI/UX y marketing digital. Rediseñé y desplegué una tienda en línea segura y escalable con arquitectura front-end moderna."
      },
      tech: ["React", "UI/UX", "Front-end Architecture", "Strategic Optimization"]
    },
    {
      company: "Bug Bounty & Security Researcher",
      role: {
        en: "Freelance Pentester",
        es: "Pentester Independiente"
      },
      date: "Jul 2025 - Present",
      desc: {
        en: "Performed infrastructure security audits using Tor and Proxychains to analyze WAF and IDS behavior. Developed Python scripts to automate authentication testing and vulnerability discovery.",
        es: "Realicé auditorías de seguridad de infraestructura usando Tor y Proxychains para analizar el comportamiento de WAF e IDS. Desarrollé scripts de Python para automatizar pruebas de autenticación y descubrimiento de vulnerabilidades."
      },
      tech: ["Python", "Tor", "Proxychains", "Infrastructure Security", "WAF Analysis"]
    },
    {
      company: "TecNM & Tourism Parral Projects",
      role: {
        en: "Web Developer & Technical Lead",
        es: "Desarrollador Web y Líder Técnico"
      },
      date: "Jan 2025 - Present",
      desc: {
        en: "Developed a responsive tourism platform with SEO optimization and interactive mapping. Led the development of a Unity-based animated short film addressing climate change awareness.",
        es: "Desarrollé una plataforma de turismo responsiva con optimización SEO y mapeo interactivo. Lideré el desarrollo de un cortometraje animado en Unity sobre concientización del cambio climático."
      },
      tech: ["Unity 3D", "Web Development", "SEO", "Interactive Mapping"]
    },
    {
      company: "ChemData",
      role: {
        en: "Mobile Application Developer",
        es: "Desarrollador de Aplicaciones Móviles"
      },
      date: "Feb 2023 - Aug 2024",
      desc: {
        en: "Designed and developed a mobile application for chemistry students, managing the full software lifecycle from requirements to deployment.",
        es: "Diseñé y desarrollé una aplicación móvil para estudiantes de química, gestionando el ciclo completo del software desde requisitos hasta despliegue."
      },
      tech: ["Mobile Dev", "UI/UX", "Full Lifecycle", "Chemistry App"]
    }
  ],
  certifications: [
    { title: "AI Development", issuer: "Santander Open Academy" },
    { title: "Cybersecurity & Cloud", issuer: "Cisco Networking Academy" },
    { title: "Software Development - PHP (OOP), SQL", issuer: "Sololearn" },
    { 
      title: {
        en: "Intellectual Property Rights",
        es: "Derechos de Propiedad Intelectual"
      }, 
      issuer: "IMPI Mexico" 
    }
  ],
  skills: {
    languages: ["Python", "PHP", "Java", "C#", "C++", "JavaScript (ES6+)", "SQL", "NoSQL"],
    cybersecurity: ["Nmap", "OpenVAS", "Hydra", "Maltego", "OSINT", "Burp Suite", "Metasploit", "Tor", "Proxychains"],
    tools: ["Unity 3D", "Git/GitHub", "Visual Studio", "Linux", "Cisco Networking", "Server Administration"]
  },
  ui: {
    nav: {
      experience: { en: "Experience", es: "Experiencia" },
      stack: { en: "Stack", es: "Stack" },
      education: { en: "Education", es: "Educación" }
    },
    hero: {
      badge: { en: "Innovation Finalist 2024-2025", es: "Finalista de Innovación 2024-2025" },
      title1: { en: "CYBER", es: "CIBER" },
      title2: { en: "ARCHITECT", es: "ARQUITECTO" },
      desc: {
        en: "System Developer focused on Offensive Cybersecurity and scalable infrastructure. Specialized in transforming vulnerabilities into robust solutions.",
        es: "Desarrollador de Sistemas enfocado en Ciberseguridad Ofensiva e infraestructura escalable. Especializado en transformar vulnerabilidades en soluciones robustas."
      },
      contact: { en: "Contact Now", es: "Contactar Ahora" },
      repository: { en: "View Repository", es: "Ver Repositorio" },
      scroll: { en: "Scroll to explore", es: "Desliza para explorar" }
    },
    sections: {
      experience: {
        title: { en: "Professional Experience", es: "Experiencia Profesional" },
        subtitle: { en: "Full-cycle software development & security researcher career path.", es: "Desarrollo de software de ciclo completo y trayectoria como investigador de seguridad." }
      },
      stack: {
        title: { en: "Security Suite", es: "Suite de Seguridad" },
        desc: {
          en: "Experience in offensive audits and infrastructure monitoring using industry-leading tools.",
          es: "Experiencia en auditorías ofensivas y monitoreo de infraestructura usando herramientas líderes en la industria."
        },
        certTitle: { en: "Certifications", es: "Certificaciones" },
        coreTitle: { en: "System Core", es: "Núcleo del Sistema" },
        platforms: { en: "Platforms", es: "Plataformas" }
      },
      education: {
        academic: { en: "Academic Records", es: "Registro Académico" }
      },
      cta: {
        title: {
          en: "SECURE YOUR\nDIGITAL ASSETS",
          es: "ASEGURA TUS\nACTIVOS DIGITALES"
        },
        send: { en: "Send Transmission", es: "Enviar Mensaje" },
        linkedin: { en: "LinkedIn Profile", es: "Perfil LinkedIn" }
      }
    }
  }
};

const AdvancedTerminal = ({ lang }: { lang: 'en' | 'es' }) => {
  const [history, setHistory] = useState<string[]>([
    "DanielOS [Version 2.0.26]",
    lang === 'en' ? "Initializing secure kernel..." : "Inicializando kernel seguro...",
    lang === 'en' ? "System status: OPTIMAL" : "Estado del sistema: ÓPTIMO",
    lang === 'en' ? "Type 'help' to list available commands." : "Escribe 'help' para listar comandos disponibles."
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let res = "";

    const commands = lang === 'en' ? {
      help: "Commands: about, skills, contact, clear, neofetch, whoami",
      about: DATA.profile.title.en + " specializing in Offensive Security and Fullstack Dev.",
      skills: "Languages: " + DATA.skills.languages.slice(0, 5).join(", ") + "...",
      neofetch: "OS: Heredia-Linux | Kernel: 2026.01 | Uptime: 24/7 | Shell: React-Bash",
      whoami: "Daniel Heredia - Innovation Finalist & Security Enthusiast",
      contact: "Redirecting to " + DATA.profile.email,
      notFound: "Command '" + cmd + "' not found. Type 'help' for options."
    } : {
      help: "Comandos: about, skills, contact, clear, neofetch, whoami",
      about: DATA.profile.title.es + " especializado en Seguridad Ofensiva y Desarrollo Fullstack.",
      skills: "Lenguajes: " + DATA.skills.languages.slice(0, 5).join(", ") + "...",
      neofetch: "SO: Heredia-Linux | Kernel: 2026.01 | Tiempo activo: 24/7 | Shell: React-Bash",
      whoami: "Daniel Heredia - Finalista de Innovación y Entusiasta de la Seguridad",
      contact: "Redirigiendo a " + DATA.profile.email,
      notFound: "Comando '" + cmd + "' no encontrado. Escribe 'help' para opciones."
    };

    switch(cmd) {
      case "help": res = commands.help; break;
      case "about": res = commands.about; break;
      case "skills": res = commands.skills; break;
      case "neofetch": res = commands.neofetch; break;
      case "whoami": res = commands.whoami; break;
      case "contact": res = commands.contact; break;
      case "clear": setHistory([]); setInput(""); return;
      default: res = commands.notFound;
    }
    setHistory([...history, "guest@heredia:~$ " + input, res]);
    setInput("");
  };

  return (
    <div className="w-full bg-[#0f0f10] border-2 border-emerald-500/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.15)]">
      <div className="bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 px-5 py-3 flex items-center gap-3 border-b-2 border-emerald-500/20">
        <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.5)]" />
        <div className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
        <div className="w-3.5 h-3.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
        <span className="text-[11px] text-emerald-400/60 ml-3 font-bold tracking-wider">bash — 80x24</span>
      </div>
      <div ref={scrollRef} className="p-7 h-80 overflow-y-auto text-sm font-mono custom-scrollbar">
        {history.map((line, i) => (
          <div key={i} className="mb-1.5 text-emerald-300/90 leading-relaxed">{line}</div>
        ))}
        <form onSubmit={handleCommand} className="flex gap-3 items-center">
          <span className="text-cyan-400 font-bold text-base">❯</span>
          <input 
            className="bg-transparent outline-none flex-1 text-emerald-100 font-mono caret-cyan-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

const SkillBadge = ({ text }: { text: string }) => (
  <span className="px-4 py-2 bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-emerald-500/30 rounded-lg text-xs font-bold text-emerald-300 hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all cursor-default tracking-wide">
    {text}
  </span>
);

export default function Portfolio() {
  const [lang, setLang] = useState<'en' | 'es'>('es');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const t = (key: any) => {
    if (typeof key === 'object' && key !== null) {
      return key[lang] || key.en || '';
    }
    return key;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-slate-200 selection:bg-cyan-400/30 font-sans">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500 z-[100] origin-left shadow-[0_0_20px_rgba(34,211,238,0.5)]" 
        style={{ scaleX }} 
      />

      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-2xl border-b-2 border-emerald-500/10 px-8 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
            <span className="font-black text-emerald-400 tracking-tight text-base">HEREDIA.SYS</span>
          </div>
          <div className="flex gap-10 text-xs font-black tracking-[0.15em] text-slate-400">
            <a href="#projects" className="hover:text-cyan-400 transition-colors">{t(DATA.ui.nav.experience)}</a>
            <a href="#stack" className="hover:text-cyan-400 transition-colors">{t(DATA.ui.nav.stack)}</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">{t(DATA.ui.nav.education)}</a>
          </div>
          <div className="flex items-center gap-5">
            <button 
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 transition-all flex items-center gap-2 text-emerald-400 text-xs font-bold"
            >
              <Languages size={14} />
              {lang.toUpperCase()}
            </button>
            <a href={DATA.profile.linkedin} target="_blank" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
            <a href={`mailto:${DATA.profile.email}`} className="hover:text-cyan-400 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        
        <section className="min-h-screen flex flex-col justify-center pt-20 pb-40">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-400/40 rounded-full text-xs font-black text-emerald-300 mb-10 tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                {t(DATA.ui.hero.badge)}
              </div>
              <h1 className="text-7xl md:text-[8rem] font-black text-white leading-[0.9] tracking-tighter mb-10">
                {t(DATA.ui.hero.title1)} <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
                  {t(DATA.ui.hero.title2)}
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-lg mb-14 leading-relaxed font-medium">
                {t(DATA.ui.hero.desc)}
              </p>
              <div className="flex flex-wrap gap-5">
                <a 
                  href={`tel:${DATA.profile.phone.replace(/\s/g, '')}`} 
                  className="flex items-center gap-3 px-9 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-black rounded-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:scale-105 transition-all"
                >
                  {t(DATA.ui.hero.contact)} <Phone size={18} />
                </a>
                <button className="flex items-center gap-3 px-9 py-5 bg-slate-800/50 border-2 border-emerald-500/30 rounded-xl hover:bg-slate-700/50 hover:border-cyan-400/50 transition-all font-black text-emerald-300">
                  {t(DATA.ui.hero.repository)} <Code size={18} />
                </button>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <AdvancedTerminal lang={lang} />
            </motion.div>
          </div>
          <motion.div style={{ opacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-emerald-500/40 flex flex-col items-center gap-3">
            <span className="text-xs font-black tracking-[0.2em]">{t(DATA.ui.hero.scroll)}</span>
            <div className="w-px h-16 bg-gradient-to-b from-emerald-400 to-transparent" />
          </motion.div>
        </section>

        <section id="projects" className="py-40">
          <div className="mb-24">
            <h2 className="text-5xl font-black text-white mb-5 tracking-tighter flex items-center gap-5">
              <span className="h-1 w-16 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full" /> 
              {t(DATA.ui.sections.experience.title)}
            </h2>
            <p className="text-slate-400 font-bold text-sm tracking-wide">{t(DATA.ui.sections.experience.subtitle)}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {DATA.experience.map((exp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }}
                className="group p-12 rounded-3xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border-2 border-emerald-500/10 hover:border-cyan-400/30 hover:shadow-[0_0_50px_rgba(34,211,238,0.15)] transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Binary size={140} className="text-cyan-400" />
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-xs font-black text-emerald-400 tracking-wider">{exp.date}</span>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors tracking-tight">
                    {t(exp.role)}
                  </h3>
                  <p className="text-slate-300 font-black text-base mb-8">{exp.company}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-md">
                    {t(exp.desc)}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {exp.tech.map(tech => <SkillBadge key={tech} text={tech} />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="stack" className="py-40 border-y-2 border-emerald-500/10">
          <div className="grid lg:grid-cols-3 gap-24">
            <div>
              <h2 className="text-4xl font-black text-white mb-8 tracking-tighter">
                {t(DATA.ui.sections.stack.title)}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-10 font-medium">
                {t(DATA.ui.sections.stack.desc)}
              </p>
              <div className="space-y-5">
                {DATA.skills.cybersecurity.map(skill => (
                  <div key={skill} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-[4] group-hover:shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all" />
                    <span className="text-sm font-bold text-slate-400 group-hover:text-cyan-300 transition-colors tracking-wide">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 grid md:grid-cols-2 gap-10">
              <div className="p-12 rounded-3xl bg-gradient-to-br from-emerald-600/15 via-cyan-600/10 to-transparent border-2 border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
                <Shield className="text-emerald-400 mb-8" size={40} />
                <h3 className="text-2xl font-black text-white mb-8 tracking-tight">{t(DATA.ui.sections.stack.certTitle)}</h3>
                <div className="space-y-7">
                  {DATA.certifications.map(cert => (
                    <div key={typeof cert.title === 'string' ? cert.title : cert.title.en}>
                      <p className="text-base font-black text-slate-200">{t(cert.title)}</p>
                      <p className="text-xs text-emerald-400/70 font-bold tracking-wider mt-1">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-12 rounded-3xl bg-gradient-to-br from-slate-900/70 to-slate-800/50 border-2 border-slate-700/50">
                <Code className="text-cyan-400 mb-8" size={40} />
                <h3 className="text-2xl font-black text-white mb-8 tracking-tight">{t(DATA.ui.sections.stack.coreTitle)}</h3>
                <div className="flex flex-wrap gap-3">
                  {DATA.skills.languages.map(l => <SkillBadge key={l} text={l} />)}
                </div>
                <div className="mt-12 pt-12 border-t-2 border-emerald-500/20">
                  <h4 className="text-xs font-black text-emerald-400 tracking-[0.15em] mb-6">{t(DATA.ui.sections.stack.platforms)}</h4>
                  <div className="grid grid-cols-2 gap-5">
                    {DATA.skills.tools.slice(0, 4).map(tool => (
                      <div key={tool} className="flex items-center gap-2 text-sm font-bold text-slate-300">
                        <ChevronRight size={12} className="text-cyan-400" /> {tool}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-40">
          <div className="relative p-16 md:p-24 rounded-[3rem] bg-gradient-to-br from-slate-100 to-white text-black overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
            <div className="absolute top-0 right-0 p-16 opacity-5">
              <Award size={240} />
            </div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-16 items-start md:items-center">
              <div className="max-w-2xl">
                <div className="flex items-center gap-5 mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(0,0,0,0.2)]">
                    <Radio size={28} />
                  </div>
                  <span className="font-black text-sm tracking-[0.15em]">{t(DATA.ui.sections.education.academic)}</span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">
                  {DATA.education.institution}
                </h2>
                <p className="text-2xl font-black text-slate-600 mb-12 italic tracking-tight">
                  {t(DATA.education.degree)}
                </p>
                <div className="space-y-6">
                  {t(DATA.education.achievements).map((achievement: string, i: number) => (
                    <div key={i} className="flex gap-5 items-start">
                      <div className="mt-2 w-2 h-2 rounded-full bg-emerald-600 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      <p className="text-sm font-bold leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-9xl font-black opacity-10 leading-none tracking-tighter">2025</div>
                <p className="font-black text-xs tracking-[0.2em] mt-3">PARRAL, CHIH, MX</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-16 tracking-tighter leading-none whitespace-pre-line">
              {t(DATA.ui.sections.cta.title)}
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <motion.a 
                whileHover={{ scale: 1.05, shadow: "0_0_30px_rgba(16,185,129,0.4)" }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${DATA.profile.email}`} 
                className="px-12 py-6 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-black rounded-2xl transition-all flex items-center gap-4 group shadow-xl"
              >
                {t(DATA.ui.sections.cta.send)} 
                <Mail size={22} className="group-hover:rotate-12 transition-transform" />
              </motion.a>
              
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href={DATA.profile.linkedin} 
                target="_blank" 
                className="px-12 py-6 bg-white/5 border-2 border-white/10 text-white font-black rounded-2xl transition-all flex items-center gap-4 group"
              >
                {t(DATA.ui.sections.cta.linkedin)} 
                <Linkedin size={22} className="group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </div>

            {/* ELEMENTOS DE CONTACTO RÁPIDO */}
            <div className="mt-20 flex flex-wrap justify-center gap-10 opacity-40">
              <div className="flex items-center gap-2 text-sm font-mono">
                <Phone size={14} className="text-emerald-400" /> {DATA.profile.phone}
              </div>
              <div className="flex items-center gap-2 text-sm font-mono">
                <Globe size={14} className="text-cyan-400" /> {DATA.profile.location}
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER AVANZADO */}
      <footer className="py-24 border-t-2 border-emerald-500/10 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-emerald-500 flex items-center justify-center text-black font-black text-[10px]">DH</div>
              <span className="font-black text-white text-lg tracking-tighter uppercase">{DATA.profile.name}</span>
            </div>
            <p className="text-[10px] font-mono text-slate-500 tracking-[0.3em] uppercase">
              Stable Build v2.0.26 // Parral, CHIH, MX
            </p>
          </div>

          <div className="flex gap-12 text-[11px] font-black text-slate-400 tracking-[0.2em] uppercase">
            <span className="hover:text-emerald-400 cursor-pointer transition-colors select-none">Pentesting</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors select-none">Fullstack</span>
            <span className="hover:text-blue-400 cursor-pointer transition-colors select-none">AI & Unity</span>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-6">
              <a href={DATA.profile.linkedin} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${DATA.profile.email}`} className="text-slate-500 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <span className="text-[10px] text-slate-700 font-mono mt-4">
              &copy; {new Date().getFullYear()} // ALL SYSTEMS OPERATIONAL
            </span>
          </div>
        </div>

        {/* DECORACIÓN DE FONDO EN FOOTER */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </footer>

      {/* SISTEMA DE PARTÍCULAS DE FONDO (SIMULACIÓN CYBER) */}
      <div className="fixed inset-0 -z-50 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_0.5px,transparent_0.5px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0b] via-transparent to-[#0a0a0b]" />
      </div>
    </div>
  );
}