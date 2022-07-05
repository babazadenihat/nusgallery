import { TextField } from '@material-ui/core';
import React, { useState } from 'react'
import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    ButtonGroup,
    IconButton,
    Flex,
    Input
} from '@chakra-ui/react'

import {CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons"


const Avatar = () => {

    const [nameInput, setNameInput] = useState(false);
    const [userName, setUserName] = useState("Tahir Salahov");
    // function EditableControls() {
    //     const {
    //         isEditing,
    //         getSubmitButtonProps,
    //         getCancelButtonProps,
    //         getEditButtonProps,
    //     } = useEditableControls()

    //     return isEditing ? (
    //         <ButtonGroup justifyContent='center' size='sm'>
    //             <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
    //             <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
    //         </ButtonGroup>
    //     ) : (
    //         <Flex justifyContent='center'>
    //             <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
    //         </Flex>
    //     )
    // }
    function changeName(e) {
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
                    <Editable
                        textAlign='center'
                        defaultValue='Rasengan ⚡️'
                        fontSize='2xl'
                        isPreviewFocusable={false}
                    >
                        <EditablePreview />
                        {/* Here is the custom input */}
                        <Input as={EditableInput} />
                        {/* <EditableControls /> */}
                    </Editable>
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