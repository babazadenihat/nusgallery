import React from 'react'
import { Button, makeStyles } from '@material-ui/core';
import { Row, Col, Container } from 'react-bootstrap'
import paint2 from "../images/paint2.png";
import userPhoto from "../images/user-photo.png";
import heart from "../images/icons/heart.svg";
import { CardItemBox, DeleteCart } from '../styledComponents/styled';
import {Close} from '@material-ui/icons';
import clsx from 'clsx';

const CustomCart = (props) => {
    const {
        index,
        cartData,
        filteredData
    } = props
    
    const classes = useStyle();
    return (
        <div className={classes.cartContainer}>
            {/* <Row> */}
            <div className='d-flex justify-content-between'>
                <Col md={4}>
                    <div><img src={paint2}/></div>
                </Col>
                <Col className='me-3' md={8}>
                    <div className='d-flex'>
                        <div><img className={classes.profileImg} src={userPhoto}/></div>
                        <span className={`ms-2 ${clsx(classes.profileName, classes.poppinsFont)}`}>Tahir Salahov</span>
                    </div>
                    <div className='d-flex mt-3'>
                        <span className={`${clsx(classes.title, classes.poppinsFont)}`}>“Morning Glory”</span>
                    </div>
                    <div className='d-flex mt-3 justify-content-between'>
                        <span className={`${classes.text}`}>Təklif sayı</span>
                        <span className={`${classes.textValue}`}>74</span>
                    </div>
                    <div className='d-flex mt-3 justify-content-between'>
                        <span className={`${clsx(classes.text, classes.poppinsFont)}`}>Cari təklif</span>
                        <span className={`${clsx(classes.textValue, classes.poppinsFont)}`}>170azn</span>
                    </div>
                    <div className='d-flex mt-3 justify-content-between'>
                        <CardItemBox>
                            <img src={heart} alt="" />
                            <span className='ms-2'>24</span>
                        </CardItemBox>
                        <div className="">Bitmə tarixi: 2g, 11s</div>
                    </div>
                </Col>
            </div>
            {/* </Row> */}
            <DeleteCart><Close/></DeleteCart>
        </div>
    )
}

export default CustomCart

const useStyle = makeStyles({
    poppinsFont: {
        fontFamily: "Poppins"
    },
    cartContainer: {
        padding: "25px",
        backgroundColor: "white",
        borderRadius: "14px",
        position: "relative"
    },
    profileImg: {
        width: "28px",
        height: "28px",
        borderRadius: "50%"
    },
    profileName: {
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "12px",
        lineHeight: "18px",
        display: "flex",
        alignItems: "center",
        letterSpacing: "-0.005em"
    },
    title: {
        fontStyle: "italic",
        fontWeight: "400",
        fontSize: "14px"
    },
    text: {
        fontWeight: "500",
        color: "#73716E",
        letterSpacing: "0.5%",
        fontSize: "10px"
    },
    textValue: {
        fontSize: "12px",
        fontWeight: "500"
    }
})