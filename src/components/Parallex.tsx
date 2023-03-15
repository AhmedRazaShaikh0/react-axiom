import { ParallaxBanner } from 'react-scroll-parallax';
import { parallex } from './Databse'


interface parallexType {
    subTitle: string,
    title: string,
    desc: string,
}

window.addEventListener('scroll', reveal);

function reveal() {
    var top = document.querySelectorAll('.top');

    for (var i = 0; i < top.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = top[i].getBoundingClientRect().top;
        var revealpoint = -150;

        if (revealtop < windowheight - revealpoint) {
            top[i].classList.add('topActive');
        }
        else {
            top[i].classList.remove('topActive');
        }
    }

}

const parallexData: parallexType = parallex;

export default function Parallex() {
    return (
        <ParallaxBanner
            layers={[{ image: '/parallex.webp', speed: -25 }]}
            className=" h-[100%] ml:min-h-[650px] min-h-[500px]"
        >
            <div className='ml:overflow-y-hidden absolute ml:bottom-auto bottom-0 ml:m-6 md:m-12 m-2 h-[19rem] w-[95%] ml:w-[390px]'>
                <div className="top absolute ml:bottom-auto bottom-0 bg-white ml:w-[380px] p-[40px]">
                    <h1 className=' ml:text-lg text-base tracking-wider'>{parallexData.subTitle}</h1>
                    <h1 className=' ml:text-4xl text-3xl font-bold pt-2 '>{parallexData.title}</h1>
                    <p className=' ml:text-lg text-base pt-3'>{parallexData.desc}</p>
                </div>
            </div>
        </ParallaxBanner>
    )
}







// import { useState } from "react";


// export default function Parallex() {
//     const [transform, setTranform] = useState("translate-y-32");

//     window.addEventListener('scroll', () => {
//         if (scrollY >= 120) {
//             setTranform("translate-y-0");
//         } else {
//             setTranform("translate-y-32");
//         }
//     }
//     );

//     return (
//         <div className='w-full h-screen bg-yellow-600 pt-32'>
//             <div className="w-20 overflow-hidden h-32 bg-gray-500 mx-auto ">
//                 <h2 className={`${transform} duration-700`}>This is Navbar</h2>
//             </div>
//         </div>
//     )
// }
