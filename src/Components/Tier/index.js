import ItemTier from '../itemTier'
import './Tier.css'
import hexToRgba from 'hex-to-rgba'

const Tier = (props) => {


    return (
       props.itemT.length > 0 && <section className='tier' style={{backgroundImage: 'url(/images/Back.png)',backgroundColor: hexToRgba(props.cor,'0.6')}}>
        <input onChange={event => props.changeColor(event.target.value, props.name)} value={props.cor} type='color' className='input-color'/>
        <h3 style={{ borderColor: props.cor,color: props.text }}> {props.name} </h3>
        <div className='itemTier'>
            {props.itemT.map(ItemTi => {
                return <ItemTier key={ItemTi.name} BackgroundCol={props.cor} ColorText = {props.text} name={ItemTi.name} Descr={ItemTi.Descr} img={ItemTi.image} onDel={props.onDel}/>
            })}
        </div>
        </section>
    )

}

export default Tier