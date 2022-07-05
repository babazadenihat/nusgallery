import React, { useState } from 'react'
import { FormControl, makeStyles, MenuItem, Select } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import notification from "../images/icons/notification.svg"
import basket from "../images/icons/basket.svg"
import logout from "../images/icons/logout.svg"
import * as Styled from "../styledComponents/styled";
import clsx from 'clsx';
import { KeyboardArrowDownSharp } from "@material-ui/icons"
import title_az from "../locales/az/az.json"
import title_en from "../locales/en/en.json"
import { LoggedUserField } from './LoggedUserField';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeLang } from '../redux/features/translation/translationSlice';


const local = navigator.language;
let lang;

console.log(local);

if (local === 'en-US') {
    console.log("works")
    lang = title_en;
}
else {
    if (local === 'az') {
        lang = title_az;
    }
}


let token = "ressam";



function HeaderController() {
    const dispatch = useDispatch();
    const [locale, setLocale] = useState("");
    const [messages, setMessages] = useState(lang);
    const classes = useStyle();
    const navigate = useNavigate()
    const [navLang, setLang] = React.useState('');
    const language = useSelector((state) => state.language.translation);

    console.log(language);
    function selectLanguage(e) {
        const newLocale = e.target.value;
        dispatch(changeLang(e.target.value))
        setLocale(e.target.value);
        // setLocale(newLocale);
        // if (newLocale === 'en') {
        //     setMessages(title_en);
        // } else {
        //     if (newLocale === 'az') {
        //         setMessages(title_az);
        //     }
        // }
    }


    const handleLanguage = (event) => {
        setLang(event.target.value);
    };

    const goToRegistry = () => {
        navigate('/register')
    }

    const logOut = () => { }



    return (
        <div className='d-flex align-items-center'>
            <FormControl>
                <Select
                    value={locale || "az"}
                    onChange={selectLanguage}
                    className={classes.langInput}
                    inputProps={{ 'aria-label': 'Without label' }}
                    disableUnderline
                    IconComponent={KeyboardArrowDownSharp}
                >
                    <MenuItem value="az">AZ</MenuItem>
                    <MenuItem value="en">EN</MenuItem>
                    <MenuItem value="ru">RU</MenuItem>
                </Select>
            </FormControl>
            {
                token === "alici" ? <div className='ms-4'>
                    <Link to="./mycart">
                        <img src={basket} alt="basket" className={classes.navIco} />
                    </Link>
                </div> : null
            }
            {
                token && <div className='ms-4'>
                    <Link to="./notification" >
                        <img src={notification} alt="notification" className={classes.navIco} />
                    </Link>
                </div>
            }
            {
                token !== "alici" && (
                    <LoggedUserField />
                )
            }
            {
                token === "alici" ?
                    <div className='ms-4'>
                        <button
                            onClick={() => logOut()}
                            className={clsx(classes.logoutBtn)}
                        >
                            <img src={logout}
                                alt="logout"
                                className={classes.navIco}
                            />
                        </button>
                    </div> : null
            }
            {
                !token ?
                    <>
                        <Link to="/login" className={`${classes.blackColor} ms-5`}>Daxil ol</Link>
                        <div>
                            <Styled.NusBtnPattern
                                type="button"
                                className='ms-5 nusBlackBtn'
                                onClick={goToRegistry}
                            >Qeydiyyat</Styled.NusBtnPattern>
                        </div>
                    </>
                    : null
            }

        </div>
    )
}

export default HeaderController

const useStyle = makeStyles({
    blackColor: {
        color: "#1D2124"
    },
    langInput: {
        fontSize: "12px",
    },
    logoutBtn: {
        border: 0,
        background: "transparent"
    },
    navIco: {
        height: "20px",
        width: "20px"
    }
})