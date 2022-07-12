import React from 'react'
import { Container } from 'react-bootstrap'
import { CustomTabs } from '../components/CustomTabs';
import { title } from '../translations';
import { Trans, useTranslation } from 'react-i18next';
// import '../i18next';
import CustomCart from '../components/customCart';
import { makeStyles } from '@material-ui/core';
// translations
import { text } from '../translations/translation';

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
          <CustomTabs
            tabEnable={true}
            cartEnable={true}
            tabLabel={text.cartTabLabel}
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