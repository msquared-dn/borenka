import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { ContextApi } from "../../context-api/upload-context";
import UploadModal from "./UploadModal";
import classes from "./UploadModalMobile.module.scss";
import { useContext } from "react";
import Alert from "@mui/material/Alert";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
};

export const UploadModalMobile = () => {
  const { setOpenModalMobile, openModalMobile, popupMessage }: any =
    useContext(ContextApi);

  const handleOpen = () => setOpenModalMobile(true);
  const handleClose = () => setOpenModalMobile(false);

  return (
    <div className={classes["modal__container--mobile"]}>
      <Button onClick={handleOpen}>Посади дрво</Button>
      {popupMessage.isVisible && (
        <Alert
          className={classes.alert}
          severity={popupMessage.severity as any}
        >
          {popupMessage.message}
        </Alert>
      )}
      <Modal
        open={openModalMobile}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UploadModal />
        </Box>
      </Modal>
    </div>
  );
};
