// import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion";
// import "./Modal.css";

// import gsap from "gsap";

// const scaleAnimation = {
//   initial: { scale: 0, x: "-50%", y: "-50%" },
//   enter: {
//     scale: 1,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
//   },
//   closed: {
//     scale: 0,
//     x: "-50%",
//     y: "-50%",
//     transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
//   },
// };

// const ProductModal = ({ modal, projects }) => {
//   const { active, index } = modal;

//   const modalContainer = useRef(null);
//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);

//   useEffect(() => {
//     //Move Container
//     let xMoveContainer = gsap.quickTo(modalContainer.current, "right", {
//       duration: 0.8,
//       ease: "power3",
//     });
//     let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
//       duration: 0.8,
//       ease: "power3",
//     });
//     //Move cursor
//     let xMoveCursor = gsap.quickTo(cursor.current, "left", {
//       duration: 0.5,
//       ease: "power3",
//     });
//     let yMoveCursor = gsap.quickTo(cursor.current, "top", {
//       duration: 0.5,
//       ease: "power3",
//     });
//     //Move cursor label
//     let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
//       duration: 0.45,
//       ease: "power3",
//     });
//     let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
//       duration: 0.45,
//       ease: "power3",
//     });

//     window.addEventListener("mousemove", (e) => {
//       const { pageX, pageY } = e;
//       xMoveContainer(pageX);
//       yMoveContainer(pageY);
//       xMoveCursor(pageX);
//       yMoveCursor(pageY);
//       xMoveCursorLabel(pageX);
//       yMoveCursorLabel(pageY);
//     });
//   }, []);

//   return (
//     <>
//       <motion.div
//         className="modalContainer"
//         variants={scaleAnimation}
//         initial="initial"
//         animate={active ? "enter" : "closed"}
//       >
//         <div style={{ top: index * -100 + "%" }} className="modalSlider">
//           {projects.map((project, index) => {
//             const { src, color } = project;
//             return (
//               <div
//                 className="modal flex justify-center items-center"
//                 style={{ backgroundColor: color }}
//                 key={`modal_${index}`}
//               >
//                 <div>
//                   <img className=" p-4 " src={`${project.src}`} alt="image" />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </motion.div>
//       <motion.div
//         ref={cursor}
//         variants={scaleAnimation}
//         className="cursor"
//         // initial="initial"
//         animate={active ? "enter" : "closed"}
//       ></motion.div>
//       <motion.div
//         ref={cursorLabel}
//         variants={scaleAnimation}
//         initial="initial"
//         className="cursorLabel"
//         animate={active ? "enter" : "closed"}
//       >
//         View
//       </motion.div>
//     </>
//   );
// };

// export default ProductModal;





import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./Modal.css";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const ProductModal = ({ modal, projects }) => {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const moveElement = (element, property, duration) => {
      return gsap.quickTo(element.current, property, {
        duration,
        ease: "power3",
      });
    };

    const handleMouseMove = (e) => {
      const { pageX, pageY } = e;
      moveElement(modalContainer, "right", 0.8)(pageX);
      moveElement(modalContainer, "top", 0.8)(pageY);
      moveElement(cursor, "left", 0.5)(pageX);
      moveElement(cursor, "top", 0.5)(pageY);
      moveElement(cursorLabel, "left", 0.45)(pageX);
      moveElement(cursorLabel, "top", 0.45)(pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        className="modalContainer"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <div style={{ top: index * -100 + "%" }} className="modalSlider">
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className="modal "
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <div>
                  <img className="p-4" src={src} alt="image" />
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        className="cursor"
        animate={active ? "enter" : "closed"}
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        className="cursorLabel"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
};

export default ProductModal;
