import AugmentedRealityView from "./components/AugmentedRealityView";
import { UnsupportedReason, useAugmentedReality } from "./useAugmentedReality";

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
  <button type="button" onClick={props.onStartSelected}>
    Start AR session
  </button>
);

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
  return support.isSupported ? (
    <div>
      <Default />
    </div>
  ) : (
    <div>Browser not supported</div>
  );
}

export default App;
