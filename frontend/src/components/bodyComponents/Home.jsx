import React, { useContext } from "react";
import "../../styles/style.css";
import {Navbar2} from '../header/Navbar2'
import { MediaResponsiveNavbar } from '../header/MediaResponsiveNavbar'
import {FrontPage1} from '../bodyComponents/FrontPage1'
import { Footer } from '../footer/Footer'
import { AuthContext } from "../../context/AuthContext";

export const Home = () => {
  
  let {setShowMediaNavbar1, showMediaNavbar1} = useContext(AuthContext) ;

  return (
    <>
      <Navbar2 />

      { showMediaNavbar1 && <MediaResponsiveNavbar /> }

      <FrontPage1 />
      <Footer />
    </>
  );
};
