"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import clock from "@/assets/icon-clock.svg";
import profile from "@/assets/icon-avatar.svg";
import { ArrowBack } from "@mui/icons-material";

interface NavbarProps {
  backTo?: string;
}

const settings = ["Mi Perfil"];

const Navbar: React.FC<NavbarProps> = ({ backTo }) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  console.log("**bt", backTo);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="primary" sx={{ height: "64px" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "64px",
        }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {backTo ? (
            <ArrowBack sx={{ fontSize: 20 }} />
          ) : (
            <>
              <Typography
                variant="h6"
                sx={{
                  flexGrow: 1,
                  fontWeight: 700,
                  letterSpacing: "1pm",
                  color: "inherit",
                  textDecoration: "none",
                }}>
                CHRON
              </Typography>
              <Image src={clock} alt="Clock Icon" width={20} height={20} />
              <Typography
                variant="h6"
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  letterSpacing: "1pm",
                  color: "inherit",
                  textDecoration: "none",
                }}>
                S
              </Typography>
            </>
          )}
        </Box>
        <Box sx={{ flexGrow: 0, display: "grid", width: "110px" }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Typography
              variant="subtitle1"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontWeight: 500,
                letterSpacing: "1pm",
                color: "white",
                textDecoration: "none",
              }}>
              NOMBRE
            </Typography>
            <Image src={profile} alt="Avatar Icon" width={20} height={20} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography color="primary" sx={{ textAlign: "center" }}>
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Container>
    </AppBar>
  );
};
export default Navbar;
