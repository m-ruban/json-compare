import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Comparison from 'sections/Comparison';
import NotFound from 'sections/NotFound';
import Provider from 'store/Provider';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'root/App.less';

const App = () => (
    <Router>
        <Provider>
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
        </Provider>
    </Router>
);

export default App;
