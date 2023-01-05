import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';



import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function ContactList() {
    const avatar_bgColor = { bgcolor: 'var(--black)'}
    const link_Styles={
                        '&:hover': {
                        color:'var(--blue)'}
                    } 
    return (
        <List sx={{ width: '100%', maxWidth: 360, }}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={avatar_bgColor}>
                        <EmailIcon />
                    </Avatar>
                </ListItemAvatar>
                <Link href="#" underline='none' color='var( --light-gray)' sx={link_Styles}>Example@gmail.com</Link>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={avatar_bgColor}>
                        <GitHubIcon />
                    </Avatar>
                </ListItemAvatar>
                <Link href="#" underline='none' color='var( --light-gray)' sx={link_Styles}>Link</Link>
            </ListItem>

        </List>
    );
}