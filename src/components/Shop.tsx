import { grid } from './Databse';
import '../index.css'

interface gridType {
    subTitle: string,
    title: string,
    desc: string,
    img1: string,
    img2: string,
    img3: string,
    img4: string,
    img5: string,
    btn1: string,
    btn2: string
}

window.addEventListener('scroll', reveal);

function reveal() {
    var topLeft = document.querySelectorAll('.topLeft');
    var topRight = document.querySelectorAll('.topRight');
    var botLeft = document.querySelectorAll('.botLeft');
    var botRight = document.querySelectorAll('.botRight');

    // ####LeftAnim
    for (var i = 0; i < topLeft.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = topLeft[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            topLeft[i].classList.add('topLeftActive');
        }
        else {
            topLeft[i].classList.remove('topLeftActive');
        }
    }

    
    // ####RightAnim
    for (var i = 0; i < topRight.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = topRight[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            topRight[i].classList.add('topRightActive');
        }
        else {
            topRight[i].classList.remove('topRightActive');
        }
    }

    // ####botLeft
    for (var i = 0; i < botLeft.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = botLeft[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            botLeft[i].classList.add('botLeftActive');
        }
        else {
            botLeft[i].classList.remove('botLeftActive');
        }
    }

    // ####botRight
    for (var i = 0; i < botRight.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = botRight[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            botRight[i].classList.add('botRightActive');
        }
        else {
            botRight[i].classList.remove('botRightActive');
        }
    }

}
reveal()

const gridData:gridType = grid;

export default function Shop() {
    return (

        <div className='w-[80%] max-w-6xl flex justify-between mt-[100px] mb-[400px] m-auto lg:flex-row flex-col-reverse h-[15cm] items-center'>
            <div className='flex relative w-[50%] '>
                <img src={gridData.img1} alt="" className='absolute z-10 md:translate-x-[140px] translate-x-[80px] translate-y-[40px] md:w-[280px] w-[140px]' />
                <img src={gridData.img3} alt="" className='topLeft md:w-[180px] w-[90px]' />
                <img src={gridData.img5} alt="" className='topRight md:w-[100px] w-[50px]' />
                <img src={gridData.img2} alt="" className='botLeft md:w-[200px] w-[100px]' />
                <img src={gridData.img4} alt="" className='botRight md:w-[160px] w-[80px]' />
            </div>
            <div className=' md:w-1/3'>
                <h2 className=' text-[17px] tracking-widest text-gray-700'>{gridData.subTitle}</h2>
                <h1 className=' text-[30px] font-bold leading-[35px] mt-[5px]'>{gridData.title}</h1>
                <p className=' text-[16px] text-gray-700 mt-[20px]'>{gridData.desc}</p>
                <button className='text-white hover:text-black bg-[#111111] hover:bg-white transition-all duration-500 border-2 border-black font-bold px-[20px] py-[12px] mt-[20px] mr-[20px]'>{gridData.btn1}</button><br className='sm:hidden' />
                <button className='text-white hover:text-black bg-[#111111] hover:bg-white transition-all duration-500 border-2 border-black font-bold px-[20px] py-[12px] mt-[20px] '>{gridData.btn2}</button>
            </div>
        </div>
    )
}
