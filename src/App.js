import './App.css';
import Header from './ui/organisms/Header/Header';
import Main from './features/Main/Main';
import About from './features/About/About';

function App() {
  return (
    <div className="mx-auto font-montserrat bg-white">
      <Header />
      <Main />
      <About />
    </div>
  );
}

export default App;
