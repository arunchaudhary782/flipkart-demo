import './MyImg.css';

function MyImg({src, radius, height, width, text}){

    const style={
        borderRadius : radius ? radius : 0,
        height : height,
        width : width
    }

    return(
        <div className='wrapper'>
            <p className="caption">{text}</p>
            <img src={src} style={style}/>
        </div>
    )
}

export default MyImg;