import './App.css';
import { BrowserRouter } from 'react-router-dom';
import TabPanel from './module/TabPannel/TabPanel';
import Routes from './Routes';

function App(props) {
  return (
    <BrowserRouter>
      <Routes {...props} />
   </BrowserRouter>
  );
}

export default App;
