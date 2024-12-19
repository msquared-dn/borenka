import classes from "./home.module.scss";
import tree from "../../static/tree.png";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../static/Logo.svg";
import { MobileDrawer } from "./HomeMobileDrawerMenu";
import ParkIcon from "@mui/icons-material/Park";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion as m } from "framer-motion";

// TODO: ADD FAVICON TO BE WITH URL SO IT CAN BE VISIBLE ON GOOGLE SEARCH

const pages = [
  { label: "Дома", path: "/home" },
  { label: "За нас", path: "/about" },
  { label: "Организатори", path: "/organizations" },
  { label: "Засади дрво", path: "/map" },
  { label: "Контакт", path: "/contact" },
];

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const animation = (
    <div className={classes.treeCircle} onClick={() => navigate("/map")}>
      <ParkIcon />
      <div className={`${classes.circle} ${classes.circle1}`}>Засади дрво</div>
      <div className={`${classes.circle} ${classes.circle2}`}>Засади дрво</div>
      <div className={`${classes.circle} ${classes.circle3}`}>Засади дрво</div>
    </div>
  );

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={classes.container}
    >
      <div className={classes.socialMedia}>
        <a href="https://www.instagram.com/scoutsmacedonia/?hl=en">
          <InstagramIcon />
        </a>
        <a href="https://www.facebook.com/borenkamk">
          <FacebookIcon />
        </a>
      </div>
      <div className={classes.navbar}>
        <div className={classes.navigations}>
          <>
            {pages.map((page) => (
              <span
                key={page.path}
                className={page.path === pathname ? classes.active : ""}
                onClick={() => navigate(page.path)}
              >
                {page.label}
              </span>
            ))}
          </>
        </div>
        <img src={Logo} alt="Logo" className={classes.navbar__logo} />
        <MobileDrawer />
      </div>
      <img className={classes.tree} src={tree} alt="tree" />
      <h2>
        Нацртај дрво, засади го во виртуелната шума и стани дел од БОРЕНКА -
        иницијатива за пошумување на опожарени подрачја во РС Македонија
      </h2>
      {animation}
    </m.div>
  );
};
export default Home;