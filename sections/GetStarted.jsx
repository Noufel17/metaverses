"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, planetVariants } from "../utils/motion";
import styles from "../styles";
import { StartSteps, TitleText, TypingText } from "../components";
import { startingFeatures } from "../constants";
const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`${styles.flexCenter} flex-1`}
      >
        <img
          src="/get-started.png"
          alt="get started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus works" textStyles="text-center" />
        <TitleText title={<>Get started with just a fiew clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => {
            return (
              <StartSteps key={feature} number={index + 1} text={feature} />
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
