import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SwitchVideoIcon from '@mui/icons-material/SwitchVideo';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar >
      </Toolbar>
      <Divider />
      <List>
        {/* home */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>
        
        {/*  trending*/}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <WhatshotIcon />
            </ListItemIcon>
            <ListItemText primary={"Popular"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FormatListBulletedIcon />
            </ListItemIcon>
            <ListItemText primary={"categories"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary={"Favourites"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <VideocamIcon />
            </ListItemIcon>
            <ListItemText primary={"Your videos"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Typography variant="h6" FontFamily={"robot"} fontWeight={"50"} fontSize={"1rem"} padding={"2rem"}>SUBSCRIPTIONS</Typography>

      <List>
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>  
            <Badge color="success" variant="dot">
            <Avatar src="https://images.pexels.com/photos/15332188/pexels-photo-15332188.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
          </Badge>
            </ListItemIcon>
            <ListItemText primary={"Yoga with Kim"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <Avatar src="https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          
            </ListItemIcon>
          
            <ListItemText primary={"Books Review"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <Badge color="success" variant="dot">
            <Avatar src="https://images.pexels.com/photos/15332188/pexels-photo-15332188.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
          </Badge>
            </ListItemIcon>
          
            <ListItemText primary={"Brittary Bathgats"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            </ListItemIcon>
          
            <ListItemText primary={"GingerDog"} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <Avatar src="https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            </ListItemIcon>
          
            <ListItemText primary={"Asian Recipies"} />
          </ListItemButton>
        </ListItem>
      </List>
  <Box sx={{
    m:1,
    p:1,
    backgroundColor:"whitesmoke"
  }}> 
    <Typography variant="body1" fontWeight={700} >Get 3 months of premium for free</Typography>
    <Typography variant="body2">Enjoy ad-free content,offline watching and more</Typography>
  </Box>
  <Box sx={{
    borderRadius:20,
    border: '2px solid green',
    backgroundColor: "black",
    padding: 1,
    
  }}>
  <Typography variant="h5" color="green" alignItems="center">GET PREMIUM</Typography>

  </Box>
    </div>
  );
  
  
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{display:"flex", gap:10}}>
            <CustomizedInputBase/>
            <Stack direction="row" spacing={2}>
              <Box >
      <Button sx={{borderRadius:200 ,ptop:5}} variant="outlined" color="success"  >ADD VIDEO</Button>
      </Box>
      
    </Stack>
          </Box>
         <Box sx={{gap:30 ,marginLeft:10}}>
      <Avatar alt="M" src="https://images.pexels.com/photos/13020492/pexels-photo-13020492.jpeg?auto=compress&cs=tinysrgb&w=600" />
    </Box>
      <Typography >May Harmon</Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {/*  */}
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
const videoComponent = ({youtubeVideoUrl}) => {
  return (
    <Box>
      sx={{
        height:200,
        width:300,
        borderRadius: 10,
        bcolor:"dodgerblue",
      }}
      {/* Video Image */}
      <Box 
      sx={{
        position:"relative",
      }}>
        <Image
        src="https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        height={200}
        width={300}
        alt="Zebra"
        />
        <Typography
        sx={{
          position:"absolute",
          right:10,
          bottom:15,
          color:"white",
          backgroundcolor: "GreyText",
          p:0.5,
        }}
        variant="GrayText"
        >55:03</Typography>
       </Box>
       {/*video Details */}
       <Box
       sx={{
        display:"flex",
       }}
       >
       <Avatar>PE</Avatar>
       <Box>
        <Typography>Title</Typography>
        <Typography>Author Name</Typography>
       </Box>
       </Box>
    </Box>
  );
};              

function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800 }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
 
    </Paper>
  );
}