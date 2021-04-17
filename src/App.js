import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';

import {Todos} from './Component/Todos';
import {Footer} from './Component/Footer';

function App() {
  return (
  <>
  <Header title="Todo List" searchbar={true}/>
  <Todos/>
  <Footer/>

</>
      );
}

export default App;
