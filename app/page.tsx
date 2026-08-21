"use client";

import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaPlay, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaDownload,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaBriefcase
} from "react-icons/fa";
import { useState, useEffect } from "react";

function SectionHeader({ subtitle, title, highlight }: { subtitle: string; title: string; highlight: string }) {
  return (
    <div className="text-center mb-14 flex flex-col items-center">
      <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        {title} <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">{highlight}</span>
      </h2>
      <div className="w-14 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-3"></div>
    </div>
  );
}

function BuiltInTypewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1200);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse ml-0.5 text-cyan-400">|</span>
    </span>
  );
}

const scenarios = [
  {
    title: "Incident Auto-Assignment Workflow",
    description: "Automatically updates the Incident Short Description with the latest Work Notes.",
    link: "https://www.linkedin.com/",
    color: "purple",
  },
  {
    title: "SC Task Closure Validation & Visibility Enhancement",
    description: "Made Close Notes mandatory during task closure and visible to users.",
    link: "https://www.linkedin.com/",
    color: "cyan",
  },
  {
    title: "When incident is created, caller is automatically get notified via email",
    description: "Automatically sends an email notification to the caller when an incident is created.",
    link: "https://www.linkedin.com/",
    color: "blue",
  },
  {
    title: "VIP Incident Automation",
    description: "Automatically identifies VIP users and sets incident priority to P1.",
    link: "https://www.linkedin.com/",
    color: "red",
  },
  {
    title: "Duplicate Record Prevention",
    description: "Prevents duplicate record creation by validating existing records.",
    link: "https://www.linkedin.com/posts/kesava-krishna-amirineni-2b6b66255_servicenow-servicenowdeveloper-gliderecord-ugcPost-7496615591005356032--53d/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7_ZCoBL6xjVRNmv4MwgcVU0CsVN-1U--I/",
    color: "yellow",
  },
];

export default function Page() {
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents page refresh/scroll jump
    setIsSubmitting(true);
    setStatus("Sending message...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "3750c19d-c4ef-4886-ad4a-f8435f468e03");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-[#030712] text-white min-h-screen w-full scroll-smooth overflow-hidden">
      {/* MOVING STARFIELD BACKGROUND */}
      <AnimatedBackground />

      <main className="relative z-10 max-w-6xl mx-auto px-6">

        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center max-w-3xl"
          >
            {/* Pill Tag */}
            <div className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm shadow-purple-500/20">
              ServiceNow Developer
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">Krishna</span> 👋
            </h1>

            {/* Typing Text Effect */}
            <div className="text-xl md:text-2xl text-purple-300/90 font-medium mb-6 flex items-center justify-center gap-2 h-10">
              <span>I build</span>
              <span className="text-cyan-400 font-semibold">
                <BuiltInTypewriter
                  words={[
                    'Custom Applications',
                    'Integration Solutions',
                    'ServiceNow Workflows',
                    'ITSM Automations',
                    'Business Process Tools'
                  ]}
                />
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              Passionate ServiceNow developer crafting scalable workflows, smart automations, and real-world solutions with expertise in ITSM, CMDB, GRC, Service Catalog, Flow Designer, Rest & Scripted API and process Automation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
              <a 
                href="#about" 
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:opacity-90 shadow-lg shadow-cyan-500/25 transition"
              >
                Explore My Work
              </a>
              <a 
                href="/resume.pdf" 
                download="Krishna_Kesav_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/40 bg-purple-950/20 text-white font-medium hover:bg-purple-900/30 transition"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-gray-400 text-xl">
              <a href="https://github.com/krishnakesav007" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kesava-krishna-amirineni-2b6b66255/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
                <FaLinkedin />
              </a>
              <a href="mailto:krishnakesav.amirineni@gmail.com" className="hover:text-cyan-400 transition">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 border-t border-gray-800/60 scroll-mt-20">
          <SectionHeader subtitle="WHO I AM" title="About" highlight="Me" />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Photo Column */}
            <div className="md:col-span-4 flex justify-center">
              <div className="relative group w-64 h-64 md:w-72 md:h-72">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <img 
                  src="/profile.png" 
                  alt="Krishna Kesav Amirineni" 
                  className="relative w-full h-full object-cover rounded-2xl border border-gray-800 bg-[#0b0f19]"
                />
              </div>
            </div>

            {/* About Text Column */}
            <div className="md:col-span-8">
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                I am a passionate ServiceNow Developer with hands-on experience through building real-world applications 
                like Employee Onboarding Task Tracker, Leave Management System, and Student Emergency Notify System. 
                I focus on automation, workflows, and scalable platform solutions.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                I worked on part-time freelance ServiceNow Projects where I customized ITSM applications based on client requirements. My responsibilities included creating Business Rules, Client Scripts, UI Policies, Service Catalog items, Record Producers, and Flow Designer workflows.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20 border-t border-gray-800/60 scroll-mt-20">
          <SectionHeader subtitle="WHAT I KNOW" title="My" highlight="Skills" />

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-800 bg-[#0b0f19]/80 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-purple-300">ServiceNow Platform</h3>
              <Skill name="ITSM" percent={90} />
              <Skill name="CSA" percent={90} />
              <Skill name="CSD" percent={90} />
              <Skill name="CMDB" percent={85} />
              <Skill name="CSDM" percent={80} />
            </div>

            <div className="p-6 rounded-2xl border border-gray-800 bg-[#0b0f19]/80 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-cyan-300">Development</h3>
              <Skill name="JavaScript" percent={85} />
              <Skill name="Business Rules" percent={90} />
              <Skill name="Client Scripts" percent={88} />
              <Skill name="Script Include" percent={80} />
              <Skill name="REST APIs" percent={80} />
            </div>

            <div className="p-6 rounded-2xl border border-gray-800 bg-[#0b0f19]/80 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4 text-blue-300">Tools</h3>
              <Skill name="ServiceNow" percent={95} />
              <Skill name="VS Code" percent={90} />
              <Skill name="GitHub" percent={85} />
              <Skill name="Postman" percent={80} />
              <Skill name="AWS" percent={70} />
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 border-t border-gray-800/60 scroll-mt-20">
          <SectionHeader subtitle="MY WORK" title="My" highlight="Projects" />

          <div className="grid md:grid-cols-3 gap-6">
            <ProjectCard
              title="Leave Management System"
              description="Automated leave approval system using Flow Designer and Business Rules."
              image="/project1.png"
              github="https://github.com/krishnakesav007/leave-management-system"
              linkedin="https://www.linkedin.com/posts/kesava-krishna-amirineni-2b6b66255_servicenow-servicenowdeveloper-appenginestudio-ugcPost-7477628060536655872-DBgS/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7_ZCoBL6xjVRNmv4MwgcVU0CsVN-1U--I/"
              tech={["ServiceNow", "Flow Designer", "Automation"]}
            />
            <ProjectCard
              title="Student Emergency Notify"
              description="SOS alert system with notifications to admin and parents."
              image="/project2.png"
              github="https://github.com/krishnakesav007"
              linkedin="https://www.linkedin.com/posts/kesava-krishna-amirineni-2b6b66255_servicenow-flowdesigner-servicenowdeveloper-ugcPost-7473246223349522432-XWOK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7_ZCoBL6xjVRNmv4MwgcVU0CsVN-1U--I/"
              tech={["ServiceNow", "Notifications", "Client Scripts"]}
            />
            <ProjectCard
              title="Food Supply Chain App"
              description="End-to-end supply tracking system built in App Engine Studio."
              image="/project3.png"
              github="https://github.com/krishnakesav007"
              linkedin="https://www.linkedin.com/"
              tech={["App Engine", "CMDB", "Tracking"]}
            />
          </div>
        </section>

        {/* SCENARIOS */}
        <section id="scenarios" className="py-20 border-t border-gray-800/60 scroll-mt-20">
          <ScenariosSection />
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20 border-t border-gray-800/60 scroll-mt-20">
          <SectionHeader subtitle="CAREER JOURNEY" title="Work" highlight="Experience" />

          <div className="bg-[#0b0f19]/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">ServiceNow Freelance Developer</h3>
                <p className="text-purple-400 mt-1">Ariscent Software Solutions</p>
                <p className="text-gray-400 text-sm mt-1">Sep 2024 – Jan 2026 · India</p>
              </div>
              <span className="text-xs px-4 py-1 border border-purple-500 rounded-full text-purple-400 bg-purple-950/30">
                Part Time
              </span>
            </div>

            <p className="text-gray-300 mt-6 leading-relaxed">
              • Customized ITSM modules, developed Business Rules, Client Scripts, and UI Policies.<br />
              • Built Service Catalog items, Record Producers, and Flow Designer workflows.<br />
              • Configured CMDB relationships and developed custom Service Portals.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 border-t border-gray-800/60 scroll-mt-20">
          <SectionHeader subtitle="GET IN TOUCH" title="Contact" highlight="Me" />

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="space-y-4">
              <a href="mailto:krishnakesav.amirineni@gmail.com" className="flex items-center gap-4 p-4 border border-gray-800 rounded-xl hover:bg-gray-900/50 transition">
                <FaEnvelope className="text-purple-400 text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-sm font-medium">krishnakesav.amirineni@gmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/kesava-krishna-amirineni-2b6b66255/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 border border-gray-800 rounded-xl hover:bg-gray-900/50 transition">
                <FaLinkedin className="text-blue-400 text-xl" />
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="text-sm font-medium">linkedin.com/in/kesava-krishna-amirineni</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 border border-gray-800 rounded-xl">
                <FaMapMarkerAlt className="text-yellow-400 text-xl" />
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-sm font-medium">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 border border-gray-800 rounded-2xl bg-[#0b0f19]/80 backdrop-blur-sm space-y-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required 
                className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-700 outline-none focus:border-purple-500 text-sm text-white" 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required 
                className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-700 outline-none focus:border-purple-500 text-sm text-white" 
              />
              <textarea 
                name="message" 
                placeholder="Message" 
                rows={4} 
                required 
                className="w-full p-3 rounded-lg bg-gray-900/80 border border-gray-700 outline-none focus:border-purple-500 text-sm text-white"
              ></textarea>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 font-medium hover:opacity-90 transition disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <p className={`text-xs text-center mt-2 ${status.includes("successfully") ? "text-cyan-400" : "text-purple-400"}`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}

// MOVING STAR BACKGROUND
function AnimatedBackground() {
  const [particles, setParticles] = useState<Array<{
    size: number;
    initialX: number;
    initialY: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 35 }).map(() => ({
      size: Math.random() * 3 + 1,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(generatedParticles);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-300 opacity-60"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.initialX}%`,
            top: `${particle.initialY}%`,
            boxShadow: "0 0 8px rgba(56, 189, 248, 0.8)",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// HELPER COMPONENTS
function Skill({ name, percent }: { name: string; percent: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span>{name}</span>
        <span className="text-gray-400">{percent}%</span>
      </div>
      <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-400 to-purple-500 h-full rounded-full" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function ProjectCard({ title, description, image, github, linkedin, tech }: any) {
  return (
    <div className="bg-[#0b0f19]/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div className="flex justify-end gap-3 text-gray-400 mb-2">
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub /></a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t: string) => (
            <span key={t} className="text-xs px-2.5 py-0.5 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScenariosSection() {
  return (
    <div className="p-8 bg-[#0b0f19]/80 backdrop-blur-sm text-white rounded-2xl border border-gray-800">
      <SectionHeader subtitle="REAL-WORLD IMPLEMENTATIONS" title="Technical" highlight="Scenarios" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {scenarios.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-gray-800 p-6 bg-gray-900/50 hover:border-purple-500/50 transition"
          >
            <div className="mb-4 flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500/30 text-purple-400">
                <FaPlay />
              </div>
            </div>
            <h3 className="text-base font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-xs mb-4">{item.description}</p>
            <span className="text-purple-400 text-xs flex items-center gap-1">
              Watch on LinkedIn <FaExternalLinkAlt className="text-[10px]" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}