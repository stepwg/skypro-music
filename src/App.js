import './App.css';
import AudioPlayer from './components/audioPlayer/audioPlayer';
import SideBar from './components/sideBar/sideBar';
import NavMenu from './components/navMenu/navMenu';
import CenterBlock from './components/centerBlock/centerBlock';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return (
      <div class="wrapper">
      <div class="container">
      <main className="main">
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <NavMenu />
        <CenterBlock />
        <SideBar />
        <AudioPlayer />
        </SkeletonTheme>
      </main>
      </div>
      </div>
  );
}

export default App;
