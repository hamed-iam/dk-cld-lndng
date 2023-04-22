import SvgIcon from "@/components/SvgIcon";
import { motion } from "framer-motion";
import { StyledSloganEn } from "./hero.style";
import { useEffect, useState } from "react";

export default function SloganEn() {
  const [isMobile, setIsMobile] = useState(false);

  // ! need to find a better solution for this. preferably with css only
  useEffect(() => {
    if (window.innerWidth <= 400) {
      setIsMobile(true);
    }
  }, []);

  return (
    <StyledSloganEn>
      <h1>
        Let&apos;s build a
        <br />
        <motion.span
          className={!isMobile ? 'better' : ""}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="better-highlight">Better </span>
          {isMobile && <br />}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`better-infrastructure ${isMobile ? "better" : ""}`}
          >
            Infrastructure
          </motion.span>
        </motion.span>
        , <br />
        <span className="sparkle">
          together <SvgIcon title="sparkleIcon" viewBox="0 0 56 57" />
        </span>
      </h1>
    </StyledSloganEn>
  );
}
