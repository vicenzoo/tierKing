import { useState } from 'react'
import TextBox from '../TextBox'
import DropDown from '../DropDown'
import Btn from '../Button'
import './Form.css'


const Form = (props) => {

    const [name,setName] = useState('')
    const [Descr,setDescr] = useState('')
    const [image,setimage] = useState('')
    const [tier,setTier] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        props.onCreateNew({
            name,
            Descr,
            image,
            tier
        })
        setName('')
        setDescr('')
        setimage('')
        setTier('')
    }

    return(
        <section className='form'>
            <form onSubmit={onSave}>
                <h2 className='title'> Crie sua Tierlist: </h2>
            <TextBox isrequired={true} label="Nome*" placeholder="Digite o Nome do Elemento"
            value={name} onChange={vlr => setName(vlr)}/>
            <TextBox isrequired={false} label="Descrição"  placeholder="Digite uma Descrição"
            value={Descr} onChange={vlr => setDescr(vlr)}/>
            <TextBox label="Imagem" placeholder="Digite o endereço da Imagem"
            value={image} onChange={vlr => setimage(vlr)}/>
            <DropDown label="Tier*" itens={props.tiers}
            value={tier} onChange={vlr => setTier(vlr)}/>
            <Btn> Criar </Btn>
            </form>
        </section>
    )
}

export default Form