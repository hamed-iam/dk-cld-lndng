import SvgIcon from "@/components/SvgIcon";
import { motion } from "framer-motion";
import { StyledSloganFa } from "./hero.style";

export default function SloganFa() {
  return (
    <StyledSloganFa>
      <h1>
        <span className="sparkle">
          بیایید با هم <SvgIcon title="sparkleIcon" viewBox="0 0 56 57" />
        </span>
        <motion.span
          className="better"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          زیرساخت <span className="better-highlight">بهتر</span> ی
        </motion.span>{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="infrastructure"
        >
          بسازیم
        </motion.span>
      </h1>
    </StyledSloganFa>
  );
}
