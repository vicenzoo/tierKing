import ItemTier from '../itemTier'
import './Tier.css'

const Tier = (props) => {


    return (
       props.itemT.length > 0 && <section className='tier' style={{backgroundImage: 'url(/images/Back.png)',backgroundColor: props.secondcolor}}>
        <input value={props.secondcolor} type='color' className='input-color'/>
        <h3 style={{ borderColor: props.thirdcolor,color: props.primarycolor }}> {props.name} </h3>
        <div className='itemTier'>
            {props.itemT.map(ItemTi => {
                return <ItemTier key={ItemTi.name} BackgroundCol={props.thirdcolor} BackgroundColAlt = {props.secondcolor} name={ItemTi.name} Descr={ItemTi.Descr} img={ItemTi.image} onDel={props.onDel}/>
            })}
        </div>
        </section>
    )

}

export default Tier