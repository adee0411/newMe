import { Stack, Typography, Grid } from "@mui/joy";

import { Link } from "react-router-dom";

import classes from "../CalorieOverview/WeekStats.module.scss";
import { useSelector } from "react-redux";
import { useMemo } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const WeekStats = ({ weightDataSlice }) => {
  const { selectedDate } = useSelector((state) => state.profileData);

  return (
    <>
      <Grid columns={7} container width="100%">
        {weightDataSlice.map((data) => {
          return (
            <Grid
              lg={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={data.id}
            >
              <Link
                to={data.data.date}
                className={`${classes["weekstat-link"]} ${
                  selectedDate === data.data.date
                    ? classes["weekstat-link--selected"]
                    : ""
                }`}
              >
                <Stack spacing={2}>
                  <Typography fontSize={12} textAlign="center" color="neutral">
                    {data.data.date
                      .split("-")
                      .filter((_, i) => i !== 0)
                      .join(".") + "."}
                  </Typography>

                  <Typography
                    level="title-lg"
                    textAlign="center"
                    color="neutral"
                  >
                    {data.data.weight} kg
                  </Typography>
                  <Typography
                    textAlign="center"
                    level="body-sm"
                    color={
                      data.weightChange === "-"
                        ? "neutral"
                        : data.weightChange > 0
                        ? "danger"
                        : "success"
                    }
                  >
                    {data.weightChange === "-" ? (
                      ""
                    ) : data.weightChange > 0 ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                    {data.weightChange} kg
                  </Typography>
                </Stack>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default WeekStats;
