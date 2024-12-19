import classes from "./contact.module.scss";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import { useNavigate } from "react-router-dom";
import Logo from "../../static/Logo.svg";

export const Contact = () => {
  const copyNumberToClipboard = () => {
    navigator.clipboard.writeText("+389 (0)2 522 455");
  };
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <img
        className={classes["logo_about-us"]}
        src={Logo}
        alt="logo"
        onClick={() => navigate("/home")}
      />
      <ReplyAllIcon
        sx={{ fontSize: "60px" }}
        className={classes.backNavigation}
        onClick={() => navigate("/home")}
      />
      <button
        onClick={() => navigate("/home")}
        className={classes["back-button__mobile"]}
      >
        Оди назад
      </button>
      <div className={classes.contentLeft}>
        <h2>Јавно претпријатие за стопанисување со државните шуми</h2>
        <h1>НАЦИОНАЛНИ ШУМИ</h1>
        <h3>Бул. Свети Климент Охридски бр. 68</h3>
        <p>02/2581-083; 02/2581-080</p>
        <p>
          <a href="http://www.mkdsumi.com.mk/">www.mkdsumi.com.mk</a>
        </p>
        <p>
          <a
            href="mailto:komunikacii@mkdsumi.com.mk
"
          >
            komunikacii@mkdsumi.com.mk
          </a>
        </p>
      </div>
      <div className={classes.contentRight}>
        <h1>Сојуз на извидници на Македонија</h1>
        <h3>ЕМБС: 4070305</h3>
        <h3>Адреса: Кукушка 4а, 1000 Скопје</h3>
        <p>
          Телефон:
          <span
            onClick={copyNumberToClipboard}
            className={classes.mobileNumber}
          >
            +389 (0)2 522 4559
          </span>
        </p>
        <p>
          E-Пошта:
          <a
            href="mailto:sim@scout.org.mk
          "
          >
            sim@scout.org.mk
          </a>
        </p>
        <p>
          Интернет страна: <a href="https://izvidnici.mk/">www.izvidnici.mk/</a>
        </p>
      </div>
    </div>
  );
};
