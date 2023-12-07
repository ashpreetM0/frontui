import * as React from "react"
import { Input } from "../@/components/ui/input"
import DropdownNetwork from "./DropdownNetwork"
import ModalConfirmation from "./ModalConfirmation"
import Image from "next/image"

const Crosschain = () => {
  const [modalConfirmationPopup, setModalConfirmationPopup] = React.useState(false);
  const [modalCompletionPopup, setModalCompletionPopup] = React.useState(false);

  function openModalConfirmationPopup(e: React.MouseEvent) {
    e.preventDefault();
    setModalConfirmationPopup(true);
  }

  function closeModalConfirmationPopup(e: React.MouseEvent) {
    e.preventDefault();
    setModalConfirmationPopup(false);
    setModalCompletionPopup(false);
  }

  function openModalCompletionPopup(e: React.MouseEvent) {
    e.preventDefault();

    //setModalConfirmationPopup(false);
    setModalCompletionPopup(true);
    //closeModalConfirmationPopup(e)
  }

  function closeModalCompletionPopup(e: React.MouseEvent) {
    e.preventDefault();
   // setModalCompletionPopup(false);
    setModalConfirmationPopup(true);
  }
  return (
    <div className='bg-black h-full w-full'>
        <div className='ml-[220px] pt-[114px] w-fit'>
            <p className='text-white text-[18px] font-[600]'>Cross-Chain OTC Swap</p>
            <div className='text-[#818181] text-[20px] font-[600] mt-3'>Now, you can Complete Your Order by Tapping the Button Below. </div>
            <div className='flex items-center px-28 w-fit my-9'>
                <div className='bg-[#085D3A] h-[72px] w-[72px]  justify-center flex items-center text-xl rounded-xl'><div className='bg-green-400 h-[54px] w-[54px] rounded-[8px] flex justify-center items-center'><p>1</p></div></div>
                <div className="w-[216px] h-[0px] border border-green-500"></div>
                <div className='bg-[#085D3A] h-[72px] w-[72px]  justify-center flex items-center text-xl rounded-xl'><div className='bg-green-400 h-[54px] w-[54px] rounded-[8px] flex justify-center items-center'><p>2</p></div></div>
            </div>
            <div className='mx-11 text-white'>
                <div className='bg-zinc-900 p-8'>
                    <div className='flex gap-x-6'>
                        <div className="w-1/2">
                                <p className="text-white  font-medium mb-4">Network</p>
                               <DropdownNetwork/>
                        </div>
                        <div className="w-1/2">
                                <p className="text-white  font-medium mb-4">Visibility</p>
                                <DropdownNetwork/>
                        </div>
                    </div>
                    <div className='mt-10'>Your Partner’s Detail’s</div>
                    <Input className="bg-[#161616] text-[#818181] font-medium placeholder:font-medium placeholder:text-[#818181] border-none focus:none mt-4 py-3 h-14 px-5" type="email" id="email" placeholder="X.056XXXXXXXXXXXXXXXXXXXXXXXXXXX" />
                </div>
              <div className="text-center text-white text-base font-medium mt-5  px-[19.44px] py-[12.96px] text-[20px] bg-indigo-600" onClick={openModalConfirmationPopup}>Complete Order</div>
            
              <div className="flex mt-[19px] w-fit ">
                <div className="text-white text-xs font-normal leading-[12.93px] pl-2">No extra fees</div>
                <div className="ml-1 flex justify-center">
                <Image src="/question-help.svg" height={10} width={10} className="w-[10px] h-[10px]"/>
                </div>
              </div>
            </div>
            
        </div>
        {
        modalConfirmationPopup &&
        <ModalConfirmation
          modalConfirmationPopup={modalConfirmationPopup}
          setModalConfirmationPopup={setModalConfirmationPopup}
          closeModalConfirmationPopup={closeModalConfirmationPopup}
          setModalCompletionPopup={setModalCompletionPopup}
          modalCompletionPopup={modalCompletionPopup}
          openModalCompletionPopup={openModalCompletionPopup}
          closeModalCompletionPopup={closeModalCompletionPopup}
        />
      }
    </div>
  )
}

export default Crosschain