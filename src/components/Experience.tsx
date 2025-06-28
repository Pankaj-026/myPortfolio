import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, MapPin, Building,
  // ChevronDown,
  Download
} from 'lucide-react';
import { experiences } from '../data/portfolio';
import GlowingCard from './ui/GlowingCard'; 

const Experience: React.FC = () => {
  const [expandedExperience] = useState<number | null>(0);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'PankajsCV.pdf'; // Place PankajsCV.pdf in the public folder
    link.download = 'PankajsCV.pdf';
    link.click();
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my career in tech
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-black dark:border-gray-900 hidden md:block z-10"
                  whileHover={{ scale: 1.5 }}
                />

                {/* Experience Card */}
                <div className="md:ml-20">
                  <GlowingCard className="overflow-hidden">
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {experience.title}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400 mb-4">
                            <div className="flex items-center gap-2">
                              <Building size={16} className="text-purple-400" />
                              <span className="font-medium text-purple-300">{experience.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} className="text-blue-400" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>

                        <div className="lg:text-right">
                          <div className="flex items-center gap-2 text-purple-400 mb-2">
                            <Calendar size={16} />
                            <span className="font-medium">{experience.duration}</span>
                          </div>
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                            {experience.type}
                          </span>
                        </div>
                      </div>

                      {/* Expand/Collapse Button */}
                      {/*
                      <motion.button
                        onClick={() => setExpandedExperience(
                          expandedExperience === experience.id ? null : experience.id
                        )}
                        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
                        whileHover={{ scale: 1.02 }}
                      >
                         <span className="text-sm font-medium">
                          {expandedExperience !== experience.id ? 'Show Less' : 'Show Details'}
                        </span>
                        <motion.div
                          animate={{ rotate: expandedExperience === experience.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div> 
                      </motion.button>
                        */}

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {expandedExperience !== experience.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {/* Responsibilities */}
                            <div className="mb-6">
                              <h4 className="text-lg font-semibold mb-4 text-gray-200 flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                Key Responsibilities:
                              </h4>
                              <ul className="space-y-3">
                                {experience.responsibilities.map((responsibility, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="flex items-start gap-3 text-gray-300"
                                  >
                                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0" />
                                    <span className="leading-relaxed text-sm">{responsibility}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="text-lg font-semibold mb-3 text-gray-200 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Technologies Used:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {experience.technologies.map((tech, techIndex) => (
                                  <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                                    className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600/50 rounded-lg text-sm font-medium hover:border-purple-500/50 transition-colors"
                                  >
                                    {tech}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </GlowingCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4">Want to know more about my experience?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Download my complete resume for detailed information about my professional journey, skills, and achievements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleResumeDownload}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-2xl font-semibold hover:bg-purple-500/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;