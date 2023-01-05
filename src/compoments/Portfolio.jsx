import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
//import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';

import useMediaQuery from '@mui/material/useMediaQuery';


import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './Header';
import Footer from './Footer'



const cards = [{index:'1'}, {index:'2'}, {index:'3'}, {index:'4'}];

const theme = createTheme();
export default function Album() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline  />
      {/* <Header /> */}
      {/* <AppBar position="relative" sx={{
            bgcolor: 'var(--really-dark-gray)',
            boxShadow:'none'
          }}>
         <Toolbar>
         
          <Typography variant="h6" color="inherit" noWrap>
            Album layout 
          </Typography>
        </Toolbar> 
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
           
            pt: 8,
            pb: 8,
            mb:2,
            height: { sm: '70vh',lg:'90vh' } 
          }}
        >
          <div className='hero-image-warper'>
            <img src="src/assets/hero-image.jpg" alt=""  className='hero-image'/>
          </div>
          <Container width="100%"sx={{mt:1, zIndex:1}}>
            
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="var(--light-gray)"
              className='fade-in-animation'
              gutterBottom
            >
              WELCOME
            </Typography>
            
            <Typography variant="h5"
            className='fade-in-animation'
            align="center" 
            sx={{paddingX:'4rem'}}
            color="var(--light-gray)" paragraph>
             My name is Nguyen Nhat Tien a front-end developer based in Ho Chi Minh City, Viet Nam.
             
            </Typography>
            <Stack
              className='fade-in-animation'
              sx={{ pt: 6 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button href='#project-section'variant="outlined"
              sx={{
              color:'var(--light-gray)',
              borderColor:'var(--light-gray)',
              '&:hover': {
                color:'var(--blue)',
                borderColor:'var(--blue)',
                        }
              //  '&:after':{content: '""',
              //   width:'100%',
              //   height:'100%',
              //     background: 'transparent',
              //     border: '3px solid white',
              //     transform:' rotate(-132deg)',}
              }}
              
              >Go to my projects</Button>
              
            </Stack>
          </Container>
        </Box>
         {/* End hero unit */}
        <Container  id="project-section">
         
          <Grid container spacing={{xs:6, sm:6, md:0, lg:0}} 
              sx={
                  {flexDirection: {xs:'column',sm:'row',md:'row', lg:'row'},
                   gap:'1rem',
                   justifyContent:{sm:"center",md:'center',lg:'space-between'} 
                    }}>
            {cards.map((card, index) => (
              <Grid  item key={index}  xs="auto"
              // sx={{paddingLeft:0}}
              >
                <Card
                  sx={{ 
                        height: '100%', 
                        maxWidth:'100%', 
                        display: 'flex', 
                        flexDirection: 'column',
                        boxShadow:'none',
                        
                      }}
                   style={ {backgroundImage:`url(${"./src/assets/react.svg"})`,
                  backgroundSize: 'cover',
                   backgroundPosition: 'center',
                  height: '20rem',
                  borderRadius:'0'
                  }} 
                  className='card-hover'
                >
                  
                   {/* <CardMedia
                    component="img"
                    height="200px"
                    image="https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg"
                    alt="random"
                  /> */}
        
                    <CardContent sx={{ flexGrow: 1.2 , 
                    height:'100%', display: 'flex', flexDirection: 'column'
                  
                  }} className='card-hidden' >
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading {card.index}
                    </Typography>
                    <Typography  sx={{ flexGrow: 1.2 , }}>
                      This is a media card. You can use this section to describe the
                      content. {index}
                    </Typography>
                    <CardActions sx={{ justifyContent:'center', gap:'.8rem'}}>
                      <Button size="medium"  variant="contained"  startIcon={<PublicIcon />}>
                         View Demo
                      </Button>
                      <Button size="medium" 
                              sx={{backgroundColor:'var(--black)', 
                                  '&:hover': {
                                    backgroundColor:'var(--really-dark-gray)',
                                    color:'white'
                                }}} 
                              variant="contained" startIcon={<GitHubIcon />}
                              target="_blank"
                              href="https://www.youtube.com">
                        Repository
                      </Button>
                  </CardActions>
                  </CardContent>
                  
                 
                  
                 
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
       
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </ThemeProvider>
  );
}