
import './App.css';
import Greet from './Component/PropsFunc';
import Welcome from './Component/propsclass';
import { Message } from './Component/stateclass';
import Form from './Forms';


function App() {
  return (
    <div className="App">
      <Greet name='john smith' funname='smith' />
      <Welcome name='diya' />
      <Message />
      <Form/>
    </div>
  );
}

export default App;
