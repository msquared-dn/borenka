import classes from "./region.module.scss";
import { useParams } from "react-router-dom";
import UploadModal from "../modal/UploadModal";
import { useNavigate } from "react-router-dom";
import Logo from "../../static/Logo.svg";
import { UploadModalMobile } from "../modal/UploadModalMobile";
import { MobileDrawer } from "../home/HomeMobileDrawerMenu";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { getRegionById } from "../utils/getRegionById";

interface RegionData {
  name: string;
  id: string;
  image: string;
}
const Region = () => {
  const { regionId } = useParams();
  const navigate = useNavigate();

  const region: RegionData | undefined = getRegionById(regionId);
  const regionImage: string | undefined = region?.image;
  const regionName: string | undefined = region?.name;

  return (
    <div className={classes.container}>
      <div className={classes["container__header"]}>
        <ReplyAllIcon
          sx={{ fontSize: "60px" }}
          className={classes.backNavigation}
          onClick={() => navigate("/map")}
        />
        <img
          className={classes.logo}
          src={Logo}
          alt="Region"
          onClick={() => navigate("/home")}
        />
        <h1 className={classes.regionNameDesktop}>{regionName}</h1>

        <MobileDrawer />
      </div>
      <h2 className={classes.regionNameMobile}>{regionName}</h2>
      <UploadModalMobile />
      <div className={classes.uploadSection}>
        <div className={classes.desktopModal}>
          <UploadModal />
        </div>
        <img className={classes.region} src={regionImage} alt={region?.id} />
      </div>
    </div>
  );
};
export default Region;