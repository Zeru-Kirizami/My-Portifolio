import { Button, Container, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/IMG_20170102_183459060_HDR.jpg"
import Grid from '@mui/material/Grid';
import DownloadIcon from '@mui/icons-material/Download';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';


const Hero = () =>{
  
    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black",
        height: "100vh",
        
    }))

     const StyledImg = styled("img")(()=> ({
        width:"100%",
        borderRadius:"50%"
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={4} md={4} xs={12}>
                        <StyledImg src={Avatar}/>
             </Grid>                        
                    <Grid size={8} md={8} xs={12}>
                    <Typography color="primary" variant= "h1" textAlign="center">Luiz Fernando</Typography>
                    <Typography color="primary" variant="h2" textAlign="center">I'm a Software Engineer</Typography>
              
                       
                        <Grid container display="flex" justifyContent="center">
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <Button>
                                <DownloadIcon/>
                                Download CV</Button>
                            </Grid>
                                <Grid item s={12} md={4} display="flex" justifyContent="center">
                                <Button>
                                <ForwardToInboxIcon/>
                                Contact me</Button>
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