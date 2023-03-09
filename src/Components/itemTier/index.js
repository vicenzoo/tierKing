import './ItemTier.css'

const ItemTier = (props) => {

    return (<div className='iTier'>
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