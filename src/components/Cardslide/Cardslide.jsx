import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Cardslide.css'

import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Cardslide = (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplayspeed:2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className='React-slide'>
        <Slider {...settings}>
    <div className='box'>
    <div className="work_card" key={props.id}    >
                      <div className="work_thumbnail">
                        <img src={props.img} alt="" className="work_img" />
                        <div className="work_mask"></div>
                      </div>

                      <span className="work_category">{props.title}</span>
                      <div className="work_title">
                        <h3 className="" style={{color:'#ffbe00'}}>{props.title}</h3>
                        <p className="" style={{}}><FontAwesomeIcon icon={faTurnUp} style={{color:"#ffbe00"}} /> Difficulty {props.difficulty}</p>
                        <p className=""> <FontAwesomeIcon icon={faQuestion} style={{color:'#ffbe00'}}/> Number of questions {props.question}</p>
                      </div>
                    </div>
    </div>
    <div className='box'>
    <div className="work_card" key={props.id}    >
                      <div className="work_thumbnail">
                        <img src={props.img} alt="" className="work_img" />
                        <div className="work_mask"></div>
                      </div>

                      <span className="work_category">{props.title}</span>
                      <div className="work_title">
                        <h3 className="" style={{color:'#ffbe00'}}>{props.title}</h3>
                        <p className="" style={{}}><FontAwesomeIcon icon={faTurnUp} style={{color:"#ffbe00"}} /> Difficulty {props.difficulty}</p>
                        <p className=""> <FontAwesomeIcon icon={faQuestion} style={{color:'#ffbe00'}}/> Number of questions {props.question}</p>
                      </div>
                    </div>
    </div>
    <div className='box'>
    <div className="work_card" key={props.id}    >
                      <div className="work_thumbnail">
                        <img src={props.img} alt="" className="work_img" />
                        <div className="work_mask"></div>
                      </div>

                      <span className="work_category">{props.title}</span>
                      <div className="work_title">
                        <h3 className="" style={{color:'#ffbe00'}}>{props.title}</h3>
                        <p className="" style={{}}><FontAwesomeIcon icon={faTurnUp} style={{color:"#ffbe00"}} /> Difficulty {props.difficulty}</p>
                        <p className=""> <FontAwesomeIcon icon={faQuestion} style={{color:'#ffbe00'}}/> Number of questions {props.question}</p>
                      </div>
                    </div>
    </div>
    <div className='box'>
    <div className="work_card" key={props.id}    >
                      <div className="work_thumbnail">
                        <img src={props.img} alt="" className="work_img" />
                        <div className="work_mask"></div>
                      </div>

                      <span className="work_category">{props.title}</span>
                      <div className="work_title">
                        <h3 className="" style={{color:'#ffbe00'}}>{props.title}</h3>
                        <p className="" style={{}}><FontAwesomeIcon icon={faTurnUp} style={{color:"#ffbe00"}} /> Difficulty {props.difficulty}</p>
                        <p className=""> <FontAwesomeIcon icon={faQuestion} style={{color:'#ffbe00'}}/> Number of questions {props.question}</p>
                      </div>
                    </div>
    </div>
    
  </Slider>
    </div>
  )
}

export default Cardslide