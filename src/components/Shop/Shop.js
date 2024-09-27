import { useState } from 'react';
import './Shop.css'



function Shop() {

    const [quantity, setQuantity] = useState(0);

    const onAddClick = ()=>{
        setQuantity(1);
    }

    const increaseQuantity = ()=>{
        const newCount = quantity+1;
        if(newCount>40){
            alert("Dekh Dekh Dekh Maderchod kaise add karra hai......")
        }else{
            setQuantity(newCount);
        }
        
    }

    const decreaseQuantity = ()=>{
        const newCount = quantity-1;
        setQuantity(newCount);
    }

    return (
        <>
            <div className='shopbox'>
                <div className='productbox'>
                    <p className='productLable'>Previos Bought</p>
                    <img src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/assets/products/large_images/jpeg/2cd7d3ff-4e9b-4a22-b732-4504948e7303.jpg?ts=1711473366' />
                    {
                        quantity
                        ?  
                        <div className='quantityHandlers'>
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{quantity}</span>
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                        : <button className='addbutton' onClick={onAddClick}>Add</button>
                    }
                </div>
                <ul className='badges'>
                    <li>3 Pieces</li>
                    <li>Energy Boost</li>
                </ul>
                <div className='content'>
                    <h3>Banana</h3>
                    <img src='https://cdn.grofers.com/assets/eta-icons/15-mins.png' className='timer' /> <span>8 MINS</span>
                    <p className='textblue'>26% OFF</p>
                    <p className='price'>₹50  <span className='mrr'>  MRP ₹68 </span></p>
                </div>

            </div>

        </>


    )
}
export default Shop;