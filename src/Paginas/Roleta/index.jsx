import { useState } from 'react';
import { Wheel } from 'react-custom-roulette';


const data = [
    { option: 'nyck Dvries', style: { backgroundColor: 'red', textColor: 'black' } },
    { option: 'ayrton senna', style: { backgroundColor: 'white', textColo: 'black' } },
    { option: '2' },
]
export default function Roleta() {

    const [mustSpin, setMustSpin] = useState(false)
    function handleSpin() {
        const myTimeout = setTimeout(setMustSpin(true), 5000);
        setMustSpin(false)
        clearTimeout(myTimeout);
    }
    return (<div>
        <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={3}
            data={data}
            backgroundColors={['#3e3e3e', '#df3428']}
            textColors={['#ffffff']}
        />
        <button onClick={handleSpin()}></button>
    </div>)


}