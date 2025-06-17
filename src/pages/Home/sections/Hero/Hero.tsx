import { Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



function Hero() {

    const StyledHero = styled("div")(()=> ({
        background: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(() => ({
      width: "300px", // Defina uma largura fixa (ajuste conforme necessário)
      height: "300px", // Defina a altura igual à largura
      borderRadius: "50%", // Para torná-la redonda
      objectFit: "cover", // Para garantir que a imagem cubra o círculo sem distorcer

      }));
      



  return (
    <>
      <StyledHero>

        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4}} sx={{ display: 'flex', justifyContent: 'center' }}>
                <StyledImg src={Avatar}/>
            </Grid>
            <Grid size={{ xs: 12, md: 8}}>
                <Typography color="primary" variant="h1" textAlign={"center"}>Matheus Felipe</Typography>
                <Typography color="primary" variant="h2" textAlign={"center"}>I'm a Data Science</Typography>

                <Grid container display={"flex"} justifyContent={"center"}>
                  <Grid size={{ xs: 12, md: 4}} display={"flex"} justifyContent={"center"}>
                    <button>
                  <DownloadIcon/>
                  Download CV</button>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4}} display={"flex"} justifyContent={"center"}>
                    <button>
                  <MailOutlineIcon/>
                  Contact me</button>
                  </Grid>
                  
                  </Grid>                  
                
              
            </Grid>
         </Grid>
        </Container>
        

        
      </StyledHero>
       
    </>
  )
}

export default Hero