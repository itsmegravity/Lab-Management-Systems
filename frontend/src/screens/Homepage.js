import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  MenuItem,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  Divider,
  ListItemIcon,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tabs,
  Button,
  Tab,
} from "@mui/material";
import Header from "../components/Header";
import HiveIcon from "@mui/icons-material/Hive";
import Settings from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setLogoutDialogOpen(true);
    handleClose();
  };

  const handleLogoutConfirm = () => {
    setLogoutDialogOpen(false);
  };

  const handleLogoutCancel = () => {
    setLogoutDialogOpen(false);
  };
  const navigate = useNavigate();

  const [value, setValue] = useState();

  return (
    <>
      <Header></Header>
      <div>
        <img
          src="./images/LabImage.png"
          alt=""
          style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
        />
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            WebkitTextStroke: "1px #FFA41B",
            WebkitTextFillColor: "#ffffff",
            fontSize: "2.1rem", // Increased font size
            fontWeight: 600, // Bold font weight
            letterSpacing: "1px",
            position: "absolute",
            top: "30%", // Adjusted top position
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Add text shadow
          }}
        >
          <span>Welcome to our Lab Management System</span>. <br />
          <span>Streamline your lab's workflow with ease!</span>
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "#d96459",
            WebkitTextStroke: "1px #674d3c",
            WebkitTextFillColor: "#d96469",

            fontSize: "2.5rem",
            fontWeight: 600,
            letterSpacing: "1px",
            marginTop: "30rem", // Adjusted top margin
            textAlign: "center",
          }}
        >
          Check available labs
        </Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Button
            style={{
              padding: "0.5rem 1rem",
              marginRight: "10rem",
              fontSize: "1.5rem",
              fontWeight: 600,
              letterSpacing: "1px",
              backgroundColor: "#87bdd8",
              color: "black",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Firstfloor")}
          >
            First Floor
          </Button>

          <Button
            style={{
              padding: "0.5rem 1rem",
              marginRight: "10rem",
              fontSize: "1.5rem",
              fontWeight: 600,
              letterSpacing: "1px",
              backgroundColor: "#87bdd8",
              color: "black",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Secondfloor")}
          >
            Second Floor
          </Button>

          <Button
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1.5rem",
              fontWeight: 600,
              letterSpacing: "1px",
              backgroundColor: "#87bdd8",
              color: "black",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/Thirdfloor")}
          >
            Third Floor
          </Button>
        </div>

        <AppBar sx={{ background: "#063970", zIndex: 100 }}>
          {/* Your AppBar content here */}
        </AppBar>
        <AppBar sx={{ background: "#063970" }}>
          <Toolbar>
            <HiveIcon sx={{ fontSize: "2rem" }} />
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                color: "#ffffff",
                fontSize: "2rem",
                fontWeight: 500,
                letterSpacing: "2px",
                WebkitTextStroke: "1px #FFA41B",
                WebkitTextFillColor: "#ffffff",
              }}
            >
              LAB MANAGEMENT SYSTEM
            </Typography>
            <Tabs
              sx={{ marginLeft: "auto" }}
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
              indicatorColor="secondary"
            >
              <Tab onClick={() => navigate("/Home")} label="Home" />
              <Tab onClick={() => navigate("/Services")} label="Services" />
              <Tab onClick={() => navigate("/Aboutus")} label="About us" />
              <Tab onClick={() => navigate("/Contact")} label="Contact" />
            </Tabs>

            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}></Avatar>
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <Divider />

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>

        <Dialog
          open={logoutDialogOpen}
          onClose={handleLogoutCancel}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Confirm Logout"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to logout?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button onClick={handleLogoutCancel}>Cancel</button>
            <button onClick={handleLogoutConfirm} autoFocus>
              Logout
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
