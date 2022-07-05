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
import heart from "../images/icons/heart.svg";
import add from "../images/icons/add.svg";
import { CardItemBox, DraggableBox } from "../styledComponents/styled";
import { Button, makeStyles } from '@material-ui/core';
import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl'




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
        bidCount
    } = props;



    return (
        <>
            <Card
                id={order.toString()}
                style={style}
                // draggable={true}
                // onDragStart={handleDrag}
                // onDragOver={(e => e.preventDefault())}
                // onDrop={handleDrop}
                // id="items"
                className={classes.cardStyle}
                key={keyProp}
            >

                <DraggableBox />
                <Button onClick={() => paintingModal(true)} className={classes.noStyleBtnLabel}>
                    <div className="cardImgCover"><Card.Img variant="top" src={paint1} /></div>
                    <Card.Body>
                        <Card.Title className="d-flex align-items-center">
                            <img src={userPhoto} alt="" className="cardSmallImg" />
                            <span className="ms-2">{paintName}</span>
                        </Card.Title>
                        <Card.Text>
                            “No More Voices” {order}
                        </Card.Text>
                    </Card.Body>
                </Button>

                <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between">
                        <div>Təklif sayı</div>
                        <div>{bidCount}</div>
                    </ListGroupItem>
                    <ListGroupItem className="d-flex justify-content-between">
                        <div>Cari təklif</div>
                        <div className="jis-manat">78M</div>
                    </ListGroupItem>
                </ListGroup>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="d-flex justify-content-between align-items-baseline">
                        <CardItemBox>
                            <img src={heart} alt="" />
                            <span className='ms-2'>24</span>
                        </CardItemBox>
                        <div className="">Bitmə tarixi: 2g, 11s</div>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </>
    )
}


const useStyle = makeStyles(theme => ({
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
        [theme.breakpoints.down("md")]: {
            width: "100% !important"
        }
    }
}))







{/* <Card style={{ width: '18rem' }}>
                                    <Styled.DraggableBox />
                                    <div className="cardImgCover">
                                        <Card.Img variant="top" style={{ pointerEvents: "none" }} src={paint2} />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="d-flex align-items-center">
                                            <img src={userPhoto} alt="" className="cardSmallImg" />
                                            <span className="ms-2">Tahir Salahov</span>
                                        </Card.Title>
                                        <Card.Text>
                                            “Le Carnaval (Les Cotillons)”
                                        </Card.Text>
                                    </Card.Body>

                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem className="d-flex justify-content-between">
                                            <div>Təklif sayı</div>
                                            <div>24</div>
                                        </ListGroupItem>
                                        <ListGroupItem className="d-flex justify-content-between">
                                            <div>Cari təklif</div>
                                            <div className="jis-manat">78M</div>
                                        </ListGroupItem>
                                    </ListGroup>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem className="d-flex justify-content-between align-items-baseline">
                                            <div className="likes">
                                                <img src={heart} alt="" />
                                                <span>24</span>
                                            </div>
                                            <div className="">Bitmə tarixi: 2g, 11s</div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>



<Card style={{ width: '18rem', position: 'relative' }}>
                                    <Styled.DraggableBox />
                                    <div className="cardImgCover"><Card.Img variant="top" src={paint1} /></div>
                                    <Card.Body>
                                        <Card.Title className="d-flex align-items-center">
                                            <img src={userPhoto} alt="" className="cardSmallImg" />
                                            <span className="ms-2">Tahir Salahov</span>
                                        </Card.Title>
                                        <Card.Text>
                                            “yes I am here”
                                        </Card.Text>
                                    </Card.Body>

                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem className="d-flex justify-content-between">
                                            <div>Təklif sayı</div>
                                            <div>24</div>
                                        </ListGroupItem>
                                        <ListGroupItem className="d-flex justify-content-between">
                                            <div>Cari təklif</div>
                                            <div className="jis-manat">78M</div>
                                        </ListGroupItem>
                                    </ListGroup>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem className="d-flex justify-content-between align-items-baseline">
                                            <div className="likes">
                                                <img src={heart} alt="" />
                                                <span>24</span>
                                            </div>
                                            <div className="">Bitmə tarixi: 2g, 11s</div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Card>



<Card style={{ width: '18rem' }}>
<Styled.DraggableBox />
<div className="cardImgCover">
    <Card.Img variant="top" style={{ pointerEvents: "none" }} src={paint2} />
</div>
<Card.Body>
    <Card.Title className="d-flex align-items-center">
        <img src={userPhoto} alt="" className="cardSmallImg" />
        <span className="ms-2">Tahir Salahov</span>
    </Card.Title>
    <Card.Text>
        “Le Cossion patadole”
    </Card.Text>
</Card.Body>

<ListGroup className="list-group-flush">
    <ListGroupItem className="d-flex justify-content-between">
        <div>Təklif sayı</div>
        <div>24</div>
    </ListGroupItem>
    <ListGroupItem className="d-flex justify-content-between">
        <div>Cari təklif</div>
        <div className="jis-manat">78M</div>
    </ListGroupItem>
</ListGroup>
<ListGroup className="list-group-flush">
    <ListGroupItem className="d-flex justify-content-between align-items-baseline">
        <div className="likes">
            <img src={heart} alt="" />
            <span>24</span>
        </div>
        <div className="">Bitmə tarixi: 2g, 11s</div>
    </ListGroupItem>
</ListGroup>
</Card>


<Card style={{ width: '18rem' }}>
<Styled.DraggableBox />
<div className="cardImgCover">
    <Card.Img variant="top" style={{ pointerEvents: "none" }} src={paint2} />
</div>
<Card.Body>
    <Card.Title className="d-flex align-items-center">
        <img src={userPhoto} alt="" className="cardSmallImg" />
        <span className="ms-2">Tahir Salahov</span>
    </Card.Title>
    <Card.Text>
        “Le Cossion fortran
    </Card.Text>
</Card.Body>

<ListGroup className="list-group-flush">
    <ListGroupItem className="d-flex justify-content-between">
        <div>Təklif sayı</div>
        <div>24</div>
    </ListGroupItem>
    <ListGroupItem className="d-flex justify-content-between">
        <div>Cari təklif</div>
        <div className="jis-manat">78M</div>
    </ListGroupItem>
</ListGroup>
<ListGroup className="list-group-flush">
    <ListGroupItem className="d-flex justify-content-between align-items-baseline">
        <div className="likes">
            <img src={heart} alt="" />
            <span>24</span>
        </div>
        <div className="">Bitmə tarixi: 2g, 11s</div>
    </ListGroupItem>
</ListGroup>
</Card> */}