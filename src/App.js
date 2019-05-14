import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";

//Component
import MainscreenContainer from './Mainscreen/MainscreenContainer';

function App() {
  return (
    <Router>
      <MainscreenContainer/>
    </Router>
  );
}

export default App;
