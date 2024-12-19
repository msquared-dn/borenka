import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ParkIcon from "@mui/icons-material/Park";
import classes from "./UploadModal.module.scss";
import UploadButton from "./uploadButton/UploadButton";
import { FormInputType } from "./types";
import { useState } from "react";
import { invalidTextInput } from "./validators";
import Alert from "@mui/material/Alert";
import { ContextApi } from "../../context-api/upload-context";
import { useContext } from "react";

const style = {
  maxWidth: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  margin: "50px",
};

export default function UploadModal() {
  const { popupMessage }: any = useContext(ContextApi);
  const [inputs, setInputs] = useState<FormInputType>({
    name: "",
    treeName: "",
  });

  const [inputsTouched, setInputsTouched] = useState({
    name: false,
    treeName: false,
  });

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const inputTouchedHandler = (e: any) => {
    setInputsTouched((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: true,
    }));
  };

  //FORM VALIDATIONS
  const inputNameIsInvalid =
    invalidTextInput(inputs.name) && inputsTouched.name;

  const inputTreeNameIsInvalid =
    invalidTextInput(inputs.treeName) && inputsTouched.treeName;

  const formIsValid =
    !invalidTextInput(inputs.name) && !invalidTextInput(inputs.treeName);

  return (
    <>
      {popupMessage.isVisible && (
        <Alert
          className={classes.alert}
          severity={popupMessage.severity as any}
        >
          {popupMessage.message}
        </Alert>
      )}
      <Box sx={style} className={classes.container}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Засади виртуелно дрво
        </Typography>
        <Box
          className={classes.box}
          sx={{ display: "flex", alignItems: "flex-end", marginBottom: "12px" }}
        >
          <AccountCircle sx={{ color: "var(--primary)", mr: 2, my: 0.5 }} />
          <TextField
            onChange={inputTextHandler}
            name="name"
            value={inputs.name}
            sx={{ width: "100%" }}
            id="input-with-sx"
            label="Име"
            variant="standard"
            onBlur={inputTouchedHandler}
          />
        </Box>
        {inputNameIsInvalid && (
          <p className={classes["input__p--error-msg"]}>
            Полето е задолжително!
          </p>
        )}
        <Box
          className={classes.box}
          sx={{ display: "flex", alignItems: "flex-end", marginBottom: "12px" }}
        >
          <ParkIcon sx={{ color: "var(--primary)", mr: 2, my: 0.5 }} />
          <TextField
            onChange={inputTextHandler}
            onBlur={inputTouchedHandler}
            name="treeName"
            value={inputs.treeName}
            sx={{ width: "100%" }}
            id="input-with-sx"
            label="Име на дрво"
            variant="standard"
          />
        </Box>
        {inputTreeNameIsInvalid && (
          <p className={classes["input__p--error-msg"]}>
            Полето е задолжително!
          </p>
        )}
        <UploadButton
          isValid={formIsValid}
          setInputs={setInputs}
          setInputsTouched={setInputsTouched}
          inputs={inputs}
        />
      </Box>
    </>
  );
}
