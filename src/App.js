import './App.css';
// import { useState } from 'react';
// import Box from './Box';
import MovableBox from './MovableBox';
import NameList from './NameList';
import TrafficLight from './TrafficLight';
import Cart from './Cart';
import Login from './Login';
import Search from './Search';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <h1>Prabesh Lama</h1>
//       <button>Click Here</button>
//     </div>
//   );
// }

// function count_check( count, op ) {
//   if( op === 'sub' ) {
//     return count - 1;
//   } else if( op === 'add' && count < 21 ) {
//     if( count >= 10 ) {
//       return count + 2;
//     } else {
//       return count + 1;
//     }
//   } else {
//     return count;
//   }
// }

// let App = () => {
//   const [ count, setCount ] = useState(20);
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>You clicked {count} times!</h2>
//       <button onClick={ () => setCount( count_check( count, 'sub' ) ) }>Decrement</button>
//       <button onClick={ () => setCount( count_check( count, 'add' ) ) }>Increment</button>
//     </div>
//   )
// }

// sending props to component Box.
// const App = () => {
//   const colorArr = ['red', 'green', 'blue', 'black']
//   return (
//     <>
//       { colorArr.map((item, id)=><Box item={item}/>) }
//     </>
//   )
// }

// const App = () => {
//   const [ a, set_a ] = useState(0)
//   const set_increase_a = () => {
//     // Update state with incremented value
//     set_a(a + 1);
//   };
//   return(
//     <>
//       <button onClick={ set_increase_a }>Click</button>
//       {a}
//     </>
    
//   )
// }

const App = () => {
  return (

    <Search />
  )
}

// react routing using react-router-dom
// const App = () => {

//   return (

//     <>
//       <Router>
//         <div className='container'>
//           <Routes>
//             <Route path="/cart" element={ <Cart /> }></Route>
//             <Route path="/" element={ <TrafficLight /> }></Route>
//             <Route path="/namelist" element={ <NameList /> }></Route>
//             <Route path="/movable-box" element={ <MovableBox /> }></Route>
//           </Routes>
//         </div>
//       </Router>
//     </>

//   )

// }

export default App;
