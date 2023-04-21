import SvgIcon from "@/components/SvgIcon";
import { motion } from "framer-motion";
import { StyledSloganEn } from "./hero.style";

export default function SloganEn() {
  return (
    <StyledSloganEn>
      <h1>
        Let&apos;s build a
        <br />
        <motion.span
          className="better"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="better-highlight">Better</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="better-infrastructure"
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
