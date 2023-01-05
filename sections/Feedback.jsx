'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => (
  <section className={`${styles.paddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0, 0.2)}
        className="flex-[0.5] lg:max-w-[370px] flex  flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[22px] text-[16px] sm:leading-[40.32px] leading-[36.32px] text-white">
            NICHOLAS AND LEA
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            FRANCE
          </p>
        </div>

        <p className="mt-[20px] font-normal sm:text-[18px] text-[15px] sm:leading-[45.6px] leading-[39.6px] text-white">
          "It was our second visit to Bhutan. This time we chose Mahaboddhi
          Tours . We were not so impressed during our first visit with another
          company. Our experience with Mahaboddhi Tours was superb. Karma was
          flexible and willing to adjust the itinerary to suit our interests and
          create the best experience possible. We saw so many beautiful things
          on earth in Bhutan during our 10 day stay. I would highly recommend
          Mahaboddhi Tours for anyone visiting Bhutan. They are the best."
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0, 0.2)}
        className="flex-[0.5] lg:max-w-[370px] flex  flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[22px] text-[16px] sm:leading-[40.32px] leading-[36.32px] text-white">
            CHRISTINE AND BILL
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[15px] sm:leading-[22.68px] leading-[16.68px] text-white">
            UNITED STATES OF AMERICA
          </p>
        </div>

        <p className="mt-[20px] font-normal sm:text-[18px] text-[15px] sm:leading-[45.6px] leading-[39.6px] text-white">
          "Our guide, Ngawang, was professional. He had thorough knowledge on
          every trekking route in Bhutan. He has thorough knowledge on the
          country and her culture. Organization was perfect. We did Jomolhari
          trek which was strenuous and challenging but it was worth our effort.
          Trekking cooks and pony boys put on their genuine smiles on their
          faces every time. This has added beauty to our adventure and made it a
          special moment to remember in our hearts. We recommend Mahaboddhi
          Tours to all."
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0, 0.2)}
        className=" flex-[0.5] lg:max-w-[370px] flex  flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[22px] text-[16px] sm:leading-[40.32px] leading-[36.32px] text-white">
            GABRIELE AND WILLI
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[15px] sm:leading-[22.68px] leading-[16.68px] text-white">
            AUSTRIA
          </p>
        </div>

        <p className="mt-[20px] font-normal sm:text-[18px] text-[15px] sm:leading-[45.6px] leading-[39.6px] text-white">
          "We have enjoyed in your beautiful country and definitely I will
          recommend my friends to visit Bhutan at least once in a life time.
          Thank you Mahaboddhi Tours for making our stay in Bhutan a very
          special moment."
        </p>
      </motion.div>

      {/* <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/images/bumdra.jpg"
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/images/bhutanlogo.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div> */}
    </motion.div>
  </section>
);

export default Feedback;
