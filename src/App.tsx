import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Download, 
  ArrowRight, 
  Check,
  Terminal,
  Zap,
  Eye,
  Menu,
  X,
  Send
} from 'lucide-react';

// ============================================
// TYPES
// ============================================
interface Project {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  image: string;
  link: string;
  status: string;
  statusColor: string;
  statusIcon: React.ReactNode;
}

interface BlogPost {
  id: string;
  year: string;
  title: string;
  excerpt: string;
  link: string;
}

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  skills: Skill[];
}

interface Commitment {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  desc: string;
  outcome: string;
}

// ============================================
// DATA
// ============================================
const PROJECTS: Project[] = [
  {
    id: 'eye-tracking',
    title: 'AI EYE TRACKING MOUSE',
    subtitle: 'Hands-free computer control using AI-powered gaze and head tracking with MediaPipe. Supports blink-based clicks, drag-and-drop, scrolling, and voice commands.',
    tags: ['PYTHON', 'MEDIAPIPE', 'OPENCV', 'AI/ML', 'ACCESSIBILITY'],
    image: 'eye-tracking.png',
    link: 'https://dhanushraja015.github.io/Eye-Tracking/',
    status: 'COMPLETED',
    statusColor: 'text-green-500',
    statusIcon: <Check size={12} />
  },
  {
    id: 'ai-vision',
    title: 'AI-VISION ASSISTANT',
    subtitle: 'Captures screenshots of inaccessible UI elements, sends them to OpenAI Vision API, and generates keyboard-navigable alternatives. Built for Vision-Aid NGO.',
    tags: ['PYTHON', 'NVDA', 'WXPYTHON', 'PILLOW', 'OPENAI'],
    image: 'nvda-logo.png',
    link: 'https://hackathon.visionaid.org/',
    status: 'COMPLETED',
    statusColor: 'text-green-500',
    statusIcon: <Check size={12} />
  },
  {
    id: 'canteen-erp',
    title: 'CANTEEN ERP — SAIL',
    subtitle: 'Full ERP system for SAIL Salem Steel Plant managing inventory, food preparation queues, order processing, distribution, and sales with MySQL backend.',
    tags: ['PHP', 'JAVASCRIPT', 'MYSQL', 'HTML/CSS', 'REST API'],
    image: 'https://cdn.brandfetch.io/sail.co.in/w/400/h/400',
    link: '#',
    status: 'IN PROGRESS',
    statusColor: 'text-yellow-600',
    statusIcon: <span className="text-[10px]">⏱</span>
  },
  {
    id: 'ev-charging',
    title: 'EV CHARGING CALCULATOR',
    subtitle: 'Calculator and analyzer tool designed to monitor and optimize EV charging metrics, power consumption, and cost efficiency.',
    tags: ['SOFTWARE DEV', 'UI/UX', 'ANALYSIS', 'EV TECH'],
    image: 'ev-charging.png',
    link: 'https://dhanushraja015.github.io/Mini-Project/',
    status: 'COMPLETED',
    statusColor: 'text-green-500',
    statusIcon: <Check size={12} />
  }
];

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    year: '2026',
    title: 'AI-POWERED EYE TRACKING FOR HANDS-FREE COMPUTER CONTROL',
    excerpt: 'How MediaPipe face landmarks and gaze estimation enable cursor control, blink-based clicking, and voice commands for accessibility.',
    link: 'https://github.com/DhanushRaja015/Eye-Tracking'
  },
  {
    id: '2',
    year: '2026',
    title: 'BUILDING AN OPEN-SOURCE AI VISION ASSISTANT FOR VISUALLY IMPAIRED USERS',
    excerpt: 'How computer vision and OpenAI models can make inaccessible software interfaces navigable for VI users.',
    link: '#'
  },
  {
    id: '3',
    year: '2026',
    title: 'DESIGNING A CANTEEN ERP SYSTEM FOR SAIL STEEL PLANT',
    excerpt: 'Building a full-stack ERP solution handling inventory, food preparation, distribution and sales management.',
    link: '#'
  },
  {
    id: '4',
    year: '2026',
    title: 'DEVELOPING A DATA-DRIVEN EV CHARGING CALCULATOR AND ANALYZER',
    excerpt: 'A deep dive into analyzing power consumption, calculating cost efficiency, and optimizing EV charging workflows.',
    link: 'https://dhanushraja015.github.io/Mini-Project/'
  }
];

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'LANGUAGES',
    subtitle: 'PROGRAMMING // SCRIPTING',
    skills: [
      { name: 'Python', icon: 'Py' },
      { name: 'Java', icon: 'J' },
      { name: 'PHP', icon: 'Ph' },
      { name: 'JavaScript', icon: 'JS' }
    ]
  },
  {
    title: 'TOOLS',
    subtitle: 'PLATFORMS // DEV TOOLS',
    skills: [
      { name: 'VS Code', icon: 'VS' },
      { name: 'Git & GitHub', icon: 'G' },
      { name: 'XAMPP', icon: 'X' },
      { name: 'MySQL', icon: 'M' }
    ]
  },
  {
    title: 'AI & WEB',
    subtitle: 'CONCEPTS // INTERESTS',
    skills: [
      { name: 'Generative AI', icon: 'AI' },
      { name: 'OpenAI API', icon: 'O' },
      { name: 'MediaPipe', icon: 'MP' },
      { name: 'OpenCV', icon: 'CV' }
    ]
  }
];

const COMMITMENTS: Commitment[] = [
  {
    icon: <Terminal size={24} />,
    title: 'ACCESSIBILITY FIRST',
    subtitle: 'DESIGN STANDARD',
    desc: 'Building tools that empower visually impaired users through AI-driven navigation and interaction.',
    outcome: 'OPEN-SOURCE AI-VISION ASSISTANT ENABLING VI USERS TO INTERACT WITH ANY SOFTWARE INTERFACE.'
  },
  {
    icon: <Eye size={24} />,
    title: 'AI COMPUTER VISION',
    subtitle: 'INNOVATION STANDARD',
    desc: 'Leveraging MediaPipe face landmarks and gaze estimation for hands-free, accessible computer control.',
    outcome: 'EYE TRACKING MOUSE SYSTEM WITH BLINK CLICKS, HEAD TRACKING, AND VOICE COMMANDS.'
  },
  {
    icon: <Zap size={24} />,
    title: 'CLEAN CODE PRACTICES',
    subtitle: 'DEVELOPMENT STANDARD',
    desc: 'Writing efficient, maintainable, and logical code that solves real-world problems effectively.',
    outcome: 'PRODUCTION-READY ERP SYSTEMS AND AI TOOLS BUILT WITH SCALABILITY AND CLARITY IN MIND.'
  }
];

// ============================================
// COMPONENTS
// ============================================

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
    { name: 'BLOG', href: '#blog' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b-2 border-black' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-black tracking-tighter uppercase text-left">
          Dhanush Raja T<span className="text-gray-400">*</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-xs font-bold tracking-widest hover:text-gray-500 transition-colors uppercase"
            >
              {link.name}
            </button>
          ))}
          <div className="h-4 w-px bg-black mx-2" />
          <a href="https://www.linkedin.com/in/dhanush-raja-t-85a8602bb?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="https://github.com/dhanushraja015" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a 
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black px-6 py-2 text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-all uppercase inline-block"
          >
            RESUME /-/
          </a>
        </div>

        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b-2 border-black overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-bold tracking-widest text-left uppercase py-2"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-20">
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl relative"
          >
            <div className="hidden lg:flex flex-col items-center gap-2 absolute -left-12 top-1/2 -translate-y-1/2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400" style={{ writingMode: 'vertical-rl' }}>
                KEEP SCROLLING
              </span>
              <div className="w-px h-16 bg-gray-200 mt-2" />
            </div>

            <h1 className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-black leading-[0.85] tracking-tighter mb-8 text-black">
              <span className="italic pr-4">HI<span className="text-[0.6em]">,</span> I'M</span><br />DHANUSH
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-black text-white px-4 py-2 text-sm font-bold tracking-widest uppercase">
                AI & SOFTWARE DEVELOPER
              </span>
              <span className="text-gray-500 font-medium tracking-wide">
                B.E. EEE @ Excel Engineering College
              </span>
            </div>
            
            <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-6">
              BASED IN SALEM, TN
            </p>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
              Building AI-powered tools for accessibility and industrial ERP systems that create real-world impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })} className="bg-black text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-800 transition-colors">
                VIEW PROJECTS
              </button>
              <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black border-2 border-black px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">
                GET IN TOUCH
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto mt-12 lg:mt-0"
          >
            <div className="relative max-w-md mx-auto lg:mr-12">
              <div className="absolute top-6 left-6 right-[-1.5rem] bottom-[-1.5rem] border-2 border-black z-0 hidden md:block" />
              
              <div className="relative z-10 border-2 border-black bg-white">
                <img 
                  src="profile.jpeg" 
                  alt="Dhanush Raja T"
                  className="w-full h-auto grayscale hover:grayscale-0 contrast-125 transition-all duration-500 cursor-pointer"
                />
              </div>

              <div className="absolute -right-8 top-12 flex flex-col gap-4 z-20 hidden md:flex">
                <div className="bg-white border-2 border-black py-4 px-6 text-center shadow-sm">
                  <p className="text-2xl font-black">3+</p>
                  <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">PROJECTS</p>
                </div>

                <div className="bg-white border-2 border-black py-4 px-6 text-center shadow-sm">
                  <p className="text-2xl font-black">7.5</p>
                  <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase mt-1">CGPA</p>
                </div>
              </div>


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" ref={ref} className="bg-[#0a0a0a] text-white py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div style={{ y, opacity }} className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="border-l-4 border-white pl-6 mb-8">
                <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
                  ABOUT<br />
                  <span className="text-gray-400">ME</span>
                </h2>
              </div>

            </div>
          </motion.div>

          <div className="lg:col-span-8 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8">
                I BUILD SOFTWARE THAT<br />
                SOLVES REAL PROBLEMS.
              </h3>
              <div className="h-px bg-gray-800 w-full mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="max-w-3xl"
            >
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                Engineering student specializing in AI-enabled software development, with hands-on experience in building web applications and real-time systems. Skilled in problem-solving, clean code practices, and developing efficient, user-focused solutions. 
                <br /><br />
                Hands-on experience in developing AI-enabled software projects, ERP tool development and an open-source NVDA add-on project, and solving complex problems through efficient and logical coding practices. Highly motivated to intern with a forward-thinking organization to gain practical industry experience and contribute to impactful, AI-driven software solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-gray-800 p-6 flex items-center gap-4"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                CURRENT STATUS: STUDYING // KOMARAPALAYAM, TN
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] text-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none mb-4">
            <span className="text-gray-600">ACTIVE</span><br />
            <span className="text-gray-400">PROJECTS</span>
          </h2>
          <div className="h-1 bg-red-600 w-32" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white text-black overflow-hidden border-2 border-white flex flex-col"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
              </div>
              
              <div className="pt-4 px-4 flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl lg:text-2xl font-black tracking-tighter uppercase">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} className="text-gray-400 group-hover:text-black transition-colors flex-shrink-0 ml-2" />
                  </a>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.subtitle}
                </p>
              </div>
              
              <div className="bg-black text-white px-4 py-2 flex flex-wrap gap-x-4 gap-y-2 items-center">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-white text-black text-center py-2 border-t-2 border-black text-xs font-bold tracking-widest uppercase hover:bg-gray-100 cursor-pointer transition-colors block">
                LIVE DEMO <span className="text-[10px]">&gt;</span>
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#0a0a0a] text-gray-400 border border-gray-800 px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase group">
            <Github size={16} className="group-hover:text-white transition-colors" /> VIEW ALL ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  return (
    <section className="bg-white py-32 border-y-2 border-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-none">
            <span className="border-l-8 border-black pl-6">TECH</span>{' '}
            <span className="text-gray-300">STACK</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-2 border-black">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <div key={category.title} className={`${catIndex > 0 ? 'lg:border-l-2 border-t-2 lg:border-t-0 border-black' : ''}`}>
              <div className={`p-6 ${catIndex === 0 ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <p className="text-xs font-bold tracking-widest mb-1 opacity-60">{category.subtitle}</p>
                <h3 className="text-2xl lg:text-3xl font-black italic">{category.title}</h3>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="border border-gray-300 p-4 flex items-center justify-between group hover:border-black transition-colors">
                    <span className="font-bold text-base lg:text-lg">{skill.name}</span>
                    <span className="text-xl lg:text-2xl font-black text-gray-200 group-hover:text-black transition-colors">{skill.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CoreCommitments = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-32 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter mb-20"
        >
          CORE <span className="text-gray-400">COMMITMENTS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMMITMENTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-800 p-8 hover:border-gray-600 transition-colors group"
            >
              <div className="mb-6 text-gray-500 group-hover:text-white transition-colors">{item.icon}</div>
              <p className="text-xs font-bold tracking-widest text-gray-600 mb-2 uppercase">{item.subtitle}</p>
              <h3 className="text-xl lg:text-2xl font-black mb-4 tracking-tight">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{item.desc}</p>
              <div className="border-t border-gray-800 pt-4">
                <p className="text-xs font-bold tracking-widest text-gray-600 mb-2 uppercase">DELIVERED OUTCOME</p>
                <p className="text-base lg:text-lg font-bold leading-tight">{item.outcome}</p>
              </div>
              <div className="mt-6 text-xs text-gray-700 font-mono">REF_CODE // 0{index + 1}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-600 max-w-2xl mx-auto mb-8">
            THESE VALUES GUIDE EVERY PROJECT I BUILD — FROM OPEN-SOURCE ACCESSIBILITY TOOLS TO FULL-STACK ERP SYSTEMS FOR INDUSTRY.
          </p>
          <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-4 text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter hover:text-gray-400 transition-colors group">
            CONNECT <ArrowRight size={48} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="bg-[#0a0a0a] text-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter"
          >
            TECHNICAL <span className="text-gray-400 italic">LOGS</span>
          </motion.h2>
          <span className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
            LIVE MEDIUM SYNC // REGISTRY. V.02
          </span>
        </div>

        <div className="h-px bg-gray-800 w-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-800 p-8 hover:border-gray-600 transition-colors group cursor-pointer block"
              onClick={() => window.open(post.link, '_blank')}
            >
              <div className="text-xs font-bold tracking-widest text-gray-600 mb-4 uppercase">
                {post.year === '2026' ? post.year : 'ANALYSIS'}
              </div>
              <h3 className="text-lg lg:text-xl font-bold mb-4 leading-tight group-hover:text-gray-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase">
                <span className="group-hover:text-white text-gray-600 transition-colors">ACCESS_MEDIUM</span>
                <div className="w-8 h-px bg-gray-700 group-hover:bg-white transition-colors" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {


  return (
    <section id="contact" className="bg-white py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="none">
          <filter id="noise2">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise2)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block bg-black text-white px-4 py-2 text-xs font-bold tracking-widest uppercase mb-8">
              FINAL CHAPTER: CONTACT
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
              DHANUSH
            </h2>
            <div className="w-full h-2 bg-black mb-8" />

            <div className="space-y-2">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">INQUIRIES</p>
              <p className="text-xl font-medium">dhanushrajathamarai.015@gmail.com</p>
              <p className="text-gray-500 text-lg">+91-9345512720</p>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">KOMARAPALAYAM // TAMIL NADU, INDIA</span>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-xs font-bold tracking-widest text-gray-400 mb-2 uppercase">⚡ STATUS: EEE STUDENT @ EXCEL ENGINEERING COLLEGE</p>
              <p className="text-xl font-bold text-gray-600 uppercase">OPEN TO INTERNSHIPS & AI COLLABORATIONS.</p>
            </div>

            <div className="flex gap-4 mb-8">
              <a href="https://github.com/dhanushraja015" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/dhanush-raja-t-85a8602bb?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>

            <div className="w-full h-px bg-black mb-8" />

            <form action="https://formsubmit.co/dhanushrajathamarai.015@gmail.com" method="POST" className="space-y-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="name" placeholder="Your Name" className="w-full border border-gray-200 p-4 outline-none focus:border-black transition-colors" required />
                <input type="email" name="email" placeholder="Your Email" className="w-full border border-gray-200 p-4 outline-none focus:border-black transition-colors" required />
              </div>
              <input type="hidden" name="_subject" value="New message from portfolio!" />
              <input type="text" name="subject" placeholder="Subject" className="w-full border border-gray-200 p-4 outline-none focus:border-black transition-colors" required />
              <textarea name="message" placeholder="Your message..." rows={4} className="w-full border border-gray-200 p-4 outline-none focus:border-black transition-colors resize-none" required></textarea>
              <button type="submit" className="w-full bg-black text-white py-4 px-8 flex items-center justify-center gap-4 hover:bg-gray-800 transition-colors group">
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <span className="text-sm font-bold tracking-widest uppercase">SEND MESSAGE</span>
              </button>
            </form>

            <a 
              href="resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-black border-2 border-black py-4 px-8 flex items-center justify-center gap-4 hover:bg-gray-100 transition-colors group"
            >
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              <span className="text-sm font-bold tracking-widest uppercase">
                GET RESUME
              </span>
            </a>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest text-gray-500 uppercase">
          <span>SALEM // INDIA</span>
          <span>© 2026 DHANUSH_SYSTEMS</span>
          <span>VOL. 01 PAGE 404</span>
        </div>
      </div>
    </section>
  );
};

// ============================================
// MAIN APP
// ============================================
const App = () => {
  return (
    <div className="bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <CoreCommitments />
      <Blog />
      <Contact />
    </div>
  );
};

export default App;
