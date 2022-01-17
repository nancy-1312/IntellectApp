import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Colors from '../utils/Colors';
import Header from '../components/Header';
import ScaleMeter from '../components/ScaleMeter';
import PyramidScale from '../components/PyramidScale';

const Widget = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scaleLevel, setScaleLevel] = useState();

    return (
        <View style={styles.backgroundStyle}>
            <Header selectedIndex={selectedIndex} />
            {selectedIndex ?
                <PyramidScale /> :
                <ScaleMeter
                    scaleLevel={scaleLevel}
                    setScaleLevel={setScaleLevel}
                />
            }
            <TouchableOpacity
                testID='button'
                style={styles.buttonStyle}
                onPress={() => setSelectedIndex(selectedIndex ? 0 : 1)}
            >
                <Text testID='buttonText' style={styles.buttonText}>{!selectedIndex ? 'Next' : 'Back'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        backgroundColor: Colors.borderGrayColor,
    },
    buttonStyle: {
        backgroundColor: 'white',
        margin: 20,
        padding: 15,
        borderRadius: 30
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: Colors.black
    }
})

export default Widget;
