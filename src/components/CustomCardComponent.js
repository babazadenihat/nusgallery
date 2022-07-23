import React from 'react'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { Col, Container, Row, Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import 'react-tabs/style/react-tabs.css';
import GridLayout from 'react-grid-layout';
import "../style.css"
import { Link, useNavigate } from 'react-router-dom';
import paint1 from "../images/paint1.png";
import paint2 from "../images/paint2.png";
import userPhoto from "../images/user-photo.png";
import add from "../images/icons/add.svg";
import { CardItemBox, DraggableBox } from "../styledComponents/styled";
import { Button, makeStyles } from '@material-ui/core';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'
import { text } from '../translations/translation';
import { useSelector } from 'react-redux';
import LabelComponent from './LabelComponent';



export const CustomCardComponent = (props) => {
    const classes = useStyle();
    const {
        style,
        paintingModal,
        handleDrag,
        handleDrop,
        paintName,
        keyProp,
        id,
        order,
        bidCount,
        renderRoute
    } = props;



    return (
        <>
            <ProductCard renderRoute={renderRoute} />
        </>
    )
}


const ProductCard = ({ renderRoute }) => {
    console.log(renderRoute)
    const { offerCount, currentOffer, expiredDate } = text;
    const selectedLang = useSelector((state) => state.language.translation)
    const classes = useStyle();

    return (
        <div className={classes.cardStyle}>
            {
                renderRoute === "home" &&
                <DraggableBox />
            }
            <div>
                <div className={classes.cardImgCover}><Card.Img variant="top" src={paint1} /></div>
            </div>
            <div>
                <div>
                    <img src={userPhoto} alt="" className="cardSmallImg" />
                    <span className={`${classes.cardOwner} ms-2`}>Tahir Salahov</span>
                </div>
                <div className={classes.cardTitle}>“No More Voices”</div>
            </div>
            <div className='d-flex align-items-center justify-content-between mt-3'>
                <div className={classes.cardText}>{offerCount[selectedLang]}</div>
                <div className={classes.cardTextValue}>24</div>
            </div>
            <div className='d-flex align-items-center justify-content-between'>
                <div className={classes.cardText}>{currentOffer[selectedLang]}</div>
                <div className={classes.cardTextValue}>78&#8380;</div>
            </div>
            <div className='d-flex align-items-center justify-content-between mt-2'>
                <div>
                    <LabelComponent origin="custom-card" data="24" />
                </div>
                <div className={classes.expiredDate}>
                    {expiredDate[selectedLang]}: 2g, 11s
                </div>
            </div>
        </div>
    )
}


const useStyle = makeStyles(theme => ({
    cardOwner: {
        color: "black",
        fontWeight: "700",
        fontSize: "12px",
        lineHeight: "18px",
        letterSpacing: "-0.5%"
    },
    cardTitle: {
        color: "black",
        fontWeight: "400",
        fontStyle: "italic",
        fontSize: "14px",
        lineHeight: "16px",
        marginTop: "15px"
    },
    cardImgCover: {
        padding: "0px 50px",
        height: "250px"
    },
    tablist: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: '100px',
        padding: "6px"
    },
    noStyleBtnLabel: {
        "& .MuiButton-label": {
            display: "block"
        }
    },
    cardStyle: {
        position: "relative",
        fontFamily: "Poppins",
        background: "#fff",
        padding: "17px 15px",
        boxShadow: "0 4px 6px rgb(0 0 0 / 25%)",
        borderRadius: "14px",
        [theme.breakpoints.down("md")]: {
            width: "100% !important"
        }
    },
    cardText: {
        fontFamily: "Poppins",
        color: "#73716E",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "10px",
        lineHeight: "15px",
    },
    cardTextValue: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "18px",
        letterSpacing: "-0.005em",
        color: "#1D2124",
    },
    expiredDate: {
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "10px",
        lineHeight: "15px",
        letterSpacing: "-0.005em",
        color: "#1D2124",
    }
}))





// {/* <Card
//                 id={order.toString()}
//                 style={style}
//                 data-id={id}
//                 className={classes.cardStyle}
//                 key={keyProp}
//             >
//                 {
//                     renderRoute === "home" &&
//                     <DraggableBox />
//                 }
//                 {/* <Button onClick={() => paintingModal(true)} className={`${classes.noStyleBtnLabel} card-btn`}> */}
//                 <div className="cardImgCover"><Card.Img variant="top" src={paint1} /></div>
//                 <Card.Body>
//                     <Card.Title className="d-flex align-items-center">
//                         <img src={userPhoto} alt="" className="cardSmallImg" />
//                         <span className="ms-2">{paintName}</span>
//                     </Card.Title>
//                     <Card.Text>
//                         “No More Voices” {order}
//                     </Card.Text>
//                 </Card.Body>
//                 {/* </Button> */}

//                 <ListGroup className="list-group-flush">
//                     <ListGroupItem className="d-flex justify-content-between">
//                         <div>Təklif sayı</div>
//                         <div>{bidCount}</div>
//                     </ListGroupItem>
//                     <ListGroupItem className="d-flex justify-content-between">
//                         <div>Cari təklif</div>
//                         <div className="jis-manat">78M</div>
//                     </ListGroupItem>
//                 </ListGroup>
//                 <ListGroup className="list-group-flush">
//                     <ListGroupItem className="d-flex justify-content-between align-items-baseline">
//                         <CardItemBox>
//                             <img src={heart} alt="" />
//                             <span className='ms-2'>24</span>
//                         </CardItemBox>
//                         <div className="">Bitmə tarixi: 2g, 11s</div>
//                     </ListGroupItem>
//                 </ListGroup>
//             </Card> */}