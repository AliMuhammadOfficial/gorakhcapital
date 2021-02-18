
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

import './App.css';
import HeaderMain from './containers/headermain/HeaderMain';
import HeaderMobile from './containers/headermobile/HeaderMobile';
import { StyledProvider } from 'components-extra'

function App() {

  const matches = useMediaQuery('(max-width:600px)');

  return (
    <div>
      <StyledProvider>

      {matches ? <HeaderMobile />: <HeaderMain />}
      
      <div style={matches ?{position: "relative", top: "-8px"} : {}}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </StyledProvider>
    </div>
  );
}


export default App;
