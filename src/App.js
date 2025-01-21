import "./App.css"

import Header from './component/Header';
import Main from './component/Main';
import AboutMe from './component/AboutMe';
import Career from './component/Career';
import Projects from './component/Projects';
import Footer from './component/Footer';


function App() {

  const moveScroll = (getClassName) => {
    const carrerClass = document.querySelector(`.${getClassName}`);

    carrerClass.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  };


  return (
    <div className="App">
      <div className="App_comm_Top">
        <Header moveScroll={moveScroll} />
        <Main moveScroll={moveScroll} /> 
      </div>
      <div className="App_comm_Bottom">
        <AboutMe />
        <Career />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
