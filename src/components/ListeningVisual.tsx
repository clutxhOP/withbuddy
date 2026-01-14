import { motion } from "framer-motion";

const ListeningVisual = () => {
  return (
    <div className="relative w-full max-w-sm md:max-w-md aspect-square flex items-center justify-center">
      {/* Background noise - faint scattered dots */}
      <div className="absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-1 rounded-full bg-muted-foreground/30"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
          />
        ))}
      </div>

      {/* Outer ripple rings - listening */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 0.15, 0], scale: [0.8, 1.4, 1.6] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-primary/20"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 0.2, 0], scale: [0.8, 1.2, 1.4] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 0.8,
          ease: "easeOut",
        }}
        className="absolute w-36 h-36 md:w-48 md:h-48 rounded-full border border-primary/25"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 0.25, 0], scale: [0.8, 1.1, 1.2] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1.6,
          ease: "easeOut",
        }}
        className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full border border-primary/30"
      />

      {/* Central glow - the signal */}
      <div className="relative">
        {/* Soft glow backdrop */}
        <motion.div
          animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.05, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-primary/20 blur-xl"
        />
        
        {/* Inner glow */}
        <motion.div
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-10 h-10 md:w-12 md:h-12 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-primary/30 blur-md"
        />
        
        {/* Core signal dot */}
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary shadow-glow"
        />
      </div>

      {/* Fading noise fragments - representing muted conversations */}
      <motion.div
        animate={{ opacity: [0.08, 0.15, 0.08] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-[15%] left-[20%] w-12 h-[2px] bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
        className="absolute top-[25%] right-[18%] w-8 h-[2px] bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 5.5, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-[22%] left-[25%] w-10 h-[2px] bg-gradient-to-r from-transparent via-muted-foreground/25 to-transparent rounded-full"
      />
      <motion.div
        animate={{ opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-[30%] right-[22%] w-6 h-[2px] bg-gradient-to-r from-transparent via-muted-foreground/35 to-transparent rounded-full"
      />

      {/* One highlighted signal fragment - clarity emerging */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
        className="absolute top-[45%] right-[12%] w-16 h-[3px] bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full"
      />
    </div>
  );
};

export default ListeningVisual;
