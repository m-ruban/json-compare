import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppProvider from 'context/provider';
import FAQ from 'sections/FAQ';
import Compare from 'sections/Compare';
import NotFound from 'sections/NotFound';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'root/App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <Router>
        <AppProvider>
            <Header />
            <Switch>
                <Route exact path="/" component={Compare} />
                <Route exact path="/faq/" component={FAQ} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </AppProvider>
    </Router>
);

export default App;
