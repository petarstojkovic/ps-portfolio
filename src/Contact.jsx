import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { socialLinks } from "./data"

const Contact = () => {
    return <section id="contact">
      <h1 className="mt-3 mb-5 display-4 text-light text-center">Feel free to contact me at my socials:</h1>
    <div className="sl-container mt-5">
    {socialLinks.map((socLink) => {
      return <div className="display-1 mb-5 soc mx-5" key={socLink.id} {...socLink}>
      <a href={socLink.href} target="_blank" rel="noreferrer" className='nav-link text-light'>
          <FontAwesomeIcon icon={socLink.icon} />
      </a>
  </div>
    })}
    </div>
  </section>
  
}


export default Contact