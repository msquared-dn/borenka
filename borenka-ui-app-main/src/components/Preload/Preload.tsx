import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import classes from "./Preload.module.scss";
import tree from "../../static/tree.png";
import { motion as m } from "framer-motion";

export const Preload = () => {
  const [textAnimation, setTextAnimation] = useState(true);
  return (
    <div className={classes.container}>
      {textAnimation && (
        <TypeAnimation
          sequence={[
            "Добредојдовте на Боренка!", // Types 'One'
            500, // Waits 1s
            "Засади дрво и помогни на природата...", // Deletes 'One' and types 'Two'
            500, // Waits 2s
            () => {
              setTextAnimation(false);
            },
          ]}
          wrapper="div"
          cursor={true}
          style={{ fontSize: "2em" }}
          deletionSpeed={70}
        />
      )}
      {!textAnimation && (
        <m.img
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          src={tree}
          alt="tree"
        />
      )}
    </div>
  );
};
