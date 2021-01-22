
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import {makeStyles} from '@material-ui/core/styles'
import MainMenu from './components/MainMenu';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}))
function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <MainMenu />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
