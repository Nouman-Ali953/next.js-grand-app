import React from "react";
import styles from "./footer.module.scss";
import { quicksand } from "@/app/layout";
const Footer = () => {
  return (
    <div className={`${quicksand.variable} ${styles.container}`}>
      <table>
        <thead>
          <tr 
          data-aos="fade-up" data-aos-anchor-placement="top-center">
            <th>Categories Q</th>
            <th>About</th>
            <th>Support and Education</th>
            <th>Community</th>
            <th>Business Solutions</th>
          </tr>
        </thead>
        <tbody>
          <tr
          data-aos="fade-up" data-aos-anchor-placement="top-center">
            <td>Graphics & Design</td>
            <td>Digital Marketing</td>
            <td>Writing & Translation</td>
            <td>Video & Animation</td>
            <td>Press & News</td>
          </tr>
          <tr
          data-aos="fade-up" data-aos-anchor-placement="top-center">
            <td>Video & Animation</td>
            <td>Music & Audio</td>
            <td>Fiverr Logo Maker</td>
            <td>Programming & Tech</td>
            <td>Careers</td>
          </tr>
          <tr
          data-aos="fade-up" data-aos-anchor-placement="top-center">
            <td>Press & News</td>
            <td>Partnerships</td>
            <td>Privacy Policy</td>
            <td>Investor Relations</td>
            <td>Terms of Service</td>
          </tr>
          <tr
          data-aos="fade-up" data-aos-anchor-placement="top-center">
            <td>Podcast</td>
            <td>Investor Relations</td>
            <td>Intellectual Property Claims</td>
            <td>Events</td>
            <td>Terms of Service</td>
          </tr>
          <tr
          data-aos="fade-up" data-aos-anchor-placement="top-center">
            <td>Intellectual Property Claims</td>
            <td>Forum</td>
            <td>Investor Relations</td>
            <td>ClearVoice</td>
            <td>Affiliates</td>
          </tr>
          <tr
          data-aos="fade-up" data-aos-anchor-placement="top-center">
            <td>Community Hub</td>
            <td>Content Marketing</td>
            <td>Working Not Working</td>
            <td>Partnerships</td>
            <td>End-to-End Projects</td>
          </tr>
          <tr
          data-aos="fade-up" data-aos-anchor-placement="top-center">
            <td>Business</td>
            <td>Lifestyle</td>
            <td>Events</td>
            <td>Photography</td>
            <td>Sitemap</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Footer;
