import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

import Colors from "../utils/Colors";

const PyramidScale = () => {
    const WIDTH = 50, HEIGHT = 30;
    const [level, setLevel] = useState();

    const getFrustrationLevel = () => {
        if (level < 2) {
            return 'Low';
        } else if (level < 3) {
            return 'Mild';
        } else {
            return 'High';
        }
    }

    const renderChildren = () => {
        const child = [];
        for (let i = 4; i >= 0; i--) {
            child.push(
                <TouchableOpacity
                    testID={`${i}test`}
                    key={i.toString()}
                    style={[
                        styles.containerStyle,
                        {
                            width: WIDTH + i * 45,
                            height: HEIGHT + i * 2,
                            marginVertical: i % 2 == 0 ? 0 : 10,
                            backgroundColor: level >= i ? Colors.white : Colors.lightGray
                        }
                    ]} 
                    onPress={() => setLevel(i)}
                />
            )
        }
        return child;
    }

    return (
        <View style={styles.topContainer}>
            {level != undefined ? <Text style={styles.textStyle}>{getFrustrationLevel()}</Text> : null}
            {renderChildren()}
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerStyle: {
        height: 38,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        overflow: 'hidden',
        backgroundColor: Colors.lightGray
    },
    textStyle: {
        padding: 20,
        fontSize: 28,
        color: Colors.white
    }
})

export default PyramidScale;