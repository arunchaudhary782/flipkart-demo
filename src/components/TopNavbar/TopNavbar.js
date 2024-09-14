import { Navbar, Container, } from "react-bootstrap"
import './TopNavbar.css';
import arrowlogo from './arrowlogo.png'
import { Link } from "react-router-dom";
import { useEffect } from "react";

function TopNavbar({ menu }) {

    useEffect(()=>{
        console.log("running again")
    })

    return (
        <>
            <Navbar expand="lg" className="myNavbar">
                <Container fluid>
                    <Link to='/'><img className="logo" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"/></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <input className="inputvalue" type=" search" placeholder="Search For Products,Brands And More"></input>
                        <ul className="list">
                            {
                                menu?.map((m) => {
                                    return (
                                        <li>
                                            <img src={m.icon} className="icon" />
                                            <span>{m.title}</span>
                                            {m.menu ? <img src={arrowlogo} className="arrow" /> : ''}
                                            {

                                                <ul className="submenu">
                                                    {

                                                        m?.menu?.map((n) => {
                                                            return (
                                                                <li>
                                                                    <Link to={n.link}>
                                                                        <img src={n.icon} className="icon" />
                                                                        <span>{n.title}</span>
                                                                    </Link>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>


                    </Navbar.Collapse>
                </Container>

            </Navbar>


        </>
    )
}

export default TopNavbar;