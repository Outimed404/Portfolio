import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.span>
                <div className="social">
                    <a href="https://github.com/Outimed404" target="_blank" rel="noopener noreferrer"><img src="./github2.png" alt="githubpage"/> </a>
                    <a href=" https://tryhackme.com/r/p/outimed" target="_blank" rel="noopener noreferrer"> <img src="THM.jpeg" alt="TryHackMePage"/>  </a>
                    <a href="https://www.linkedin.com/in/hadrien-abitbol-3195b32a3/" target="_blank" rel="noopener noreferrer"> <img src="linkedin.png" alt="LinkdinPage"/>  </a>

                   

                </div>
            </div>
        
        </div>
    )
}

export default Navbar