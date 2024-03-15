import "./product.css"
import giticon from "../../assets/img/github-mark.svg"
import linkicon from "../../assets/img/ink_icon.png"

const Product = ({img,link,gitLink,title,description}) => {
    return (
        <>
        
        <div className="cardy">
        <div className="p">
        <div className="p-browser">
            <div className="p-circle rdot"></div>
            <div className="p-circle ydot"></div>
            <div className="p-circle gdot"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img"/>
        </a>
        </div>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={gitLink}><img className="icon" src={giticon}></img></a><a href={link}><img className="icon" src={linkicon}></img></a>
            

        </div>
        </div>
        
        
        </>
    )
}
export default Product