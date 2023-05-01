
import './App.css';
import CounterView from './features/counter/CounterView';
import PostsView from './features/posts/PostsView';

function App() {
  return (
    <div className="container ">
      <h1>APP</h1>
      <CounterView/>
      <PostsView/>
     
    </div>
  );
}

export default App;
