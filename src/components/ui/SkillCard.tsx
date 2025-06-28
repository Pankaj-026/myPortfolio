import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  skill: {
    name: string;
    level: number;
  };
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  // const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-24 cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: 0.1 }}
      // onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        // animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div

          className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl border border-purple-500/30 flex flex-col items-center justify-center p-4"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-sm font-medium text-center">{skill.name}</span>
        </div>

        {/* Back */}
        {/* <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700/50 flex items-center justify-center p-4 backface-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {skill.level}%
          </div>
          <div className="w-full bg-gray-700 rounded-full h-1">
            <motion.div
              className="h-1 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: isFlipped ? `${skill.level}%` : 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
        </div> */}
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;