import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Button, Container, Modal, FormCheck, Form, FormGroup, FormLabel } from 'react-bootstrap'
import * as Styled from "../styledComponents/styled";
import { CustomGridTabs } from "../components/CustomGridTabs"
import { Box, Checkbox, Grid } from '@material-ui/core';
import filter from "../images/icons/filter.svg"
import { Close } from '@material-ui/icons';
import * as Yup from "yup"
import { useFormik } from 'formik';
import { CustomBlogBox } from '../components/CustomBlogBox';
import { Link } from 'react-router-dom';
import heart from "../images/icons/heart.svg";

export const Home = () => {
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


  return (
    <div>
      <Container className={classes.pageContainer}>
        <h2 className={`${classes.pageTitle} mb-4`}>Gallery</h2>
        <CustomGridTabs
          rightButtonFunc={setModalShow}
          rightButtonIcon={filter}
          rightButtonText="Filter"
          paintingModal={setModalShow2}
          onOff={true}
          tabLabel={{tab1: "Onlayn", tab2: "Oflayn"}}
        />
        <Box sx={{ textAlign: "center" }}><Styled.MoreBtn>Daha çox</Styled.MoreBtn></Box>
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
          <Grid container spacing={2} className='mt-4'>
            <Grid item md={4} className={classes.paper}>
              <Link to="/">
                <CustomBlogBox />
              </Link>
            </Grid>
            <Grid item md={4} className={classes.paper}>
              <Link to="/">
                <CustomBlogBox />
              </Link>
            </Grid>
            <Grid item md={4} className={classes.paper}>
              <Link to="/">
                <CustomBlogBox />
              </Link>
            </Grid>
            {/* <Grid  item md={4} className={classes.paper}>    
                      <Link to="/">
                        <CustomBlogBox/>
                      </Link>
                    </Grid>
                    <Grid item md={4} className={classes.paper}>    
                      <Link to="/">
                        <CustomBlogBox/>
                      </Link>
                    </Grid> */}
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
      {/* <Modal.Header>
        <button onClick={props.onHide} className={classes.xBtn}><Close /></button>
        <Modal.Title id="contained-modal-title-vcenter" className={classes.filterBoxTitle}>
          Filter
        </Modal.Title>
      </Modal.Header> */}
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className='d-flex justify-content-between'>
            <button onClick={props.onHide} className={classes.xBtn}><Close /></button>
            <Styled.CardItemBox>
                  <img src={heart} alt="" />
                  <span className='ms-2'>24</span>
              </Styled.CardItemBox>
          </div>
          <div className='d-flex mt-4'>
            <Box>
              <FormGroup controlId="7-25">
                <FormCheck type="checkbox" label="7-25" />
              </FormGroup>
              <FormGroup controlId="50-100">
                <FormCheck type="checkbox" label="50-100" />
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



const useStyle = makeStyles((theme) => ({
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
  }
}))
