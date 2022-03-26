import React from 'react'
import { createTheme, ThemeProvider, CssBaseline, Typography, createMuiTheme, FormControl, Select, MenuItem, styled} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import blanka from "../fonts/Blanka-Regular.otf"
import * as Styled from "../styledComponents/styled";


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
    const [navLang, setLang] = React.useState('');
    const navigate = useNavigate()

    const handleLanguage = (event) => {
        setLang(event.target.value);
    };

    const goToRegistry = () => {
        navigate('/register')
    }
    return (
        <>
        <ThemeProvider >
            <header className={classes.header}>
                <Container>
                    <Row className='d-flex justify-content-between'>
                        <Col md={6} className="d-flex justify-content-between align-items-center">             
                            <a href="/" className={classes.logoLink}>    
                                <div style={{fontFamily: "Blanka"}}>Nus</div>
                                <div>Gallery</div>
                            </a>
                            <ul className={classes.navUl}>
                                <li className='me-5'><Link to="/">Əsas səhifə</Link></li>
                                <li className='me-5'><Link to="/">Qalereya</Link></li>
                                <li className='me-5'><Link to="/">Bloq</Link></li>
                            </ul>
                        </Col>
                        <Col md={6} className="d-flex justify-content-end align-items-center">
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <Select
                                    value={navLang || "AZ"}
                                    onChange={handleLanguage}
                                 
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                    <MenuItem value="AZ">AZ</MenuItem>
                                    <MenuItem value="EN">EN</MenuItem>
                                    <MenuItem value="RU">RU</MenuItem>
                                </Select>
                            </FormControl>
                            <Link to="/login" className={`${classes.blackColor} ms-5`}>Daxil ol</Link>
                            <div>
                                <Styled.NusBtnPattern 
                                type="button" 
                                className='ms-5 nusBlackBtn'
                                onClick={goToRegistry}
                                >Qeydiyyat</Styled.NusBtnPattern>
                            </div>
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
            
        </div>
    )
}


const useStyle = makeStyles({
    header: {
        backgroundColor: "#fff",
        padding: "30px 0"
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
    footer: {
        backgroundColor: "#1D2124",
        height: "258px"
    }
})