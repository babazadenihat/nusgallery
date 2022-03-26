import React, { useRef, useState } from 'react'
import { makeStyles, TextField } from '@material-ui/core'
import clsx from 'clsx'
import { Formik, useFormik } from 'formik';
import * as Yup from "yup";
import { Col, Container, Row } from 'react-bootstrap'
import logbg from "../images/logbg.png"
import * as Styled from "../styledComponents/styled"
import { Link } from "react-router-dom";
import { loginModel, nusBtnBlack, nusBtnTransparent } from '../constants';
import info from "../images/icons/information.svg"
import { Switch } from '@material-ui/core';
import { useEffect } from 'react';


export const Register = () => {
    const classes = useStyle();
    const [customerField, setCustomerField] = useState(true);
    const [confirmationBox, setConfirmationBox] = useState(false);
    const formik = useFormik({
        initialValues: {
            isPublished: "",
        },
        validationSchema: Yup.object({}),
        onSubmit: (values) => { 
            console.log(values);
            setConfirmationBox(true)
         }
    })

    const refs = [
        React.createRef(null),
        React.createRef(null)
    ];

    const getBtnProps = useRef();


    const toggleArtisField = (e, who) => {
        let target = e.target;
        let whoBtn = document.getElementsByClassName("who");
        for (let index = 0; index < whoBtn.length; index++) {
            whoBtn[index].classList.remove(classes.btnActiveLog);
        }
        target.classList.add(classes.btnActiveLog)

        if (who === "artist") {
            setCustomerField(false);
        }
        else {
            setCustomerField(true)
        }
    }

    return (
        <div className={classes.root}>
            <Container>
                <Row className='justify-content-end'>
                    <Col md={6}>
                        <h1 className='text-light'>Xoş gəlmisiniz!</h1>
                        <p className='text-light'>Hesabınız artıq mövcuddur? <Link to="/login" className={classes.log}>Daxil olun</Link> </p>
                        <Styled.LogBox>
                            {
                                confirmationBox ?
                                    <div>
                                        <h3>Təstiq kodu</h3>
                                        <p>İstifadə etdiyiniz e-poçt ünvanını daxil edin.</p>
                                        <p>Hesabı təstiq etmək üçün kodu daxil edin.</p>
                                        <div>
                                            <TextField 
                                            type="email"
                                            fullWidth
                                            id="filled-basic" 
                                            label="Email" 
                                            variant="filled"
                                            className={classes.confEmailInput}
                                            />
                                            <div className={classes.beforeCode}>
                                                <Styled.NusInput
                                                    name="confirmCode"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className={`mt-3`}
                                                />
                                            </div>
                                        </div>
                                    </div> :
                                    <>
                                        <div>
                                            <button
                                                ref={getBtnProps}
                                                dataRef={refs[0]}

                                                type='button'
                                                className={`who ${clsx(classes.nusBtn, classes.btnActiveLog)}`}
                                                onClick={e => toggleArtisField(e, "customer")}>Alıcı</button>
                                            <button
                                                dataRef={refs[1]}
                                                ref={getBtnProps}
                                                type='button'
                                                className={`who ms-2 ${classes.nusBtn}`}
                                                onClick={e => toggleArtisField(e, "artist")}>Rəssam</button>
                                        </div>
                                        <h6 className='mt-5'>Məlumatları daxil edin</h6>
                                        <form onSubmit={formik.handleSubmit} className='mt-4'>
                                            <Row>
                                                <Col>
                                                    <Styled.NusInput
                                                        placeholder='Ad'
                                                        name="name"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                </Col>
                                                <Col>
                                                    <Styled.NusInput
                                                        placeholder='Soyad'
                                                        className='ms-3'
                                                        name="lastname"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row className='mt-3'>
                                                <Col md={12} className='d-flex align-items-center'>
                                                    <div>+994</div>
                                                    <Styled.NusInput
                                                        placeholder='Əlaqə nömrəsi'
                                                        className='ms-3'
                                                        name="number"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                </Col>
                                                <Col md={12} className='d-flex align-items-center mt-3'>
                                                    <Styled.NusInput placeholder='Email' />
                                                </Col>
                                                <Col md={12} className='d-flex align-items-center mt-3'>
                                                    <Styled.NusInput placeholder='Şifrə' type="password" />
                                                </Col>
                                                <Col md={12} className='d-flex align-items-center mt-3'>
                                                    <Styled.NusInput placeholder='Şifrənin təkrarı' type="password" />
                                                </Col>
                                            </Row>
                                            {customerField ?
                                                <div className='mt-5'>
                                                    <h6>Kart məlumatları </h6>
                                                    <p>İstifadə etdiyiniz e -poçt ünvanını daxil edin.
                                                        Şifrənizi sıfırlamaq üçün sizə təlimat göndərəcəyik.</p>
                                                    <Row>
                                                        <Col md={12}>
                                                            <Styled.NusInput placeholder='Card number' />
                                                        </Col>
                                                        <Col md={6} className='mt-3'>
                                                            <Styled.NusInput placeholder='Ad' />
                                                        </Col>
                                                        <Col md={6} className='mt-3'>
                                                            <Styled.NusInput placeholder='Soyad' />
                                                        </Col>
                                                    </Row>
                                                    <Row className='mt-5'>
                                                        <h6>Expires on</h6>
                                                        <Col md={6} className='mt-3'>
                                                            <Styled.NusInput placeholder='MM' />
                                                        </Col>
                                                        <Col md={6} className='mt-3'>
                                                            <Styled.NusInput placeholder='YY' />
                                                        </Col>
                                                    </Row>
                                                    <Row className='mt-5'>
                                                        <h6>Security code <img src={info} alt="" /> </h6>
                                                        <Col md={12} className='mt-3'>
                                                            <Styled.NusInput name="cardNAME" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                                        </Col>
                                                    </Row>
                                                </div> : null}
                                            <Row className='mt-5'>
                                                <Col md={12}>
                                                    <Styled.NusBtnPattern className={classes.nusBtnBlack} type="submit" >Qeydiyyatdan keç</Styled.NusBtnPattern>
                                                </Col>
                                            </Row>
                                        </form>
                                        <Row>
                                            <Col md={12} className='mt-3'>
                                                <Styled.NusBtnPattern className={classes.nusBtnTransparent}>Daxil ol</Styled.NusBtnPattern>
                                            </Col>
                                        </Row>
                                    </>
                            }
                        </Styled.LogBox>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}


const useStyle = makeStyles({
    root: {
        backgroundImage: `url("${logbg}")`,
        padding: "66px 0 108px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"
    },
    changeContent: {
        padding: "6px",
        borderRadius: "22px",
        border: "1px solid #E6E8EC"
    },
    nusBtn: {
        border: "1px solid #aaa",
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: "100px",
        padding: "8px 28px"
    },
    btnActiveLog: {
        backgroundColor: "#BCEDBF",
        border: 0
    },
    log: {
        color: "rgba(188, 237, 191, 1)",
        textDecoration: 'none',
        '&:hover': {
            color: "rgba(188, 237, 191, 1)",
        },
    },
    nusBtnBlack: {
        backgroundColor: '#1D2124',
        color: "#fff"
    },
    nusBtnTransparent: {
        backgroundColor: '#fff',
        color: "#000",
        border: "1px solid #E6E8EC"
    },
    confEmailInput: {
        backgroundColor: "#e6ffe7",
        borderRadius: "8px",
        "& .MuiFormLabel-root.Mui-focused": {
            color: "#51B56C"
        }
    },
    beforeCode: {
        position: "relative",
        '&::before': {
            position: "absolute",
            content: '"00000"',
            top: "30px",
            left: "145px"
        }
    }
})