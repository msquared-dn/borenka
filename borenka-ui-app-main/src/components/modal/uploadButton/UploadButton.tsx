import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import classes from "./UploadButton.module.scss";
import { useState, useContext } from "react";
import Compressor from "compressorjs";
import { uploadToDrive } from "./api";
import { useParams } from "react-router-dom";
import { getRegionById } from "../../utils/getRegionById";
import { ContextApi } from "../../../context-api/upload-context";

interface RegionData {
  name: string;
  id: string;
  image: string;
  imageName: string;
}

interface Props {
  isValid: boolean,
}

export default function UploadButton({
  isValid,
  setInputs,
  setInputsTouched,
  inputs,
}: {
  isValid: boolean;
  setInputs: any;
  setInputsTouched: any;
  modalCloseHandler?: any;
  inputs: any;
}) {
  const { setPopupMessage, setOpenModalMobile }: any = useContext(ContextApi);

  const { regionId } = useParams();

  const region: RegionData | undefined = getRegionById(regionId);

  const imageRegionName = region?.imageName;

  const [isLoading, setIsLoading] = useState(false);
  const handleCompressedUpload = (e: any) => {
    const image = e.target.files[0];
    new Compressor(image, {
      quality: 0.8,
      maxWidth: 600,
      success: (compressedResult) => {
        uploadImageToDrive(compressedResult);
      },
    });
  };

  const uploadImageToDrive = async (image: any) => {
    setIsLoading(true);

    const timeStamp = Date.now();
    const formData = new FormData();
    const imageName = `${imageRegionName}_${inputs.name}_${inputs.treeName}_${timeStamp}`;
    formData.append("image", image, imageName);

    try {
      const done = await uploadToDrive(formData);
      if (done) {
        setPopupMessage({
          isVisible: true,
          severity: "success",
          message: "Успешно посадено дрво",
        });
        setInputsTouched({ name: false, treeName: false });
        setInputs({ name: "", treeName: "" });
      } else {
        setPopupMessage({
          isVisible: true,
          severity: "error",
          message: "Невалиден формат. Обиди се повторно!",
        });
      }
    } catch (error) {
      setPopupMessage({
        isVisible: true,
        severity: "error",
        message: "Проблем! Обиди се повторно",
      });
      console.log(error)
    } finally {
      setTimeout(() => {
        setPopupMessage({ isVisible: false, severity: "", message: "" });
      }, 5000);
      setIsLoading(false);
      setOpenModalMobile(false);
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <CircularProgress sx={{ color: "#728823" }} />
      </div>
    );
  }

  return (
    <Stack
      className={classes.container}
      direction="row"
      alignItems="center"
      spacing={2}
    >
      <Button
        className={classes.button}
        variant="contained"
        component="label"
        disabled={!isValid}
      >
        Прикачи слика
        <input
          onChange={handleCompressedUpload}
          hidden
          accept="image/*"
          multiple
          type="file"
          id="file"
        />
      </Button>
    </Stack>
  );
}
