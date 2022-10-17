import React, { useRef } from "react";
import { Parallax } from "react-scroll-parallax";
import pictureTwo from "./asset/product-600x1200-2.png";
import pictureThree from "./asset/product-600x1200-3.png";
import pictureOne from "./asset/product-big.png";

function Main() {
  const screenRef = useRef(null);

  return (
    <section className="main_container">
      <h1 className="main_header">PassPoint</h1>
      <p className="main_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
        dolor?
      </p>
      <p className="movie_detail">
        Watch Our Video <i class="material-icons">play_circle</i>
      </p>

      <div className="main_picture_container">
        <Parallax
          easing={"easeInQuad"}
          translateX={[-25, 100]}
          translateY={[0, 10]}
          EventTarget={screenRef.current}
        >
          <img
            src={pictureTwo}
            id="picture_two"
            style={{ width: "130%" }}
            alt="picture 2"
          />
        </Parallax>

        <img
          src={pictureOne}
          id="picture_one"
          style={{ width: "40%" }}
          alt="picture 1"
        />
        <Parallax
          easing={"easeInOut"}
          translateX={[0, -100]}
          translateY={[0, 10]}
          EventTarget={screenRef.current}
        >
          <img
            src={pictureThree}
            id="picture_three"
            style={{ width: "130%" }}
            alt="picture 3"
          />
        </Parallax>
      </div>
    </section>
  );
}

export default Main;
