import ItemTier from '../itemTier'
import './Tier.css'

const Tier = (props) => {


    return (

       props.itemT.length > 0 && <section className='tier' style={{backgroundImage: 'url(/images/Back.png)',backgroundColor: props.secondcolor}}>

        <h3 style={{ borderColor: props.thirdcolor, color: props.thirdcolor,borderBottomColor: props.thirdcolor }}> {props.name} </h3>
        <div className='itemTier'>
            {props.itemT.map(ItemTi => <ItemTier key={ItemTi.name} BackgroundCol={props.thirdcolor} BackgroundColAlt = {props.secondcolor} name={ItemTi.name} Descr={ItemTi.Descr} img={ItemTi.image}/>)}
        </div>

        </section>
    )

}

export default Tier