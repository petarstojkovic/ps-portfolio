/* eslint-disable no-undef */
import { pageLinks } from "./data"

const Header = () => {

    return <>
    <div className="header">
      <h1 className="display-1 text-light">Petar Stojković</h1>
      <div className="occ">
      <h5 className="text-warning">Frontend Developer</h5>
      </div>
    </div>
      <nav className="nav-bar">
        {pageLinks.map((pageLink)=>{
            return <div className="nav lead" key={pageLink.id} {...pageLink}>
            <div className="nav-item">
                <a className="nav-link text-success" href={pageLink.href}> {pageLink.text} </a>
            </div>
                
        </div>
        })}
    </nav>
        </>
}
export default Header