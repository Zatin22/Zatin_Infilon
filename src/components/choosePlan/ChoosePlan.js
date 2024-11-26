import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import checkIcon from "../../assets/checkIcon.svg";
import checkSelected from "../../assets/checkSelected.svg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useTheme } from "@emotion/react";
let data = [
  {
    plan: "Free",
    amount: "$0",
    description: " Capture ideas and find them quickly",
    list: [
      " Sync unlimited devices",
      " 10 GB monthly uploads",
      " 200 MB max. note size",
      " Customize Home dashboard and access extra widgets",
      " Connect primary Google Calendar account",
      " Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    plan: "Personal",
    amount: "$11.99",
    description: "Keep home and family on track",
    list: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    plan: "Organization",
    amount: "$49.99",
    description: "Capture ideas and find them quickly",
    list: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard and access extra widgets",
      "Connect primary Google Calendar account",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
];

function ChoosePlan() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container sx={{ marginTop: 6, marginBottom: 6 , padding: {
      lg: "40px 50px 40px 50px",
      md: "20px 30px 20px 30px",
      sm: "10px 10px 10px 10px",
      xs: "10px 10px 10px 10px",
    }}}>
      <Grid container spacing={3} justifyContent="center">
        <Typography
          sx={{
            fontSize: {
              xs: "24px",
              md: "60px",
              lg: "72px",
            },
            fontWeight: {
              xs: "700",
              md: "700",
              lg: "700",
            },
            color: "black",
            lineHeight: "90%",
            marginBottom: "4%",

            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
            },
          }}
        >
          Choose Your Plan
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "18px",
              md: "18px",
              lg: "18px",
            },
            color: "black",
            lineHeight: "90%",
            marginBottom: "4%",
            lineHeight: "21px",
            padding: "5px",
            textAlign: {
              xs: "center",
              sm: "center",
              md: "center",
            },
          }}
        >
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the <br /> right plan
          for you.
        </Typography>
        {!isSmallScreen &&
          data.map((item, index) => (
            <Grid item xs={12} sm={3} md={4} key={index}>
              <Card
                variant="outlined"
                sx={{
                  padding: 2,
                  ...(index !== 1 && {
                    borderColor: "#FFE492",
                  }),
                  ...(index === 1 && {
                    backgroundColor: "#1e3a8a",
                    color: "#ffffff",
                  }),
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      ...(index === 1 && {
                        color: "#ffffff",
                      }),
                    }}
                  >
                    {item.plan}
                  </Typography>
                  <Typography
                    variant="h6"
                    color="textPrimary"
                    sx={{
                      ...(index === 1 && {
                        color: "#FFE492",
                      }),
                    }}
                  >
                    {item.amount}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{
                      marginBottom: 2,
                      ...(index === 1 && {
                        color: "#ffffff",
                      }),
                    }}
                  >
                    {item.description}
                  </Typography>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    {item.list.map((lists, listIndex) => (
                      <Box
                        key={listIndex}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "5%",
                        }}
                      >
                        <img
                          src={index === 1 ? checkSelected : checkIcon}
                          style={{ width: "16px", marginRight: "2%" }}
                          alt="check icon"
                        />
                        <li>{lists}</li>
                      </Box>
                    ))}
                  </ul>
                  <Button
                    variant={index === 1 ? "contained" : "outlined"}
                    fullWidth
                    sx={{
                      width: "50%",
                      marginTop: 2,
                      ...(index === 1 && {
                        color: "#ffffff",
                      }),
                      textTransform: "none",
                    }}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}

        {isSmallScreen ? (
          <AliceCarousel
            style={{ display: "none" }}
            mouseTracking
            items={data.map((item, index) => {
              return (
                <Grid item xs={12} sm={12} md={4}>
                  <Card
                    variant="outlined"
                    sx={{
                      padding: 2,
                      ...(index !== 1 && {
                        borderColor: "#FFE492",
                      }),

                      ...(index === 1 && {
                        backgroundColor: "#1e3a8a",
                        color: "#ffffff",
                      }),
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                          ...(index === 1 && {
                            color: "#ffffff",
                          }),
                        }}
                      >
                        {item.plan}
                      </Typography>
                      <Typography
                        variant="h6"
                        color="textPrimary"
                        sx={{
                          ...(index === 1 && {
                            color: "#FFE492",
                          }),
                        }}
                      >
                        {item.amount}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        sx={{
                          marginBottom: 2,
                          ...(index === 1 && {
                            color: "#ffffff",
                          }),
                        }}
                      >
                        {item.description}
                      </Typography>
                      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                        {item.list.map((lists) => {
                          return (
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "5%",
                              }}
                            >
                              <img
                                src={index === 1 ? checkSelected : checkIcon}
                                style={{ width: "16px", marginRight: "2%" }}
                              ></img>
                              <li>{lists}</li>
                            </Box>
                          );
                        })}
                      </ul>
                      <Button
                        variant={index == 1 ? "contained" : "outlined"}
                        fullWidth
                        sx={{
                          width: "50%",
                          marginTop: 2,
                          ...(index === 1 && {
                            color: "#ffffff",
                          }),
                          textTransform: "none",
                        }}
                      >
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          />
        ) : (
          ""
        )}
      </Grid>
    </Container>
  );
}

export default ChoosePlan;
