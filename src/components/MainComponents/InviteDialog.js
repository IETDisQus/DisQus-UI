import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Post from './Post';
import SendInvite from './SendInvite';
import { ListItemIcon, ListItemText, ListItem } from "@mui/material";
import AddReactionIcon from '@mui/icons-material/AddReaction';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ListItem button key="Invite" sx={{ mb: 2 }} onClick={handleClickOpen}>
            <ListItemIcon>
                <AddReactionIcon fontSize="large" variant="filled" sx={{ color: '#3E432E' }}/>
              </ListItemIcon>
            <ListItemText primary={<Typography variant="h6" sx={{ color: '#3E432E', fontWeight: 'bold' }}>Send Invite</Typography>} />
      </ListItem>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{ backgroundColor: '#3E432E', color: '#A7D129', width:552 }} >Send Invite</DialogTitle>
        <DialogContent sx={{ backgroundColor: '#3E432E', color: '#A7D129', width:552 }}>
          <SendInvite />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#000000', width:584, alignItems: 'center' }} >
          <Button sx={{ backgroundColor: '#A7D129', color: '#3E432E', fontWeight: 'bold' }} onClick={handleClose}>Cancel</Button>
          <Button sx={{ backgroundColor: '#A7D129', color: '#3E432E', fontWeight: 'bold', mr:4 }} onClick={handleClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}