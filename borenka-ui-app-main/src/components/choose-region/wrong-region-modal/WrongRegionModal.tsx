import { useContext } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import classes from "./index.module.scss";
import { ContextApi } from "../../../context-api/upload-context";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "600px",
  backgroundColor: "white",
  border: "none",
  padding: "30px",
  borderRadius: "10px",
  fontFamily: "Pangolin",
  color: "var(--secondary)",
  opacity: 0.9,
};

export const WrongRegionModal = () => {
  const handleClose = () => setIsWrongModalOpen(false);
  const { setIsWrongModalOpen, isWrongModalOpen }: any = useContext(ContextApi);
  return (
    <div>
      <Modal
        onClick={() => setIsWrongModalOpen(false)}
        open={isWrongModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.container}>
            <h1>Одберете некоја од опожарените области!</h1>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
