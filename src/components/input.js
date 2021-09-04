import './input.css';

const Input = (props) => {
    return (
        <div className="input-group">
            <label className="text-label">{props.label}</label>
            <input type={props.type}  />
        </div>
    )
}

export default Input;