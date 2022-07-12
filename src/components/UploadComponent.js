import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react'
import userPhoto from "../images/user-photo.png";
import camera from "../images/icons/camera.svg";
import handleFile from '../utilities/handleFile';

export default function UploadComponent() {
    const classes = useStyle();
    const [photo, setPhoto] = useState({});

    return (
        <>
            <div className={classes.coverBound}>
                <div className={classes.cover}>
                    <img src={photo?.base64 || userPhoto}
                        className={classes.userPhoto}
                        alt="" />
                    <input
                        type="file"
                        onChange={(e) => handleFile(e.target.files[0], setPhoto)}
                        className={classes.uploadInput} />
                    <div className="uploadLabel">
                        <img src={camera} alt="" />
                        <span>Change Photo</span>
                    </div>
                </div>
            </div>
        </>
    )
}





const useStyle = makeStyles({
    cover: {
        position: "relative",
        height: "250px",
        width: "250px",
        display: "flex",
        alignItems: "center",
        "&:hover .uploadLabel": {
            opacity: 1
        }
    },
    coverBound: {
        padding: "15px",
        background: "rgba(242, 239, 232, 1)",
        borderRadius: "50%",
    },
    uploadInput: {
        position: "absolute",
        opacity: 0,
        height: "250px",
        width: "250px",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: 0,
        zIndex: "1111"
    },
    userPhoto: {
        borderRadius: "50%",
        width: "250px",
        height: "250px"
    },
})