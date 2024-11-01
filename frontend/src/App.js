import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import homepage from './pages/Homepage';
import chatpage from './pages/chatpage';

function App() {
  return (
    <BrowserRouter basename="/olalaa">
      <div className="App">
        <Route path="/" component={homepage} exact />
        <Route path="/chats" component={chatpage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
