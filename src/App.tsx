
import './App.css';
import Gift from './components/Gift';
import Hero from './components/Hero';
import Shop from './components/Shop';

function App() {
  return (
    <>
    <Hero title='Into The Wild.' />
    <Gift subTitle='GIFT CARDS' title='Support your neighborhood' desc='We believe that local businesses are an integral part of a neighborhoods character. Help keep us local by buying a gift card!' />
    <Shop subTitle='BRAND NEW' title='Summer wear' desc='Check out our comfy crewnecks, lightweight khakis, breathable tanktops and more.' />
    </>
  );
}

export default App;
