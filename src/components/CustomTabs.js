import React, { useState, useEffect } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import GridLayout, { Responsive } from 'react-grid-layout';
import "../style.css"
import * as Styled from "../styledComponents/styled";
import { CustomCardComponent } from './CustomCardComponent';
import { Link } from "react-router-dom"
import { Button, makeStyles } from '@material-ui/core';
import CustomCart from './customCart';
import Sortable from "sortablejs"

// redux
import { useDispatch, useSelector } from 'react-redux';
// translations
import { text } from '../translations/translation';
import { sortItems } from '../redux/features/sortableItems/sortableItemSlice';


export const CustomTabs = (props) => {
    const selectedLang = useSelector((state) => state.language.translation);
    const {
        rightButtonIcon,
        rightButtonText,
        rightButtonFunc,
        paintingModal,
        tabEnable,
        tabLabel,
        cartEnable,
        dataList,
        renderRoute,
    }
        = props
    const classes = useStyle();
    const [filteredData, setfilteredData] = useState([])
    const [index, setIndex] = useState(0)
    const paintData = [
        {
            id: "1",
            name: "Tahir Salahov",
            title: "No More Voices",
            bidCount: "22",
            currentBid: "78",
            likes: "25",
            expiredDate: "1652483651000",
            order: 0
        },
        {
            id: "2",
            name: "Saddam Manafov",
            title: "No More Worries",
            bidCount: "24",
            currentBid: "43",
            likes: "75",
            expiredDate: "1652483651000",
            order: 1
        },
        {
            id: "3",
            name: "Jake Qarayev",
            title: "No More Choices",
            bidCount: "21",
            currentBid: "28",
            likes: "20",
            expiredDate: "1652483651000",
            order: 2
        },
    ]
    const [data, setData] = useState(paintData);
    const { ordered } = useSelector((state) => state.sortableItems)
    console.log(ordered)
    const dispatch = useDispatch();
    useEffect(() => {
        var el = document.getElementById('items');
        if (el) {
            var sortable = new Sortable(el, {
                // handle: ".handle",
                ghostClass: 'ghost',
                ignore: '.cardImgCover',
                animation: 450,
                easing: "cubic-bezier(1, 0, 0, 1)",
                forceFallback: false,
                store: {
                    get: function (sortable) {
                        
                        // let ordered = dispatch(sortItems(sortable.options.group.name))
                        var order = localStorage.getItem(sortable.options.group.name);
                        return ordered?.length ? ordered?.split('|') : [];
                    },
                    set: function (sortable) {
                        var order = sortable.toArray();
                        dispatch(sortItems(order.join('|')))
                        localStorage.setItem(sortable.options.group.name, order.join('|'));
                    }
                },
                sort: true,
                onUpdate: function setNewOrder(e) {
                    let order = this.toArray()?.map(or => or.toString());
                    let copied = [...data];
                    copied.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));

                    setData(copied);
                },
                onMove: function (evt) {
                    console.log(evt.related.className.indexOf('cardImgCover') === -1)
                    return evt.related.className.indexOf('cardImgCover') === -1; //and this
                },
                swap: true,
            })
        }
    }, [])

    let index$ = 0;
    useEffect(() => {
        index$ = index
    }, [index])


    const cardStyle = {
        width: '18rem',
        position: 'relative'
    }

    return (
        <>
            <Tabs>
                <TabList className={[classes.tablist, !rightButtonFunc ? "justify-content-start" :
                    tabEnable && rightButtonFunc ? 'justify-content-between' :
                        "justify-content-end"]}
                        >
                    {tabEnable && <div className='d-flex'>
                        {
                            tabLabel?.map(((label, index) => (
                                <Tab
                                // onClick={(e) => setIndex(index)}
                                
                                >{label[selectedLang]}</Tab>
                            )))
                        }
                    </div>}
                    <div>
                        {
                            rightButtonFunc &&
                            <Styled.NusBtnPattern className='nusBlackBtn' onClick={() => rightButtonFunc(true)}>
                                <img src={rightButtonIcon} alt="" />
                                <span className="ms-2">{rightButtonText}</span>
                            </Styled.NusBtnPattern>
                        }
                    </div>
                </TabList>
{console.log(index)}
                <TabPanel>
                    {
                        cartEnable ?
                            <CustomCart
                                index={index$}
                                filteredData={filteredData}
                            /> :
                            <div >

                                <div className={classes.galleryGrid} id={renderRoute && "items"}>
                                    {
                                        // .sort((a, b) => a.order - b.order)
                                        data?.map((paint, index) => (
                                            <CustomCardComponent style={cardStyle} paintingModal={paintingModal}
                                                // handleDrag={handleDrag}
                                                // handleDrop={handleDrop}
                                                bidCount={paint.bidCount}
                                                id={paint.id}
                                                keyProp={paint.order}
                                                paintName={paint.name}
                                                order={paint.order}
                                                renderRoute={renderRoute}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                </TabPanel>
            </Tabs>
        </>
    )
}


const useStyle = makeStyles(theme => ({
    galleryGrid: {
        display: "grid",
        gridTemplateColumns: " 18rem 18rem 18rem",
        gridGap: "20px",
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: "1fr 1fr"
        },
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: "100%",
        },
    },
    nusBtnStyle: {
        borderRadius: "100px",
        backgroundColor: "#1D2124",
        color: "#fff !important",
        textDecoration: "none",
        padding: "8px"
    },
    tablist: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: '100px',
        padding: "6px"
    },
    // selected: {
    //     "& .react-tabs__tab--selected": {
    //         backgroundColor: "red"
    //     }
    // }
}))