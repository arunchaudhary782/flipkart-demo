import { Container, Row, Col } from 'react-bootstrap';
import './ProductPage.css';
import MyButton from '../MyButton/MyButton';
import MyImg from '../MyImg/MyImg';
import MyCard from '../MyCard/MyCard';




function ProductPage() {




    return (    
        <>
            <section className='pro'>
                <Container fluid>
                    <Row>
                        <Col md={4}>
                            <img src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/9/0/-original-imahyuhfg2z4fvyh.jpeg?q=70&crop=false' />
                            <button type='submit' className='buttoncart' >Add To Cart</button>
                                <button type='submit' className='buttonbuy'>Buy Now</button>


                        </Col>
                        <Col md={8}>
                            <h3>realme P1 5G (Phoenix Red, 128 GB)  (8 GB RAM)</h3>
                            <p className='extra'>Extra ₹4500 off</p>
                            <div className='price'>
                                <p className='offer'>₹17,499</p>
                                <p className='total'>₹21,999</p>
                                <p className='extra'>20% off</p>
                            </div>
                            <MyCard
                               src={'https://cdn.dribbble.com/users/1346218/screenshots/7052546/media/7e914a81876bbca9b80cc07004f510e5.png'}
                               width={'200px'}
                                height={'200px'}    
                               text={"Batman"}
                               display={'Flex'}
                            //    direction={'ro'}
                            
                               textp={"kjdlknvlksdvlksdjvlkdsjvkldsjvklsdanfkjsdnvl;wejflksdnvksdnlksamvpksdkvbj"}
                               />

                            <MyButton text="Mukul" bgColor={'#000000'} color={'#FFF'}/>

                            <h5>Available offers</h5>
                            <p className='bank'> Bank Offer<span className='offers'> 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span> <span className='tc' > T&C</span></p>
                            <p className='bank'> Bank Offer<span className='offers'> ₹1500 Off On All Banks Credit and Debit Card Transactions</span> <span  className='tc' > T&C</span></p>
                            <p className='bank'> Special Price <span className='offers'> Get extra ₹4500 off (price inclusive of cashback/coupon)</span> <span  className='tc' > T&C</span></p>
                            <p className='bank'> Freebie <span className='offers'> Spotify Premium - 12M at ₹699</span> <span  className='tc' > T&C</span></p>
                            <h5 className='tc'> View 6 Offers </h5>
                            <div className='realme'>
                            <img className='realmeimg' src='https://rukminim2.flixcart.com/image/160/160/cms-brand/eea5e92d62ce85371ac1f31395c00690d9f524ee7d988149dfba8c07d73aaf41.png?q=90'/>
                            <p> 1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories <span className='tc'> Know More</span></p>
                            
                            </div>
                            <MyButton text="Sharma" bgColor={'#000000'} color={'#FFF'}/>
{/* 
                            <MyImg 
                                src={'https://myxdstudio.s3.ap-south-1.amazonaws.com/%403D_Teacher_Marketing101.jpg'} 
                                radius="50%"
                                width={'200px'}
                                height={'200px'}
                                text={"Amerjeet"}
                                /> */}
                        </Col>

                    </Row>


                </Container>
            </section>
        </>
    )
}

export default ProductPage;