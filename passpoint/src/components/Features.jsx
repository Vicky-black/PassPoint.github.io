import React, { useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Parallax } from "react-scroll-parallax";
import oneFeature from "./asset/product-600x1200-4.png";
import twoFeature from "./asset/product-600x1200-5.png";
import threeFeature from "./asset/product-600x1200-6.png";
import fourFeature from "./asset/product-600x1200-7.png";

function Features() {
  const screenRef = useRef(null);

  return (
    <section id="features" className="feature_container">
      <p className="feature_intro">the package</p>
      <h1 className="feature_header">What is Included?</h1>{" "}
      <p className="feature_detail">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, hic
        officiis tempore facilis sit possimus ea dolor unde ullam sed itaque
        nulla aliquid ab optio. Odit doloribus quis quae quasi omnis quo quidem
        magnam quos, earum exercitationem mollitia, voluptas ipsum.
      </p>
      <section>
        <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
          <div className="sub_feature_container">
            <div className="feature_box">
              <i class="material-icons" id="feature_icon">
                headset_mic
              </i>
              <p className="sub_feature_header">Made With React</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quo, repellendus aliquam quisquam magni in maxime, eos
                reiciendis ipsa tempora laborum dolores quis nulla explicabo.
              </p>
            </div>
            <div className="feature_box">
              <i class="material-icons" id="feature_icon">
                newspaper
              </i>
              <p className="sub_feature_header">With Some Dependecies</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quo, repellendus aliquam quisquam magni in maxime, eos
                reiciendis ipsa tempora laborum dolores quis nulla explicabo.
              </p>
            </div>
            <div className="feature_box">
              <i class="material-icons" id="feature_icon">
                backup_table
              </i>
              <p className="sub_feature_header">Made With React</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quo, repellendus aliquam quisquam magni in maxime, eos
                reiciendis ipsa tempora laborum dolores quis nulla explicabo.
              </p>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight">
          <div className="sub_feature_container">
            <div className="feature_box">
              <i class="material-icons-outlined" id="feature_icon">
                favorite
              </i>
              <p className="sub_feature_header">Made With React</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quo, repellendus aliquam quisquam magni in maxime, eos
                reiciendis ipsa tempora laborum dolores quis nulla explicabo.
              </p>
            </div>
            <div className="feature_box">
              <i class="material-icons" id="feature_icon">
                keyboard_command_key
              </i>
              <p className="sub_feature_header">Made With React</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quo, repellendus aliquam quisquam magni in maxime, eos
                reiciendis ipsa tempora laborum dolores quis nulla explicabo.
              </p>
            </div>
            <div className="feature_box">
              <i class="material-icons" id="feature_icon">
                group
              </i>
              <p className="sub_feature_header">Made With React</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quo, repellendus aliquam quisquam magni in maxime, eos
                reiciendis ipsa tempora laborum dolores quis nulla explicabo.
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </section>
      {/* <---- ----> */}
      <section className="the_fact_feature_section">
        <article>
          <p className="the_fact_feature_intro">the fact</p>
          <h1 className="the_fact_feature_header">Why Choose Passpoint?</h1>
          <p className="the_fact_feature_detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            hic officiis tempore facilis sit possimus ea dolor unde ullam sed
            itaque nulla aliquid ab optio. Odit doloribus quis quae quasi omnis
            quo quidem magnam quos, earum exercitationem mollitia, voluptas
            ipsum.
          </p>
          <button className="the_fact_btn">
            Watch Our Video
            <i class="material-icons-outlined">arrow_right</i>
          </button>
        </article>
        <div style={{ display: "flex" }}>
          <Parallax
            easing={"easeOutQuad"}
            translateX={[0, 70]}
            EventTarget={screenRef.current}
          >
            <img
              src={oneFeature}
              style={{ width: "150%", height: "100%" }}
              alt="feature picture 1"
            />
          </Parallax>

          <img
            src={twoFeature}
            style={{ width: "60%" }}
            alt="feature picture 2"
          />
        </div>
      </section>
      {/* <---- ----> */}
      <section className="the_trans_feature_section">
        <div className="the_trans_feature_section_image_container">
          <img
            src={threeFeature}
            style={{ width: "60%" }}
            alt="feature picture 3"
          />
          <Parallax
            easing={"easeOutQuad"}
            translateX={[0, -70]}
            EventTarget={screenRef.current}
          >
            <img
              src={fourFeature}
              style={{ width: "150%", height: "100%" }}
              alt="feature picture 4"
            />
          </Parallax>
        </div>
        <article style={{ margin: " 0px 20px" }}>
          <p className="the_trans_feature_intro">the transcedance</p>
          <h1 className="the_trans_feature_header">Is It really different?</h1>
          <div style={{ textAlign: "end" }}>
            <p className="the_trans_feature_detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              hic officiis tempore facilis sit possimus ea dolor unde ullam sed
              itaque nulla aliquid ab optio. Odit doloribus quis quae quasi
              omnis quo quidem magnam quos, earum exercitationem mollitia,
              voluptas ipsum.
            </p>
          </div>
          <div
            style={{ textAlign: "end", display: "flex", justifyContent: "end" }}
          >
            <button className="the_trans_btn">
              Contact Us <i class="material-icons-outlined">phone_in_talk</i>
            </button>
          </div>
        </article>
      </section>
      {/* <---- ----> */}
      <section className="order_feature_section">
        <article>
          <p className="the_fact_feature_intro">the fact</p>
          <h1 className="the_fact_feature_header">Why Choose Passpoint?</h1>
          <p className="the_fact_feature_detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            hic officiis tempore facilis sit possimus ea dolor unde ullam sed
            itaque nulla aliquid ab optio. Odit doloribus quis quae quasi omnis
            quo quidem magnam quos, earum exercitationem mollitia, voluptas
            ipsum.
          </p>
          <button className="order_now_btn">
            Watch Our Video
            <i class="material-icons">done_all</i>
          </button>
        </article>
      </section>
    </section>
  );
}

export default Features;
