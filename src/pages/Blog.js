import React from 'react'
import { Container } from 'react-bootstrap'
import { CustomTabs } from '../components/CustomTabs';
import { title } from '../translations';
import { Trans, useTranslation } from 'react-i18next';
// import '../i18next';
import CustomCart from '../components/customCart';
import { makeStyles } from '@material-ui/core';
import blogPhoto from "../images/blog-photo.jpg";
import blogPhoto2 from "../images/blog-photo2.jpg";
import clsx from 'clsx';

const Blog = () => {
  const classes = useStyle();
  const { t, i18n } = useTranslation();

  const changeLang = (e) => {
    i18n.changeLanguage(e);
    }
    return (
        <>
            <Container className={classes.container}>
                <div className={classes.cartContainerWidth}>
                    <div className='d-flex justify-content-center mb-3'>
                        <img src={blogPhoto} className={classes.borRad} />
                    </div>
                    <div className='ps-4 pe-4'>
                        <h2 className={`mb-3 ${clsx(classes.poppinsFont, classes.title)}`}>
                            Meet all of the current artists
                        </h2>
                        <p className={`mb-3 ${clsx(classes.poppinsFont, classes.parag)}`}>
                            It’s no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least.
                        </p>
                        <p className={clsx(classes.poppinsFont, classes.parag)}>
                            <b>Producing creative,</b> fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at how to make side projects work and why they’re worthwhile, drawing on lessons learned from our development of the ux ompanion app
                        </p>
                        <h2 className={`mb-3 mt-3 ${clsx(classes.poppinsFont, classes.title)}`}>
                            Why Integrate Side Projects?
                        </h2>
                        <p className={`mb-3 ${clsx(classes.poppinsFont, classes.parag)}`}>
                        Commercializing side projects alongside client work isn’t easy. Even if such projects are intended to generate additional revenue streams, they are not directly related to your core business. Those with a more qualitative aim, such as promoting expertise or technological experimentation, are even harder to justify.
                        </p>
                        <p className={`mb-3 ${clsx(classes.poppinsFont, classes.parag)}`}>
                        We’re still working on achieving that perfect balance between commerce and creativity. But we have fresh inspiration on how it’s done from having worked on ux companion. The app gained a popular following in early <b>October</b>, as one of the first native apps to offer a full glossary of user experience terms and theory — but the development process was definitely a learning process.
                        </p>
                        <p className={`mb-4 ${clsx(classes.poppinsFont, classes.parag)}`}>
                        Being creative within the constraints of client briefs, budgets and timelines is the norm for most agencies. However, investing in research and development as a true, creative outlet is a powerful addition. In these side projects alone, your team members can pool their expertise to create and shape their own vision — a powerful way to develop motivation, interdisciplinary skills and close relationships.
                        </p>
                    </div>
                    <div className='d-flex justify-content-center mb-3'>
                        <img src={blogPhoto2} className={classes.borRad} />
                    </div>
                    <div className='ps-4 pe-4'>
                        <p className={`mb-3 ${clsx(classes.poppinsFont, classes.parag)}`}>
                        <b>It’s no secret</b> that the digital industry is booming. From exciting startups to global brands, companies are reaching out to digital agencies, responding to the new possibilities available. However, the industry is fast becoming overcrowded, heaving with agencies offering similar services — on the surface, at least.
                        </p>
                        <p className={`mb-3 ${clsx(classes.poppinsFont, classes.parag)}`}>
                        Producing creative, fresh projects is the key to standing out. Unique side projects are the best place to innovate, but balancing commercially and creatively lucrative work is tricky. So, this article looks at how to make side projects work and why they’re worthwhile, drawing on lessons learned from our development of the ux ompanion app
                        </p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Blog

const useStyle = makeStyles({
    poppinsFont: {
        fontFamily: "Poppins"
    },
    cartContainerWidth: {
        width: "528px",
        margin: "0 auto"
    },
    title: {
       fontSize: "25px",
       lineHeight: "30px",
       fontWeight: "600"
    },
    parag: {
        fontSize: "13px",
        lineHeight: "30px",
        fontWeight: "500"
    },
    borRad: {
        borderRadius: "18px"
    },

    container: {
        margin: "48px auto 72px"
    }
})
