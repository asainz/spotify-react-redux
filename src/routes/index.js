import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRedirect from 'react-router/lib/IndexRedirect';

import AppView from 'views/app';
import HomeView from 'views/home';

export default function(){
    return (
        <Route name="App" path="/" component={AppView}>
            <Route name="home" path="home" component={HomeView}/>
            <IndexRedirect to="home"/>
        </Route>
    );
}
