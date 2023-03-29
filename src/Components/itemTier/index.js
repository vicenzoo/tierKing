import { AiFillCloseCircle } from 'react-icons/ai'
import './ItemTier.css'

const ItemTier = (props) => {

    return (<div className='iTier'>
        <AiFillCloseCircle size={25} className='delete' onClick={props.onDel}/>
        <div className='header' style={{backgroundColor: props.BackgroundCol}}>
            <img src={props.img} alt={props.name} />
        </div>
        <div className='footer' style={{color: props.BackgroundCol}}>
        <h4> {props.name} </h4>
        <h5> {props.Descr} </h5>
        </div>
    </div>
    )

}

export default ItemTier