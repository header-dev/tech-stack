import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { Header } from './components/common';

const App = () => {
    // render() {     return (     ); }
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText="Tech Stack" />
            </View>
        </Provider>
    );
};

export default App;
