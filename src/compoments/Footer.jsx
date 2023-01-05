import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { alpha, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

import ContactList from './ContactList'
const CssTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    color: 'white',
  },
  '& .Mui-focused': {
    borderColor: 'var(--blue)',

  },
  '& label': {
    color: 'white',
    opacity: 0.75,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--light-gray)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--blue)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--blue)',
      color: 'white'
    },

  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="var(--light-gray)" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // alert({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    console.log({
        email: data.get('email'),
         content: data.get('content'),
       });
  };

  return (
    
    <Container sx={{pt:4}}  component="footer">
      <Typography variant="h4" align="left" color="var(--light-gray)" gutterBottom>
        Contact
      </Typography>
      <Grid container spacing={2}
      sx={{flexDirection: {xs:'column',sm:'column',md:'row', lg:'row'}}}
      justifyContent='space-between'
      >
        <Grid item  xs={6}>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"

            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="content"
              name="content"
              label="Content"
              multiline
              rows={5}
              
              
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{textAlign:'right'}}>
          <ContactList />
          {/* <Box sx={{pr:1}}>
           <Typography><EmailIcon sx={{ color: 'var(--light-gray)' }}/>Example@gmail.con</Typography>
           
          </Box>
          <Box sx={{pr:1}}>
           <Typography><GitHubIcon />Example@gmail.con</Typography>
          </Box> */}
        </Grid>

      </Grid>

      <Copyright />
    </Container>

  )

}