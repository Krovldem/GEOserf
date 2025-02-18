import React from 'react';

const Contacts = () => {
    return (
        <section className="contacts4 map1 cid-uB6O8Lcc85" id="contacts04-e">
            <div className="main_wrapper">
                <div className="b_wrapper">
                    <div className="container-fluid">
                        <div className="row justify-content-start">
                            <div className="col-md-5 col-lg-4 item-wrapper">
                                <h5 className="cardTitle mbr-fonts-style mb-2 display-5">
                                    <strong>Contact Us</strong>
                                </h5>
                                <ul className="list mbr-fonts-style display-7">
                                    <li className="mbr-text item-wrap">
                                        Phone:
                                        <a href="tel:1-800-ROAD-AI" className="text-black">1-800-ROAD-AI</a>
                                    </li>
                                    <li className="mbr-text item-wrap">
                                        WhatsApp:
                                        <a href="tel:1-800-ROAD-AI" className="text-black">1-800-ROAD-AI</a>
                                    </li>
                                    <li className="mbr-text item-wrap">
                                        Email:
                                        <a href="mailto:info@roadai.com" className="text-black">info@roadai.com</a>
                                    </li>
                                    <li className="mbr-text item-wrap">
                                        Address:
                                        Russian Federation
                                    </li>
                                    <li className="mbr-text item-wrap">
                                        Working Hours:
                                        Mon-Fri: 9am - 5pm
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="google-map">
                    <iframe
                        frameBorder="0"
                        style={{ border: 0 }}
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCt1265A4qvZy9HKUeA8J15AOC4SrCyZe4&q=Russian+Federation"
                        allowFullScreen=""
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
