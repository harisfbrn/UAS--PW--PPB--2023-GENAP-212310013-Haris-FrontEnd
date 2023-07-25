import { StyleSheet, Text, View, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react';
import color from '../style/color.js';
import Circle from './circle.js';

export default OnBoardingItem = ({ item, onPress }) => {

    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>

            <Image source={item.image} style={[styles.image, {
                width: item.width,
                height: item.height,
                marginTop: item.marginTop,
                padding: item.padding,
                marginVertical: item.marginVertical
            }]} />

            <View style={[styles.circleContainer]}>
                <Circle style={styles.Circle} size={400} color={color.black} />
            </View>

            <View style={{ flex: 0.3, marginTop: 15, paddingTop: 10, marginBottom: item.marginBottom }}>
                <Text style={[styles.title, { paddingTop: item.paddingTop }]}> {item.title} </Text>
                <Text style={styles.description}> {item.description} </Text>
                <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.6}>
                    {item.component}
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    Circle: {
        flex: 1,
        borderColor: color.black,
        borderStyle: 'solid',
    },
    circleContainer: {
        position: "absolute",
        top: 130,
        zIndex: -1,
    },
    container: {
        paddingVertical: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0.4,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 800,
        fontSize: 50,
        marginBottom: 10,
        color: color.black,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    description: {
        fontWeight: 400,
        fontSize: 20,
        color: color.black,
        textAlign: 'center',
        paddingHorizontal: 50,
        marginTop: 15,
        lineHeight: 35
    },
    button: {
        padding: 20
    }
})