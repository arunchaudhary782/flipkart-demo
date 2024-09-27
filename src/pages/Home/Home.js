import { Row, Col, Container } from "react-bootstrap";
import IconMenu from "../../components/IconMenu/IconMenu";
import Slider from "../../components/Slider/Slider";
import { useState, useEffect } from "react";
import DynamicSlider from "../../components/DynamicSlider/DynamicSlider";
import './Home.css'
import MyCard from "../../components/MyCard/MyCard";
import Shop from "../../components/Shop/Shop";

function Home(){
    const [iconMenu, setIconMenu] = useState();
    const [slides, setSlides ] = useState();
    const [products, setProducts] = useState();
    const [productList, setProductlist] = useState();

    const html = {
        __html: "<h1>Amarjeet Maderchod hai</h1>"
    };

    useEffect(()=>{
        fetchIconMenu();
        fetchSlider();
        fetchProducts();
        fetchProductlist();
    }, []);

    const fetchIconMenu = ()=>{
        const url = "https://demo2261803.mockable.io/iconMenu";
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                setIconMenu(response);
        });
    }

    const fetchSlider = () => {
        const url = "https://demo2261803.mockable.io/sliderItems";
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                setSlides(response);
            });
    }

    const fetchProducts = () => {
        const url = "https://demo2261803.mockable.io/products";
        fetch(url)
          .then((res) => res.json())
          .then((response) => {
            setProducts(response);
          });
    }

    const fetchProductlist = () => {
        const url = "https://demo2261803.mockable.io/product_list";
        fetch(url)
          .then((res) => res.json())
          .then((response) => {
            setProductlist(response);
          });
    }

    return (
        <>
            <IconMenu iconMenu={iconMenu}/>
            <Slider slide={slides}/>
            <section className="slidesection">
                <Container fluid className="mt-1" >
                    <Row>
                        <Col md={10} className="sliderrow">
                            <h4 className="mt-2">Best Of Electronic </h4>
                            <DynamicSlider data={products} cols={5}/>
                        </Col>
                        <Col md={2}>
                            <img className="img-fluid" src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/32e8514665f65267.jpg?q=20  " />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <MyCard
                                src={'https://cdn.dribbble.com/users/1346218/screenshots/7052546/media/7e914a81876bbca9b80cc07004f510e5.png'}
                              
                                text={"Batman"}
                                display={'Flex'}
                                direction={'row'}
                                
                                textp={"The 2024 Summer Paralympics, also known as the Paris 2024 Paralympic Games, and branded as Paris 2024, is the 17th Summer Paralympic Games, an international multi-sport parasports event governed by the International Paralympic"}
                                />
                        </Col>
                        <Col md={5}>
                        <Shop/>
                        
                        </Col>
                        <Col>
                            <div dangerouslySetInnerHTML={html}></div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="slidesection">
                <Container fluid className="mt-1" >
                    <Row>
                        <Col className="sliderrow">
                            <DynamicSlider data={productList} cols={7}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Home;