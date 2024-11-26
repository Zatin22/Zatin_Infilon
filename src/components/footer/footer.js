import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import micro from "../../assets/micro.svg";
import whiteApple from "../../assets/whiteApple.svg";
import android from "../../assets/android.svg";

// import { Grid, Stack, Typography, IconButton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#043873" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              lg: "center",
              md: "center",
              sm: "flex-start",
              xs: "flex-start",
            },
            alignItems: {
              lg: "center",
              md: "center",
              sm: "left",
              xs: "left",
            },
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "30px",
                md: "35px",
                lg: "40px",
              },
              color: "white",
              fontWeight: "700",
              lineHeight: "100%",
              paddingTop: "6%",
              textAlign: {
                lg: "center",
                md: "center",
                sm: "left",
                xs: "left",
              },
            }}
          >
            Try Whitepace <br />
            today
          </Typography>
          <Typography
            sx={{
              color: "white",
              textAlign: {
                lg: "center",
                md: "center",
                sm: "left",
                xs: "left",
              },
            }}
          >
            Get started for free.
            <br /> Add your whole team as your needs grow.
          </Typography>
          <Box>
            {" "}
            <Button
              variant="contained"
              color="info"
              sx={{
                fontWeight: 400,
                fontSize: {
                  lg: "12px",
                  md: "10px",
                  xs: "8px",
                },
                display: "flex",
                textTransform: "none",
              }}
              endIcon={<ArrowForwardIosIcon />}
            >
              Try Whitepace free
            </Button>
          </Box>
          <Typography
            sx={{
              color: "white",
              textAlign: {
                lg: "center",
                md: "center",
                sm: "left",
                xs: "left",
              },
            }}
          >
            On a big team? Contact sales
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "8%",
              }}
            >
              <img style={{ maxWidth: "60%" }} src={whiteApple}></img>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "8%",
              }}
            >
              <img style={{ maxWidth: "60%" }} src={micro}></img>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "8%",
              }}
            >
              <img style={{ maxWidth: "60%" }} src={android}></img>
            </Box>
          </Box>
        </Box>

        <Grid container spacing={4} justifyContent="center" mt="5%" mb="5%">
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: "white" }}>
              Whitespace
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: "white" }}>
              Whitespace was created for the new ways we live and work. We make
              a better workspace around the world.
            </Typography>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ color: "white" }}>
              Product
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ color: "white" }}>
                Overview
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
                Pricing
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
                Customer stories
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ color: "white" }}>
              Resources
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ color: "white" }}>
                Blog
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
                Guides & tutorials
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
                Help center
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ color: "white" }}>
              Company
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ color: "white" }}>
                About us
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
                Careers
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "white" }}>
                Media kit
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={3} textAlign="center">
            <Typography variant="h6" sx={{ color: "white" ,textAlign: {
                lg: "left",
                md: "left",
                sm: "left",
                xs: "center",
              },}}>
              Try It Today
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, color: "white",textAlign: {
                lg: "left",
                md: "left",
                sm: "left",
                xs: "center",
              }, }}>
              Get started for free. Add your whole team as your needs grow.
            </Typography>
           <Box  sx={{
              textAlign: {
                lg: "left",
                md: "left",
                sm: "left",
                xs: "center",
              },
            }}>
           <Button
              variant="contained"
              sx={{ backgroundColor: "#0072e6", mt: 2 ,textAlign: {
                lg: "center",
                md: "center",
                sm: "left",
                xs: "left",
              },}}
            >
              Start today →
            </Button>
           </Box>
          </Grid>
        </Grid>

        <Divider
          sx={{
            width: "100%",
            borderColor: "#2E4E73",
            display: { xs: "none", md: "block" }, // Visible only in column mode
            mb: 2, // Margin below divider
          }}
        />

        <Grid
          container
          component="footer"
          sx={{
            py: 2,
            px: 4,
            color: "white",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: {sm: "row" ,xs: "column", md: "row" }, // Adjust direction for xs and md+
          }}
        >
          {/* Left Section */}
          <Stack
            direction={{ sm: "row" ,xs: "column", md: "row" }} // Adjust direction based on screen size
            spacing={2}
            alignItems="center"
            textAlign={{ xs: "center", md: "left" }} // Center text for smaller screens
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            >
              <LanguageIcon sx={{ color: "white" }} />
              <Typography>English</Typography>
              <ArrowDropDownIcon sx={{ color: "white" }} />
            </Stack>
            <Typography>Terms & Privacy</Typography>
            <Typography>Security</Typography>
            <Typography>Status</Typography>
            <Typography>©2021 Whitepace LLC.</Typography>
          </Stack>

          {/* Right Section */}
          <Divider
            sx={{
              width: "100%",
              borderColor: "#2E4E73",
              mt: 2,
              display: { xs: "block", md: "none" }, // Visible only in column mode
              mb: 2, // Margin below divider
            }}
          />

          <Stack
            direction="row"
            spacing={2}
            sx={{
              mt: { xs: 2, md: 0 },
              justifyContent: { xs: "flex-start", md: "flex-start" },
            }}
          >
            <IconButton>
              <FacebookIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <LinkedInIcon sx={{ color: "white" }} />
            </IconButton>
          </Stack>
        </Grid>

        <Divider></Divider>
      </Container>
    </Box>
  );
}

export default Footer;
