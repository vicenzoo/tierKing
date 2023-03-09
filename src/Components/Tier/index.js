import ItemTier from '../itemTier'
import './Tier.css'

const Tier = (props) => {

    const backCol = { 
        backgroundColor: props.secondcolor 
    }
    const borderCol = {
        borderColor: props.primarycolor
    }

    return (

       props.itemT.length > 0 && <section className='tier' style={backCol}>

        <h3 style={borderCol}> {props.name} </h3>
        <div className='itemTier'>
            {props.itemT.map(ItemTi => <ItemTier key={ItemTi.name} BackgroundCol={props.primarycolor} name={ItemTi.name} Descr={ItemTi.Descr} img={ItemTi.image}/>)}
        </div>

        </section>
    )

}

export default Tier