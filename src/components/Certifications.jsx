import { useState, useEffect } from 'react'
import { Tilt } from 'react-tilt'

import { certificates } from '../constants'

import { styles } from "../style";
import { fadeIn, textVariant } from '../utils/motion'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc';

const Modal = ({ image, title, onClose }) => {

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  // Disable scrolling when modal is open

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Disable scroll

    return () => {
      document.body.style.overflow = 'auto'// Enable scroll when modal is closed
    }

  })

  return (
    <motion.div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleOutsideClick} // Close modal on background click
    >
      <motion.div
        className="relative p-4 bg-white rounded-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black"
        >
          &times;
        </button>

        <img src={image} alt={title} className="w-[800px] h-auto rounded-lg" />
      </motion.div>
    </motion.div>
  );
};

const CertificateCard = ({ index, title, image, onClick }) => {

  return (

    <>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        onClick={() => onClick(image, title)}
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="border-tertiary rounded-2xl sm:w-[360px] w-full"
        >
          <div className='relative w-full h-[250px]'>
            <img src={image} alt={title} className='w-full h-full object-cover rounded-2xl' />
          </div>

          <div className='mt-5'>
            <p className='text-white font-bold text-[18px]'>{title}</p>
          </div>
        </Tilt>
      </motion.div>
    </>
  )

}

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  // Function to open the modal
  const openModal = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);

    console.log(selectedImage)
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
    setSelectedTitle(null);
  };

  return (
    <>
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div
          className={`rounded-2xl ${styles.padding} min-h-[300px]`}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Exploration</p>
            <h2 className={styles.sectionHeadText}>Certificates.</h2>
          </motion.div>
        </div>
        <div className={`pb-14 ${styles.paddingX} flex flex-wrap gap-20 justify-center`}>
          {certificates.map((certificate, index) => (
            <CertificateCard key={`certificate-${index}`}
              index={index} {...certificate}
              onClick={openModal}
            />
          ))}
        </div>
      </div>

      {/* Render the modal if an image is selected */}
      {selectedImage && (
        <Modal image={selectedImage} title={selectedTitle} onClose={closeModal} />
      )}

    </>
  )
}

export default SectionWrapper(Certifications, "")