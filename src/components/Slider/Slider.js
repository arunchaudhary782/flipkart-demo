import { Container, Row, Carousel, } from "react-bootstrap";
import { useEffect, useState } from "react";

function Slider({ slide }) {

    return (
        <>
            <Container fluid>
                <Row>
                    <Carousel>
                        {
                            slide?.map((s) => {
                                return (

                                    <Carousel.Item >
                                        <img src={s.banner} />

                                    </Carousel.Item>


                                )
                            }
                            )

                        }
                    </Carousel>
                </Row>
            </Container>
        </>
    )
}
export default Slider;