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
      {/* <Button variant="filled" onClick={handleClickOpen} sx={{ backgroundColor: '#3E432E', color: '#A7D129', borderRadius: 5, p:2, ml: 6, mt:4 }} >
            <Typography variant="h6">
              Post Query
            </Typography>
      </Button> */}
      {/* <ListItem button key="Invite" sx={{ mb: 2 }} onClick={handleClickOpen}>
            <ListItemIcon>
                <AddReactionIcon fontSize="large" variant="filled" sx={{ color: '#3E432E' }}/>
              </ListItemIcon>
              <ListItemText primary={<Typography variant="h5" sx={{ color: '#3E432E' }}>Send Invite</Typography>} />
            </ListItem> */}
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Send Invite</DialogTitle>
        <DialogContent>
          <SendInvite />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}