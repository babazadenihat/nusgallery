import { makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import profileBg from "../images/profile-bg.jpg";
import camera from "../images/icons/camera.svg";
import UploadComponent from './UploadComponent';
import io from 'socket.io-client';
import { useEffect } from 'react';
import { Done } from '@material-ui/icons';
import clsx from 'clsx';
import handleFile from '../utilities/handleFile';

const endpoint = "http://127.0.0.1:3003"
const Avatar = () => {

    const [nameInput, setNameInput] = useState(localStorage.getItem("artist-name"));
    const [focus, setFocus] = useState(false);
    const [userName, setUserName] = useState("Tahir Salahov");
    const [response, setResponse] = useState("");
    const [value, setValue] = useState("");
    const [bgPhoto, setbgPhoto] = useState({});
    const classes = useStyle();

    // useEffect(() => {
    //     const socket = io(endpoint, {
    //         withCredentials: true,
    //         extraHeaders: {
    //             "my-custom-header": "abcd"
    //         }
    //     });
    //     socket.on("FromAPI", data => {
    //         setResponse(data)
    //     })
    // })



    useEffect(() => {
        fetch(`${endpoint}/message`, {
            method: "POST",
            body: JSON.stringify({ message: value }),
            // mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json())
            .then(data => console.log(data)).catch((err) => console.log(err));
    }, [value])


    function onFocus(e) {
        setFocus(true);

        // e.target.style.borderBottom = "1px solid rgba(29, 33, 36, 1)";
    }

    function onBlur(e) {
        setFocus(false);
        e.target.style.borderBottom = "unset";
    }

    function edit(e) {
        localStorage.setItem("artist-name", nameInput);
        setFocus(false);
        // userName => backend
    }
    return (
        <div>
            <div className={classes.avatarHolder}>
                <div className={classes.bgCover}>
                    {/* <div className={classes?.bgUpload}> */}
                        <input
                            type="file"
                            onChange={(e) => handleFile(e.target.files[0], setbgPhoto)}
                            className={classes?.uploadInput} />
                        <div className="uploadLabel-bg">
                            <img src={camera} alt="" />
                            <span>Change Photo</span>
                        </div>
                    {/* </div> */}
                    <img src={profileBg} className={classes.profileBg} alt="" width="100%" />
                </div>
                <div className={classes.avatarLayout}>
                    <UploadComponent />
                    <div className='mt-2 d-flex flex-column align-items-center'>
                        <input type="text"
                            title='Adınızı dəyişin'
                            value={nameInput}
                            className={clsx(classes.nameInput, focus && classes.focusedNameInput)}
                            onFocus={(e) => onFocus(e)}
                            // onBlur={(e) => onBlur(e)}
                            onChange={(e) => setNameInput(e.target.value)} />
                        {focus &&
                            <button className={classes.editBtn} onClick={(e) => edit(e)}>
                                <Done fontSize='15px' />
                            </button>
                        }
                    </div>
                    {/* <h1>{response}</h1> */}
                    {/* {
                nameInput ?   
                <TextField defaultValue={userName} onChange={changeName} type="text"/> :
                    <div>{userName}</div>

                }
                {
                   nameInput ?
                   <button onClick={() => edit()}>Ok</button>
                   :
                   <button onClick={() => setNameInput(true)}>Edit</button>
                } */}
                </div>
            </div>
        </div>
    )
}

export default Avatar

const useStyle = makeStyles({
    avatarHolder: {
        position: "relative",
        height: "600px",
    },
    avatarLayout: {
        zIndex: "111",
        top: "225px",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
    },
    nameInput: {
        border: 0,
        background: "transparent",
        outline: 0,
        textAlign: "center",
        width: "344px",
        fontFamily: "Poppins",
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "36px"
    },
    focusedNameInput: {
        borderBottom: "1px solid rgba(29, 33, 36, 1)"
    },
    bgCover: {
        position: "relative",
        "&:hover .uploadLabel-bg": {
            opacity: 1
        }
    },
    editBtn: {
        borderRadius: "50%",
        width: "32px",
        height: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        border: "1px solid black",
        marginTop: "10px"
    },
    profileBg: {
        borderRadius: "0px 0px 20px"
    },
    bgUpload: {
        background: "rgba(0,0,0, 0.35)",
        width: "110px",
        height: "64px",
        position: "absolute",
        left: 0,
        right: 0,
        top: "100px",
        bottom: 0,
        margin: "0 auto",
        borderRadius: "8px"

    },
    uploadInput: {
        position: "absolute",
        opacity: 0,
        height: "64px",
        width: "110px",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: 0,
        zIndex: "1111"
    },
})