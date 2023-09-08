/* eslint-disable no-undef */
import { pageLinks } from "./data"

const Header = () => {

    return <>
    <div className="container">
      <img src="../imgs/avatar.jpg" alt="avatar" className="avatar img-fluid img-thumbnail mx-auto d-block" />
      <h1 className="display-1 text-light name">Petar Stojkovic</h1>
        <div className="row">
      <div className="container-flex">
      <h5 className="text-warning occ">Frontend Developer</h5>
      </div>
      <div className="pl-container">
        {pageLinks.map((pageLink)=>{
            return <div className="lead" key={pageLink.id} {...pageLink}>
            <a className="nav-link text-success" href={pageLink.href}> {pageLink.text} </a>
        </div>
        })}
    </div>
          </div>
        </div>
        </>
}
export default Header