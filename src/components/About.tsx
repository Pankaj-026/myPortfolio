import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart, GraduationCap, Award } from 'lucide-react';
import {  education } from '../data/portfolio';
import GlowingCard from './ui/GlowingCard';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code that stands the test of time'
    },
    {
      icon: Palette,
      title: 'UI/UX Focus',
      description: 'Creating beautiful interfaces with exceptional user experience and attention to detail'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and seamless user interactions'
    },
    {
      icon: Heart,
      title: 'Passion Driven',
      description: 'Genuinely passionate about web development, innovation, and continuous learning'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Fueled by curiosity and creativity, I bring interfaces to life that aren't just functional, but delightful
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am Pankaj Gupta, an aspiring Software Engineer passionate about creating intuitive and efficient digital solutions. I specialize in React, JavaScript, and modern web technologies. I thrive on solving complex problems and turning ideas into reality through code.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey into software development started with a deep curiosity for how things work on the web. Over time, I honed my skills in frontend development with React.js, while expanding my backend expertise in Node.js, Express, and MongoDB.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Beyond coding, I've led college initiatives like DLLE and PR management for inter-college fests, developing essential skills in communication, teamwork, and project management. When I'm not coding, you can find me reading tech blogs, playing chess or basketball, and exploring new technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'JavaScript', 'Redux','Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js','Strapi' ].map((tech) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <GlowingCard key={highlight.title} className="p-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className='px-4 py-4'
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl">
                      <highlight.icon size={24} className="text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              </GlowingCard>
            ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="text-purple-400" />
              Education
            </h3>
            <p className="text-gray-600 dark:text-gray-400">My academic journey and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <GlowingCard key={edu.id} className="p-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-start gap-4 mb-4 p-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl">
                      <Award size={24} className="text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">{edu.institution}</h4>
                      <p className="text-purple-400 font-medium mb-1">{edu.degree}</p>
                      <p className="text-gray-400 text-sm mb-2">{edu.duration}</p>
                      <div className="flex items-center gap-4 mb-3">
                        {edu.cgpa && (
                          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium">
                            CGPA: {edu.cgpa}
                          </span>
                        )}
                        {edu.percentage && (
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">
                            {edu.percentage}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              </GlowingCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;