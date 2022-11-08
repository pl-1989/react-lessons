import { useState } from 'react';

const MovableBox = () => {
    const [ margin_top, setMarginTop ] = useState( '0px' );
    const [ margin_right, setMarginRight ] = useState( '20px' );
    const [ margin_bottom, setMarginBottom ] = useState( '0px' );
    const [ margin_left, setMarginLeft ] = useState( '20px' );

    const callSetMarginTop = () => {
        //     // Update state with incremented value
        setMarginTop( '100px' );
    };

    const callSetMarginRight = () => {
        //     // Update state with incremented value
        setMarginRight( '300px' );
    };

    const callSetMarginBottom = () => {
        //     // Update state with incremented value
        setMarginBottom( '100px' );
    };

    const callSetMarginLeft = () => {
        //     // Update state with incremented value
        setMarginLeft( '100px' );
    };

    return (
      <>
        <div className="movable-box box" style={{backgroundColor:'red', marginTop: margin_top, marginRight: margin_right, marginBottom: margin_bottom, marginLeft: margin_left}}>
            Simple Box
        </div>
        <div>
            <button className="movable-btn movable-box-up" onClick={ callSetMarginTop }>Up</button>
            <button className="movable-btn movable-box-right" onClick={ callSetMarginRight }>Right</button>
            <button className="movable-btn movable-box-down" onClick={ callSetMarginBottom }>Bottom</button>
            <button className="movable-btn movable-box-left" onClick={ callSetMarginLeft }>Left</button>
        </div>
      </>
    )
  }
  
  export default MovableBox;