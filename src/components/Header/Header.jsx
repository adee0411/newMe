import { Link } from "react-router-dom";
import { Sheet, Typography } from "@mui/joy";
const Header = () => {
  return (
    <header>
      <Sheet
        color="primary"
        variant="solid"
        invertedColors
        sx={{ padding: "0.5rem 2rem" }}
      >
        {" "}
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography level="h1" display="inline-block">
            newMe
          </Typography>
        </Link>
      </Sheet>
    </header>
  );
};

export default Header;
