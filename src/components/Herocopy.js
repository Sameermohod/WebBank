import styles from "../style";
import {about} from '../assets';

const Herocopy = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
    <div className={`flex-1 ${styles.flexStart}
    flex-col xl:px-0 sm:px-16 px-6`}>
      
      <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-black
        ss:leading-[68px]
        leading=[52px]
        w-full">
      About
      </h1>
      <p className={`${styles.paragraph2} max-w=[420px] mt-5`}>
      Uni banking app is an attempt to simplify banking. it brings all the different financial tools such as bank accounts, credit and debit cards and e-wallets together at one place 

      </p>
      <h1 className=" font-poppins font-semibold ss:text-[72px] mt-[100px] text-[52px] text-black
        ss:leading-[68px]
        leading=[52px]
        w-full">
    The Focus
      </h1>
      <p className={`${styles.paragraph2} max-w=[420px] mt-5`}>
      The purpose of this app is to focus on the day to day banking needs and simplify the most common use cases in one place.      
      </p>
      <h1 className=" font-poppins font-semibold ss:text-[72px] mt-[100px] text-[52px] text-black
        ss:leading-[68px]
        leading=[52px]
        w-full">
    The Aim
      </h1>
      <p className={`${styles.paragraph2} max-w=[420px] mt-5`}>
      I have aimed to achieve simplistic UX and a minimal UI to create an aesthetic usability effect, which will enable the user to adapt to this app easily.      </p>
    </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={about} alt="out" className="w-[90%] h-[90%] relative
      z-[5] " />  
      <div className="absolute z-[0] w-[100%] h-[40%] top-0 blue__gradient "/>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient "/>
      <div className="absolute z-[0] w-[100%] h-[50%] right-20 bottom-20 blue__gradient "/>
      </div>  
    </section>
  )
}
export default Herocopy