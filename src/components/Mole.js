//This will represent a displayed mole. It ultimately will contain a timer determining the lifespan of a mole. This component will render when displayMole === true

import MoleImg from '../assets/images/mole.png';


function Mole(props){
    
    

    return (
        <div className="mole">
            <img src={MoleImg} alt='Mole-Image' />
        </div>
    )
}

export default Mole;