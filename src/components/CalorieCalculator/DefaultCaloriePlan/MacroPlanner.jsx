import { Sheet, Typography, Tabs, Tab, TabList, TabPanel } from "@mui/joy";

const MacroPlanner = () => {
  return (
    <Sheet>
      <Typography level="h4" component="h4" color="primary">
        Macro Planner
      </Typography>
      <Tabs defaultValue={1}>
        <TabList tabFlex={1} size="sm">
          <Tab color="primary">Cutting</Tab>
          <Tab color="primary">Maintenance</Tab>
          <Tab color="primary">Bulking</Tab>
        </TabList>
        <TabPanel value={0}>t1</TabPanel>
        <TabPanel value={1}>t2</TabPanel>
        <TabPanel value={2}>t3</TabPanel>
      </Tabs>
    </Sheet>
  );
};

export default MacroPlanner;
