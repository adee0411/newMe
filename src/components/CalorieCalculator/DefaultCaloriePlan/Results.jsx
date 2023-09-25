import {
  Typography,
  Sheet,
  Tooltip,
  Table,
  List,
  ListItem,
  Box,
} from "@mui/joy";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Results = () => {
  return (
    <>
      <Sheet>
        {" "}
        <List orientation="horizontal" sx={{ justifyContent: "space-between" }}>
          <ListItem
            sx={{ p: 2, borderRadius: 5 }}
            color="primary"
            variant="soft"
          >
            Item 1
          </ListItem>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 1</ListItem>
        </List>
      </Sheet>
      <Sheet>
        {/*
        <Table>
          <thead>
            <tr>
              <th>Activity</th>
              <th>Maintenence calories</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(PAL).map((pal) => {
              return (
                <tr
                  key={pal[0]}
                  style={{
                    fontStyle: `${pal[0] === stats.pal.value ? "italic" : ""}`,
                    color: `${
                      pal[0] === stats.pal.value
                        ? "var(--joy-palette-primary-500, #0B6BCB)"
                        : ""
                    }`,
                  }}
                >
                  <td>{pal[0]}</td>
                  <td>{(null * pal[1]).toFixed(0)} kcal per day</td>
                </tr>
              );
            })}
          </tbody>
        </Table> */}
      </Sheet>
    </>
  );
};

export default Results;
