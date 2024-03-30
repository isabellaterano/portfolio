import images from "./index.js";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  return (
    <motion.div
      className="skills"
      whileInView={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h4 className="skills__title">Skills</h4>
      <div className="skills__container">
        {images.map((item, idx) => (
          <div key={idx}>
            <div className="skills-flex">
              <img src={item.image} alt={item.name} height={35} width={35} />
              <p className="skills__name">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
