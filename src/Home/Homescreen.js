import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, { Marker } from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import mapStyle from "./mapStyle";
import styles from "./styles"

const HomeScreen = (props) => {

    const [coordinates] = useState([
        {
            latitude: 48.8587741,
            longitude: 2.2069771,
        },
        {
            latitude: 48.8323785,
            longitude: 2.3361663,
        },
    ]);


    const GOOGLE_API_KEY = 'AIzaSyAjj-NqsAXEnrnaG4Xt72HoF-kfQ6gLcDk';

    return (
        <View style={styles.container}>
            <MapView
                style={styles.maps}
                customMapStyle={mapStyle}
                initialRegion={{
                    latitude: coordinates[0].latitude,
                    longitude: coordinates[0].longitude,
                    latitudeDelta: 0.0622,
                    longitudeDelta: 0.0121,
                }}>
                <MapViewDirections
                    origin={coordinates[0]}
                    destination={coordinates[1]}
                    apikey={GOOGLE_API_KEY} // insert your API Key here
                    strokeWidth={4}
                    strokeColor="#111111"
                />
                <Marker coordinate={coordinates[0]} />
                <Marker coordinate={coordinates[1]} />
            </MapView>
            <View style={styles.bottomSheet}>
                <View>
                    <Text style={styles.greenText}>82%</Text>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0.7, y: 0 }} c
                        colors={['#F33434', '#F37934', '#535353']}
                        style={styles.linearGradient}>

                    </LinearGradient>
                </View>
                <View style={styles.locations}>
                    <View style={styles.profileCard}>
                        <View style={styles.rowAlignCenter}>
                            <Image style={styles.userImage} source={require("../assets/Icons/user.png")} />
                            <Text style={styles.userName}>Max Payne</Text>
                        </View>

                        <View style={styles.rowAlignCenter}>
                            <Image style={styles.icons} source={require("../assets/Icons/message.png")} />
                            <Image style={styles.icons} source={require("../assets/Icons/phone.png")} />
                        </View>
                    </View>

                    <View style={styles.locationCard}>
                        <View style={styles.iconContainer}>
                            <Image style={{ marginTop: 15 }} source={require("../assets/Icons/location.png")} />
                            <Image style={styles.lineicon} source={require("../assets/Icons/grrenline.png")} />
                        </View>
                        <View>
                            <Text style={styles.titleGreen}>Current Location</Text>
                            <Text style={styles.desc}>4517 Washington Ave. Manchester</Text>
                        </View>
                    </View>

                    <View style={styles.locationCard}>
                        <View>
                            <Image style={styles.destinationIcon} source={require("../assets/Icons/destination.png")} />
                            <Image style={styles.yellowcon} source={require("../assets/Icons/yellowline.png")} />
                        </View>
                        <View>
                            <Text style={styles.greyText}>Current Location</Text>
                            <Text style={styles.greyDesc}>4517 Washington Ave. Manchester</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>

    );
}





export default HomeScreen;
