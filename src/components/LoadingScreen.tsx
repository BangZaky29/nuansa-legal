import React from 'react';
import { motion } from 'framer-motion';
import logoNuansa from '../assets/images/96x96/9746242/LOGONUANSALEGAL.png';

const LoadingScreen: React.FC = () => {
  // Loading state is handled in App.tsx to control 5s delay

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-secondary overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-12"
        >
          {/* Outer Glowing Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 border border-primary/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-12 border border-dashed border-primary/10 rounded-full"
          />

          {/* Main Logo Card */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              boxShadow: [
                "0 0 0px rgba(255,215,0,0)",
                "0 20px 50px rgba(255,215,0,0.2)",
                "0 0 0px rgba(255,215,0,0)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-32 h-32 bg-white rounded-[2.5rem] flex items-center justify-center shadow-2xl relative overflow-hidden p-6 group border-2 border-primary/20"
          >
            {/* Inner Shine Effect */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            />

            <img
              src={logoNuansa}
              alt="PT. Nuansa Berkah Sejahtera"
              className="w-full h-full object-contain relative z-10"
            />
          </motion.div>
        </motion.div>

        {/* Text Brand Section */}
        <div className="text-center">
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-white text-3xl md:text-5xl font-sen font-black tracking-[0.25em]"
            >
              PT. NUANSA <span className="text-primary">BERKAH SEJAHTERA</span>
            </motion.h1>
          </div>
          {/* <div className="overflow-hidden">
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-primary font-bold text-sm md:text-lg tracking-[0.6em] uppercase"
            >
              SEJAHTERA
            </motion.p>
          </div> */}
        </div>

        {/* Premium Progress Bar (Synced with 5s delay) */}
        <div className="mt-16 w-64 h-[3px] bg-white/5 rounded-full overflow-hidden relative border border-white/5">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 4.5, // slightly less than 5s to finish before fade out
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/50 via-primary to-primary/50 shadow-[0_0_15px_rgba(255,215,0,0.5)]"
          />
        </div>

        {/* Loading Meta info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] tracking-[0.4em] uppercase font-bold">
            Authorized Legal Consultant
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-1 h-1 bg-primary rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
