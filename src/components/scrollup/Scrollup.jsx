import React from "react";
import "./scrollup.css";

const Scrollup = () => {
  //Here we do it when the scroll is higher then the 560 viewport height,
  //we add the show-scroll class to a tag  with the scrollup class
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scrollup;
