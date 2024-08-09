"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {
  children: JSX.Element;
  width?: string;
  delay?: number;
  duration?: number;
};

const FadeIn: React.FC<Props> = ({
  children,
  width = "w-fit",
  delay,
  duration = 0.7,
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
          },
          visible: {
            opacity: 1,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration, delay: delay, ease: "linear" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeIn;
