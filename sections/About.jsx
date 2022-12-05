'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Traveling" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        All the 20 districts in{' '}
        <span className="font-extrabold text-white">Bhutan</span> are accessible
        by road. Despite high mountains, steep slopes, and the deep valleys,
        Bhutan has a relatively well developed network of roads. However, the
        condition of roads in Bhutan would not be as good in the plains given
        the geographical (steep slopes and lose soil) location of the country.
        Steep ascents and descents are characteristic of roads in Bhutan and
        this can make travel much slower. Average car speed rarely exceeds 40
        km/h, with tourist buses making even slower. However, travelers are
        rewarded for the long and sometimes tiring car journey, by the
        spectacular views of majestic mountains, lush green jungle, ancient
        villages and monasteries.{' '}
        {/* <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down */}
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
