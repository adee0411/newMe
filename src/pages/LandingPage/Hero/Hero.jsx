import classes from "./Hero.module.scss";
import { Grid, Typography, Link } from "@mui/joy";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveFormIndex } from "../../../store/profileSlice";

const Hero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createNewProfile = (e) => {
    e.preventDefault();

    navigate("/new-profile");
    dispatch(setActiveFormIndex(0));
  };
  return (
    <div className={classes["hero-container"]}>
      <Grid container columns={2} height="100%" gap="2rem" mt={12}>
        <Grid flex={1}>
          <div className={classes["hero-content"]}>
            <div className={classes["hero-content__title"]}>
              <Typography level="title-lg" color="primary" fontWeight="lg">
                newMe<sup>&#174;</sup>
              </Typography>
              <Typography level="h1" fontSize={72} fontWeight="xl" mb="2rem">
                Újulj meg tudatosan!
              </Typography>
              <Typography
                level="h2"
                color="neutral"
                lineHeight={1.5}
                fontWeight={400}
              >
                Ha a céljaid már meg vannak, csak egy társ kell, hogy
                megvalósíthasd!
              </Typography>
            </div>
            <div className={classes["hero-content__description"]}>
              <Typography level="body-lg" lineHeight={1.8} color="neutral">
                A{" "}
                <Typography
                  component="span"
                  color="primary"
                  fontWeight="lg"
                  fontSize="1.5rem"
                >
                  newMe<sup>&#174;</sup>
                </Typography>{" "}
                alkalmazás segítségével nem leszel egyedül: segít nyomon követni
                a fejlődésed, bármikor új célokat tűzhetsz ki, finomhangolhatod
                őket, mindezt a legfelhasználó-barátabb módon - bármilyen eszköz
                legyen is a kezedben!{" "}
              </Typography>
            </div>
            <div>
              <Grid container gap={4}>
                <Grid>
                  <Link
                    onClick={createNewProfile}
                    component="button"
                    variant="solid"
                    color="primary"
                    borderRadius="sm"
                    p={2}
                    fontWeight={800}
                    underline="none"
                  >
                    Máris kezdem!
                  </Link>
                </Grid>
                <Grid>
                  <Link
                    component="button"
                    variant="outlined"
                    color="primary"
                    borderRadius="sm"
                    p={2}
                    fontWeight={800}
                    underline="none"
                  >
                    Több info{" "}
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid flex={1}>
          <div className={classes["hero-bg"]}></div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
