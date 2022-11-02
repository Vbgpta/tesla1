import React, { useState } from 'react'
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'
import CloseIcon from '@mui/icons-material/Close';
// import Navbar from 'react-bootstrap/Navbar';
import Slide from 'react-reveal/Slide';
// import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

function Header() {
  let [value, getvalue] = useState(false)
  function AsideMove(e) {
    e.preventDefault();
    getvalue(true);
  }
  function close() {
    getvalue(false);
  }
  let tomove = (value) ? 0 : "-300px";
  return (
    <>
      <TeslaHeader className='Navbar d-flex justify-content-between'>
        <Slide top>
          <Logo src="logo.svg" />
          <Navigation className='d-flex'>
            <li><a href="">ModelS</a></li>
            <li><a href="">Model3</a></li>
            <li><a href="">ModelX</a></li>
            <li><a href="">ModelY</a></li>
            <li><a href="">SolarRoofs</a></li>
            <li><a href="">SolarPanals</a></li>
          </Navigation>
          <Login className='d-flex'>
            <li><a href="">Shop</a></li>
            <li><a href="">Account</a></li>
            <li className='menu'><a href="" onClick={AsideMove}><spam className='AsideMove'>Menu</spam></a></li>
          </Login>
        </Slide>
      </TeslaHeader>
      <Aside style={{ right: tomove }}>
        <AsideList >
          <li><CloseIcon onClick={close} /></li>
          <li><a href="">Model3</a></li>
          <li><a href="">Model3</a></li>
          <li><a href="">ModelX</a></li>
          <li><a href="">ModelY</a></li>
          <li><a href="">SolarRoof</a></li>
          <li><a href="">SolarPanal</a></li>
          <li><a href="">ExistingInventory</a></li>
          <li><a href="">UsedInventory</a></li>
          <li><a href="">TradeIn</a></li>
          <li><a href="">TestDrive</a></li>
          <li><a href="">Powerwall</a></li>
          <li><a href="">Commercial Energy</a></li>
        </AsideList>
      </Aside>
    </>
  )
}

export default Header
let TeslaHeader = styled.div` 
  padding : 1rem 3rem;
  position: fixed;
  width : 100%;
  top : 0;
`
let Logo = styled.img``
let Navigation = styled.ul`
  list-style : none;
  li a{
    text-decoration : none;
    color : black;
    padding : 1rem
  }
`
let Login = styled(Navigation)`
`
let Aside = styled.div`
  width : 200px;
  height : 100vh;
  background : white;
  position : fixed;
  
`
let AsideList = styled(Navigation)`
  padding-top : 5rem;
li:first-of-type{
  position :absolute;
  right : 1.5rem;
  top:2rme;
}
li {
   padding : .7rem;
  
  }
`