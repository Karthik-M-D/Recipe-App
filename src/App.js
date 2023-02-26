import './App.css';
import { Pages } from './Pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Popular/> */}
      <BrowserRouter>
        <Pages/>
      </BrowserRouter>
    </div>
  );
}

export default App;
