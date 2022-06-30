import {SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {
  Circle,
  Heatmap,
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
} from 'react-native-maps';
import {styles} from './style';
import MapView from 'react-native-map-clustering';

export function MapScreen() {
  const coordinates = [
    {
      latitude: 28.601388,
      longitude: 77.362762,
    },
    {
      latitude: 28.606808,
      longitude: 77.362152,
    },
    {
      latitude: 28.606057,
      longitude: 77.362375,
    },

    {
      latitude: 28.605862,
      longitude: 77.368335,
    },
    {
      latitude: 28.605768,
      longitude: 77.370231,
    },
    {
      latitude: 28.605751,
      longitude: 77.372115,
    },
    {
      latitude: 28.605846,
      longitude: 77.372452,
    },
    {
      latitude: 28.60585,
      longitude: 77.372454,
    },
    {
      latitude: 28.606918,
      longitude: 77.372495,
    },
    {
      latitude: 28.607067,
      longitude: 77.372521,
    },
    {
      latitude: 28.60745,
      longitude: 77.372645,
    },
    {
      latitude: 28.607924,
      longitude: 77.372674,
    },
  ];

  const colors = [
    '#000000',
    '#0188FF',
    '#00DBD0',
    '#005B57',
    '#23CCD2',
    '#116900',
  ];

  const [marker, setMarker] = React.useState({
    latitude: 28.604057,
    longitude: 77.362375,
  });

  const [route, setRoute] = React.useState([]);

  useEffect(() => {
    setRoute([...route, marker]);
  }, [marker]);

  return (
    <SafeAreaView>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        maxZoomLevel={20}
        minZoomLevel={1}
        initialRegion={{
          latitude: 28.606077,
          longitude: 77.367275,
          latitudeDelta: 4.171,
          longitudeDelta: 4.1871,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onPress={x => {
          setMarker(x.nativeEvent.coordinate);
        }}>
        {coordinates.map((item, index) => {
          return <Marker coordinate={item} key={index} />;
        })}
        <Marker coordinate={marker} pinColor="#0f0" />
        <Polyline coordinates={route} strokeColors={colors} />

        <Circle
          center={{
            latitude: 28.305528,
            longitude: 77.36732,
          }}
          radius={6000}
          strokeColor="#f00"
          strokeWidth={3}
        />

        <Heatmap
          points={[
            {
              latitude: 28.305528,
              longitude: 77.36732,
              weight: 20,
            },
            {
              latitude: 28.303528,
              longitude: 77.36732,
              weight: 17,
            },
            {
              latitude: 28.301528,
              longitude: 77.36732,
              weight: 14,
            },
          ]}
          radius={180}
        />
      </MapView>
    </SafeAreaView>
  );
}
