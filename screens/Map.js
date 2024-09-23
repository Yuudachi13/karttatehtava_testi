import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';

export default function Map(props) {
    const [markers, setMarkers] = useState([])

    const showMarker = (e) => {
        const coords = e.nativeEvent.coordinate
        setMarkers((currentMarkers) => [...currentMarkers, coords])
    }

    return (
        <MapView
        style={styles.map}
        region={props.location}
        //mapType="satellites"
        onLongPress={showMarker}  
    >
        {markers.map((marker, index) => (
            <Marker
                key={index}
                title={`Marker ${index + 1}`}
                coordinate={{
                    latitude: marker.latitude,
                    longitude: marker.longitude,
                }}
            />
        ))}
    </MapView>
            
        )
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    }
})