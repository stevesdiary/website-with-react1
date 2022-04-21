import React from 'react';
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES= ['btn--primary, 'btn--outline]
export const Button = ({
   children, 
   type, 
   onclick, 
   buttonStyle, 
   buttonSize
}) => {
   const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle: STYLES[0];

   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSizes: SIZES[0];
   return (
      <Link to= '/sign-up' className='btn-mobile'>
         <button
         className={`btn ${checkButton}`}>
            {children}
         </button>
      </Link>
   )
};

