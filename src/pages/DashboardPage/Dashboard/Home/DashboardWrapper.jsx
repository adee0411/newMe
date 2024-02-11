import { Typography } from "@mui/joy";

const DashboardWrapper = ({ title, children }) => {
  return (
    <div
      style={{
        padding: "24px",
        marginTop: "16px",
      }}
    >
      <header style={{ marginBottom: "12px" }}>
        <Typography level="h3" color="neutral">
          {title}
        </Typography>
      </header>
      <div style={{ height: "650px", overflow: "hidden auto" }}>
        {" "}
        {children}
      </div>
    </div>
  );
};

export default DashboardWrapper;
