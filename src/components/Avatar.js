import { TextField } from '@material-ui/core';
import React, { useState } from 'react'

const Avatar = () => {

    const [ nameInput, setNameInput ] = useState(false);
    const [ userName, setUserName ] = useState("Tahir Salahov");
     
    function changeName (e) {
        setUserName(e.target.value)
    }

    function edit() {
        setNameInput(false);
        // userName => backend
    }
  return (
    <div>
        <div>
            <img src="" alt="" />
            <div className={`d-flex ${nameInput === true ? "flex-column" : ""}`}>
                {
                nameInput ?   
                <TextField defaultValue={userName} onChange={changeName} type="text"/> :
                    <div>{userName}</div>

                }
                {
                   nameInput ?
                   <button onClick={() => edit()}>Ok</button>
                   :
                   <button onClick={() => setNameInput(true)}>Edit</button>
                }
            </div>
        </div>
    </div>
  )
}

export default Avatar