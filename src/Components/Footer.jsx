import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
function Footer() {
  return (
   <div className="footer">

      <ul className="nav-list-footer">
              <li className="brand-nav-dark">Website</li>

        <li><FaXTwitter /></li>
        <li><CiYoutube /></li>
        <li><CiInstagram /></li>
      </ul>
    </div>  )
}

export default Footer