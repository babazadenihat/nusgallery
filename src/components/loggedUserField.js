import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import userPhoto from "../images/user-photo.png";
import arrowDown from "../images/icons/arrow-down.svg";
import { Box, Paper } from '@material-ui/core';
import notifimg1 from "../images/notif-img1.png";
import notifimg2 from "../images/notif-img2.png";
import notifimg3 from "../images/notif-img3.png";
import clsx from 'clsx';
import { FilledForm, MoreBtn } from '../styledComponents/styled';
import { useState } from 'react';
import NotificationPanel from './NotificationPanel';

const notificationData = [
    {
        id: "1",
        title: "“Le Carnaval (Les Cotillons)”",
        photo: notifimg1,
        date: "1",
        status: "winner"
    },
    {
        id: "2",
        title: "“Morning Glory”",
        photo: notifimg2,
        date: "4",
        status: "loser"
    },
    {
        id: "3",
        title: "“No More Voices”",
        photo: notifimg3,
        date: "4",
        status: "loser"
    }
]



export const LoggedUserField = () => {
    const classes = useStyle();
    const [showDropdown, setShowDropdown] = useState(false);

    window.document.getElementById("root").onclick = function(e) {
        console.log(e.target.className?.includes("avatar-toggle"), e.target.className)
    }
    function openDropdown(e) {
        
        console.log(window.document)
        if (e.currentTarget.className?.includes("avatar-toggle")) {

            setShowDropdown(true)
        } else  {
            setShowDropdown(false)
        }
        // if (!showDropdown) {
        // } else {
        // }
    }

    return (
        <div className={classes.avatarHolder}>
            <div className='ms-2 avatar-toggle' onClick={(e) => openDropdown(e)}>
                {/* <Link to="/login"> */}
                <div className='ms-2 position-relative'>
                    <img src={userPhoto} className={classes.userPhoto} />
                    <img src={arrowDown} className={classes.arrowDown} />
                </div>
                {/* </Link> */}
            </div>
            <Paper elevation={16} className={clsx(classes.notifHolder,
                showDropdown && classes.showDropdown)}>
                {
                    notificationData.length &&
                    notificationData?.map((n => (
                        <NotificationPanel key={n.id} notification={n} />
                        // <Box className={clsx(n.status === "winner" ? classes.winnerMessageBox : classes.loserMessageBox,
                        //     classes.muiMessageBox)}>
                        //     <div>
                        //         <img src={n.photo} className={classes.notifImgStyle} />
                        //     </div>
                        //     <div className='ms-2'>
                        //         <MessageBox props={n} />
                        //         <div className={`mt-2 ${classes.notifDateStyle}`}>{n.date} saat öncə</div>
                        //         {
                        //             n.status === "winner" && (
                        //                 <FilledForm className='mt-2'>Formu Doldurun</FilledForm>
                        //             )
                        //         }
                        //     </div>
                        // </Box>
                    )))
                }
                <div className='text-center'>
                    <MoreBtn className='p-0 w-100'>Hamısına bax</MoreBtn>
                </div>
            </Paper>
        </div>
    )
}


const useStyle = makeStyles({
    avatarHolder: {
        position: "relative",
        cursor: "pointer"
    },
    userPhoto: {
        borderRadius: "50%",
        width: "36px",
        height: "36px"
    },
    arrowDown: {
        position: "absolute",
        right: "-20px",
        top: "12px"
    },
    notifHolder: {
        position: "absolute",
        padding: "8px",
        right: 0,
        zIndex: 11111,
        maxWidth: "330px",
        maxHeight: "380px",
        width: "330px",
        top: "70px",
        borderRadius: "14px 0 14px 14px",
        visibility: "hidden"
    },
    showDropdown: {
        visibility: "visible"
    },
    muiMessageBox: {
        display: "flex",
        // transition: ".1s all ease-in-out",
        borderRadius: "8px",
        marginBottom: "10px",
        padding: "5px"
    },


})