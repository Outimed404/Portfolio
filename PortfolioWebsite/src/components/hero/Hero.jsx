import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-1320%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>HADRIEN ABITBOL</motion.h2>
          <motion.h1 variants={textVariants}>
            Seeking a job opportunity in cybersecurity
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
      
              <a href="https://github.com/Outimed404" target="_blank" rel="noopener noreferrer">See the Latest Challenges solved </a>

            </motion.button>
            <motion.button variants={textVariants}>
              <a href="#Contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Me</a>
            </motion.button>
          </motion.div>

          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Nmap, Metasploit, Burps Suite, Wireshark, ELK Stack, Splunk
      </motion.div>
      <div className="imageContainer">
        <img src="/Hero3.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
