import React from 'react'
import { Tilt } from 'react-tilt'

import { styles } from "../style";
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { services } from "../constants/index";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>OverView.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] leading-[30xp] text-justify justify-evenly'>

        I am a software engineer with around 4 years of experience in building backend applications.
        Recently, I started exploring frontend technologies and have developed a passion for it.
        My experience includes working with Microservices, Kafka, Redis, AWS, Docker, SQL/NoSQL, AI, ML, NLP, Django, React, Redux, Python, JavaScript, and TypeScript.
        <br />
        I'm a quick learner who collaborates closely with clients to create efficient, scalable, and user-friendly solutions that address real-world problems.
        Let’s collaborate and bring innovative ideas to life!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")