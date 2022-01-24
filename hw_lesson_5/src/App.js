import './App.css';
import { Counter } from './components/Counter/Counter';
import { PostsSocial } from './components/PostsSocial/PostsSocial';
import { PostsFacebook } from './components/PostsFacebook/PostsFacebook';
import { PostsOnliner } from './components/PostsOnliner/PostsOnliner';
import { Time } from './components/Time/Time';
import { Converter } from './components/Converter/Converter';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Counter />
        <PostsSocial />
        <PostsFacebook />
        <PostsOnliner />
        <Time />
        <Converter />
      </header>
    </div>
  );
}

export default App;
