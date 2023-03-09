import './DropDown.css'

const DropDown = (props) => {
    return (
        <div className= 'Drop-box'>
            <label> {props.label} </label>
            <select onChange={event => props.onChange(event.target.value)} required={props.required} value={props.vlr}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}> {item} </option>
                })}
            </select>
        </div>
    )

}

export default DropDown