import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import {AppProvider} from './Contexts/Provider'
import FAQ from './FAQ/List'
import Form from './Compare/Form'
import Navigate from './Bars/Navigate'
import Footer from './Bars/Footer'

const App = () => (
  <Router>
    <AppProvider>
      <Navigate />
      <Route exact path="/" component={Form} />
      <Route exact path="/faq/" component={FAQ} />
      <Footer />
    </AppProvider>
  </Router>
)

export default App
