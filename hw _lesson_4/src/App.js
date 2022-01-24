import './App.css';

import { AboutPersonCard } from './AboutPersonCard';
import { InstagramCard } from './InstagramCard';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='cards'>
          <div className='aboutPersonCard'>
            <AboutPersonCard
              name='Harry'
              job='Web Developer'
              description='Skills: Theme, pligin and website development'
              image='logo.jpg'
            />
          </div>
          <div className='instagramCard'>
            <InstagramCard />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
