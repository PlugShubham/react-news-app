import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from '../main/main';
import News from '../main/news/news';


class Routes extends React.Component{
    render(){
        return(
            <Router>
                <div>
                <Route path="/" exact component={Main}/>
                <Route path="/news/:id" exact component={News}/>
                </div>
            </Router>
        );
    }
}

export default Routes;
