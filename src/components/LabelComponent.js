import React from 'react'
import clsx from 'clsx';

import heart from "../images/icons/heart.svg";
import auction from "../images/icons/auction.svg";
import { makeStyles } from '@material-ui/styles';

const LabelComponent = ({ origin, data }) => {
    const classes = useStyle();
    const image = origin === "custom-card" ? heart : auction;
    const labelStyle = origin === "custom-card" ? classes.border : classes.bgColor;

    return (
        <>
            <div className={clsx(classes.labelComponentStyle, labelStyle,)}>
                <img src={image} alt="" />
                <span className='ms-2'>{data}</span>
            </div>
        </>
    )
}

export default LabelComponent;

const useStyle = makeStyles({
    labelComponentStyle: {
        padding: "7.5px 10px",
        fontWeight: 500,
        fontSize: "10px",
        lineHeight: "13px",
        color: "#1D2124",
        borderRadius: "16px",
        backgroundColor: "#fff"
    },
    border: {
        border: "1px solid #E6E8EC",
    },
    bgColor: {
        backgroundColor: "#F2EFE8"
    },
})