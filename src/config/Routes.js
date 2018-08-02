import React from 'react';
import Home from '../Home';
import Success from '../Success';
import { Router, Stack, Scene } from 'react-native-router-flux';

const Routes = () => (
    <Router>
      <Stack key="root">
        <Scene key="home" component={Home} title="Login"/>
        <Scene key="success" component={Success} title="Home"/>        
      </Stack>
    </Router>
);

export default Routes;