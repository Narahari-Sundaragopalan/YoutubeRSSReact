import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAvdblF6vgn65_4MrRb-2MHuD0XeEKad3E'

// Create a new component with ES6 syntax
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// take the components' and put it on the page (in the DOM) with a reference to page element
ReactDOM.render(<App />, document.querySelector('.container'));