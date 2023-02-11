import './App.css';
import Header from './Comp/Header/Header';
import LastSlide from './Comp/LastSlide';
import LastPart from './Comp/Second_half_comp/LastPart';

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />
      <LastPart />
     <LastSlide />
    </div>
  );
}

export default App;
