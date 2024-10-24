import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Passionate About Solving Complex Challenges, 
          <br /> from Real-World Problems to CTF Puzzles.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <button>whoami</button>
          <h1>
            <motion.b whileHover={{ color: "orange" }}>IT Engineer </motion.b> Specialized in 
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Cybersecurity.</motion.b> 
          </h1>
          <img src="/people2.webp" alt="Image of a person" />
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h1>Engineering School CyTech (ex: EISTI)</h1>
          <h2>2020-2023</h2>
          <p>
            At Cytech, I built a solid foundation in computer engineering,
            focusing on programming, network security, and system design.
            My hands-on projects and collaborative experiences enhanced 
            my problem-solving skills and prepared me to tackle complex challenges.
            In my final year, I specialized in cybersecurity, deepening my expertise 
            in risk management and ethical hacking. This experience fueled my passion 
            for innovation and commitment to continuous learning in the tech field.
          </p>
          <button onClick={() => window.open('https://www.cyu.fr/formation/trouver-sa-formation/catalogue-des-formations/ingenieur-informatique-option-cyber-securite', '_blank')}>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h1>Preparatory Classes CyTech (ex: EISTI)</h1>
          <h2>2017-2020</h2>
          <p>
            In my preparatory classes, I developed a strong foundation in mathematics, 
            physics, and computer science. This rigorous training sharpened my analytical 
            and problem-solving skills, preparing me for the challenges of engineering studies. 
            The collaborative environment fostered teamwork and communication, essential for 
            my growth as a future engineer. Overall, this experience instilled a passion 
            for learning and a drive for excellence.
          </p>
          <button onClick={() => window.open('https://cytech.cyu.fr/formations-cy-tech/cycle-pre-ingenieur-prepa', '_blank')}>Go</button>
        </motion.div>
        <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
          <h1>Lycée Félix Faure (French High School)</h1>
          <h2>2014-2017</h2>
          <p>
            I earned my high school diploma with a focus on mathematics,
            where I developed strong analytical and critical thinking skills. 
            This foundation in math not only prepared me for advanced studies 
            in engineering but also instilled a passion for problem-solving 
            and logical reasoning that I continue to apply in my academic and 
            professional pursuits.
          </p>
          <button onClick={() => window.open('https://www.linkedin.com/company/lyc%C3%A9e-f%C3%A9lix-faure-beauvais/', '_blank')}>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
