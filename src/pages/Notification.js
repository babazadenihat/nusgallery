import { makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import NotificationPanel from '../components/NotificationPanel';
import notifimg1 from "../images/notif-img1.png";
import notifimg2 from "../images/notif-img2.png";
import notifimg3 from "../images/notif-img3.png";

const notificationData = [
  {
      title: "“Le Carnaval (Les Cotillons)”",
      photo: notifimg1,
      date: "1",
      status: "winner"
  },
  {
      title: "“Morning Glory”",
      photo: notifimg2,
      date: "4",
      status: "loser"
  },
  {
      title: "“No More Voices”",
      photo: notifimg3,
      date: "4",
      status: "loser"
  }
]


function Notification() {
  const classes = useStyle();

  return (
    <div className='container'>
      <Paper className={classes.notifHolder}>
        {
          notificationData.length && notificationData?.map((n) => (
            <NotificationPanel notification={n}/>
          ))
        }
      </Paper>
    </div>
  )
}

export default Notification;

const useStyle = makeStyles({
  notifHolder: {
    padding: "8px",
    maxWidth: "330px",
    maxHeight: "380px",
    width: "330px",
    borderRadius: "14px 14px 14px 14px",
  },
})