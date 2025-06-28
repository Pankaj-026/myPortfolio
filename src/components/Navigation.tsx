import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { cn } from "../lib/utils.ts";

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  interface NavItem {
    id: string;
    label: string;
  }

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];


  // const NavItems = ({
  //   items,
  //   className,
  //   mobile = false,
  // }: {
  //   items: NavItem[];
  //   className?: string;
  //   onItemClick?: () => void;
  //   mobile?: boolean;
  // }) => {
  //   const [hovered, setHovered] = useState<number | null>(null);

  //   return (
  //     <motion.div
  //       onMouseLeave={() => setHovered(null)}
  //       className={cn(
  //         "flex flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800",
  //         mobile ? "flex" : "hidden md:flex",
  //         className,
  //       )}
  //     >
  //       {items.map((item: NavItem, index: number) => (
  //         <motion.button
  //           key={item.id}
  //           onClick={() => scrollToSection(item.id)}
  //           onMouseEnter={() => setHovered(index)}
  //           onMouseLeave={() => setHovered(null)}
  //           className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 z-10 ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
  //             }`}
  //           whileTap={{ scale: 0.95 }}
  //         >
  //           {hovered === index && (
  //             <motion.div
  //               layoutId="hovered"
  //               className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
  //             />
  //           )}
  //           <span className="relative z-20">{item.label}</span>
  //         </motion.button>
  //       ))}
  //     </motion.div>
  //   );
  // };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  const [hovered, setHovered] = useState<number | null>(null);


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-black/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-800/50'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <motion.div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 font-bold bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
              {/* <Code2 size={20} className="text-white" />  */}
              SP
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Pankaj
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
              "flex-1 flex-row items-center justify-center text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 hidden md:flex"
            )}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`relative px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300 z-10 ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-20">{item.label}</span>

                {hovered === index && (
                  <motion.div
                    layoutId="hovered"
                    className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30"
                  />
                )}

                {/* {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}  */}
              </motion.button>
            ))}
          </motion.div>


          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden px-4 border-gray-800/50 bg-black dark:bg-gray-900"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.01 }}
                  whileHover={{ x: 4 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav >
  );
};

export default Navigation;