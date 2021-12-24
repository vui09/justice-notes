import Header from "./components/Header/Header";
import Notes from "./components/Notes/Notes";
import Footer from "./components/Footer/Footer";

import './assets/_global.scss';
import './assets/_variables.scss'


function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <Notes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
