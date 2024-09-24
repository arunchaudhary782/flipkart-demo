import './MyButton.css';

function MyButton({text, bgColor, color}){

    const style = {
        backgroundColor : bgColor,
        color : color
    }

    return(
        <>
            <a class="btn7" href="#" style={style}>{text}</a>
        </>
    )
}

export default MyButton;