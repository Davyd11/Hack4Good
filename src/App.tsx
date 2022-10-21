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

function App() {
  const { support } = useAugmentedReality();
  return support.isSupported ? (
    <div>
      <AugmentedRealityView
        unsupportedComponent={ReasonDisplay}
        startStopComponent={ARStartButton}
      />
    </div>
  ) : (
    <div>Browser not supported</div>
  );
}

export default App;
