import './burgerIcon.css'

const BurguerIcon = (props) => {
    return (
        <div  onClick={props.menuHandler}
            className={`icon ${props.menu ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

export default BurguerIcon