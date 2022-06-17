import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import GridLayout, { Responsive } from 'react-grid-layout';
import "../style.css"
import * as Styled from "../styledComponents/styled";
import { CustomCardComponent } from './CustomCardComponent';
import { Link } from "react-router-dom"
import { Button, makeStyles } from '@material-ui/core';
import CustomCart from './customCart';

export const CustomTabs = (props) => {
    const [cartData, setcartData] = useState([])
    const [filteredData, setfilteredData] = useState([])
    const [index, setIndex] = useState(null)
    const [dragId, setDragId] = useState();
    const paintData = [
        {
            id: "1",
            name: "Tahir Salahov",
            title: "No More Voices",
            bidCount: "24",
            currentBid: "78",
            likes: "25",
            expiredDate: "1652483651000",
            order: 1
        },
        {
            id: "2",
            name: "Tahir Manafov",
            title: "No More Worries",
            bidCount: "24",
            currentBid: "43",
            likes: "75",
            expiredDate: "1652483651000",
            order: 2
        },
        {
            id: "3",
            name: "Tahir Qarayev",
            title: "No More Choices",
            bidCount: "21",
            currentBid: "28",
            likes: "20",
            expiredDate: "1652483651000",
            order: 3
        },
    ]

    const [data, setData] = useState(paintData);

    const {
        rightButtonIcon,
        rightButtonText,
        rightButtonFunc,
        paintingModal,
        tabEnable,
        tabLabel,
        cartEnable
    }
        = props
    const classes = useStyle();

    const cardStyle = {
        width: '18rem', position: 'relative'
    }

    // useEffect(() => {
    //     fetchCartData();
    // }, [cartData])

    // useEffect(() => {
    //     const filteredData = cartData.filter(d => d.participant);
    //     setfilteredData(filteredData);
    // }, [cartData])

    // const fetchCartData = async () => {
    //     setcartData() // set data
    // }

    const handleDrag = (ev) => {
        console.log(ev.currentTarget.id, "dragging");
        setDragId(ev.currentTarget.id);
    };

    const handleDrop = (ev) => {
        console.log(ev.currentTarget.id, "dropped")
        const dragBox = data.find((d) => d.id === dragId);
        const dropBox = data.find((d) => d.id === ev.currentTarget.id);

        const dragBoxOrder = dragBox.order;
        const dropBoxOrder = dropBox.order;

        const newDataState = data.map((d) => {
            if (d.id === dragId) {
                d.order = dropBoxOrder;
            }
            if (d.id === ev.currentTarget.id) {
                d.order = dragBoxOrder;
            }
            return d;
        });

        setData(newDataState);
    };

    console.log(data)

    return (
        <>
            <Tabs>
                <TabList className={[classes.tablist, !rightButtonFunc ? "justify-content-start" :
                    tabEnable && rightButtonFunc ? 'justify-content-between' :
                        "justify-content-end"]}>
                    {tabEnable && <div className='d-flex'>
                        {/* <div> */}
                        <Tab onClick={(e) => setIndex(e.target.value)}>{tabLabel.tab1}</Tab>
                        {/* </div> */}
                        {/* <div className='ms-2'> */}

                        <Tab onClick={(e) => setIndex(e.target.value)}>{tabLabel.tab2}</Tab>
                        {/* </div> */}
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

                <TabPanel>
                    {
                        // cartEnable ?
                        //     <CustomCart
                        //         index={index}
                        //         cartData={cartData}
                        //         filteredData={filteredData}
                        //     /> :
                        <div className={classes.galleryGrid}>
                            {console.log(paintData, "inner")}
                            {
                                data?.sort((a, b) => a.order - b.order)
                                    .map(paint => (
                                        <CustomCardComponent style={cardStyle} paintingModal={paintingModal}
                                            handleDrag={handleDrag}
                                            handleDrop={handleDrop}
                                            id={paint.id}
                                            keyProp={paint.id}
                                            paintName={paint.name}
                                            order={paint.order}
                                        />
                                    ))
                            }
                        </div>
                    }
                </TabPanel>
                <TabPanel>
                </TabPanel>
            </Tabs>
        </>
    )
}


const useStyle = makeStyles({
    galleryGrid: {
        display: "grid",
        gridTemplateColumns: " 18rem 18rem 18rem",
        gridGap: "20px",
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
})



const layout = [
    { i: '0', x: 0, y: 0, w: 3, h: 2, },
    { i: '1', x: 3.4, y: 0, w: 1, h: 2 },
    { i: '2', x: 6.8, y: 0, w: 3, h: 2, },
    { i: '3', x: 10.2, y: 0, w: 1, h: 2 },
    { i: '4', x: 0, y: 0, w: 1, h: 2, }
];