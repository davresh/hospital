import React from "react";
import './footer.scss';
import footerLogo from  '../../assets/image/logo-footer.png'
function Footer(){

    return (
        <>
            <footer>
                <div className="about-website">
                    <div className="footer-box">
                        <img src={footerLogo} alt="" /></div>
                    <div className="footer-box">
                        <h3>Արտադրանք</h3>
                        <ul>
                            <li>Հեղուկներ</li>
                            <li>Քսուկներ</li>
                            <li>Յուղեր</li>
                            <li>Ոգեթուրմեր</li>
                            <li>Փոշիներ</li>
                            <li>Մաշկի Խնամքի Միջոցներ</li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h3>Կապ Մեզ Հետ</h3>
                        <ul>
                            <li><span className="icon-phone-solid"/> Զանգահարեք մեզ +374 90 000 000</li>
                            <li><span className="icon-envelope-regular"/>Էլ հասցե։@mail.ru</li>
                            <li><span className="icon-location-dot-solid"/>Երևան</li>
                        </ul>
                    </div>
                    <div className="footer-box">
                        <h3>Փնտրեք Մեզ</h3>
                        <div className="footer-soc">
                            <span className="icon-instagram"/>
                            <span className="icon-square-twitter"/>
                            <span className="icon-square-facebook"/>
                        </div>
                    </div>
                </div>
                <div className="footer-end">
                    <h5>By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են</h5>
                </div>
            </footer>
        </>
    )
}

export default Footer;