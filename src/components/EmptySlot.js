//This will represent an empty molehill or an invalid location to click. Much like its sister component, it will have an internal timer to cycle the display. This component will render when displayMole === false
import { useEffect } from 'react';
import MoleHill from '../assets/images/molehill.png';


function EmptySlot(props){

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() *5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div className="mole-hill">
            <img src={MoleHill} alt=""/>
        </div>
    )
}

export default EmptySlot;