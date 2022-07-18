import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { useSelector } from 'react-redux';
import auction from "../images/icons/auction.svg"

const AuctionParticipant = ({data}) => {
  const classes = useStyle();
  const selectedLang = useSelector((state) => state.language.translation)

  return (
    <>
      <div className={classes.auctionComponent}>
        <img src={auction} alt="" />
        <span className='m-2'>{data[selectedLang] ? data[selectedLang] : data["AZ"]}</span>
      </div>
    </>
  )
}

export default AuctionParticipant;

const useStyle = makeStyles({
  auctionComponent: {
    background: "#F2EFE8",
    borderRadius: "16px",
    padding: "6px 10px",
    fontWeight: "500",
    fontSize: "10px",
  }
})