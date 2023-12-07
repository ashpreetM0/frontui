import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ModalCompletion from "./ModalCompletion";

interface ModalConfirmationProps {
  modalConfirmationPopup:boolean;
  setModalConfirmationPopup: (value: boolean) => void;
  closeModalConfirmationPopup: () => void;
  setModalCompletionPopup:(value: boolean) =>void;
  modalCompletionPopup:boolean;
  openModalCompletionPopup: () => void;
  closeModalCompletionPopup: () => void;
}

const ModalConfirmation: React.FC<ModalConfirmationProps> = ({ modalConfirmationPopup,setModalConfirmationPopup, closeModalConfirmationPopup, setModalCompletionPopup, modalCompletionPopup, openModalCompletionPopup, closeModalCompletionPopup }) => {
  // const [modalCompletionPopup, setModalCompletionPopup] = React.useState(false);

  
  const clickingAnywhereElse = useRef<HTMLFormElement>(null);

  const handleOutsideClick = (e: React.MouseEvent) => {
   // const modalCompletion = document.querySelector('.modal-completion'); // Adjust the selector based on your implementation
  if (
    clickingAnywhereElse.current &&
    !clickingAnywhereElse.current.contains(e.target as Node) //&&
    // !modalCompletion?.contains(e.target as Node)
  ) {
    setModalConfirmationPopup(false);
    setModalCompletionPopup(false)
  }
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black z-50 bg-opacity-60 flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <form
        className="rounded-lg shadow-lg p-6 px-5 relative bg-[#1c1c1c]"
        ref={clickingAnywhereElse}
      >
        <button
          className="absolute top-4 right-4  text-[#e4e5e5] "
          onClick={closeModalConfirmationPopup}
        >
          <Image src="/close.svg" height={9} width={9} className="w-[9px] h-[9px]"/>
        </button>
          
      {!modalCompletionPopup  ? <div>

          
        <p className="text-white text-xl font-semibold mb-6">Confirm Order</p>
        <div className="flex justify-between text-white">
          <div>
              <p className="text-xs px-2 w-fit font-medium">Give</p>
              <div className='bg-[#2B2B2B] h-[140px] w-[140px] mt-3 justify-center flex items-center text-xl rounded-xl'>
                <div className='bg-[#252525] h-[119px] w-[119px] rounded-[8px] flex-col items-center justify-between p-2'>
                  <div className="flex justify-center items-center pt-1">
                    <Image src='/bitcoin.svg' height={48} width={48} className="w-[48px] h-[48px] "/>
                  </div>
                  <div className="pt-4 text-center">
                    <span className="text-[#818181]">Amount:</span> <span>&nbsp;1</span>
                  </div>  
                </div>
              </div>
          </div>

          <div className="flex justify-center items-center mx-8">
                    <Image src='/Vector.svg' height={15} width={18} className="w-[18px] h-[15px] pb-3"/>
          </div>

          <div>
              <p className="text-xs px-2 w-fit font-medium">Receive</p>
              <div className='bg-[#2B2B2B] h-[140px] w-[140px] mt-3 justify-center flex items-center text-xl rounded-xl'>
                <div className='bg-[#252525] h-[119px] w-[119px] rounded-[8px] flex-col items-center justify-between p-2'>
                  <div className="flex justify-center items-center pt-1">
                    <Image src='/ethereum.svg' height={48} width={48} className="w-[48px] h-[48px] "/>
                  </div>
                  <div className="pt-4 text-center">
                    <span className="text-[#818181]">Amount:</span> <span>&nbsp;2</span>
                  </div>  
                </div>
              </div>
          </div>
        </div>

        <div
          className="bg-[#5934fe] text-base font-medium px-[19.44px] py-[12.96px] rounded-sm justify-center items-center gap-2 inline-flex text-white  mt-6 text-center  text-[18px] w-full focus:ring-1 cursor-pointer"
          onClick={openModalCompletionPopup}
        >
          Confirm Order
          <Image src="/WhiteTick.svg" width={16} height={16} className="w-4 h-4"/>
        </div>
      </div>:<div>
          <div className="flex justify-center items-center mx-8 mt-6 mb-9">
                    <Image src='/success.svg' height={84} width={84} className="w-[84px] h-[84px] pb-3"/>
          </div>
            <div
              className=" flex  justify-center items-center gap-2  text-white  text-center  text-[20px] w-full focus:ring-1 cursor-pointer"
            >
            The Order Has Been Completed!
            </div>
          </div>}
      </form>
      {/* {
        modalCompletionPopup &&
        <ModalCompletion
          setModalCompletionPopup={setModalCompletionPopup}
          closeModalCompletionPopup={closeModalCompletionPopup}
        />
      } */}
    </div>
  );
};

export default ModalConfirmation;
