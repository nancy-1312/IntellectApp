import React from "react";
import { Text, View, StyleSheet } from "react-native"
import Slider from '@react-native-community/slider';
import ProgressCircle from 'react-native-progress-circle';

import Colors from "../utils/Colors";

const ScaleMeter = ({scaleLevel, setScaleLevel = () => {}}) => {

    const handleValueChange = (value) => {
        setScaleLevel(value);
    }

    const getFrustrationLevel = () => {
        if(scaleLevel < 4){
            return 'Low';
        } else if (scaleLevel < 8){
            return 'Mild';
        } else {
            return 'High';
        }
    }

    return (
        <View style={styles.topContainer}>
            {scaleLevel != undefined ? <Text style={styles.textStyle}>{getFrustrationLevel()}</Text> : null}
            <ProgressCircle
                percent={scaleLevel * 10}
                radius={100}
                borderWidth={10}
                color={Colors.white}
                bgColor={Colors.lightGray}
                shadowColor={Colors.borderGrayColor}
            >
                {scaleLevel != undefined ? <Text style={styles.textStyle}>{scaleLevel}</Text> : null}
            </ProgressCircle>
            <Slider
                testID='slider'
                step={1}
                minimumValue={0}
                maximumValue={10}
                value={scaleLevel || 0}
                onValueChange={handleValueChange}
                thumbTintColor={Colors.sliderColor}
                maximumTrackTintColor={Colors.white}
                minimumTrackTintColor={Colors.sliderColor}
                style={{ width: 200, height: 40, marginVertical: 20 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    topContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        padding: 20,
        fontSize: 28,
        color: Colors.white
    }
})

export default ScaleMeter;