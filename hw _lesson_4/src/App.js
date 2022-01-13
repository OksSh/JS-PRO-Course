import './App.css';

import { GetCard1 } from './Card1';
import { Card2 } from './Card2';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='cards'>
          <div className='getCard1'>
            <GetCard1 />
          </div>
          <div className='card2'>
            <Card2 />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
