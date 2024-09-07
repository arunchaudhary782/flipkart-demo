import { Row, Col, Container } from "react-bootstrap";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import IconMenu from "../../components/IconMenu/IconMenu";
import Slider from "../../components/Slider/Slider";
import { useState, useEffect } from "react";
import DynamicSlider from "../../components/DynamicSlider/DynamicSlider";
import './Home.css'

function Home(){

    const [navMenu, setNavMenu] = useState();
    const [iconMenu, setIconMenu] = useState();
    const [slides, setSlides ] = useState();
    const [products, setProducts] = useState();
    const [productList, setProductlist] = useState();

    useEffect(()=>{
        fetchMenu();
        fetchIconMenu();
        fetchSlider();
        fetchProducts();
        fetchProductlist();
    }, []);

    const fetchMenu = ()=>{
        const url = "https://demo2261803.mockable.io/getMenu";
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                setNavMenu(response.menu);
        });
    }

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
            <TopNavbar menu={navMenu}/>
            <IconMenu iconMenu={iconMenu}/>
            <Slider slide={slides}/>
            <section className="slidesection">
                <Container fluid className="mt-1" >
                    <Row>
                        <Col md={10} className="sliderrow">
                            <h4 className="mt-2">Best Of Maderchod</h4>
                            <DynamicSlider data={products} cols={5}/>
                        </Col>
                        <Col md={2}>
                            <img className="img-fluid" src="https://rukminim2.flixcart.com/fk-p-flap/530/810/image/32e8514665f65267.jpg?q=20  " />
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
            {/* <CarouselsSlider/> */}
        </>
    )
}

export default Home;