import styles from "../style";
import {account,switc,cards} from '../assets';

const Account = () => {
  return (
    <div>

    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
      <img src={account} alt="out" className="w-[70%] h-[70%] relative
      z-[5] " />  
      <div className="absolute z-[0] w-[100%] h-[40%] top-0 blue__gradient "/>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient "/>
      <div className="absolute z-[0] w-[100%] h-[50%] right-20 bottom-20 blue__gradient "/>
      </div>  
    <div className={`flex-1 ${styles.flexStart}
    flex-col xl:px-0 sm:px-16 px-6`}>
      
      <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-black
        ss:leading-[68px]
        leading=[52px]
        w-full">
    Account Details
      </h1>
      <p className={`${styles.paragraph2} max-w=[420px] mt-5`}>
      Swiping up the bank card on the home page open up the account detail page. The main purpose of this page is to provide info about transactions and to raise bank requests.

      </p>
    
    </div>    
    </section>
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} `}>
    <div className={`flex-1 ${styles.flexStart}
    flex-col xl:px-0 sm:px-16 px-6`}>
      
      <h1 className=" font-poppins font-semibold ss:text-[72px] text-[52px] text-black
        ss:leading-[68px]
        leading=[52px]
        w-full">
    Switching Account
      </h1>
      <p className={`${styles.paragraph2} max-w=[420px] mt-5`}>
      Swiping right or left switches between accounts. Colors help the user quickly identify the bank. It also gives a glimpse of the account balance remaining.
      </p>
    
    </div>    
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-5 relative `}>
      <img src={switc} alt="out" className="w-[90%] h-[90%] relative
      z-[5] " />  
      <div className="absolute z-[0] w-[100%] h-[40%] top-0 blue__gradient "/>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient "/>
      <div className="absolute z-[0] w-[100%] h-[50%] right-20 bottom-20 blue__gradient "/>
      </div>  
    </section>
  
    <section id="home" className={` ${styles.paddingY} text-center `}>
    <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-black
        ss:leading-[68px]
        leading=[52px]
        w-full mb-5">
      CARDS
    </h1>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
      <img src={cards} alt="out" className="w-[20%] h-[20%] relative
      z-[5] " />  
      <div className="absolute z-[0] w-[100%] h-[40%] top-0 blue__gradient "/>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 pink__gradient "/>
      <div className="absolute z-[0] w-[100%] h-[50%] right-20 bottom-20 blue__gradient "/>
      </div> 
      <p className={`${styles.paragraph2} max-w=[100px] mt-5`}>

      Card section gives a summary of all the card Sam hold including Credit and Debit cards.
      </p>
      <p className={`${styles.paragraph2} max-w=[100px] mt-5`}>

      Credit cards also show a brief summary to help Sam understand his spends at a glance.      </p>
    </section>
    </div>
  )
}
export default Account;