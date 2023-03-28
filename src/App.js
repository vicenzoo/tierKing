import Banner from "./Components/Banner/Index";
import Form from './Components/Form/index.js';
import Tier from './Components/Tier/index.js';
import { useState } from 'react';
import './index.css'

function App() {

  const tiers = [
    {
      name: '(S) Super',
      firstcolor: '#a7ff24',
      secondcolor: '#d7ff9b',
    },
    {
      name: '(A) Amável',
      firstcolor: '#ff1815',
      secondcolor: '#ff7d7b',
    },
    {
      name: '(B) Beleza',
      firstcolor: '#90eae3',
      secondcolor: '#e6faf9',
    },
    {
      name: '(C) Coisa Boa',
      firstcolor: '#d41cff',
      secondcolor: '#e782ff',
    },
    {
      name: '(D) DOÍ :(',
      firstcolor: '#1a8064',
      secondcolor: '#28c79b',
    },
    {
      name: '(F) Fracasso',
      firstcolor: '#63541c',
      secondcolor: '#b39732',
    }
  ]

  const [itemtiers, setTier] = useState([])

  const onNewTier = (itemtier) => {
    console.log(itemtier)
    setTier([...itemtiers, itemtier])
  }

  return (
    <div>
      <Banner />
      <Form tiers={tiers.map(tier => tier.name)} onCreateNew={Tm => onNewTier(Tm)} />

      {tiers.map(tier => <Tier key={tier.name} name={tier.name} primarycolor={tier.firstcolor}
        secondcolor={tier.secondcolor} itemT={itemtiers.filter(itemtier => itemtier.tier === tier.name)} />)}

    </div>
  );
}

export default App;
