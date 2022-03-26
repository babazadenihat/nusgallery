import React from 'react'
import { Button, makeStyles } from '@material-ui/core';
import { Row, Col, Container } from 'react-bootstrap'
import paint2 from "../images/paint2.png";
import userPhoto from "../images/user-photo.png";
import { DeleteCart } from '../styledComponents/styled';
import {Close} from '@material-ui/icons';

const CustomCart = () => {
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
                        <span className={`ms-2 ${classes.profileName}`}>Tahir Salahov</span>
                    </div>
                    <div className='d-flex mt-3'>
                        <span className={`${classes.title}`}>“Morning Glory”</span>
                    </div>
                    <div className='d-flex mt-3 justify-content-between'>
                        <span className={`${classes.title}`}>Təklif sayı</span>
                        <span className={`${classes.title}`}>74</span>
                    </div>
                    <div className='d-flex mt-3 justify-content-between'>
                        <span className={`${classes.title}`}>Cari təklif</span>
                        <span className={`${classes.title}`}>170azn</span>
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
        fontFamily: 'Poppins',
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
        fontFamily: 'Poppins',
        fontWeight: "400",
        fontSize: "14px"

    }
})