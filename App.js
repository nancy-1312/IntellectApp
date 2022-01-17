/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView } from 'react-native';

import Widget from './src/screens/Widget';
import Colors from './src/utils/Colors';

const App = () => {

    const backgroundStyle = ({
        flex: 1,
        backgroundColor: Colors.black,
    });

    return (
        <SafeAreaView style={backgroundStyle}>
            <Widget />
        </SafeAreaView>
    );
};

export default App;
