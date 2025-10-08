import Lottie from "lottie-react";
import emptyInstallation from "../Lottie/emptyInstallation.json";
const NoInstalledApp = () => {
  return (
    <div className="flex justify-center">
      <Lottie
        animationData={emptyInstallation}
        loop={true}
        className="w-120 h-120"
      />
    </div>
  );
};

export default NoInstalledApp;
