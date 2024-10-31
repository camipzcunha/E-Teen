import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import HeaderLogin from '../../Components/HeaderLogin';
import Footer from '../../Components/Footer';



const data = [
  { option: 'Nyck de Vries' },
  { option: '1000' },
  { option: 'Jake Hughes', style: { textColor: '#f9dd50' } },
  { option: 'Sam Bird' },
  { option: 'Mais um Giro' },
  { option: 'Edoardo Mortara' },
  { option: '3 Aleatorias', style: { textColor: '#70bbe0' } },
  { option: 'Antonio Feliz' },
];

const backgroundColors = ['#ff8f43', '#70bbe0', '#0b3351', '#f9dd50'];
const textColors = ['#0b3351'];
const outerBorderColor = '#eeeeee';
const outerBorderWidth = 10;
const innerBorderColor = '#30261a';
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = '#eeeeee';
const radiusLineWidth = 8;
const fontFamily = 'Nunito';
const fontWeight = 'bold';
const fontSize = 20;
const fontStyle = 'normal';
const textDistance = 60;
const spinDuration = 1.0;
export default function Roleta() {

    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
  
    const handleSpinClick = () => {
      if (!mustSpin) {
        const newPrizeNumber = Math.floor(Math.random() * data.length);
        setPrizeNumber(newPrizeNumber);
        setMustSpin(true);
      }
    };
    return (<div >
        <HeaderLogin/>
        <section className='flex justify-center align-middle m-12'> 
        <Wheel 
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={backgroundColors}
          textColors={textColors}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontWeight={fontWeight}
          fontStyle={fontStyle}
          outerBorderColor={outerBorderColor}
          outerBorderWidth={outerBorderWidth}
          innerRadius={innerRadius}
          innerBorderColor={innerBorderColor}
          innerBorderWidth={innerBorderWidth}
          radiusLineColor={radiusLineColor}
          radiusLineWidth={radiusLineWidth}
          spinDuration={spinDuration}
          startingOptionIndex={Math.random()*7}
          
          textDistance={textDistance}
          onStopSpinning={() => {
            setMustSpin(false);
            console.log(prizeNumber)
          }}
        />
         <button className='text-white' onClick={handleSpinClick}>
          SPIN
        </button>
        </section>
        <Footer/>
    </div>)


}