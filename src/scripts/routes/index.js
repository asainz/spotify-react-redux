import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';

import AppView from 'app';
import HomeView from 'home';

export default function(){
    return (
        <Route name="App" path="/" component={AppView}>
            <Route name="home" path="home" component={HomeView}/>
            <IndexRedirect to="home"/>
        </Route>
    );
}
