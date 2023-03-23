import Slidecard from "../components/Slidecard";
import react, { useEffect, useState } from "react";
import React from "react";
import gsap from 'https://unpkg.co/gsap@3/dist/gsap.min.js'
import Draggable from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.2.6/Draggable.min.js'
import InertiaPlugin from 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/InertiaPlugin.min.js'


function Slidecardcont() {
  useEffect(() => {
    let boxx = document.querySelector(".boxx");
    let slides = Array.from(boxx.children);

    let slidesize = slides[0].getBoundingClientRect().width;

    let seccounter = 50;
    let counter = 0;

    let getSlideSize = (slide, index) => {
      slide.style.left = slidesize * index + counter + "px";
      counter += seccounter;
    };
    console.log(slides);

    slides.forEach(getSlideSize);
  }, []);


  const wrapperRef = React.useRef(null);
  const itemsRef = React.useRef([]);
  const [carouselData, setCarouselData] = React.useState(null)
  const [itemHeight, setItemHeight] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  

  const measuredRef = React.useCallback((node) => {
    if (node !== null) {
      setItemHeight(node.getBoundingClientRect().height);
    }
  }, []);

  const addToRefs = React.useCallback((el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  }, []);

  const animation = (carouselItems, width) => {
    return (
      carouselItems.length > 0 &&
      gsap
        .to(carouselItems, {
          duration: 1,
          x: () => {
            return `+=${width}`;
          },
          paused: true,
          ease: "linear",
          overwrite: true,
          repeat: -1,
          modifiers: {
            x: (x) => {
              x = parseFloat(x) % width;
              return `${x}px`;
            }
          }
        })
        .progress(1 / carouselItems.length)
    );
  };

  const carouselAnimation = () => {
    const carouselItems = itemsRef.current;
    let carouselWidth, carouselLength, snapBox;

    if (carouselItems.length > 0) {
      carouselLength = itemsRef.current.length;
      carouselWidth = itemsRef.current[0].clientWidth * carouselLength;
      snapBox = gsap.utils.snap(itemsRef.current[0].clientWidth);

      carouselItems.forEach((elm, i) => {
        gsap.set(elm, {
          x: i * itemsRef.current[0].clientWidth,
          left: -itemsRef.current[0].clientWidth
        });
      });

      gsap.set("#wrapper", { height: itemHeight });
    }

    const wrapProgress = gsap.utils.wrap(0, 1);
    const proxy = document.createElement("div");
    const timeLine = animation(carouselItems, carouselWidth);

    Draggable.create(proxy, {
      trigger: "#elm",
      throwProps: true,
      inertia: true,
      isThrowing: true,
      dragResistance: 0.55,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      dragClickables: true,
      snap: {
        x: snapBox
      }
    });

    function updateProgress() {
      if (timeLine)
        timeLine.progress(
          wrapProgress(gsap.getProperty(proxy, "x") / carouselWidth)
        );
    }
  };
  
  React.useEffect(() => {
    gsap.registerPlugin(Draggable, InertiaPlugin);
    setCarouselData([1, 2, 3, 4, 5, 6, 7, 8])    
  }, [])

  React.useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      handleWindowResize();
      carouselAnimation();
    });
    carouselAnimation();
  }, [carouselData, windowWidth]);


  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="boxx"
            style={{ display: "flex", position: "relative" }}
          >
            <Slidecard />
            <Slidecard />
            <Slidecard />
            <Slidecard />
            <Slidecard />
            <Slidecard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Slidecardcont;
