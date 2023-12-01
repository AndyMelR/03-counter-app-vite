import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ( { value } ) => {

    const [counter, setCounter]= useState( value ); // este value se corresponde con el valor del counter inicial del array.

   const handleAdd = ( ) => {
    setCounter( counter + 1 );
    //setCounter ((c) => c + 1 );
}
    const handleSubstract = () => {
        setCounter ( (c) => c - 1);
    }

    const handleReset = () => {
        setCounter ( value )
    }

  return (
    <>
        <h1>Counter App</h1>
        <h2> { counter } </h2>

        <button onClick={ handleAdd }> +1 </button>  
        <button onClick={ handleSubstract }> -1 </button>
        <button onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value : 0,
}


