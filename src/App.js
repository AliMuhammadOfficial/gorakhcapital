
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

import './App.css';
import Header from './containers/header/Header';

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex'
    
  },
}))

function App() {
  const classes = useStyles()
  
  return (
    <div>
      <Header />
      <div className={classes.root}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}


export default App;
