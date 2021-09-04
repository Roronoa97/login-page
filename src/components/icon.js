import './icon.css';

const Icon = (props) => {
    return(
        <div className="icon-wrapper">
            <img src={props.icon} alt=""/>
        </div>
    )
}

export default Icon;