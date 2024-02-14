import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  container: {
    width: 'auto',
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`, // URL de la imagen web
    backgroundSize: 'cover', // Ajustar el tamaño de la imagen para cubrir todo el contenedor
    padding: '20px',
  },
  containerStudent: {
    width: 'auto',
    margin: 'auto',
    minHeight: '100vh',
    alignItems: 'center',
    backgroundImage: `url('https://img.freepik.com/foto-gratis/pintura-lago-montana-montana-al-fondo_188544-9126.jpg')`, // URL de la imagen web
    backgroundSize: 'cover', // Ajustar el tamaño de la imagen para cubrir todo el contenedor
    padding: '20px',
  },
  button:{
    fontSize: '25px',
    height: '50px',
    width: '400px',
    marginBottom: '20px',
  },
  paragraph:{
    color: 'white',
    margin: 'auto',
    textAlign: 'center',
    fontSize: '25px'
  },
  buttonLittle:{
    fontSize: '18px',
    height: '40px',
    width: '100px',
    marginBottom: '20px',
  },
};

export default styles;
