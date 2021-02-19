
import React, { Fragment, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";

import theme from "./theme";
import GlobalStyles from "./GlobalStyles";

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import HeaderMain from './containers/headermain/HeaderMain'
import HeaderMobile from './containers/headermobile/HeaderMobile'

import './App.css'

function App() {

  const matches = useMediaQuery('(max-width:600px)');

  return (
    <Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {matches ? <HeaderMobile />: <HeaderMain />}
        
        <div style={matches ?{position: "relative", top: "-8px"} : {}}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </div>
      </MuiThemeProvider>
    </Fragment>
  );
}


export default App;
