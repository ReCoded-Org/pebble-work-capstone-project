import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

// const center = {
//     lat: 43.6532,
//     lng: -79.3832,
// };

function Map({ latitude, longitude }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA6fZUJ5sQvINReBDOxFAW5Qh3RRs4Askc",
    });
    if (!isLoaded) return <div>Loading...</div>;
    return (
        <div className='h-[400px]'>
            <GoogleMap
                zoom={10}
                mapContainerClassName='w-full h-full'
                center={{
                    lat: latitude,
                    lng: longitude,
                }}
            >
                <MarkerF
                    position={{
                        lat: latitude,
                        lng: longitude,
                    }}
                />
            </GoogleMap>
        </div>
    );
}

export default Map;
