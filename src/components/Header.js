import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native"

import Colors from "../utils/Colors";

const { width } = Dimensions.get('window');

const Header = ({selectedIndex}) => {

    const renderIndicator = (count) => {
        const indicators = [];
        for (let i = 0; i < count; i++) {
            indicators.push(<View key={i.toString()} style={styles.indicator(count, i <= selectedIndex )} />)
        }
        return indicators;
    }

    return (
        <>
            <View style={styles.topContainer}>
                {renderIndicator(2)}
            </View>
            <Text style={styles.title}>{'RESCUE SESSION: ANGER & FRUSTRATION'}</Text>
            <Text style={styles.subTitle}>{'Pick the level of your anger & frustration right now'}</Text>
        </>

    )
}

const styles = StyleSheet.create({
    topContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    indicator: (count, selectedIndex) => ({
        height: 6,
        borderRadius: 3,
        width: (width / count) - (5 * (count + 1)),
        backgroundColor: selectedIndex ? Colors.white : Colors.lightGray
    }),
    title: {
        padding: 10,
        color: Colors.white
    },
    subTitle: {
        padding: 10,
        color: Colors.white,
        fontSize: 22
    }
})

export default Header;