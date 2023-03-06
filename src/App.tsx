
import './App.css';
import Gift from './components/Gift';
import Hero from './components/Hero';
import Shop from './components/Shop';
// import video from './components/video.mp4'


function App() {
  return (
    <>
    <Hero title='Into The Wild.' vid='video.mp4' />
    <Gift subTitle='GIFT CARDS' title='Support your neighborhood' desc='We believe that local businesses are an integral part of a neighborhoods character. Help keep us local by buying a gift card!' img='/img.jpg' img1='/img2.webp' />
    <Shop subTitle='BRAND NEW' title='Summer wear' desc='Check out our comfy crewnecks, lightweight khakis, breathable tanktops and more.' img1='/img1.webp' img2='/img2.jpg' img3='/img3.jpg' img4='/img4.jpg' img5='/img5.jpg' />
    </>
  );
}

export default App;
