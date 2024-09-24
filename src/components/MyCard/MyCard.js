import './MyCard.css'

function MyCard ({src,text,textp,height,width,display,direction}){

    const boxStyle = {
        width : direction=="row" ? 'auto' : 'inherit',
        height : direction=="row" ? '200px' : 'auto',
        flexDirection : direction
    }

    const imgStyle = {
        width : direction=="row" ? '200px' : '100%',
    }


    return(

        <>
            <div className='box' style={boxStyle}>
                <img src={src} style={imgStyle}/>
                <div className='content'>
                    <h3 className='title'>{text}</h3>
                    <p className='description'>{textp}.</p>
                </div> 
            </div>
        </>
    )
}

export default MyCard;