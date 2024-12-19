import CircularProgress from "@mui/material/CircularProgress";
import classes from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={classes.loader}>
      <CircularProgress sx={{ color: "#F9A01B" }} />
    </div>
  );
};

export default Loader;
