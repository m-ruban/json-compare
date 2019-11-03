import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import AppProvider from 'context/provider';
import Comparison from 'sections/Comparison';
import NotFound from 'sections/NotFound';
import Header from 'components/Header';
import Footer from 'components/Footer';

import 'root/App.less';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <Router>
        <AppProvider>
            <div className="json-compare bg-dark">
                <Header />
                <Container className="pt-4 pb-4 json-compare__container" fluid>
                    <Switch>
                        <Route exact path="/" component={Comparison} />
                        <Route component={NotFound} />
                    </Switch>
                </Container>
                <Footer />
            </div>
        </AppProvider>
    </Router>
);

export default App;
