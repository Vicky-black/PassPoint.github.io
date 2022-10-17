import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <section id="about" className="about_container">
        <p className="about_intro">the niches</p>
        <h1 className="about_header">What is PassPoint?</h1>{" "}
        <p className="about_detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, hic
          officiis tempore facilis sit possimus ea dolor unde ullam sed itaque
          nulla aliquid ab optio. Odit doloribus quis quae quasi omnis quo
          quidem magnam quos, earum exercitationem mollitia, voluptas ipsum.
        </p>
        <section className="sub_about_container">
          <article>
            <p className="sub_about_header">Made With React</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quo, repellendus aliquam quisquam magni in maxime, eos reiciendis
              ipsa tempora laborum dolores quis nulla explicabo.
            </p>
          </article>
          <article>
            <p className="sub_about_header">Scroll Animated </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quo, repellendus aliquam quisquam magni in maxime, eos reiciendis
              ipsa tempora laborum dolores quis nulla explicabo.
            </p>
          </article>
          <article>
            <p className="sub_about_header">Responsive</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quo, repellendus aliquam quisquam magni in maxime, eos reiciendis
              ipsa tempora laborum dolores quis nulla explicabo.
            </p>
          </article>
        </section>
      </section>
    </ScrollAnimation>
  );
}

export default About;
