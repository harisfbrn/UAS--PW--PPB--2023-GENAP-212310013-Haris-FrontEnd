import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import React, { useState, useRef } from "react";
import Slide from "./Slide.js";
import OnBoardingItem from "./OnBoardingItem.js";
import Paginator from "./Paginator.js";
import color from "../style/color.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OnBoarding() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)}).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const scrollTo = async () => {
        if (currentIndex < Slide.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        } else {
            try {
                await AsyncStorage.setItem('@viewedOnBoarding', 'true');
            } catch (err) {
                console.log('Error @setItem: ', err);
            };
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: color.blue, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={Slide}
                    renderItem={({ item }) => <OnBoardingItem item={item} onPress={scrollTo} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
            <Paginator data={Slide} scrollX={scrollX} />
        </View>
    );
}
