import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getMapMarkers } from '../../service/http/markers/getAllMarkers';

const Locations = () => {
  const [markers, setMarkers] = useState<any>([]);
  useEffect(() =>{
    getmarkers()
  }, [])

  const getmarkers = async () => {
    await getMapMarkers()
        .then((res: any) => {
          setMarkers(res)
        })
        .catch(err => {
            console.error(err)
        })
  }

  return (
    <>
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={{
          latitude: markers?.[0]?.latitude | -22.891252,
          longitude: markers?.[0]?.longitude | -43.223551,
          latitudeDelta: 1,
          longitudeDelta: 1 ,
        }}>
          {markers.map((item: any, i: number) => (
            <Marker key={i} coordinate={{
              latitude: item?.latitude,
              longitude: item?.longitude
            }}/>
          ))}
        </MapView>
      </View>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  map:{
    width: '100%',
    height: '100%',
  }
});

export default Locations
