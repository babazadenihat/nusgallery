import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import React from 'react'
import { FilledForm } from '../styledComponents/styled';

const MessageBox = (props) => {
    const classes = useStyle();
    console.log(props)
    const { title, status } = props;
    let message = "";

    switch (status) {
        case "winner": {
            message = <span className={classes.messageStyle}><b>Təbriklər!</b>
                <span className={classes.fontItalic}>{title}</span><b>adlı auksiomda qalib oldunuz!</b></span>
            break
        }
        case "loser":
            message = <span className={classes.messageStyle}><b>Hərrac bitdi! Təəüssüf ki,
            </b> <span className={classes.fontItalic}>{title}</span>  <b>adlı auksiomun qalibi olmadınız.</b></span>
            break
    }

    return message;
}

export default function NotificationPanel({ notification }) {
    const { title, photo, status, date } = notification;
    const classes = useStyle();

    console.log(status)


    return (
        <>
            <Box className={clsx(status === "winner" ? classes.winnerMessageBox : classes.loserMessageBox,
                classes.muiMessageBox)}>
                <div>
                    <img src={photo} className={classes.notifImgStyle} />
                </div>
                <div className='ms-2'>
                    <MessageBox title={title} status={status} />
                    <div className={`mt-2 ${classes.notifDateStyle}`}>{date} saat öncə</div>
                    {
                        status === "winner" && (
                            <FilledForm className='mt-2'>Formu Doldurun</FilledForm>
                        )
                    }
                </div>
            </Box>
        </>
    )
}


const useStyle = makeStyles({
    messageStyle: {
        fontFamily: "Poppins",
        fontSize: "12px",
    },
    fontItalic: {
        fontStyle: "italic"
    },
    winnerMessageBox: {
        backgroundColor: "#EBF9F4",
        "&:hover": {
            backgroundColor: "#bee4d7"
        },
    },
    loserMessageBox: {
        backgroundColor: "#FEE6EC",
        "&:hover": {
            backgroundColor: "#d9b7c0"
        },
    },
    notifImgStyle: {
        borderRadius: "50%",
        width: "28px",
        height: "28px"
    },
    notifDateStyle: {
        fontfamily: "Poppins",
        fontSize: "10px",
        fontWeight: 400,
        lineHeight: "15px",
        letterSpacing: "-0.005em",
        textalign: "left",
    },
    muiMessageBox: {
        display: "flex",
        // transition: ".1s all ease-in-out",
        borderRadius: "8px",
        marginBottom: "10px",
        padding: "5px"
    },
})