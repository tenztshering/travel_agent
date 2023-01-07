'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Map of Bhutan" textStyles="text-center" />
      <TitleText
        title={
          <>
            Bhutan is a landlocked country with 38,394sq.km of size with around
            800,000 population, 20 districts
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[700px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-100vh object-cover -mt-[80px] overflow-y-visible"
          loading="lazy"
        />

        {/* <div className="absolute bottom-40 right-20 w-[70px] h-[70px] p-[6px] rounded-full">
          <img
            src="/images/bhutanpointer.png"
            alt="people"
            className="w-full h-full"
          />
        </div> */}

        {/* <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img
            src="/images/bhutanpointer.png"
            alt="people"
            className="w-full h-full"
          />
        </div> */}

        {/* <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full">
          <img
            src="/images/bhutanpointer.png"
            alt="Bhutam Map"
            className="w-full h-full"
          />
        </div> */}
      </motion.div>
    </motion.div>
  </section>
);

export default World;
