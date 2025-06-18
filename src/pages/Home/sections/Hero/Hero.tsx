import { Box, Container, Grid, styled, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimationComponent/AnimatedBackground";
import Avatar from "../../../../assets/images/avatar.jpg";

const StyledHero = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  objectFit: "cover",
  border: `2px solid ${theme.palette.primary.contrastText}`,
  zIndex: 1,
}));

function Hero() {
  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>

            <Box position="relative">
              <Box
                sx={{
                  position: "absolute",
                  top: -100,
                  right: 0,
                  width: "150%",
                  height: 600,
                  zIndex: 0,
                }}
              >
                <AnimatedBackground />
              </Box>
              <Box position="relative">
                <StyledImg src={Avatar} alt="Avatar" />
              </Box>


            </Box>

            
          </Grid>

          <Grid item xs={12} md={7} textAlign="center">
            <Typography
              color="primary.contrastText"
              variant="h1"
              pb={2}
            >
              Matheus Felipe
            </Typography>
            <Typography

              color="primary.contrastText"
              textAlign="center"
              variant="h2"
              

            >
              I'm a Data Scientist
            </Typography>

            <Grid container spacing={2} justifyContent="center" mt={3} spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <StyledButton fullWidth>
                  <DownloadIcon />
                  <Typography ml={1}>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <StyledButton fullWidth>
                  <MailOutlineIcon />
                  <Typography ml={1}>Contact Me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
}

export default Hero;
