import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Consultant Junior",
    title2: "Technology And Strategy | Stuttgart, Germany",
    title3: "Duration: 01/07/2023 - 01/07/2024",
    img: "T&S.webp",
    desc:"During my VIE (International Business Volunteering) contract, I engaged in two significant projects that advanced my expertise in automotive cybersecurity:<br><br>" +
    "First 6 Months: Penetration Testing for ECU<br>" +
    "- Conducted penetration testing and vulnerability assessments on electronic control units (ECUs) to identify security weaknesses.<br>" +
    "- Developed security recommendations based on testing results to improve the resilience of ECUs.<br><br>" +
    "Next 6 Months: Cloud-Based Key Management System (KMS)<br>" +
    "- Researched the feasibility of developing a cloud-based Key Management System to secure sensitive automotive data.<br>" +
    "- Evaluated cloud service providers to recommend optimal KMS solutions, balancing security, performance, and cost.<br><br>" +
    "Key Achievements:<br>" +
    "- Improved the security of automotive ECUs.<br>" +
    "- Delivered actionable insights for a strategic KMS implementation.",
    
  },
    
  {
    id: 2,
    title: "Internship: Developer Access",
    title2: "Orano | CEA de Marcoule, France",
    title3: "Duration: 20/06/2022 - 31/08/2022",
    img: "Orano.jpg",
    desc: "During my internship at Orano, I focused on a key project involving software migration and database development:<br><br>" +
    "Migration of 4D Application to Access<br>" +
    "- Led the migration of an existing 4D application to Microsoft Access, ensuring data integrity and functionality throughout the process.<br>" +
    "- Designed and implemented a new Access database structure to optimize performance and user experience.<br>" +
    "Qualification Testing<br>" +
    "- Developed and executed qualification tests to validate the migrated application, ensuring seamless operation and reliability.<br><br>" +
    "Key Achievements:<br>" +
    "- Successfully completed the migration project on time, enhancing system efficiency.<br>" +
    "- Improved data management and streamlined testing processes.",
  },
  {
    id: 3,
    title: "Internship in Digital Innovation",
    title2: "Conseil départemental de l’oise | Beauvais, France",
    title3: "Duration: 14/06/2021 - 31/07/2021",
    img: "DigitalTransformation.jpg",
    desc: "During my internship at the Conseil Départemental de l’Oise, I worked on a key project to modernize and automate internal processes:<br><br>" +
    "Process Automation<br>" +
    "- Developed automation processes to streamline repetitive tasks and improve operational efficiency.<br>" +
    "- Used low-code/no-code tools to build fast and flexible solutions tailored to the organization’s needs.<br><br>" +
    "Digital Transformation<br>" +
    "- Contributed to the digital transformation by integrating innovative solutions to simplify processes and reduce processing times.<br><br>" +
    "Key Achievements:<br>" +
    "- Implemented automated solutions that reduced manual tasks and increased productivity.<br>" +
    "- Promoted the adoption of low-code/no-code technologies to accelerate development and drive digital transformation.",
    
  },
  {
    id: 4,
    title: "Cybersecurity Training",
    img: "CTF.jpg",
    desc: "As part of my commitment to professional development in cybersecurity, I am currently participating in hands-on training on platforms like TCM Academy and TryHackMe, where I am proud to be ranked in the top 1% of participants on TryHackMe. This training has equipped me with practical skills in:<br><br>" +
      "<strong>Practical Application</strong><br>" +
      "- Completing diverse labs and challenges in critical areas such as network security, penetration testing, and threat analysis.<br>" +
      "- Gaining real-world experience that has honed my analytical and problem-solving abilities.<br><br>" +
      "<strong>Skills Developed</strong><br>" +
      "- Proficiency in utilizing cybersecurity tools and techniques for effective vulnerability assessment and mitigation.<br>" +
      "- A comprehensive understanding of security principles, risk management, and incident response protocols.<br><br>" +
      "<strong>Ongoing Learning</strong><br>" +
      "- Continuously pursuing new challenges and certifications to remain at the forefront of the dynamic cybersecurity landscape.<br>" +
      "- You can find some of my learning projects and code samples on my <a href='https://github.com/Outimed404' target='_blank'>GitHub</a>.",
  },

];

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    // Convert `\n` to `<br>` for displaying line breaks correctly
    const formattedDesc = item.desc.replace(/\n/g, "<br />");
  
    return (
      <section>
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{ y }}>
              <h2>{item.title}</h2>
              <h3>{item.title2}</h3>
              <h4>{item.title3}</h4>
              <p dangerouslySetInnerHTML={{ __html: formattedDesc }} />
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Past experience</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;