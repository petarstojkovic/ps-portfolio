/* eslint-disable no-undef */
import { pageLinks } from "./data"

const Header = () => {

    return <>
    <div className="container">
      <h1 className="display-1 text-light text-center">Petar Stojković</h1>
        <div className="row">
      <div className="col-9">
        {pageLinks.map((pageLink)=>{
            return <div className="lead" key={pageLink.id} {...pageLink}>
            <a className="nav-link text-success" href={pageLink.href}> {pageLink.text} </a>
        </div>
        })}
    </div>
      <div className="col-3">
      <h5 className="text-warning occ">Frontend Developer</h5>
      </div>
          </div>
        </div>
        </>
}
export default Header