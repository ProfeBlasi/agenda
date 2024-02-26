import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  container: {
    width: 'auto',
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url('https://i.pinimg.com/originals/9f/84/ac/9f84acca7a7d70367378d160d7cf7ab2.jpg')`, // URL de la imagen web
    backgroundSize: 'cover', // Ajustar el tamaño de la imagen para cubrir todo el contenedor
    padding: '20px',
  },
  containerStudent: {
    width: 'auto',
    margin: 'auto',
    minHeight: '100vh',
    alignItems: 'center',
    backgroundImage: `url('https://fondospantallamovil.com/wp-content/uploads/2023/05/Gohan-Bestia-y-Goku-Ultra-Instinto-Kakarot.jpg')`, // URL de la imagen web
    //backgroundImage: `url('https://images.vexels.com/content/144712/preview/textured-white-background-f76452.png')`, // URL de la imagen web
    backgroundSize: 'cover', // Ajustar el tamaño de la imagen para cubrir todo el contenedor
    padding: '20px',
  },
  button: {
    fontSize: '25px',
    height: '50px',
    width: '400px',
    marginBottom: '20px',
  },
  paragraph: {
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '25px'
  },
  buttonLittle: {
    fontSize: '18px',
    height: '40px',
    width: '100px',
    marginBottom: '20px',
  },
};



export default styles;
