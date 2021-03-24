import './App.css';
import Typing from 'react-typing-animation';
import Foto from './foto.jpg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={Foto} className='img'/>

        <Typing > 
        <p className="p">
          Efeito Maquina de escrever!
        </p>
       <p className="p2">
         Meu nome é André Sousa se inscreva no canal !
       </p>
       <p className="p3">
         Siga-me nas minhas redes sociais.
         <Typing.Backspace count={34}/>
         Espero que tenha ajudado!
       </p>
        </Typing>
      </header>
    </div>
  );
}

export default App;
