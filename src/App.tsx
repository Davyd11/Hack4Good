import AugmentedRealityView from "./components/AugmentedRealityView";
import { UnsupportedReason, useAugmentedReality } from "./useAugmentedReality";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
const ReasonDisplay = (props: any) => {
  switch (props.reason) {
    case UnsupportedReason.NotSupportedInBrowser:
      return <div>A custom not supported in the browser message</div>;
    case UnsupportedReason.InsecureConnection:
      return <div>A custom insecure connection message</div>;
    default:
      return <div />;
  }
};

const ARStartButton = (props: any) => (
  <button
    type="button"
    onClick={props.onStartSelected}
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "30px",
      borderRadius: "20px",
      border: "none",
      backgroundColor: "rgb(31 41 55)",
      color: "white",
      padding: "10px 30px",
    }}
  >
    Dive into AR
  </button>
);

let map: google.maps.Map;

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 3,
      center: {lat: 37.772, lng: -122.214 },
      mapTypeId: "terrain",
    }
  );

  const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
  

export const Default = () => {
  const images = [
    {
      key: "1",
      src: "https://raw.githubusercontent.com/immersive-web/webxr-samples/main/media/gltf/space/space.gltf",
    },
  ];
  return (
    <AugmentedRealityView
      unsupportedComponent={ReasonDisplay}
      startStopComponent={ARStartButton}
      images={images}
      showStats={false}
    />
  );
};

function App() {
  const { support } = useAugmentedReality();
  return (

    <Wrapper apiKey='AIzaSyCrm66rPp3wgWtjxZP-x8ardmhsXtI-gSg'  render={render}>
      <div id="map" style={{ width: "100%", height: "100%" }} />
    </Wrapper>

     
  
  );
}

export default App;
