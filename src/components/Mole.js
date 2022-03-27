//This will represent a displayed mole. It ultimately will contain a timer determining the lifespan of a mole. This component will render when displayMole === true
import { useEffect } from 'react';
import MoleImg from '../assets/images/mole.png';

function Mole(props){

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() *5000)
        let timer = setTimeout(() => {
            props.setDistplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div className="mole">
            <img src={MoleImg} alt="" onClick={props.handleClick}/>
        </div>
    )
}

export default Mole;