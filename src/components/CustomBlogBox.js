import React from 'react'
import date from "../images/icons/date.svg";
import blogphoto1 from "../images/blog-photo-1.png";
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core';
import { CardItemBox, MoreBtn } from '../styledComponents/styled';
import heart from "../images/icons/heart.svg";


export const CustomBlogBox = () => {
    const classes = useStyle();
    return (
        <>
            <div>
                <div><img src={blogphoto1}  className={(classes.blogImg)} alt="" /></div>
                <div className='mt-4'>
                    <Box sx={{display: "flex"}}>
                        <CardItemBox>
                            <img src={heart} alt="" />
                            <span>24</span>
                        </CardItemBox>
                        <CardItemBox className="ms-3">
                            <img src={date} alt="" />
                            24 Okt 2021
                        </CardItemBox>
                    </Box>
                    <Box sx={{mt: 3}}>
                        <p className={classes.blogP}>Meet all of the current artists</p>
                        <span className={classes.blogSpan}>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure quis nostrud exercitation...
                        </span>
                    </Box>
                    <Box sx={{textAlign: "left", mt: 4}}><MoreBtn>Ardını oxu</MoreBtn></Box>
                </div>
            </div>
        </>
    )
}


const useStyle = makeStyles({
    blogImg: {
        borderRadius: "18px",
        width: "100%"
    },
    blogP: {
        fontSize: "20px",
        fontFamily: "Poppins",
        fontWeight: "bold"
    },
    blogSpan: {
        color: "#73716E",
        fontSize: "10px"
    }
  })
  