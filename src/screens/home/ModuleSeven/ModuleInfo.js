import React, { useState, useRef } from "react";
import { View, Image, SafeAreaView, Dimensions, Text, Alert } from "react-native";
import { Buttons, Lists, Header } from "_components";
import Carousel from 'react-native-snap-carousel';
import YouTube from 'react-native-youtube';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BeaconContext from '../../../constants/contextAPI';
import styles from "./styles";

const windowWidth = Dimensions.get('window').width;

const ModuleInfo = ({ route, navigation }) => {
    const { refresher } = React.useContext(BeaconContext);
    const { moduleName, nextModule, moduleData } = route.params;

    const [index, setIndex] = useState(0);
    const carouselRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const onStateChange = React.useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("You may proceed now!");
        }
    }, []);

    const renderSlides = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.carouselHeading}>
                    <Text style={styles.carouselHeadingText}>{item.heading}</Text>
                </View>

                {item.image ?
                    <View style={styles.cardImage}>
                        {item.image}
                    </View>
                    : null
                }


                <View style={styles.carouselTextContainer}>
                    <Text style={styles.carouselText}>
                        {item.text}
                    </Text>
                </View>


            </View>
        );
    }
    return (
        <SafeAreaView style={styles.mainContainer}>
            <Header.Default />
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Anatomy of a Transaction</Text>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Now that you know about blocks and mining. Let’s take a look at some actual transaction and see what they’re made of. </Text>
            </View>
            <View style={styles.carouselContainer}>
                <Carousel
                    ref={carouselRef}
                    data={moduleData}
                    layout={"default"}
                    renderItem={renderSlides}
                    sliderWidth={windowWidth}
                    itemWidth={295}
                    onSnapToItem={(index) => setIndex(index)}
                    useScrollView={false}
                />
            </View>
            <View style={styles.moduleInfoNextButton}>
                {index === moduleData.length - 1 ?
                    <Buttons.Next fill={true} label={"Done"} onPress={() => {
                        AsyncStorage.setItem(moduleName, "100");
                        AsyncStorage.setItem(nextModule, "1");
                        refresher();
                        navigation.navigate("@home")
                    }} />
                    : <Buttons.Next fill={true} label={"Next"} onPress={() => carouselRef.current.snapToNext()} />}
            </View>
        </SafeAreaView >
    )
};

export default ModuleInfo;
