import React, { useState } from 'react'
import { FormControl, makeStyles, MenuItem, Paper, Select } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import notification from "../images/icons/notification.svg"
import basket from "../images/icons/basket.svg"
import logout from "../images/icons/logout.svg"
import { NusBtnPattern, MoreBtn } from "../styledComponents/styled";
import clsx from 'clsx';
import { KeyboardArrowDownSharp } from "@material-ui/icons"
import { LoggedUserField } from './loggedUserField';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeLang } from '../redux/features/translation/translationSlice';
import PropTypes from "prop-types"
import NotificationPanel from './NotificationPanel';
import notifimg1 from "../images/notif-img1.png";
import notifimg2 from "../images/notif-img2.png";
import notifimg3 from "../images/notif-img3.png";

let token = "ressam";


function HeaderController() {
    const dispatch = useDispatch();
    const classes = useStyle();
    const navigate = useNavigate()
    const [navLang, setLang] = React.useState('');
    const language = useSelector((state) => state.language.translation);
    const [locale, setLocale] = useState(language);
    const [showDropdown, setShowDropdown] = useState(false);

    const notificationData = [
        {
            id: "1",
            title: "“Le Carnaval (Les Cotillons)”",
            photo: notifimg1,
            date: "1",
            status: "winner"
        },
        {
            id: "2",
            title: "“Morning Glory”",
            photo: notifimg2,
            date: "4",
            status: "loser"
        },
        {
            id: "3",
            title: "“No More Voices”",
            photo: notifimg3,
            date: "4",
            status: "loser"
        }
    ]

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

    function openDropdown(e) {
        if (!showDropdown) {
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }

        /*   
        if (!useselector(state === {}) ) {
            setAllPopupToZero(false) // if it is false , turn off all popups
        } else {
            setShowDropdown(false)
        }
        */
    }


    return (
        <div className='d-flex align-items-center'>
            <FormControl>
                <Select
                    value={locale || "AZ"}
                    onChange={selectLanguage}
                    className={classes.langInput}
                    inputProps={{ 'aria-label': 'Without label' }}
                    disableUnderline
                    IconComponent={KeyboardArrowDownSharp}
                >
                    <MenuItem value="AZ">AZ</MenuItem>
                    <MenuItem value="EN">EN</MenuItem>
                    <MenuItem value="RU">RU</MenuItem>
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
                    <div to="./notification" onClick={(e) => openDropdown(e)} style={{ cursor: "pointer" }}>
                        <img src={notification} alt="notification" className={classes.navIco} />
                    </div>
                    <Paper elevation={16} className={clsx(classes.notifHolder,
                        showDropdown && classes.showDropdown)}>
                        {
                            notificationData.length &&
                            notificationData?.map((n => (
                                <NotificationPanel key={n.id} notification={n} />
                                // <Box className={clsx(n.status === "winner" ? classes.winnerMessageBox : classes.loserMessageBox,
                                //     classes.muiMessageBox)}>
                                //     <div>
                                //         <img src={n.photo} className={classes.notifImgStyle} />
                                //     </div>
                                //     <div className='ms-2'>
                                //         <MessageBox props={n} />
                                //         <div className={`mt-2 ${classes.notifDateStyle}`}>{n.date} saat öncə</div>
                                //         {
                                //             n.status === "winner" && (
                                //                 <FilledForm className='mt-2'>Formu Doldurun</FilledForm>
                                //             )
                                //         }
                                //     </div>
                                // </Box>
                            )))
                        }
                        <div className='text-center'>
                            <MoreBtn className='p-0 w-100'>Hamısına bax</MoreBtn>
                        </div>
                    </Paper>
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
                            <NusBtnPattern
                                type="button"
                                className='ms-5 nusBlackBtn'
                                onClick={goToRegistry}
                            >Qeydiyyat</NusBtnPattern>
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
    },
    notifHolder: {
        position: "absolute",
        padding: "8px",
        right: "92px",
        zIndex: 11111,
        maxWidth: "330px",
        maxHeight: "380px",
        width: "330px",
        top: "108px",
        borderRadius: "14px 0 14px 14px",
        visibility: "hidden"
    },
    showDropdown: {
        visibility: "visible"
    },
})