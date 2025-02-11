import React, { useEffect, useState, useRef } from "react";
import { FaBuilding, FaCode, FaHandshake } from "react-icons/fa6";
import { achievementsInfo } from "../data/achievementsInfo";
import { IoRocket } from "react-icons/io5";
import { motion, useInView } from "framer-motion";

const iconMap = {
  FaCode: FaCode,
  IoRocket: IoRocket,
  FaBuilding: FaBuilding,
  FaHandshake: FaHandshake,
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedNumber = ({ number, className }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    if (!number) return; // Prevent NaN errors
    setCurrentNumber(0); // Reset number on re-render
    const increment = number / 50; // 50 steps for animation

    const interval = setInterval(() => {
      setCurrentNumber((prev) => {
        const nextNumber = prev + increment;
        if (nextNumber >= number) {
          clearInterval(interval);
          return number;
        }
        return nextNumber;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [number]); // Re-run when number changes

  return <span className={className}>{Math.round(currentNumber)}+</span>;
};

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.3 });
  // triggerOnce: false → Allows re-triggering
  // threshold: 0.3 → Triggers when 30% of the element is visible

  return (
    <section className="gradientBg px-5 pb-20 py-10 max-w-screen-2xl">
      <h2 className="flex items-center justify-center text-tertiary font-semibold text-2xl pb-20">
        Achievements
      </h2>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="flex flex-col md:flex-row justify-center items-center md:gap-12 gap-8 text-center"
      >
        {achievementsInfo.map((item) => {
          const IconComponent = iconMap[item.icon];
          return (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="bg-pink shadow-lg shadow-blue/50 bg-opacity-90 w-full md:w-1/5 rounded-[35px] px-5 py-8 space-y-4 shadow-3xl items-center flex flex-col justify-center hover:-translate-y-4 transition-all duration-300 cursor-pointer"
            >
              <div className="flex-1 items-center justify-center bg-blue/10 rounded-full p-4">
                <IconComponent className="w-6 h-6" />
              </div>
              {isInView && (
                <AnimatedNumber
                  number={Number(item.metric) || 0}
                  className="text-primary font-medium text-4xl"
                />
              )}
              <p className="text-secondary text-base">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Achievements;
