/* eslint-disable react/jsx-key */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { skillInfo } from "./data"

const Skills = () => {
  return <section id="skills">
    <h1 className="display-5 mt-5 mb-5 text-light d-flex justify-content-center">My Skill Collection</h1>
    <div className="skill-container">
        {skillInfo.map((info)=>{
            return <div className="skills mx-3 mb-5 text-light" key={info.id} {...info}>
                <div className="display-1 mb-5">
                    <FontAwesomeIcon icon={info.img}/>
                </div>
            </div>
        })}
        </div>
  </section>
}

export default Skills