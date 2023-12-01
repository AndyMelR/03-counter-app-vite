import PropTypes from 'prop-types';

export const FirstApp = ( {title, subtitle, name} ) => {
   
   
  return (
    <>
        <h1>{ title }</h1>
        {/*<code>
        {JSON.stringify( newMessage ) };
  </code>*/}
        <p> { subtitle }</p>
        <p> { name }</p>
    </>
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,//no solo sea un string, sino qie sea obligatorio
    subtitle: PropTypes.string,
    name: PropTypes.string,
}

FirstApp.defaultProps = {
    name: ' Portafolio',
    subtitle: ' No hay subtitulo',
    title:' No hay titulo',
}


