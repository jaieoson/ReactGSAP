

import gsap from "gsap";




export const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.2,
      height: 0,
      transformOrigin: "right top",
      skewY: 4,
      ease: "power3.inOut",
      stagger:{
        amount: 0.1
      }
    });
  };
  
  
  
export const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: "power3.inOut",
      stagger:{
        amount: 0.3
      }
    });
  };
  
  export const fadeInUp = (node) => {
     gsap.from(node, {
       y:60,
       duration:1,
       delay: 0.2,
       opacity: 0,
       ease: "Power3.easeInOut",
     });
  
  };
  
  
  export const handleCity = (city, cityBackground) => {
     gsap.to(cityBackground, {
       duration: 0,
       background: `url(${city}) center center`
     });
  
     gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut"
    });
  
    gsap.from(cityBackground, {
      duration: 0.4,
      opacity: 2,
     transformOrigin: "right top"
    });
  
  }
  
  export const handleCityReturn = (cityBackground) => {
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 0
    })
  }
  
  
  export const handleHover = e => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power3.inOut"
  });
  };
  
  export const handleHoverExit = e => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: "power3.inOut"
    });
  }

  