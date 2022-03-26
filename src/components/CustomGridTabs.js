import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import GridLayout from 'react-grid-layout';
import "../style.css"
import * as Styled from "../styledComponents/styled";
import { CustomCardComponent } from '../components/CustomCardComponent';
import {Link} from "react-router-dom"
import { Button, makeStyles } from '@material-ui/core';
import CustomCart from './customCart';

export const CustomGridTabs = (props) => {
    const { 
        rightButtonIcon,
        rightButtonText,
        rightButtonFunc,
        paintingModal,
        onOff,
        tabLabel,
        cartEnable
    } 
    = props
    const classes = useStyle();

    const cardStyle = {
        width: '18rem', position: 'relative'
    }


    return (
        <>
            <Tabs>
                <TabList className={classes.tablist}>
                    {onOff && <div className='d-flex'>
                        {/* <div> */}
                            <Tab>{tabLabel.tab1}</Tab>
                        {/* </div> */}
                        {/* <div className='ms-2'> */}

                            <Tab>{tabLabel.tab2}</Tab>
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
                        cartEnable ?
                        <CustomCart /> :
                    
                    <GridLayout
                        className="layout"
                        layout={layout}
                        cols={12}
                        width={1200}
                        isDroppable="true"
                        margin={[0, 15]}
                        rowHeight={250}
                    >
                        <div key="0" draggable="true">
                            <CustomCardComponent style={cardStyle} paintingModal={paintingModal}/>
                        </div>
                        <div key="1">
                            <CustomCardComponent style={cardStyle} paintingModal={paintingModal}/>
                        </div>
                        {/* <div key="d">

                            </div>
                            <div key="e">

                            </div>
                            <div key="f">

                            </div> */}
                    </GridLayout>
                    }   
                </TabPanel>
                <TabPanel>
                </TabPanel>
            </Tabs>
        </>
    )
}


const useStyle = makeStyles({
    nusBtnStyle: {
        borderRadius: "100px",
        backgroundColor: "#1D2124",
        color: "#fff !important",
        textDecoration: "none",
        padding: "8px"
    },
    tablist: {
        display: "flex",
        justifyContent: "space-between",
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
    { i: '1', x: 3, y: 0, w: 1, h: 2 },
    { i: '2', x: 6, y: 0, w: 3, h: 2, },
    { i: '3', x: 0, y: 5, w: 1, h: 2 },
    { i: '4', x: 0, y: 0, w: 1, h: 2, }
];