import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

// const center = {
//     lat: 43.6532,
//     lng: -79.3832,
// };

function SingleMap({ latitude, longitude }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCl7dEB6brqDIPJNLbd2LmtFbGUc6V8_Qk",
    });
    if (!isLoaded) return <div>Loading...</div>;
    return (
        <div className='h-[200px] w-[300px]'>
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

export default SingleMap;
