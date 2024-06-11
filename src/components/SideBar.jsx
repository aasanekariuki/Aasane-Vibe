import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function SideBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div>

      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          ".MuiDrawer-paper": {
            background:
              "url(https://media.gettyimages.com/id/646726226/photo/cheering-on-their-favourite-band.jpg?s=612x612&w=0&k=20&c=M9bdSpv7F13mmQfOpPxqJSRwMM7JAZPd3dNHAS2V094=)",
            color: "#FFFFFF",
            width: 250,
            fontFamily: "Times New Roman, serif",
          },
        }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {/* ListItem with button prop renders as a <button> */}
            <ListItem
              button
              sx={{
                "&:hover": {
                  background: "#E040FB",
                },
              }}
            >
              <ListItemText
                primary="HOME"
                sx={{ fontSize: "1.2rem", fontWeight: 700 }}
              />
            </ListItem>
            <ListItem
              button
              sx={{
                "&:hover": {
                  background: "#E040FB",
                },
              }}
            >
              <ListItemText
                primary="LIKED"
                sx={{ fontSize: "1.2rem", fontWeight: 700 }}
              />
            </ListItem>
            <ListItem
              button
              sx={{
                "&:hover": {
                  background: "#E040FB",
                },
              }}
            >
              <ListItemText
                primary="PLAYLIST"
                sx={{ fontSize: "1.2rem", fontWeight: 700 }}
              />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
}

export default SideBar;
