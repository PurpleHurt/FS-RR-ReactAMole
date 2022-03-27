//This will be the component that decides which child component is rendered. We will store a Boolean state variable called displayMole here.

//Will need a handleClick function that will increment the score by 1 and immediately set the clicked-on mole to no longer display (we will pass this down only to Mole components)
//Will need a ternary that will determine which child to render
import { useState } from 'react';
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    let [theMole, toggleMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        toggleMole(false)
    }

    let displayMole = theMole ? <Mole /> : <EmptySlot />

    return (
        <div className="mole-container">
        {displayMole}
        </div>
    )
}

export default MoleContainer;