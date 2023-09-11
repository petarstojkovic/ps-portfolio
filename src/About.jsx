import { aboutInfo } from "./data"

const About = () => {
    return (
        <section>
            {aboutInfo.map((info)=>{
                return <div className="container-fluid mt-5" key={info.id}>
                <div>
            <h2 className="display-3 occ text-warning text-capitalize text-center">{info.title}</h2>
        <div className="text-center text-light">
    <p className="mt-5">{info.text}</p>
    <div className="hr text-success mt-1 mb-1"></div>
</div>
    </div>
        </div>
            })}
        </section>
    )
}

export default About