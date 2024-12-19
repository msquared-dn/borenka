import { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import classes from "./modal-instructions.module.scss";

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
  color: "var(--primary)",
  opacity: 0.9,
};

export const ModalInstructions = () => {
  const handleClose = () => setIsModalOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("modalInstruction")) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
      setTimeout(() => {
        localStorage.setItem("modalInstruction", "false");
      }, 10);
    }
  }, []);

  return (
    <div>
      <Modal
        onClick={() => setIsModalOpen(false)}
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={classes.container}>
            <h1>Посади дрво и стани дел од Боренка</h1>
            <p>
              Изберете опожарено подрачје, кликнете и посадете го виртуелното
              дрво, со ваше име и посакувано име на дрво...
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
