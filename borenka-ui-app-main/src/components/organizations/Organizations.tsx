import classes from "./organizations.module.scss";
import { useNavigate } from "react-router-dom";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";
import LogoWhite from "../../static/logo-white.svg";
import LogoScouts from "../../static/LogoScouts.png";
import LogoNacionalniShumi from "../../static/LogoNacionalniShumi.png";
import LogoZivotnaSredina from "../../static/LogoZivotnaSredina.png";
import LogoZemjodelstvo from "../../static/LogoZemjodelstvo.png";
import LogoUSA from "../../static/LogoUSA.png";
import { motion as m } from "framer-motion";
import LogoTelekom from "../../static/LogoTelekom.svg";
import LogoHrIzvidnici from "../../static/LogoHrIzvidnici.png";
import LogoHr from "../../static/LogoHr.png";
import diageoLogo from "../../static/diageoLogo.png";
import ladnaLogo from "../../static/ladnaLogo.png";

const Organizations = () => {
  const navigate = useNavigate();
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={classes.container}
    >
      <section className={classes["section-one"]}>
        <img
          src={LogoWhite}
          alt="Logo-white"
          className={classes["logo_organizations"]}
          onClick={() => navigate("/home")}
        />
        <ReplyAllIcon
          sx={{ fontSize: "60px" }}
          className={classes.backNavigation}
          onClick={() => navigate("/home")}
        />
        <div className={classes.details}>
          <button
            onClick={() => navigate("/home")}
            className={classes["back-button__mobile"]}
          >
            Оди назад
          </button>
          <h1>ЗА ОРГАНИЗАТОРИТЕ</h1>
          <h2>Сојуз на извидници на Македонија</h2>
          <h2>
            ИЗВИДНИЦИТЕ СЕ НАЈГОЛЕМОТО И НАЈМОЌНОТО МЛАДИНСКО ДВИЖЕЊЕ ВО СВЕТОТ
            СО НАД 60 МИЛИОНИ ЧЛЕНОВИ
          </h2>
          <m.p
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Мисијата на Сојузот на Извидници на Македонија е да придонесе во
            образованието на младите луѓе, низ систем на вредности засновани врз
            Извидничкиот Завет и Закони, да помогне и изгради подобар свет каде
            што луѓето се самоисполнети како индивидуи и имаат конструктивна
            улога во општествотo.
            <br />
            <br />
            Програмата на СИМ обединува најразлични теми како дел од
            едукативната патека на секој извидник. Преку активностите, членовите
            се стекнуваат со животни вештини, вештини за лидерство, способност
            за работа во тимови, лидерство, висока свест за животната средина,
            одговорност, дисциплина и вистински животни вредности.
          </m.p>
        </div>
      </section>
      <section className={classes["section-two"]}>
        <div className={classes.details}>
          <h1>Јавно претпријатие</h1>
          <h1>НАЦИОНАЛЈИ ШУМИ - во партнерство со природата</h1>
          <h2>
            ПРЕТПРИЈАТИЕ КОЕ СТОПАНИСУВА СО ШУМИ И ШУМСКО ЗЕМЈИШТЕ ВО
            СОПСТВЕНОСТ НА РС МАКЕДОНИЈА
          </h2>
          <m.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Шумите се природно добро од општ интерес, а стопанисувањето со
            шумите е дејност од јавен интерес. Со Законот за шуми утврдени се
            основните дејности, а тоа се:
            <br />
            - Стопанисување со шумите во државна сопственост, во што спаѓа
            одгледување, заштита и користење на шумите, со чие извршување
            претпријатието треба да обезбеди трајно зачувување и зголемување на
            вредноста на шумите, како и постојано зголемување на нивниот прираст
            и на нивните општокорисни функции.
            <br />- Претпријатието врши и други дејности, кои се во врска со
            основните дејности, а придонесуваат за подобро искористување на
            капацитетите на претпријатието. Такви дејности се: лов, одгледување
            на дивеч, собирање и доработка на други шумски производи, ловен
            туризам и др.
          </m.p>
        </div>
      </section>

      <section className={classes["section-four"]}>
        <m.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className={classes["organizations-logo"]}
        >
          <h1>Организатори</h1>
          <img src={LogoScouts} alt="logo-scoutss" />
          <img src={LogoNacionalniShumi} alt="logo-nacionalni-shumi" />
          <h1>Покровители</h1>
          <img src={LogoZivotnaSredina} alt="logo-zivotna-sredina" />
          <img src={LogoZemjodelstvo} alt="logo-zemjodelstvo" />
          <br />
          <h1>Главни поБОРници</h1>
          <img src={LogoTelekom} alt="telekom-logo" />
          <img src={LogoUSA} alt="LogoUSA" />
          <br />
          <div className={classes.hr}>
            <img
              src={LogoHrIzvidnici}
              alt="LogoHrIzvidnici"
              className={classes.hrIzvidnici}
            />
            <img src={LogoHr} alt="LogoHr" />
          </div>
          <img src={ladnaLogo} alt="ladnaLogo" />
          <img src={diageoLogo} alt="diageoLogo" />
        </m.div>
      </section>
    </m.div>
  );
};

export default Organizations;
