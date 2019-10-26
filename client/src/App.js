import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import AppProvider from 'context/provider';
import Compare from 'sections/Compare';
import NotFound from 'sections/NotFound';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'root/App.less';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <Router>
        <AppProvider>
            <div className="json-compare">
                <Header />
                <Container className="pt-4 pb-4 compare-container" fluid>
                    <Switch>
                        <Route exact path="/" component={Compare} />
                        <Route component={NotFound} />
                    </Switch>
                </Container>
                <Footer />
            </div>
        </AppProvider>
    </Router>
);

export default App;
