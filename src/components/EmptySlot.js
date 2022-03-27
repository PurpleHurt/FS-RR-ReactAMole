//This will represent an empty molehill or an invalid location to click. Much like its sister component, it will have an internal timer to cycle the display. This component will render when displayMole === false
import { useEffect } from 'react';
import MoleHill from '../assets/images/molehill.png';


function EmptySlot(props){

    useEffect(() => {
        
    })

    return (
        <div className="mole-hill">
            <img src={MoleHill} alt='Mole Hill Image' />
        </div>
    )
}

export default EmptySlot;