import Banner from "./Components/Banner/Index";
import Form from './Components/Form/index.js';
import Tier from './Components/Tier/index.js';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './index.css'

function App() {
  
  const [tiers,setTiers] = useState([
    {
      id: uuidv4(),
      name: 'King',
      text: '#FFFF66',
      cor: '#FFFFA9',
    },
    {
      id: uuidv4(),
      name: 'Amável',
      text: '#FF6666',
      cor: '#FFA8C1',
    },
    {
      id: uuidv4(),
      name: 'Beleza',
      text: '#DBFF66',
      cor: '#C9FF1A',
    },
    {
      id: uuidv4(),
      name: 'Coisa Boa',
      text: '#FFFF66',
      cor: '#e782ff',
    },
    {
      id: uuidv4(),
      name: 'Doí :(',
      text: '#427F83',
      cor: '#acf0f2',
    },
    {
      id: uuidv4(),
      name: 'Fracasso',
      text: '#b39732',
      cor: '#b39732',
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      name: 'DI FERRERO',
      Descr: 'Musico',
      image: 'https://cdn-p.smehost.net/sites/dd69ece0b18047b2b844eebd9bc3f0a8/wp-content/uploads/2023/01/IMG_2298-11.png',
      tier: tiers[0].name
    },
    {
      id: uuidv4(),
      name: 'ERASMO CARLOS',
      Descr: 'Velho',
      image: 'https://cdn-p.smehost.net/sites/dd69ece0b18047b2b844eebd9bc3f0a8/wp-content/uploads/2023/01/ERASMO_CARLOS1.jpg',
      tier: tiers[0].name
    },
    {
      id: uuidv4(),
      name: 'COLDPLAY',
      Descr: 'Grupo Musical',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/COLDPLAY.png',
      tier: tiers[0].name
    },
    {
      id: uuidv4(),
      name: 'LIAM GALAGER',
      Descr: 'Brigou com o Irmão',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/LIAM.png',
      tier: tiers[0].name
    },
    {
      id: uuidv4(),
      name: 'AQUELE LOKO DO BIGBROTHER',
      Descr: 'Mas não é :P',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/JASON%20DERULO.png',
      tier: tiers[1].name
    },
    {
      id: uuidv4(),
      name: 'EMO',
      Descr: 'Não sei quem é',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/MISSY%20ELLIOT.png',
      tier: tiers[1].name
    },
    {
      id: uuidv4(),
      name: 'MALDIÇÃO DO SEGUNDO ALBUM',
      Descr: 'Mas tem umas musica boa',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/JACK%20HARLOW.png',
      tier: tiers[1].name
    },
    {
      id: uuidv4(),
      name: 'PAULO SILVEIRA',
      Descr: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      tier: tiers[1].name
    },
    {
      id: uuidv4(),
      name: 'MACONHA',
      Descr: 'Não é preconceito, Discurpe',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/WIZ%20KHALIFA.png',
      tier: tiers[2].name
    },
    {
      id: uuidv4(),
      name: 'NAMORADO DO BRUNO MARS',
      Descr: 'Musica Boa',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/ANDERSON%20PAAK.png',
      tier: tiers[2].name
    },
    {
      id: uuidv4(),
      name: 'NÃO É A EQUIPE DE F1 OU O ATOR',
      Descr: 'Todo Dia uma formação de Banda Diferente',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/HAYLEY%20WILLIAMS.png',
      tier: tiers[2].name
    },
    {
      id: uuidv4(),
      name: 'MARINA SILVA',
      Descr: 'Hipster e Tartaruga nas Horas Vagas',
      image: 'https://pbs.twimg.com/profile_images/1577255224741400576/_1Vi_i-g_400x400.jpg',
      tier: tiers[2].name
    }
  ]

  const [itemtiers, setTier] = useState(inicial)

  const onNewTier = (itemtier) => {
    console.log(itemtier)
    setTier([...itemtiers, itemtier])
  }

  function delitemTier(id){
    console.log(id);
    setTier(itemtiers.filter(itemtier => itemtier.id !== id));
  }

  function changeColor(color,id){
    setTiers(tiers.map(tier => {
      if(tier.id === id){
        tier.cor =color;
      }
      return tier;
    }));
  }

  return (
    <div>
      <Banner />
      <Form tiers={tiers.map(tier => tier.name)} onCreateNew={Tm => onNewTier(Tm)} />
      <h1 className="title">Trupe Bacana</h1>
      {tiers.map(tier =>
        <Tier 
        changeColor={changeColor}
        id={tier.id}
        key={tier.name} 
        name={tier.name} 
        cor={tier.cor}
        text={tier.text}
        itemT={itemtiers.filter(itemtier => itemtier.tier === tier.name)} 
        onDel={delitemTier}
        />
        )}

    </div>
  );
}

export default App;
