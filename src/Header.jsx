/* eslint-disable no-undef */
import { pageLinks } from "./data"

const Header = () => {

    return <>
    <div className="container">
      <h1 className="display-1 text-light">Petar Stojković</h1>
      <div className="occ">
      <h5 className="text-warning">Frontend Developer</h5>
      </div>
      <div className="pl align-items-md-center align-items-start">
        {pageLinks.map((pageLink)=>{
            return <div className="pl-l lead mx-3 pt-1" key={pageLink.id} {...pageLink}>
            <a className="nav-link text-success" href={pageLink.href}> {pageLink.text} </a>
        </div>
        })}
    </div>
        </div>
        </>
}
export default Header