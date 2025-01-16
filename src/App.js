import "./App.css"

import Header from './component/Header';
import Main from './component/Main';
import AboutMe from './component/AboutMe';
import Career from './component/Career';
import Projects from './component/Projects';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <div className="App_comm_Top">
        <Header />
        <Main /> 
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
