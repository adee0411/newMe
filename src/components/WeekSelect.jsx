import { Select, Option } from "@mui/joy";

const WeekSelect = ({ data, currentWeek, onCurrentWeekSelect }) => {
  const numOfBlocks = data.length / 7;
  return (
    <Select
      value={currentWeek}
      onChange={onCurrentWeekSelect}
      size="sm"
      variant="soft"
      sx={{ height: 24 }}
    >
      {new Array(numOfBlocks).fill(null, 0).map((el, i) => {
        return <Option value={i + 1}>{i + 1}</Option>;
      })}
    </Select>
  );
};

export default WeekSelect;
