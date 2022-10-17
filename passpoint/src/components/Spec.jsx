import "animate.css/animate.min.css";
import React, { useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {
  AiFillApple,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Parallax } from "react-scroll-parallax";
import picone from "./asset/usecase-900x465-3.png";
import pictwo from "./asset/usecase-900x465-4.png";

function Spec() {
  const screenRef = useRef(null);
  return (
    <div id="spec">
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
        <section className="spec_container">
          <p className="spec_intro">hire me</p>
          <h1 className="spec_header">
            What are you waiting? for give me call.
          </h1>
          <p className="spec_detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            hic officiis tempore facilis sit possimus ea dolor unde ullam sed
            itaque nulla aliquid ab optio. Odit doloribus quis quae quasi omnis
            quo quidem magnam quos, earum exercitationem mollitia, voluptas
            ipsum.
          </p>
        </section>
      </ScrollAnimation>
      {/* ----sub section----- */}
      <section className="spec_sub_section">
        <div style={{ color: "white" }}>
          <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft">
            <div className="spec_sub_section_one">
              <p className="spec_sub_section_active">Performance Speed:</p>
              <h1 className="spec_sub_section_count">4X</h1>
              <p className="spec_sub_section_detail">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, distinctio.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft">
            <div className="spec_sub_section_one">
              <p className="spec_sub_section_active">Available Icons:</p>
              <h1 className="spec_sub_section_count">4098</h1>
              <p className="spec_sub_section_detail">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, distinctio.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft">
            <div className="spec_sub_section_one">
              <p className="spec_sub_section_active">Libraries:</p>
              <h1 className="spec_sub_section_count">50</h1>
              <p className="spec_sub_section_detail">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, distinctio.
              </p>
            </div>
          </ScrollAnimation>
        </div>
        <div>
          <div className="img_cover">
            <Parallax
              easing={"easeOutQuad"}
              translateY={[0, 80]}
              EventTarget={screenRef.current}
            >
              <img
                src={picone}
                alt="phone picture"
                id="img_one"
                style={{ width: "100%" }}
              />
            </Parallax>
            <img
              src={pictwo}
              alt="phone picture"
              id="img_two"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div style={{ color: "white" }}>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutaRight"
          >
            <div className="spec_sub_section_two">
              <p className="spec_sub_section_active">Downloaded:</p>
              <h1 className="spec_sub_section_count">+400k</h1>
              <p className="spec_sub_section_detail">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, distinctio.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutaRight"
          >
            <div className="spec_sub_section_two">
              <p className="spec_sub_section_active">Active Installed:</p>
              <h1 className="spec_sub_section_count">700k</h1>
              <p className="spec_sub_section_detail">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, distinctio.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutaRight"
          >
            <div className="spec_sub_section_two">
              <p className="spec_sub_section_active">Version:</p>
              <h1 className="spec_sub_section_count">1.0.0v</h1>
              <p className="spec_sub_section_detail">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Facilis, distinctio.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      {/* ----foot section----- */}
      <div className="foot_spec_section" style={{ color: "white" }}>
        <div className="foot_spec_section_one">
          <h4 id="foot_section_header">Masonic</h4>
          <p id="small_foot_paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quas
            consequatur itaque neque sint minima dolorum consequuntur numquam
            error id!
          </p>
          <div className="foot_spec_btn_container">
            <div id="foot_spec_btn_one">
              <i class="material-icons-outlined">adb</i>
              <span style={{ marginLeft: "10px" }}>
                <p className="first_spec_btn_value">GET IT ON</p>
                <p className="second_spec_btn_value">Google Play</p>
              </span>
            </div>
            <div id="foot_spec_btn_two">
              <AiFillApple size={24} />
              <span style={{ marginLeft: "10px" }}>
                <p className="first_spec_btn_value">GET IT ON</p>
                <p className="second_spec_btn_value">App Store</p>
              </span>
            </div>
          </div>
        </div>
        <div className="foot_spec_section_two">
          <a href="#">Order Now </a>
          <a href="#">Get Help</a>
        </div>
        <div className="foot_spec_section_three">
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="foot_spec_section_four">
          <p>
            24,Adeleke Obayemi street,Iloromu quarters, Agborogboro,Ile-Ife,
            Osun State,Nigeria.
          </p>
          <a href="mailto:victoreluyera2@gmail.com">victoreluyera2@gmail.com</a>
          <div>
            <a href="https://web.facebook.com/eluyera.victor.71">
              <AiFillFacebook size={24} />
            </a>
            <a href="https://twitter.com/VEluyera">
              <AiOutlineTwitter size={24} />
            </a>
            <a href="/">
              <AiOutlineInstagram size={24} />
            </a>
            <a href="/">
              <AiOutlineLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      <footer style={{ color: "white" }}>
        <hr />
        <div className="footer_container">
          <div>Copyright &copy;2022</div>
          <div className="passpoint_foot">
            <i class="material-icons-outlined">favorite</i>
            PassPoint
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Spec;
