
import { Container, Col } from 'react-bootstrap';
import arrowlogo from './arrowlogo.png'
import './LoginPage.css';



function LoginPage({ menu }) {



    return (
        <>
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
                                                        <img src={n.icon} className="icon" />
                                                        <span>{n.title}</span>
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

            <Container className='mt-3'>
                <Col >
                    <div class="container">
                        <div class="login-page">
                            <div class="page-text">
                                <span class="login-text">Login</span>
                                <p class="sub-text">Get access to your Orders, Whishlist and Recommendations</p>
                            </div>
                            <div class="main-form">
                                <div>
                                    <div className='myInput'>
                                        <input type="text" id="mob"/>
                                        <label className='materialLable' for="mob">Enter mobile number</label>
                                    </div>
                                    <div class="sub2-text">
                                        By continuing, you agree to Flipkart's
                                        <a href="/">Terms of Use</a> and 
                                        <a href="/">Privacy Policy</a>.
                                    </div>
                                    <button type="submit" class="submitbutton">Request OTP</button>
                                </div>
                                <a href="https://www.flipkart.com/account/login?signup=true">New to Flipkart? Create an account</a>
                            </div>
                        </div>

                    </div>
                </Col>

            </Container>






        </>
    )
}

export default LoginPage;

