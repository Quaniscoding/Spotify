import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import { Songs } from './Context';
import DataSongs from './data/songs.json'
import PLaying from './components/PLaying';
import { useState } from 'react';
function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(songs => songs.id === idSong)
    if (!song) { setSong(DataSongs[0]) }
    else { setSong(song) }
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden '>
          {/* span 1 */}
          <DetailSong />
          {/* span 2 */}
          <ListSong className='overflow-hidden' />
        </div>
        <PLaying />
      </Songs.Provider>
    </div>
  );
}

export default App;
