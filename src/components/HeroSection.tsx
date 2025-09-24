import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold mb-2"
              variants={childVariants}
            >
              {"Hello, I'm Yoann-Christopher"}
              <span className="inline-block animate-pulse">✨</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-6"
              variants={childVariants}
            >
              Computer Science student aspiring to become a software engineer. <br />
            Content creator online sharing my knowledge and experiences about coding.
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-muted-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                📍 Based in France
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Mail className="h-4 w-4 mr-2" />
                ✉️ yoanngueu@gmail.com
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Github className="h-4 w-4 mr-2" />
                🌟 GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                🔗 LinkedIn
              </motion.a>

              <a
                href="/C.V Alternance 2025.pdf"
                download="Yoann GUEU CV.pdf"
               className="inline-flex items-center gap-2 bg-purple-500 hover:bg-fuchsia-600 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors duration-200 font-bold mb-3">
                Download my CV here
             </a>
            </motion.div>
           </div>

          <motion.div
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={personalInfo.profilePicture}
                alt="Profile"
                className="w-48 md:w-60 rounded-full relative ring-2 ring-purple-500/50"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>

    <MotionWrapper>
  <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-6 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
    
    <motion.a
      href="https://linktr.ee/domicodes" 
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex-shrink-0"
    >
      <img
        src="/dom.jpg"
        alt="About me"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover ring-2 ring-purple-500/50 shadow-lg cursor-pointer"
      />
    </motion.a>

    <div className="flex-1 relative">
      <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
      <p className="text-muted-foreground pl-4 leading-relaxed">
        Despite the fact that I am studying computer science, telling you that I master all the workings would be a lie.<br />
        My growing passion for code continues to expand as well as my desire to progress. This is how the idea of creating content around code in a fun and enriching way comes to mind thanks to my account <strong><em>"domicodes"</em></strong> available on all social networks.<br/> 
        I learn and share what I learn so that borning developers and other programmers can gain experience through short videos and the creation of various projects more or less complete over time
      </p>
    </div>
  </div>
</MotionWrapper>

      </div>
    </section>
  );
}