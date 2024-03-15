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
        Eric Sadowski is a Web Developer and Multi-Media Artist from Montreal, 
        Quebec. Born in Vancouver, British Columbia, he has been using computers 
        since he could talk and he can fondly remember the sound of dial up.
         His skills include: HTML/CSS, Photoshop, Javascript, C#, React, Node.js, Java, PHP and MySQL. 
        </p>
           </div>
        </div>
    )
}
export default About