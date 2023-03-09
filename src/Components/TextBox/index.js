import './index.css'

const TextBox = (props) => {

const onType = (event) => {
    props.onChange(event.target.value)
}


    return (
        <div className="Text-box">
            <label> {props.label} </label>
            <input value={props.value} onChange={onType} required={props.isrequired} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextBox