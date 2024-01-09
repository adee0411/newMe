import { List, ListItem, Typography } from "@mui/joy";
import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <List orientation="horizontal" sx={{ justifyContent: "space-around" }}>
      <ListItem>
        <Link to="/dashboard">
          <Typography component="span" color="primary">
            Dashboard
          </Typography>
        </Link>
      </ListItem>
      {/*}
      <ListItem>
        <Link to="/calorie-calculator">
          <Typography component="span" color="primary">
            Kalória kalkulátor
          </Typography>
        </Link>
      </ListItem>
      <ListItem>
        <Link to="/diet-planner">
          <Typography component="span" color="primary">
            Diéta tervező
          </Typography>
        </Link>
      </ListItem>
      <ListItem>
        <Link>
          <Typography component="span" color="primary">
            Link
          </Typography>
        </Link>
      </ListItem>
  */}
    </List>
  );
};

export default NavLinks;
