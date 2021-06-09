import logo from './logo.svg';
import './components/Main';
import Navbar from '../NavBar/NavBar';
import {numberWithCommas} from '../utils/string';

function Main() {
  return (
    <div className="App">
      <Navbar></Navbar>
        
      <div className="containesr">
        {"soy un numero de ejemplo y me van a formatear ${numberWithCommas(50)}"}
      </div>
    </div>
    );
}

export default Main;
