import { useEffect, useState } from "react";
import {  Container, Row, Col } from "react-bootstrap"


function IconMenu({iconMenu}){

    return(
        <>
         <div className="menuContainer">
                <Container fluid>
                    <Row>
                        {
                            iconMenu?.map((menu)=>{
                                return (
                                    <Col className="text-center">
                                        <img className="thumb" src={menu.icon} />
                                        <p className="thumbtext">{menu.title}</p>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    
                </Container>
            </div>
        </>
    )
}
export default IconMenu;