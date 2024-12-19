import Map from "./map/Map";
import Logo from "../../static/Logo.svg";
import { useState } from "react";
import classes from "./choose-region.module.scss";
import { useNavigate } from "react-router-dom";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { MobileDrawer } from "../home/HomeMobileDrawerMenu";
import { ModalInstructions } from "./modal-instructions/ModalInstructions";
import { WrongRegionModal } from "./wrong-region-modal/WrongRegionModal";
import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";

const ChooseRegion = () => {
  const [currentHoveredRegion, setCurrentHoveredRegion] = useState<string>(
    "Избери регион и посади виртуелно дрво"
  );
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.canvas}>
        <Canvas>
          <Sky
            distance={450000}
            sunPosition={[0, 3, 0]}
            inclination={0}
            azimuth={0.25}
          />
        </Canvas>
      </div>
      <ModalInstructions />
      <WrongRegionModal />
      <div className={classes["container__header"]}>
        <img src={Logo} alt="logo" onClick={() => navigate("/home")} />
        <MobileDrawer />

        <ReplyAllIcon
          sx={{ fontSize: "60px" }}
          className={classes.backNavigation}
          onClick={() => navigate("/home")}
        />
        <h1>{currentHoveredRegion}</h1>
      </div>
      <Map setCurrentHoveredRegion={setCurrentHoveredRegion} />
      <h1 className={classes.mobileHeading}>
        Избери регион и посади виртуелно дрво
      </h1>
    </div>
  );
};

export default ChooseRegion;
