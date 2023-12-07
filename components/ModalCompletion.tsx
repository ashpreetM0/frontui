import Image from 'next/image';
import React, { useRef } from 'react'

interface ModalCompletionProps {
    setModalCompletionPopup: (value: boolean) => void;
    closeModalCompletionPopup: (event: React.MouseEvent) => void;
  }

const ModalCompletion: React.FC<ModalCompletionProps> = ({ setModalCompletionPopup, closeModalCompletionPopup }) => {
    const clickingAnywhereElse = useRef<HTMLFormElement>(null);

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (
      clickingAnywhereElse.current &&
      !clickingAnywhereElse.current.contains(e.target as Node)
    ) {
      setModalCompletionPopup(false);
      
    }
  };
  return (
    <div
    className="fixed top-0 left-0 w-screen h-screen bg-black z-50 bg-opacity-60 flex justify-center items-center"
    onClick={handleOutsideClick}
  >
    <form
      className="rounded-lg shadow-lg p-9 mx-12 relative bg-[#1c1c1c]"
      ref={clickingAnywhereElse}
    >
      <button
        className="top-4 right-5 absolute text-[#e4e5e5] "
        onClick={closeModalCompletionPopup}
      >
         <Image src="/close.svg" height={9} width={9} className="w-[9px] h-[9px]"/>
      </button>

      <div className="flex justify-center items-center mx-8 mt-6 mb-9">
                    <Image src='/success.svg' height={84} width={84} className="w-[84px] h-[84px] pb-3"/>
          </div>
     

      <div
        className=" flex  justify-center items-center gap-2  text-white  text-center  text-[20px] w-full focus:ring-1 cursor-pointer"
      >
       The Order Has Been Completed!
        
       </div>
    </form>
    
  </div>
);
};

export default ModalCompletion
