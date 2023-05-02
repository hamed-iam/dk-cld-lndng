import Image from "next/image";
import { motion } from "framer-motion";

import StyleWrapper from "./successStory.style";
import Link from "next/link";
import SvgIcon from "../SvgIcon";

export default function SuccessStorySection() {
  return (
    <StyleWrapper>
      <div className="container">
        <div className="success-header">
          <div className="success-header-super">
            <p>Did You Know?</p>
          </div>
          <h3 className="success-header-superMain">
            Know about Customers Using
          </h3>
          <h2 className="success-header-main">Object Storage</h2>
          <p className="success-header-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet,
            consectetur
          </p>
          <Link href="/about">
            Request fo Call Back{" "}
            <SvgIcon title="contactArrowIcon" viewBox="0 0 24 24" />
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="image-wrapper"
        >
          <Image
            src="/assets/hero-compute.png"
            width="373"
            height="333"
            alt="cloud-compute"
          />
        </motion.div>
      </div>
      <div className="success-content"></div>
    </StyleWrapper>
  );
}
