import logo from '../assets/Logomomo.png';
import '../style/App.css';
import MainNavigation from "./shared/Navigation/MainNavigation";

function App() {
  return (
  <Router>
    <MainNavigation />
    <main>
    
    <div className="App">
      <header className="App-header">
      <img src={logo} alt='logo montmorency' className='lmj-logo' />
      <h1>OUGNIGNANON </h1>
      <p>wesh salut a tous c metre gibs donner moi 200 euros pour que je puisse finir mon album en france</p>
      </header>
    </div>
    </main>  
  </Router>
  );
}

export default App;
