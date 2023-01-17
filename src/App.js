import './App.css';
import Header from './ui/organisms/Header/Header';
import Main from './features/Main/Main';
import About from './features/About/About';
import GetInTouch from './features/GetInTouch/GetInTouch';
import Footer from './ui/organisms/Footer/Footer';

function App() {
  return (
    <div className="mx-auto font-montserrat bg-white">
      <Header />
      <Main />
      <About />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
