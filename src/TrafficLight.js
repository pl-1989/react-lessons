import { useState, useEffect } from 'react';

// glow random lights

// const TrafficLight = () => {

//     const colors = ['red', 'yellow','green'];
//     const [ currentlySelected, setCurrentlySelected ] = useState( null );

//     const glowRandomLight = () => {

//         let glow_rand_num   = Math.floor( Math.random() * colors.length );
//         setCurrentlySelected( glow_rand_num )

//     }

//     return (

//         <div className='traffic-light'>
//             {colors.map((item,id)=>{
//                return <div className={'traffic-light-'+ item} onClick={ () => setCurrentlySelected( id ) } style={{ opacity: id === currentlySelected ? 1 : 0.5 }}></div>
//             })}
//             <button onClick={ glowRandomLight }>Glow Random Light</button>
//         </div>

//     )

// }


// glow random lights and stop it from executing with the help of a button click

const TrafficLight = () => {

    const colors                                        = ['red', 'yellow','green'];
    const [ stop_random_light, setTimerState ]          = useState( true );
    const [ currentlySelected, setCurrentlySelected ]   = useState( null );

    useEffect(() => {
        const timer = setInterval(() => {
            if( stop_random_light === true ) {
                glowRandomLight()
            }
        }, 3000);
        return () => clearInterval(timer);
    }, [ stop_random_light ]) 

    const glowRandomLight = () => {
        let glow_rand_num   = Math.floor( Math.random() * colors.length );
        setCurrentlySelected( glow_rand_num );
    }

    return (
        <>
            <div className='traffic-light'>
                {colors.map((item,id)=>{
                return <div className={'traffic-light-'+ item} onClick={ () => setCurrentlySelected( id ) } style={{ opacity: id === currentlySelected ? 1 : 0.5 }}></div>
                })}
            </div>
            <button onClick={ () => setTimerState( false ) }>Remove Effect</button>
        </>
    )

}

export default TrafficLight;