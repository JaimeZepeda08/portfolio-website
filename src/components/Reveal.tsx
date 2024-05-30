"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  children: JSX.Element;
  width?: string;
  delay?: number;
  horizontal?: boolean;
  down?: boolean;
};

const Reveal: React.FC<Props> = ({
  children,
  width = "w-fit",
  delay,
  horizontal = false,
  down = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative ${width}`}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: horizontal ? 0 : down ? -75 : 75,
            x: horizontal ? -75 : 0,
          },
          visible: {
            opacity: 1,
            y: 0,
            x: 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay, ease: "linear" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
