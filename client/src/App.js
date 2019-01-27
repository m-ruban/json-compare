import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { AppProvider } from './Contexts/Provider'
import FAQ from './Sections/FAQ'
import Compare from './Sections/Compare'
import NotFound from './Sections/NotFound'
import Navigate from './Bars/Navigate'
import Footer from './Bars/Footer'

const App = () => (
  <Router>
    <AppProvider>
      <Navigate />
      <Switch>
        <Route exact path="/" component={Compare} />
        <Route exact path="/faq/" component={FAQ} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </AppProvider>
  </Router>
)

export default App
