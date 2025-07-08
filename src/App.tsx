import './App.css';
import { Header } from './components/Header';
import MusicCard from './components/MusicCard';
import { TrackList } from './data/MusicData';
import { Route, Routes } from 'react-router-dom';
import { SignIn } from './components/SignIn';
import { SignUp } from './components/SignUp';
import { MoreMusic } from './components/MoreMusic';
import { PlayList } from './components/PlayList';
import { About } from './components/About';
import { Premium } from './components/Premium';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/SignIn' element={<SignIn />}/>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/MoreMusic' element={<MoreMusic/>}/>
      <Route path='/PlayList' element={<PlayList/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Premium' element={<Premium/>}/>

      
      <Route path='*' element={
        <>
    <div className='main-card'>
      {TrackList.map((item, index) => (
        <MusicCard
        key={index}
        name={item.name}
        creator={item.creator}
        avatarTrack={item.avatarTrack}
        track={item.track}
        id={item.id}
        />
      ))}
    </div>
        </>
      }/>
    </Routes>
                <h2 className='beta'>BETA VERSION WEB SITE :)</h2>
    </>
  )
}

export default App
