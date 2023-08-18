import { Component } from 'react';
import './App.css';
import AppHeader from './components/app-header/AppHeader';
import CharactersSection from './components/characters-section/CharactersSection';
import ComicsSection from './components/comics-section/ComicsSection';


class App extends Component {
  state = {
    isCharactresSelected: true
  };

  toggleContent = (arg) => {
    this.setState({ isCharactresSelected: arg })
  };

  returnBackground() {
    if (this.state.isCharactresSelected) return <div className="background"/>
  }

  render() {
    const { isCharactresSelected } = this.state;
    return (
      <>
        <div className="App">
          <AppHeader
            isCharactresSelected={isCharactresSelected}
            toggleContent={this.toggleContent}/>
          {isCharactresSelected ? <CharactersSection/> : <ComicsSection/> }
        </div>
        { this.returnBackground() }
      </>
    );
  }
}

export default App;
