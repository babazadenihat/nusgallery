import styled from "styled-components";
import dragDots from "../images/icons/drag-dots.svg";

export const DraggableBox = styled.div`
    width:30px;
    height: 35px;
    background-color: rgb(122 131 139);
    background-image: url("${dragDots}");
    background-repeat: no-repeat;
    background-size: 90% 60%;
    background-position: 62% 45%;
    left: 20px;
    top: 10px;
    border-radius: 5px;
    position: absolute;
    cursor: pointer
`
export const LogBox = styled.div`
    background-color: #fff;
    border-radius: 18px;
    padding: 30px;
    width: 420px
`

export const NusInput = styled.input`
    background-color: #fff;
    border-radius: 12px;
    border: 1px solid #E6E8EC;
    padding: 13px 12px;
    width: 100%
`
export const NusBtnPattern = styled.button`
    border-radius: 100px;
    width: 100%;
    text-decoration: none;
    padding: 8px 18px;
    font-size: 12px
`

export const NusBtnStyle = styled.button`

`

export const MoreBtn = styled.button`
    border-radius: 100px;
    border: 1px solid #1D2124;
    background-color: transparent;
    font-weight: bold;
    color: #000 !important;
    text-decoration: none;
    padding: 8px 18px
`
export const CloseBtn = styled.button`
    border: 0;
    background-color: transparent;
    font-weight: bold;
    color: #000 !important;
`
export const CardItemBox = styled.div`
    display: flex;
    background: transaparent;
    border-radius: 16px;
    padding: 6px 10px;
    border: 1px solid #E6E8EC;
    font-size: 10px
`
export const WhiteInput = styled.input`
    border-radius: 8px;
    padding: 6px;
    border: 0;
    outline: 0;
    width: 100%
`
// width: 95px,


export const DeleteCart = styled.button`
    border-radius: 50%;
    padding: 6px;
    border: 0;
    outline: 0;
    background-color: #FEE6EC;
    position: absolute;
    top: 25px;
    right: 25px
`

export const FilledForm = styled.button`
    border-radius: 90px;
    height: 24px;
    color: #fff;
    padding: 12px 13px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0;
    outline: 0;
    background-color: #51B56C;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    letter-spacing: -0.005em;

`
