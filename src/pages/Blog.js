import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import { CustomBlogBox } from '../components/CustomBlogBox';

function Blog() {
    const classes = useStyle();
    return (
        <div className={`mt-5 mb-5 container`}>
            <h1>Bloq</h1>
            <div className={classes.blogGrid}>
                {/* <Link to="/blog-details"> */}
                    <CustomBlogBox />
                {/* </Link> */}
                {/* <Link to="/blog-details"> */}
                    <CustomBlogBox />
                {/* </Link> */}
                {/* <Link to="/blog-details"> */}
                    <CustomBlogBox />
                {/* </Link> */}
            </div>
        </div>
    )
}

export default Blog;


const useStyle = makeStyles({
    blogGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "20px 15px",
        marginTop: "20px"
    }
})