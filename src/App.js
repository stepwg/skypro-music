import './App.css';
import AudioPlayer from './components/audioPlayer/audioPlayer';
import SideBar from './components/sideBar/sideBar';
import NavMenu from './components/navMenu/navMenu';
import CenterBlock from './components/centerBlock/centerBlock';

function App() {
  return (
      <div class="wrapper">
      <div class="container">
      <main className="main">
        <NavMenu />
        <CenterBlock />
        <SideBar />
        <AudioPlayer />
      </main>
      </div>
      </div>
  );
}

export default App;
