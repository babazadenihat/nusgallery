import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import date from "../images/icons/date.svg";
import blogphoto1 from "../images/blog-photo-1.png";
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core';
import { CardItemBox, MoreBtn } from '../styledComponents/styled';
import heart from "../images/icons/heart.svg";


export const CustomBlogBox = ({blog}) => {
    const classes = useStyle();
    const navigate = useNavigate();

    const goToDetailsPage = () => {
        navigate(`blog/${blog?.id}`);
    }

    // const stringToHtml = (string) => {
    //     var parser = new DOMParser();
    //     var doc = parser.parseFromString(string, 'text/html');
    //     return doc.body;
    // }

    // console.log(stringToHtml(blog?.description))
    return (
        <>
            <Link to={`blog/${blog?.id}`}>
                <div><img src={blog?.main_photo } className={(classes.blogImg)} alt="" /></div>
                <div className='mt-4'>
                    <Box sx={{ display: "flex" }}>
                        <CardItemBox className={classes.cardItemBox}>
                            <img src={heart} alt="" />
                            <span className='ms-2'>{blog?.like_users}</span>
                        </CardItemBox>
                        <CardItemBox className={`${classes.cardItemBox} ms-3`}>
                            <img src={date} alt="" />
                            <span className='ms-2'>24 Okt 2021</span>
                        </CardItemBox>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <p className={classes.blogP}>{blog?.title}</p>
                        <span className={classes.blogSpan}>{ blog?.description}
                        </span>
                    </Box>
                    <Box sx={{ textAlign: "left", mt: 4 }}><MoreBtn onClick={() => goToDetailsPage()}>Ardını oxu</MoreBtn></Box>
                </div>
            </Link>
        </>
    )
}


const useStyle = makeStyles({
    blogImg: {
        borderRadius: "18px",
        width: "100%"
    },
    cardItemBox: {
        color: "#1D2124"
    },
    blogP: {
        fontSize: "20px",
        fontFamily: "Poppins",
        fontWeight: "bold",
        color: "#1D2124"
    },
    blogSpan: {
        color: "#73716E",
        fontSize: "10px"
    }
})
