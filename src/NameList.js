import { useState } from 'react';

// applying similar color to repeatable name
// const NameList = () => {

//     const filter_arr    = [];    
//     const arr           = [ 'hari',  'shyam', 'geeta', 'hari' ];

//     let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

//     const renderListItems = () => {

//         return arr.map( (item, id) => {
           
//             return <li style={{ backgroundColor: findDuplicates(arr)[0] === item ? 'yellow' : null }}>{item}</li>
                       
//         } )

//     }

//     return(
//         <ul>
//             { renderListItems() }
//         </ul>
//     )
    
// }


// applying different colors to different repeatable names
// const NameList = () => {

//     const initialArr            = [ 'hari', 'ram', 'shyam', 'peter', 'lakhpa', 'geeta', 'hari', 'shyam', 'peter' ];
//     const [ arr, setArr ]       = useState( initialArr );
//     const filter_arr            = [];    
//     const item_colors           = ['red', 'green', 'blue', 'orange', 'black', 'purple', 'grey'];
    

//     const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

//     const checkItemMatchDuplicate = ( item ) => {
//         let color_index = findDuplicates( arr ).indexOf(item);
//         if( color_index >= 0 ) {
//             return item_colors[color_index];
//         }
//     }

//     function handleRemove(pass_id) {
//         const newArr = arr.filter((item, index ) => pass_id !== index);
//         setArr(newArr);
//     }

//     const renderListItems = () => {

//         return arr.map( (item, id) => {
           
//             return (<>
//             <li key={ id } style={{ backgroundColor: checkItemMatchDuplicate( item ) }}>{item} <button onClick={ () => handleRemove(id) }>Delete</button></li>
//             </>)
                       
//         } )

//     }

//     return(
//         <ul>
//             { renderListItems() }
//         </ul>
//     )
    
// }


const NameList = () => {

    const initialArr                = [ 'Prabesh', 'Babita', 'Shyam', 'Hari', 'Peter' ];
    const [ arr, setArr ]           = useState( initialArr );
    const [ rand_num, setRandNum ]  = useState( null );

    const renderListItems = () => {
        return arr.map( (item, id) => {
            return (
                <>
                    <li style={{ backgroundColor: rand_num === id ? 'green' : null }}>{item}</li>
                </>
            )      
        })
    }

    const generateRandomNum = () => {
        let dynamic_rand_num        = Math.floor( Math.random() * arr.length );
        setRandNum( dynamic_rand_num );
    }

    return (
        <>
            <ul>
                { renderListItems() }
            </ul>
            <button onClick={ generateRandomNum }>Check Winner</button>
        </>
        
    )

}
  
export default NameList;