import "./about.css"
import Bw from "../../assets/img/eric-self-cropped.jpg"
const About = () => {
    return (
        <div className="a" id="about-link">
           <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card"><img src={Bw} className="a-img"></img></div>
           </div>
           <div className="a-right">
           <h1 className="a-title">About Me</h1>
        <p className="a-desc">
        Eric Sadowski is a skilled Web Developer and Multi-Media Artist from Montréal, Québec. Born in Vancouver, British Columbia, he has a strong background in HTML/CSS, Photoshop, Javascript, C#, ASP.NET, React, SpringBoot, Node.js, Java, PHP, and MySQL. With a passion for technology and art, Eric brings a unique blend of creativity and technical expertise to his work.
        </p>
           </div>
        </div>
    )
}
export default About
