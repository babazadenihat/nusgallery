import React from 'react'
import { Col, Container, Row, Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import paint1 from "../images/paint1.png";
import paint2 from "../images/paint2.png";
import userPhoto from "../images/user-photo.png";
import heart from "../images/icons/heart.svg";
import add from "../images/icons/add.svg";

import "../style.css"
import * as Styled from "../styledComponents/styled";
import { makeStyles } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { CustomCardComponent } from '../components/CustomCardComponent';
import { CustomTabs } from "../components/CustomTabs"
import Avatar from '../components/Avatar';

export const Profile = () => {

    const navigate = useNavigate();

    const goToCreateNewProject = () => {
        navigate('/newproject')
    }

    const classes = useStyle();
    return (
        <div className='mb-5'>
            {/* <Header/> */}
            <Container>
                <div>
                    <Avatar />
                </div>
                <div className='mt-3'>
                    <CustomTabs
                        rightButtonFunc={goToCreateNewProject}
                        rightButtonIcon={add}
                        rightButtonText="Yeni Proyekt"
                    />
                </div>
            </Container>



            {/* <img src={tiger}   style={{ userDrag: "none", userSelect: "none", pointerEvents: "none", userDrag: "none"}}  alt="" /> */}
        </div>
    )
}


const useStyle = makeStyles({
    nusBtnStyle: {
        borderRadius: "100px",
        backgroundColor: "#1D2124",
        color: "#fff !important",
        textDecoration: "none",
        padding: "8px"
    },
})
