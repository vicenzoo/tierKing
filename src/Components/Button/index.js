import './Button.css'

const Btn = (props) =>{
    return (<button className='Button'>
        {props.children}
    </button>)
}

export default Btn