import { Link } from "react-router-dom";
import { Typography } from "@mui/joy";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <Typography
          component="span"
          color="primary"
          fontSize={32}
          fontWeight={800}
        >
          New Me
        </Typography>
      </Link>
    </div>
  );
};

export default Logo;
