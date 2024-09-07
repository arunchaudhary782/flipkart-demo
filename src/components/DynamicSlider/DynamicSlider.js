import Slider from "react-slick";
import { Card } from "react-bootstrap";

function DynamicSlider({data, cols}){

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: cols,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
      }

    return(
        <div className="slider-container">
            <Slider {...settings}>
                {
                data?.map((p) =>{
                    return(
                    <div>
                    <Card className="myCard">
                        <Card.Img variant="top" src={p.thumb} />
                        <Card.Body className="textcenter">
                            <Card.Text>{p.title}</Card.Text>
                            <Card.Title>{p.price}</Card.Title>
                        </Card.Body>
                    </Card>
                    </div>

                    )}
                )
            }  
            </Slider>
        </div>
    )
}

export default DynamicSlider;