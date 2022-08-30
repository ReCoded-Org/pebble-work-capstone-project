import { Combobox } from "@headlessui/react";
import {
    GoogleMap,
    InfoWindow,
    MarkerF,
    useLoadScript,
} from "@react-google-maps/api";
import { useCallback } from "react";
import { useRef, useState } from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";

const libraries = ["places"];
const center = {
    lat: 43.6532,
    lng: -79.3832,
};

function Map({ location }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA6fZUJ5sQvINReBDOxFAW5Qh3RRs4Askc",
        libraries,
    });

    const [marker, setMarker] = useState([]);
    const [selected, setSelected] = useState(null);

    const onClickMap = (e) => {
        setMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        });
    };

    let mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef = map;
    }, []);

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.panTo({ lat, lng });
        mapRef.setZoom(14);
    }, []);

    if (!isLoaded) return <div>Loading...</div>;
    console.log(marker);
    location = marker;
    console.log(location.lat);
    console.log(location.lng);
    return (
        <div className='h-[400px]'>
            <GoogleMap
                zoom={10}
                center={center}
                mapContainerClassName='w-full h-full'
                onClick={onClickMap}
                onLoad={onMapLoad}
            >
                <MarkerF
                    onClick={() => {
                        setSelected(marker);
                    }}
                    position={{ lat: marker.lat, lng: marker.lng }}
                />
                {selected ? (
                    <InfoWindow
                        position={{ lat: selected.lat, lng: selected.lng }}
                        onCloseClick={() => setSelected(null)}
                    >
                        <div>adres falan</div>
                    </InfoWindow>
                ) : null}
                <div className='m-2'>
                    <Search panTo={panTo} />
                </div>
            </GoogleMap>
        </div>
    );
}

function Search({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => data.lat, lng: () => data.lng },
            radius: 100 * 1000,
        },
    });

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        console.log(address);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
        } catch (error) {
            console.log("😱 Error: ", error);
        }
    };

    return (
        <div className=' left-1/2 top-4 z-10 w-full max-w-[400px] translate-x-1/2'>
            <Combobox onChange={handleSelect}>
                <Combobox.Input
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                />
                <Combobox.Options>
                    {status === "OK" &&
                        data.map(({ id, description }) => (
                            <Combobox.Option key={id} value={description}>
                                {description}
                            </Combobox.Option>
                        ))}
                </Combobox.Options>
            </Combobox>
        </div>
    );
}
export default Map;
