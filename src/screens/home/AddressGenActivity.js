import React, { useState } from "react";
import { View, Image, SafeAreaView, Dimensions, Text } from "react-native";
import { Separators, Buttons, Lists, Header } from "_components";
import Carousel from 'react-native-snap-carousel';

import styles from "./ModuleStyles";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').width;

const ITEM_WIDTH = Math.round(windowWidth * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [];
for (let i = 0; i < 10; i++) {
    DATA.push(i)
}
const AddressActivity = ({ navigation }) => {
    const [index, setIndex] = useState(0);
    const renderSlides = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.carouselHeading}>
                    <Text style={styles.carouselHeadingText}>Address Generation</Text>
                </View>
                <View style={styles.carouselTextContainer}>
                    <Text style={styles.carouselText}>
                        All the information will be in these cards which can be swiped right and left to move forward and back. They will be broken down in snippets as thats how people retain the most. mixture of videos, pictures and text. preferably one picture and some text like like card because people remember pictures more easily and by relating it to the accompanying text, retention will be even more.
                </Text>
                </View>
            </View>
        );
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Address Generation</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>A short description of what the topics that this module covers. cannto be longer than this much. </Text>
            </View>
            <View style={styles.addressImage}>
                <Image source={require("_assets/addressImage.png")} />
            </View>
            <View style={styles.addressNextButton}>
                <Buttons.Next fill={true} label={"Generate Address"} />
            </View>
        </SafeAreaView>
    )
}

export default AddressActivity;