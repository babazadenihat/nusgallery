import React from 'react'
import { NusBtnPattern, WhiteInput } from "../styledComponents/styled"
import backLeft from "../images/icons/back-left.svg"
import dropIcon from "../images/icons/icon-gallery.svg"
import info from "../images/icons/information.svg"
import { Box, TextField } from '@material-ui/core';
import { Close} from '@material-ui/icons';
import { useDropzone } from 'react-dropzone'
import { makeStyles } from '@material-ui/styles';
import { useNavigate } from 'react-router-dom';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FormCheck, FormGroup } from 'react-bootstrap';


const NewProject = () => {
  const navigate = useNavigate()
    const classes = useStyle();
    const [files, setFiles] = React.useState([])
    const [progress, setProgress] = React.useState(0)
    const [checked, setChecked] = React.useState(true)

    const handleCheckBox = () => {
      setChecked(!checked)
    }


    const {getRootProps, getInputProps, acceptedFiles } = useDropzone({
        accept: 'image/*',
        addRemoveLinks: true,
        onDrop: acceptedFiles => {
          setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
          })));
          acceptedFiles.map((file, progress) => {
            console.log(file, progress)
            const reader = new FileReader()
            
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = (arg) => {
              // Do whatever you want with the file contents
              const binaryStr = reader.result
              console.log(binaryStr)
              console.log();
              setProgress(parseInt(Math.round((arg.loaded * 100) / arg.total)))
            }
            reader.readAsArrayBuffer(file)
          })
        },
      });
      

    const dropzoneThumb = files.map( (file, i) => (
      <Box className={classes.dropZoneResult}>
          <Box sx={{display: "flex", alignItems: 'center'}}>
            <aside style={thumbsContainer}>
              <div style={thumb} key={file.name}>
                <div style={thumbInner}>
                  <img
                    src={file.preview}
                    style={img}
                  />
                </div>
              </div>
            </aside>
            <Box>
              {file.name.replace(/\..+$/, '').slice(0, 20)}
            </Box>
          </Box>
          <Box sx={{textAlign: "right"}}>
            {progress === 100 ?
            
            <span onClick={() => removeFile(i)}> <Close /></span> :
            <CircularProgressbar value={progress} text={`${progress}%`} className={classes.progressCircle} />
            }
          </Box>
      </Box>
    )) 

    const removeFile = (file) => {
      const newFileArray = [...files]
      console.log(file)
      newFileArray.splice(file, 1);
      setFiles(newFileArray)
    }

    const goBack = () => {
      navigate("/profile")
    }
    return (
        <>
            <Box sx={{width: "450px", margin: "0 auto", padding: "48px 0 72px"}}>
              <form>
                <Box>
                    <NusBtnPattern onClick={goBack} className={`${classes.btnCustomProps1} nusWhiteBtn`}>
                        <img src={backLeft} alt="" />
                        <span className='ms-3'>Ləğv et</span>
                    </NusBtnPattern>
                </Box>
                <Box {...getRootProps({className: 'dropzone'})} className={classes.dropZoneHolder}>
                        <input {...getInputProps()} />
                        
                        <img src={dropIcon}   
                     alt="" />
                        <p>Drag and drop an image, or <b>Browse</b></p>
                        <p>1600x1200 or higher recommended. Max 10MB each</p>
                </Box>
                { files.length > 0 && dropzoneThumb }
                <Box>
                  <TextField
                    placeholder='Əsərin adı'
                    className={classes.inputProps}
                  />
                </Box>
                <Box sx={{mt: 4}}>
                  <h5>Ölçü</h5>
                  <Box sx={{mt:2}}>
                    <WhiteInput type="text"
                      className={classes.inputCustomProps}
                      placeholder='En'
                      />
                      <span className='ms-3'>x</span>
                      <WhiteInput type="text"
                      className={`ms-3 ${classes.inputCustomProps}`}
                      placeholder='Hündürlük'
                      />
                      <span className='ms-3'>cm</span>
                  </Box>
                </Box>
                <Box sx={{mt: 4}}>
                  <h5>Kateqoriya</h5>
                  <Box sx={{display: "flex",mt:2}}>
                    <FormGroup controlId="naturmart" className='me-3'>
                      <FormCheck  type="checkbox" label="Natürmort" className='cat-checkbox'/>
                    </FormGroup>
                    <FormGroup controlId="peysaj" className='me-3'>
                      <FormCheck  type="checkbox" label="Peyzaj" className='cat-checkbox'/>
                    </FormGroup>
                    <FormGroup controlId="portret" className='me-3'>
                      <FormCheck type="checkbox" label="Portret" 
                      name='' className='cat-checkbox'/>
                    </FormGroup>
                    <FormGroup controlId="abstract" className='me-3'>
                      <FormCheck  type="checkbox" label="Abstrakt" className='cat-checkbox'/>
                    </FormGroup>
                    <FormGroup controlId="other" className='me-3'>
                      <FormCheck  type="checkbox" label="Digər" className='cat-checkbox'/>
                    </FormGroup>
                  </Box>
                </Box>
                <Box sx={{mt: 4}}>
                  <h5>Boya növü</h5>
                  <Box sx={{mt: 2}}>
                      <WhiteInput type="text"
                        placeholder='Default'
                      />
                  </Box>
                </Box>
                <Box sx={{mt: 4, display: "flex", justifyContent: "space-between"}}>
                  <Box>
                    <h5>Başlıq <img src={info} alt="" /></h5>
                    <Box sx={{mt: 2}}>
                      Lorem ipsum dolor sit amet
                    </Box>
                  </Box>
                  <FormCheck 
                    id="switchEnabled"
                    type="switch"
                    className='header-checkbox'
                    checked={checked}
                    onChange={handleCheckBox}
                  />
                </Box>
                <Box sx={{mt: 6, textAlign: 'center'}}>
                  <NusBtnPattern className={`${classes.btnCustomProps2} nusBlackBtn`}>Paylaş</NusBtnPattern>
                </Box>
              </form>
            </Box>
        </>
    )
}

export default NewProject


const useStyle = makeStyles({
    dropZoneHolder: {
        height: "170px",
        border: "1px dashed",
        borderRadius: "14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        cursor: "pointer",
        marginTop: "16px"
    },
    dropZoneResult: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "30px",
      border: "2px solid",
      borderRadius: "14px",
      marginTop: "16px"
    },
    progressCircle: {
      width: "20px"
    },
    inputProps: {
      "& .MuiInput-input": {
          marginTop: "30px",
          fontSize: "24px",
          fontWeight: "bold"
      }
    },
    inputCustomProps: {
      width: "95px !important",
    },
    btnCustomProps2: {
      width: "160px !important"
    },
    btnCustomProps1: {
      width: "95px !important"
    }
})

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};