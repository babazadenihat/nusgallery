import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button, Container, Modal, FormCheck, Form, FormGroup, FormLabel } from 'react-bootstrap'
import * as Styled from "../styledComponents/styled";
import { CustomTabs } from "../components/CustomTabs"
import { Box, Checkbox, Grid } from '@material-ui/core';
import filter from "../images/icons/filter.svg"
import { Close, ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import * as Yup from "yup"
import { useFormik } from 'formik';
import { CustomBlogBox } from '../components/CustomBlogBox';
import { Link } from 'react-router-dom';
import heart from "../images/icons/heart.svg";
import userPhoto from "../images/user-photo.png";
import auxtionIcon from "../images/icons/auxtionIcon.svg";
import crownIcon from "../images/icons/crownIcon.svg";
import basket from "../images/icons/basket.svg"
import clsx from 'clsx';
import { useSelector } from "react-redux/es/exports"
import { TextField } from "@material-ui/core"
import Countdown from '../components/CountDown/CountDown';
import { AnimatedDiv } from '../layouts/layout';
import arrowDown from "../images/icons/arrow-down.svg";
// import arrow from "../images/icons/arrow-down.svg";
import jQuery from 'jquery';
import CurrencyInput from 'react-currency-input-field';
import { text } from '../translations/translation';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

jQuery("input[data-type='currency']").on({
  keyup: function () {
    formatCurrency(jQuery(this));
  },
  blur: function () {
    formatCurrency(jQuery(this), "blur");
  }
});


function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.

  // get input value
  var input_val = input.val();

  // don't validate empty input
  if (input_val === "") { return; }

  // original length
  var original_len = input_val.length;

  // initial caret position 
  var caret_pos = input.prop("selectionStart");

  // check for decimal
  if (input_val.indexOf(".") >= 0) {

    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf(".");

    // split number by decimal point
    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos);

    // add commas to left side of number
    left_side = formatNumber(left_side);

    // validate right side
    right_side = formatNumber(right_side);

    // On blur make sure 2 numbers after decimal
    if (blur === "blur") {
      right_side += "00";
    }

    // Limit decimal to only 2 digits
    right_side = right_side.substring(0, 2);

    // join number by .
    input_val = "$" + left_side + "." + right_side;

  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = "$" + input_val;

    // final formatting
    if (blur === "blur") {
      input_val += ".00";
    }
  }

  // send updated string to input
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
}



export const Home = () => {
  const selectedLang = useSelector((state) => state.language.translation)
  const classes = useStyle();
  const formik = useFormik({
    initialValues: {

    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [blogData, setBlogData] = useState({})

  useEffect(() => {
    fetch("http://142.93.97.123/api/v1.0/blogs/").then(
      response => {
        if (response) {
          return response.json()
        }
      }
    ).then(data => setBlogData(data)).catch((err) => console.log(err.message))
  }, [])


  useEffect(() => {
    console.log(window.document)
  }, [])

  return (
    <div>
      <div>
        <AnimatedDiv />
      </div>
      <Container className={classes.pageContainer}>
        <h2 className={`${classes.pageTitle} mb-4`}>{text.gallery[selectedLang]}</h2>
        <CustomTabs
          rightButtonFunc={setModalShow}
          rightButtonIcon={filter}
          rightButtonText="Filter"
          paintingModal={setModalShow2}
          tabEnable={false}
          tabLabel={{ tab1: "Onlayn", tab2: "Oflayn" }}
        />
        <Box sx={{ textAlign: "center", marginTop: "42px" }}><Styled.MoreBtn>Daha çox</Styled.MoreBtn></Box>
        <FilterModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onSubmit={formik.handleSubmit}
        />
        <PaintingModal
          show={modalShow2}
          onHide={() => setModalShow2(false)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onSubmit={formik.handleSubmit}
        />
      </Container>
      <Container fluid className={(classes.blog)}>
        <Container>
          <h2>Bloq</h2>
          {console.log(blogData)}
          <Grid container spacing={2} className='mt-4'>
            {
              blogData && blogData?.results?.map(blog => (
                <Grid item md={4} className={classes.paper}>
                  <CustomBlogBox blog={blog} />
                </Grid>
              ))
            }
          </Grid>
        </Container>
      </Container>
    </div>
  )
}

function FilterModal(props) {
  const classes = useStyle();
  const {
    handleChange,
    handleBlur,
    handleSubmit
  } = props;


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={classes.modal}
    >
      <Modal.Header>
        <button onClick={props.onHide} className={classes.xBtn}><Close /></button>
        <Modal.Title id="contained-modal-title-vcenter" className={classes.filterBoxTitle}>
          Filter
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <h4>Qiymət aralığı</h4>
          <div className='d-flex mt-4'>
            <Box>
              <FormGroup controlId="7-25">
                <FormCheck type="checkbox" label="7-25" />
              </FormGroup>
              <FormGroup controlId="50-100">
                <FormCheck type="checkbox" label="50-100" />
              </FormGroup>
            </Box>
            <Box className='ms-5'>
              <FormGroup controlId="25-50">
                <FormCheck type="checkbox" label="25-50"
                  name='' onBlur={handleBlur} onChange={handleBlur} />
              </FormGroup>
              <FormGroup controlId="100">
                <FormCheck type="checkbox" label="100" />
              </FormGroup>
            </Box>
          </div>
          <hr />
          <h4>Kateqoriya</h4>
          <div className='d-flex'>
            <div>
              <FormGroup controlId="naturmort">
                <FormCheck type="checkbox" label="naturmort" />
              </FormGroup>
              <FormGroup controlId="landscape">
                <FormCheck type="checkbox" label="landscape" />
              </FormGroup>
            </div>
            <Box className='ms-5'>
              <FormGroup controlId="portret">
                <FormCheck type="checkbox" label="portret" />
              </FormGroup>
              <FormGroup controlId="abstract">
                <FormCheck type="checkbox" label="abstract" />
              </FormGroup>
            </Box>
            <Box className='ms-5'>
              <FormGroup controlId="other">
                <FormCheck type="checkbox" label="other" />
              </FormGroup>
            </Box>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Styled.NusBtnPattern
            type="button"
            className='nusTransparentBtn'
            onClick={props.onHide}
          >Axtar</Styled.NusBtnPattern>
          <Styled.NusBtnPattern
            type="button"
            className='nusBlackBtn'
          >Axtar</Styled.NusBtnPattern>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}


function PaintingModal(props) {
  const [price, setPrice] = React.useState(50.0)
  const classes = useStyle();
  const {
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  const format = (val) => val + `\u20BC`
  const parse = (val) => val.replace(/^\m/, '')

  const handlePriceBySign = (sign) => {
    if (sign === "+") {
      setPrice(`${Number(price) + 50}`)
    } else if (sign === "-") {
      if (price <= 0) return;
      setPrice(price - 50)
    }
  }

  const handlePriceByInput = (priceValue) => {
    // var regex=/^[0-9]+$/;
    // if (priceValue.match(regex)) {
    // console.log(isNaN(parseInt(priceValue)))
    // }
    // if (isNaN(parseInt(priceValue)) === true) return;
    setPrice(priceValue)
    // if(typeof (+priceValue) === "number") {
    //   console.log(priceValue)

    // }

  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={classes.paintModalContent}
    >
      {/* <Modal.Header>
        <button onClick={props.onHide} className={classes.xBtn}><Close /></button>
        <Modal.Title id="contained-modal-title-vcenter" className={classes.filterBoxTitle}>
          Filter
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body className='p-0'>
        <div className='d-flex align-items-center'>
          <div className={`d-flex justify-content-between ${classes.leftSide}`}>
            <button onClick={props.onHide} className={classes.xBtn}><Close /></button>
            <div className={classes.purchaseNow}>
              Indi al | 500 m
            </div>
            <Styled.CardItemBox>
              <img src={heart} alt="" />
              <span className='ms-2'>24</span>
            </Styled.CardItemBox>
          </div>
          <div className={`d-flex flex-column ${classes.rightSide}`}>
            <div className={clsx(classes.controlPaper)}>
              <button className={clsx(classes.fontSansDm, classes.controlBtn)}><ArrowBackIos style={{ width: "15px" }} /> Əvvəlki</button>
              <button className={clsx(classes.fontSansDm, classes.controlBtn)}>Növbəti <ArrowForwardIos style={{ width: "15px" }} /></button>
            </div>
            <div className='mt-5'>
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div className={clsx(classes.authorLabel, classes.fontPoppins)}>Müəllif</div>
                  <div className='d-flex align-items-center ms-3'>
                    <img src={userPhoto} alt="" className="cardSmallImg" />
                    <span className={`${clsx(classes.fontPoppins, classes.fontWeight600, classes.popupPaintAuthor)} ms-2`}>Tahir Salahov</span>
                  </div>
                </div>
                <div className={clsx(classes.categoryLabel)}>
                  <span>#abstrakt</span>
                </div>
              </div>
              <div className={`mt-4 mb-3 ${clsx(classes.popupPaintTitle, classes.fontPoppins)}`}>“Mark Quinn - Claudia as Flora”</div>
              <div className={clsx(classes.sectionBorder)}>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'><img src={auxtionIcon} />
                    <span className={`ms-2 d-flex align-items-center ${clsx(classes.midText, classes.fontPoppins, classes.fontWeight600)}`}>Təklif sayı</span></div>
                  <div className={clsx(classes.midText, classes.fontPoppins, classes.fontWeight600)}>19</div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                  <div className='d-flex align-items-center'><img src={crownIcon} />
                    <span className={`ms-2 d-flex align-items-center ${clsx(classes.midText, classes.fontPoppins, classes.fontWeight600)}`}>Cari təklif</span></div>
                  <div className={clsx(classes.midText, classes.fontPoppins, classes.fontWeight600)}>240 M</div>
                </div>
              </div>
              <div>
                <div className='d-flex justify-content-between align-items-center mt-4'>
                  <div className='d-flex align-items-center'>
                    <span className={`d-flex align-items-center ${clsx(classes.midText2, classes.fontPoppins)}`}>Ölçü</span></div>
                  <div className={clsx(classes.midText3, classes.fontPoppins)}>60x80 cm</div>
                </div>
                <div className='d-flex justify-content-between align-items-center mt-2'>
                  <div className='d-flex align-items-center'>
                    <span className={`d-flex align-items-center ${clsx(classes.midText2, classes.fontPoppins)}`}>Boya növü</span></div>
                  <div className={clsx(classes.midText3, classes.fontPoppins)}>Akvarel</div>
                </div>
                <div className='mt-4'>
                  <h6 className={clsx(classes.fontPoppins, classes.fontWeight600)}>Bitmə vaxtı</h6>
                  <Countdown countdownTimestampMs={1655300101000} />
                </div>
                <div className='d-flex align-items-center justify-content-between mt-4'>
                  <div>
                    <button className={classes.basket}>
                      <img src={basket} alt="basket" width="100%" />
                    </button>
                  </div>
                  {/* <div className={clsx(classes.numberInputContainer)}>
                    <div>
                      <span>M</span>
                      <input type="text" className={clsx(classes.priceInput)} value={price} onChange={(e) => handlePriceByInput(e.target.value)} />
                    </div>
                    <div className={clsx(classes.inputControlBtn)}>
                      <button onClick={() => handlePriceBySign("+")}>+</button>
                      <button onClick={() => handlePriceBySign("-")}>-</button>
                    </div>
                  </div> */}
                  {/* <input type="number" 
                        onChange={(valueString) => setPrice( valueString)}
                        value={format(price)}
                        max={10000}
                        min={0}
                        step = {50}
                  /> */}
                  <NumberInput
                  style={{position: "relative"}}
                    onChange={(valueString) => setPrice(parse(valueString))}
                    value={format(price)}
                    max={10000}
                    min={0}
                    allowMouseWheel
                    isRequired
                    variant="unstyled"
                    step={50}
                  >
                    <NumberInputField />
                    {/* <NumberInputStepper >
                      <NumberIncrementStepper  />
                      <NumberDecrementStepper />
                    </NumberInputStepper> */}
                    <div className={clsx(classes.inputControlBtn)}>
                      <button onClick={() => handlePriceBySign("+")}>+</button>
                      <button onClick={() => handlePriceBySign("-")}>-</button>
                    </div>
                  </NumberInput>
                  {/* <CurrencyInput
                    suffix="&#8380;"
                    // intlConfig={{ locale: 'az-AZ', currency: 'AZN' }}
                    id="input-example"
                    name="input-name"
                    // placeholder="0$"
                    defaultValue={1000}
                    // step="2"
                    value={price}
                    className={classes.priceInput}
                    // allowDecimals={true}
                    decimalsLimit={2}
                    onValueChange={(value, name) => setPrice(value)}
                  /> */}
                  <div className={`${classes.offerBtn} ms-2`}>
                    <Styled.NusBtnPattern
                      type="button"
                      className='nusBlackBtn'
                    >Təklif ver</Styled.NusBtnPattern>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Form onSubmit={handleSubmit}>
      </Form>
    </Modal>
  );
}


const getIcon = () => {
  return (
    <span><i class="fa-solid fa-manat-sign"></i></span>
  )
}


const useStyle = makeStyles((theme) => ({
  fontPoppins: {
    fontFamily: "DM Sans"
  },
  fontSansDm: {
    fontFamily: "DM Sans"
  },
  fontWeight600: {
    fontWeight: "600"
  },
  pageContainer: {
    padding: "60px 0",
  },
  pageTitle: {
    fontFamily: "Poppins",
    fontWeight: 500
  },
  filterBoxTitle: {
    width: "100%",
    textAlign: "center"
  },
  xBtn: {
    backgroundColor: "transparent",
    border: 0
  },
  modal: {
    width: "396px"
  },
  blog: {
    backgroundColor: "#fff",
    padding: "60px 0"
  },
  paper: {
    marginBottom: "30px"
  },
  paintModalContent: {
    maxWidth: "896px",
    "& .modal-content": {
      borderRadius: "21px",
    }
  },
  purchaseNow: {
    border: "1px solid black",
    borderRadius: "90px",
    padding: "6px 15px"
  },
  controlBtn: {
    border: 0,
    background: "transparent",
    fontWeight: "700",
  },
  controlPaper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    background: "#fff",
    borderRadius: "90px",
    fontSize: "12px",
    height: "32px",
    padding: "0 15px"
  },
  leftSide: {
    borderRadius: "21px",
    width: "50%",
    padding: "42px 30px"
  },
  rightSide: {
    backgroundColor: "#F2EFE8",
    width: "50%",
    borderRadius: "21px",
    padding: "30px 41px 30px 65px",
  },
  categoryLabel: {
    backgroundColor: "#BCEDBF",
    padding: "5px",
    borderRadius: "12px"
  },
  popupPaintAuthor: {
    fontSize: "15px"
  },
  popupPaintTitle: {
    fontStyle: "italic",
    color: "#1D2124"
  },
  authorLabel: {
    fontSize: "11px"
  },
  midText: {

  },
  midText2: {
    fontSize: "12px",
    color: "#1D2124"
  },
  midText3: {
    fontSize: "12px",
    color: "#73716E"
  },
  sectionBorder: {
    borderBottom: "1px solid #D9D6C3",
    paddingBottom: "18px"
  },
  // custom input styles
  numberInputContainer: {
    position: "relative",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "155px",
    borderRadius: " 90px",
    padding: "5px 0"
  },
  inputControlBtn: {
    position: "absolute",
    right: "2px"
  },
  priceInput: {
    width: "50%",
    borderRadius: "22px",
    border: 0,
    outline: 0,
    textAlign: "center",
    padding: "8px 20px",
    marginLeft: "10px"
  },
  basket: {
    border: "1px solid black",
    borderRadius: "50px",
    width: "32px",
    height: "32px",
    backgroundColor: "transparent"
  },
  offerBtn: {
    width: "155px"
  }
}))
