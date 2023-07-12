import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar = ({ mode, setMode }) => {
  const theme = useTheme();
  const location = useLocation();

  const toggleDarkMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          background: theme.palette.background.bg,
          mb: 2,
        }}
      >
        <AppBar
          position="static"
          sx={{
            background: theme.palette.background.bg,
            height: 60,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar>
            <Container>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexGrow: 1,
                  alignItems: "center",
                }}
              >
                <Link to="/">
                  <Typography
                    component="h4"
                    sx={{
                      fontWeight: 700,
                      letterSpacing: 2,
                      color: theme.palette.secondary[500],
                    }}
                  >
                    URL Shortner
                  </Typography>
                </Link>
                <Box
                  component="div"
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 3,
                    }}
                  >
                    <Link to="/">
                      <Typography
                        component="h5"
                        sx={{
                          fontWeight: 600,
                          color:
                            location.pathname === "/"
                              ? theme.palette.secondary[500]
                              : theme.palette.color.two,
                        }}
                      >
                        Home
                      </Typography>
                    </Link>
                    <Link to="/list">
                      <Typography
                        component="h5"
                        sx={{
                          fontWeight: 600,
                          color:
                            location.pathname === "/list"
                              ? theme.palette.secondary[500]
                              : theme.palette.color.two,
                        }}
                      >
                        List
                      </Typography>
                    </Link>
                  </Box>
                  <Box component="div">
                    <IconButton
                      size="large"
                      sx={{
                        "& .MuiSvgIcon-fontSizeMedium": {
                          fontSize: 30,
                        },
                        ml: 3,
                      }}
                      onClick={toggleDarkMode}
                    >
                      <DarkModeSwitch
                        checked={mode === "dark"}
                        onChange={() => {}}
                        size={25}
                        moonColor={theme.palette.secondary[500]}
                        sunColor={theme.palette.secondary[500]}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
