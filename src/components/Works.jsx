import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { github, link } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from "../style";
import { useMediaQuery } from 'react-responsive';

const ProjectCardMobile = ({ index, name, description, tags, image, source_code_link, website_link }) => {
  return (
    <>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] xs:w-[200px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' loading="lazy" />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>

            {
              website_link && (
                <div onClick={() => window.open(website_link, "_blank")}
                  className='white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                  <img src={link} alt="link" className=' object-contain' />
                </div>
              )
            }


            <div onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt="github" className='w-1/2 h-1/2 object-contain ' />
            </div>
          </div>
        </div>


        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p className={`text-[14px] ${tag.color}`} key={`${name}-${tag.name}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}


const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {
  return (
    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] xs:w-[200px] w-full'
        >

          <div className='relative w-full h-[230px]'>
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' loading="lazy" />

            <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>

              {
                website_link && (
                  <div onClick={() => window.open(website_link, "_blank")}
                    className='red-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-red-600'>
                    <img src={link} alt="link" className=' object-contain' />
                  </div>
                )
              }


              <div onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient  w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={github} alt="github" className='w-1/2 h-1/2 object-contain ' />
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p className={`text-[14px] ${tag.color}`} key={`${name}-${tag.name}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    </>
  )
}
const Works = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      {!isMobile ?
        (
          <>
            <motion.div variants={textVariant()}>
              <p className={`${styles.sectionSubText} text-center`}>
                My Work
              </p>
              <h2 className={`${styles.sectionHeadText} text-center`}>
                Projects.
              </h2>
            </motion.div>

            <div className='w-full flex'>
              <motion.p
                variants={fadeIn("", "", 0.1, 1.5)}
                className='mt-3 text-secondary text-justify xs:text-[15px] xs:leading-[15px] sm:text-[17px] sm:leading-[30px] text-[17px] leading-[30px]'
              >
                Following projects showcases my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos in it. It reflects my
                ability to solve complex problems, work with different technologies,
                and manage projects effectively.
              </motion.p>
            </div>
          </>

        ) :
        (
          <>
            <div>
              <p className={`${styles.sectionSubText} text-center`}>
                My Work
              </p>
              <h2 className={`${styles.sectionHeadText} text-center`}>
                Projects.
              </h2>
            </div>

            <div className='w-full flex'>
              <p
                className='mt-3 text-secondary text-justify xs:text-[15px] xs:leading-[15px] sm:text-[17px] sm:leading-[30px] text-[17px] leading-[30px]'
              >
                Following projects showcases my skills and experience through
                real-world examples of my work. Each project is briefly described with
                links to code repositories and live demos in it. It reflects my
                ability to solve complex problems, work with different technologies,
                and manage projects effectively.
              </p>
            </div>
          </>
        )}

      <div className='mt-20 flex flex-wrap gap-7'>
        {
          projects.map((project, index) => (

            isMobile ?
              (<ProjectCardMobile key={`project-${index}`}
                index={index}
                {...project} />) :
              (<ProjectCard key={`project-${index}`}
                index={index}
                {...project} />)
          ))
        }
      </div>
    </>
  )
}


export default SectionWrapper(Works, "") 