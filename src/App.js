import React from 'react';

import Random from './components/Random_V1';
import Tag from './components/Tag_V1';

import './App.css';

const App = () => (
    <div>
        <h1>Random Gif Application</h1>
        <div className="main-container">
            <Random />
            <Tag />
        </div>
    </div>
);

export default App;