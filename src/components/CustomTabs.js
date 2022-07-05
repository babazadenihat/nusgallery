import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import GridLayout, { Responsive } from 'react-grid-layout';
import "../style.css"
import * as Styled from "../styledComponents/styled";
import { CustomCardComponent } from './CustomCardComponent';
import { Link } from "react-router-dom"
import { Button, makeStyles } from '@material-ui/core';
import CustomCart from './customCart';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Sortable from "sortablejs"
import { useEffect } from 'react';

export const CustomTabs = (props) => {
    const [cartData, setcartData] = useState([])
    const [filteredData, setfilteredData] = useState([])
    const [index, setIndex] = useState(null)
    const [dragId, setDragId] = useState();
    const [order, setOrder] = useState(0);
    const [draggedOrder, setDraggedOrder] = useState(0);
    const [droppedOrder, setDroppedOrder] = useState(0);

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
            name: "Tahir Manafov",
            title: "No More Worries",
            bidCount: "24",
            currentBid: "43",
            likes: "75",
            expiredDate: "1652483651000",
            order: 1
        },
        {
            id: "3",
            name: "Tahir Qarayev",
            title: "No More Choices",
            bidCount: "21",
            currentBid: "28",
            likes: "20",
            expiredDate: "1652483651000",
            order: 2
        },
    ]

    const [data, setData] = useState(paintData);

    console.log(draggedOrder)

    useEffect(() => {
        fetch("http://142.93.97.123/api/v1.0/products/").then(
            response => {
                if(response) {
                    response.json()
                }
            }
        ).then(data => console.log(data)).catch((err) => console.log(err.message))
    }, [])

    useEffect(() => {
        var el = document.getElementById('items');
        // console.log(el)
        var sortable = new Sortable(el, {
            // handle: ".handle",
            animation: 450,
            easing: "cubic-bezier(1, 0, 0, 1)",
            forceFallback: false,
            sort: true,
            onChange: function setNewOrder(e) {
                const newIndex = e.newDraggableIndex
                const oldIndex = e.oldDraggableIndex;
                // let copied = data;
                // copied[oldIndex].order = newIndex;
                // copied[newIndex].order = oldIndex;



                const cardOrderId = e.item.id


                const findItem = data.find(item => item.order.toString() === cardOrderId)
                const filteredArr = data.filter(item => item.order.toString() !== cardOrderId)

                let copiedArr = [...filteredArr]
                copiedArr.splice(newIndex, 0, findItem);

                const mappedArr = copiedArr.map((x, i) => ({ ...x, order: i }))
                // .sort((a, b) => a.order - b.order)
                console.log('mappedArr', mappedArr);

                // console.log('newIndex, oldIndex', oldIndex, newIndex, e.item.id)

                // console.log(copied)
                // const dragged = data?.find(d => d.order.toString() === cardOrderId);

                // const dropped = data?.find(d => d.order.toString() === newIndex);

                // setDraggedOrder(dropped.order)
                // setDroppedOrder(dragged.order)
                // console.log('dragged dropped', dragged?.name, dropped?.name);

                // const newDataState = data.map((d, i) => {
                //     if (d.order.toString() === cardOrderId) {
                //         console.log('find d', d.order, cardOrderId, d);
                //         d.order = Number(newIndex);
                //     }
                //     return d;
                // // })
                // console.log('newDataState', newDataState)
                setData(mappedArr)
            },
            // onChange: (e) => setNewOrder(e),
            swap: true,
            // onEnd: (e) => setNewOrder(e.oldIndex)
        })
    }, [])

    useEffect(() => {
        console.log(data, "data")
    }, [data])
    console.log(data)
    // console.log(order)
    // function setNewOrder(e) {
    //     console.log(e.oldIndex, e.newIndex)
    //         const dragged = data?.find(d => d.order === e.oldIndex);
    //         const dropped = data?.find(d => d.order === e.newIndex);

    //         console.log(dragged?.order, dropped?.order);
    //         const newDataState = data.map((d) => {
    //             if (d.order === e.oldIndex) {
    //                 console.log("works") // manafov order 1
    //                 d.order = dropped?.order;
    //             }
    //             if (d.order === e.newIndex) { // saahov order 0
    //                 d.order = dragged?.order;
    //             }
    //             return d;
    //         });
    //         console.log(newDataState)
    //         setData(newDataState)
    //     }

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

    // const handleDrag = (ev) => {
    //     console.log(ev.currentTarget.id, "dragging");
    //     setDragId(ev.currentTarget.id);
    // };

    // const handleDrop = (ev) => {
    //     console.log(ev.currentTarget.id, "dropped")
    //     const dragBox = data.find((d) => d.id === dragId);
    //     const dropBox = data.find((d) => d.id === ev.currentTarget.id);

    //     const dragBoxOrder = dragBox.order;
    //     const dropBoxOrder = dropBox.order;

    //     const newDataState = data.map((d) => {
    //         if (d.id === dragId) {
    //             d.order = dropBoxOrder;
    //         }
    //         if (d.id === ev.currentTarget.id) {
    //             d.order = dragBoxOrder;
    //         }
    //         return d;
    //     });

    //     setData(newDataState);
    // };


    return (
        <>
            {/* {JSON.stringify(data)} */}
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
                        <div className='handle'>

                            <div className={classes.galleryGrid} id="items">
                                {console.log(data, "inner")}
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



const layout = [
    { i: '0', x: 0, y: 0, w: 3, h: 2, },
    { i: '1', x: 3.4, y: 0, w: 1, h: 2 },
    { i: '2', x: 6.8, y: 0, w: 3, h: 2, },
    { i: '3', x: 10.2, y: 0, w: 1, h: 2 },
    { i: '4', x: 0, y: 0, w: 1, h: 2, }
];