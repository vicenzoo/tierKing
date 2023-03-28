import Banner from "./Components/Banner/Index";
import Form from './Components/Form/index.js';
import Tier from './Components/Tier/index.js';
import { useState } from 'react';
import './index.css'

function App() {
  
  const tiers = [
    {
      name: '(S) Super',
      firstcolor: '#ffd80d',
      secondcolor: '#ffeb80',
      thirdcolor: '#FF7B54',
    },
    {
      name: '(A) Amável',
      firstcolor: '#d50000',
      secondcolor: '#be1c4a',
      thirdcolor: '#ff8a7a',
    },
    {
      name: '(B) Beleza',
      firstcolor: '#445119',
      secondcolor: '#a8c545',
      thirdcolor: '#61764B',
    },
    {
      name: '(C) Coisa Boa',
      firstcolor: '#d41cff',
      secondcolor: '#e782ff',
      thirdcolor: '#ff3934',
    },
    {
      name: '(D) Doí :(',
      firstcolor: '#0D6986',
      secondcolor: '#acf0f2',
      thirdcolor: '#00425A',
    },
    {
      name: '(F) Fracasso',
      firstcolor: '#63541c',
      secondcolor: '#b39732',
      thirdcolor: '#735F32',
    }
  ]

  const inicial = [
    {
      name: 'DI FERRERO',
      Descr: 'Musico',
      image: 'https://cdn-p.smehost.net/sites/dd69ece0b18047b2b844eebd9bc3f0a8/wp-content/uploads/2023/01/IMG_2298-11.png',
      tier: tiers[0].name
    },
    {
      name: 'ERASMO CARLOS',
      Descr: 'Velho',
      image: 'https://cdn-p.smehost.net/sites/dd69ece0b18047b2b844eebd9bc3f0a8/wp-content/uploads/2023/01/ERASMO_CARLOS1.jpg',
      tier: tiers[0].name
    },
    {
      name: 'COLDPLAY',
      Descr: 'Grupo Musical',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/COLDPLAY.png',
      tier: tiers[0].name
    },
    {
      name: 'LIAM GALAGER',
      Descr: 'Brigou com o Irmão',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/LIAM.png',
      tier: tiers[0].name
    },
    {
      name: 'AQUELE LOKO DO BIGBROTHER',
      Descr: 'Mas não é :P',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/JASON%20DERULO.png',
      tier: tiers[1].name
    },
    {
      name: 'EMO',
      Descr: 'Não sei quem é',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/MISSY%20ELLIOT.png',
      tier: tiers[1].name
    },
    {
      name: 'MALDIÇÃO DO SEGUNDO ALBUM',
      Descr: 'Mas tem umas musica boa',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/JACK%20HARLOW.png',
      tier: tiers[1].name
    },
    {
      name: 'PAULO SILVEIRA',
      Descr: 'Hipster e CEO da Alura',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      tier: tiers[1].name
    },
    {
      name: 'MACONHA',
      Descr: 'Não é preconceito, Discurpe',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/WIZ%20KHALIFA.png',
      tier: tiers[2].name
    },
    {
      name: 'NAMORADO DO BRUNO MARS',
      Descr: 'Musica Boa',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/ANDERSON%20PAAK.png',
      tier: tiers[2].name
    },
    {
      name: 'NÃO É A EQUIPE DE F1 OU O ATOR',
      Descr: 'Todo Dia uma formação de Banda Diferente',
      image: 'http://warnerbr.s3-website-sa-east-1.amazonaws.com/warner2021/images/HAYLEY%20WILLIAMS.png',
      tier: tiers[2].name
    },
    {
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


  return (
    <div>
      <Banner />
      <Form tiers={tiers.map(tier => tier.name)} onCreateNew={Tm => onNewTier(Tm)} />
      <h1 className="title">Trupe Bacana</h1>
      {tiers.map(tier => <Tier key={tier.name} name={tier.name} primarycolor={tier.firstcolor}
        secondcolor={tier.secondcolor} thirdcolor={tier.thirdcolor} itemT={itemtiers.filter(itemtier => itemtier.tier === tier.name)} />)}

    </div>
  );
}

export default App;
