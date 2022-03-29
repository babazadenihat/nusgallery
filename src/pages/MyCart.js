import React from 'react'
import { Container } from 'react-bootstrap'
import { CustomGridTabs } from '../components/CustomGridTabs';
import { title } from '../translations';
import { Trans, useTranslation } from 'react-i18next';
// import '../i18next';
import CustomCart from '../components/customCart';
import { makeStyles } from '@material-ui/core';

const MyCart = () => {
  const classes = useStyle();
  const { t, i18n } = useTranslation();

  const changeLang = (e) => {
    i18n.changeLanguage(e);
  }
  return (
    <>
      <Container className={classes.container}>
        <div className={classes.cartContainerWidth}>
          {/* <button onClick={() => changeLang("az")}>AZ</button>
          <button onClick={() => changeLang("en")}>EN</button> */}
          {/* <h2>
            <Trans  
              i18nKey="title"
            ></Trans>
            {t("title1")}
          </h2> */}
          <CustomGridTabs
            tabEnable={true}
            cartEnable={true}
            tabLabel={{ tab1: "Hamısı", tab2: "İştirakçıyam" }}
          />
        </div>
      </Container>
    </>
  )
}

export default MyCart

const useStyle = makeStyles({
  cartContainerWidth: {
    width: "650px",
    margin: "auto",
  },
  container: {
    margin: "48px auto 72px"
  }
})