import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import facebook from "../../../public/images/facebook.png";
import instagram from "../../../public/images/instagram.png";
import twitter from "../../../public/images/twitter.png";
import linkedin from "../../../public/images/linkedin.png";
import facebook2 from "../../../public/images/facebook2.png";
import instagram2 from "../../../public/images/instagram2.png";
import twitter2 from "../../../public/images/twitter2.png";
import linkedin2 from "../../../public/images/linkedin2.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1>Dawa.ai</h1>

      <div className={styles.input_group}>
        <input type="text" placeholder="Enter Your Email" />
        <div className={styles.input_group_append}>
          <span className={styles.input_group_text}>Subscribe</span>
        </div>
      </div>

      <div>
        <ul>
          <li><a href="#"><Image src={twitter2} /></a></li>
          <li><a href="#"><Image src={facebook2} /></a></li>
          <li><a href="#"><Image src={instagram2} /></a></li>
          <li><a href="#"><Image src={linkedin2} /></a></li>

        </ul>
      </div>
      <hr/>
      <div className={styles.end}>
        <span>&copy; Copyright Dawa.ai All Rights Reserved</span>
        <span>Designed by Dawa.ai Web Team</span>
      </div>
    </div>
  )
}

export default Footer;