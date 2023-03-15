import { GeolocationControl, Map, Placemark, RulerControl, TrafficControl, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import styled from "styled-components";

export const MapComponent = () => {
    const defaultState = {
        center: [59.925498, 30.379316],
        zoom: 15,
      };
    
      return (
        <MapWrapper>
            <YMaps>
            <Map width={'100%'} height={'100%'} defaultState={defaultState}>
                <ZoomControl options={{ size: 'small'}}/>
                <RulerControl />
                <TrafficControl />
                <GeolocationControl />
                <Placemark geometry={[59.925498, 30.379316]} />
            </Map>
            </YMaps>
        </MapWrapper>
      );
}

const MapWrapper = styled.div`
    height: 470px;
`
