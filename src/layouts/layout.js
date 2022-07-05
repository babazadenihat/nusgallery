import React from 'react'
import { createTheme, ThemeProvider, CssBaseline, Typography, createMuiTheme, FormControl, Select, MenuItem, styled } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import blanka from "../fonts/Blanka-Regular.otf"
import * as Styled from "../styledComponents/styled";
import HeaderController from '../components/HeaderController'
import { MailOutlined, Instagram, Facebook, PhoneInTalk } from '@material-ui/icons';
import animatedImg1 from "../images/animated-img-1.jpg"
import animatedImg2 from "../images/animated-img-2.jpg"
import animatedImg3 from "../images/animated-img-3.jpg"
import animatedImg4 from "../images/animated-img-4.jpg"
import { text } from '../translations/translation'
// const theme = createTheme({
//  typography: {
//      fontFamily: "Blanka"
//  },
//  components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//         @font-face {
//           font-family: 'Blanka';
//           font-style: normal;
//           font-display: swap;
//           font-weight: 400;
//           src: local('Blanka'), local('Blanka-Regular'), url(${blanka}) format('woff2');
//           unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
//         }
//       `,
//     },
//   },
// })


export const Header = () => {
    const classes = useStyle();
    const selectedLang = useSelector((state) => state.language.translation);


    return (
        <>
            <ThemeProvider >
                <header className={classes.header}>
                    <Container>
                        <Row className='d-flex justify-content-between'>
                            <Col md={6} className="d-flex justify-content-between align-items-center">
                                <a href="/" className={classes.logoLink}>
                                    <div style={{ fontFamily: "Blanka" }}>Nus</div>
                                    <div>Gallery</div>
                                </a>
                                <ul className={classes.navUl}>
                                    <li className='me-5'><Link to="/">{text.home[selectedLang]}</Link></li>
                                    <li className='me-5'><Link to="/">{text.gallery[selectedLang]}</Link></li>
                                    <li className='me-5'><Link to="/blog">{text.blog[selectedLang]}</Link></li>
                                </ul>
                            </Col>
                            <Col md={6} className="d-flex justify-content-end align-items-center">
                                <HeaderController />
                            </Col>
                        </Row>
                    </Container>
                </header>
            </ThemeProvider>
        </>
    )
}

export const Footer = () => {
    const classes = useStyle();
    return (
        <div className={classes.footer}>
            <div className='container'>
                <div className={classes.footerTop}>
                    <div>Bizimlə əlaqə</div>
                </div>
                <div className={`${classes.footerBottom} text-white`}>
                    <div className='d-flex flex-column'>
                        <a href='mailto: hello@nusgallery.az' className='d-flex'><MailOutlined style={{ width: "20px" }} /><span className='ms-3'>hello@nusgallery.az</span></a>
                        <a href='tel: 99451 987 65 43' className='mt-2'><PhoneInTalk style={{ width: "20px" }} /><span className='ms-3'>99451 987 65 43</span></a>
                    </div>
                    <div className={`${classes.footerLinks} d-flex flex-column`}>
                        <a href='mailto: hello@nusgallery.az'><span>Bİzİ İzləyİn</span></a>
                        <div className='text-right mt-2'>
                            <a href='https://instagtram/nusgallery'>
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href='https://instagtram/nusgallery' className='ms-3'>
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href='https://instagtram/nusgallery' className='ms-3'>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href='https://instagtram/nusgallery' className='ms-3'>
                                <i class="fa-brands fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.copyright}>
                <span>
                    Copyright © 2022 N'us gallery
                </span>
            </div>
        </div >
    )
}

export const AnimatedDiv = () => {
    const classes = useStyle();
    return (
        <div className="animatedDivContainer">
            <div >
                {/* <div className={classes.introText}>
                    N'us gallery sizə lorem
                    ipsum təqdim edir
                </div>
                <div>
                    <button className={classes.scrollDownBtn}>
                        <i class="fa-solid fa-arrow-down-long"></i>
                    </button>
                </div> */}
            </div>
            <img src={animatedImg1} className="animatedImg animatedImg1" />
            <img src={animatedImg2} className="animatedImg animatedImg2" />
            <img src={animatedImg3} className="animatedImg animatedImg3" />
            <img src={animatedImg4} className="animatedImg animatedImg4" />
        </div>
    )
}

const useStyle = makeStyles({
    header: {
        backgroundColor: "#fff",
        padding: "30px 0",
        borderBottom: "1px solid #E6E8EC"
    },
    navUl: {
        display: "flex",
        listStyleType: "none",
        padding: 0,
        margin: 0,
        '& li a': {
            color: "#73716E"
        }
    },
    logoLink: {
        color: "#000"
    },
    blackColor: {
        color: "#1D2124"
    },
    footerTop: {
        borderBottom: "1px solid #ffffff59",
        paddingBottom: "10px"
    },
    footerBottom: {
        padding: "30px 0 30px",
        fontSize: "13px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    footer: {
        fontFamily: "Poppins",
        backgroundColor: "#1D2124",
        // height: "258px",
        color: "#fff",
        paddingTop: "42px"
    },
    footerLinks: {
        "& a": {
            color: "#fff"
        },
        "& span": {
            textTransform: "uppercase"
        }
    },
    copyright: {
        backgroundColor: "#000000",
        padding: "10px 0",
        textAlign: "center",
        fontSize: "10px",
        lineHeight: "15px"
    },
    animatedDivContainer: {
        backgroundColor: "#73716E",
        position: "relative",
        height: "630px"
    },
    animatedImg: {
        position: "absolute"
    },
    introText: {
        fontFamily: "Poppins",
        lineHeight: "54px",
        fontSize: "40px",
        fontWeight: 500,
        color: "#FFFFFF",
        width: "500px"
    },
    scrollDownBtn: {
        backgroundColor: "transparent",
        color: "#fff",
        border: "1px dashed white",
        width: "66px",
        height: "40px",
        borderRadius: "50px"
    }
})