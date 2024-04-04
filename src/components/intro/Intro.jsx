import "./intro.css"
import Van from "../../assets/img/van3.jpg"
import "bootstrap/dist/css/bootstrap.min.css";

const Intro = () => {
    return (

      <>


      <div className="container text-center">
        
      <div className="box1">
      <div className="row">
        <div className="col-12">
          <div className="container">
              <div className="row">
                  <div className="col-12">
          <h1 id="h1up" className="text-start">Eric Sadowski</h1>
          <img src={Van} className="img-fluid" id="main-van" alt ="A picture of Eric in a Van"/>
          <h1 id="h1down" className="text-end">Web Developer</h1>
          </div>
          </div>
        </div>
      </div>

      </div>
  </div>
</div>

        </>
    )
}

export default Intro