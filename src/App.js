import { useRef, useState } from 'react';
import './App.css';
import AppHeader from './components/app-header/AppHeader';
import CharactersSection from './components/characters-section/CharactersSection';
import ComicsSection from './components/comics-section/ComicsSection';


const App = () => {
  const [isCharactresSelected, setCharactresSelection] = useState(true);

  const appRef = useRef(null);

  return (
    <>
      <div className="App" ref={appRef}>
        <AppHeader
          isCharactresSelected={isCharactresSelected}
          toggleContent={(boolValue) => setCharactresSelection(boolValue)}/>
        {isCharactresSelected ? <CharactersSection appRef={appRef}/> : <ComicsSection/> }
      </div>
      { isCharactresSelected ? <div className="background"/> : null }
    </>
  );
}

export default App;
