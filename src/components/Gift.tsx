import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Gift() {
    return (

        <div className=' w-[80%] flex justify-between m-auto lg:flex-row flex-col-reverse'>
            <div className=' sm:w-1/3 mt-[60px]'>
                <h2 className=' text-[17px] tracking-widest text-gray-700'>GIFT CARDS</h2>
                <h1 className=' text-[30px] font-bold leading-[35px]	'>Support your <br /> neighborhood</h1>
                <p className=' text-[16px] text-gray-700 mt-[20px]'>We believe that local businesses are an integral part of a neighborhood's character. Help keep us local by buying a gift card!</p>
                <button className='group text-white bg-[#111111] font-bold px-[20px] py-[12px] mt-[20px]'>Shop Gift Cards<FaLongArrowAltRight className='hidden text-white group-hover:inline font-extrabold ml-[10px] text-xl' /></button>
            </div>
            <div className='flex'>
                <div className='sm:-mr-[40px] -mr-[30px] sm:mt-[160px] mt-[80px] z-10'><img src="/img.jpg" width={305} height={204} alt="" /></div>
                <div>
                    <img src="/img2.webp" width={305} height={410} alt="" />
                </div>
            </div>
        </div>
    )
}
