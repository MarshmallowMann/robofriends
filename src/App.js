import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'

const App = () => {
    return (
        <div className="tc">
            <h1 className="tc">RoboFriends</h1>
            <SearchBox />
            <CardList robots={robots} />
        </div>
    )
}
export default App