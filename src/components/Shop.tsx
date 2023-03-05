import '../index.css'

interface sec {
    subTitle: string,
    title: string,
    desc: string,
    img1:string,
    img2:string,
    img3:string,
    img4:string,
    img5:string,
}

window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++ ){
       var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
reveal()

export default function Shop(shop:sec) {
    return (

        <div className=' w-[80%] flex justify-between mb-[350px] sm:mb-[0px] m-auto sm:flex-row flex-col-reverse h-[15cm]'>
            <div className='flex relative lg:w-[15cm]'>
                <img src={shop.img1} alt="" className='absolute top-[30px] sm:top-[50px] left-[80px] sm:left-[140px] z-10 shadow-2xl w-[140px] sm:w-[280px]' />
                <img src={shop.img2} alt="" className='absolute top-[0px] sm:top-[10px] left-[10px] sm:left-[20px] w-[90px] sm:w-[180px] reveal' />
                <img src={shop.img3} alt="" className='absolute top-[140px] sm:top-[240px] left-[30px] sm:left-[40px] w-[100px] sm:w-[200px] reveal' />
                <img src={shop.img4} alt="" className='absolute top-[40px] sm:top-[90px] left-[210px] sm:left-[400px] w-[50px] sm:w-[100px] reveal' />
                <img src={shop.img5} alt="" className='absolute top-[140px] sm:top-[260px] left-[200px] sm:left-[400px] w-[80px] sm:w-[160px] reveal' />
            </div>
            <div className=' sm:w-1/3 my-auto '>
                <h2 className=' text-[17px] tracking-widest text-gray-700'>{shop.subTitle}</h2>
                <h1 className=' text-[30px] font-bold leading-[35px] mt-[5px]'>{shop.title}</h1>
                <p className=' text-[16px] text-gray-700 mt-[20px]'>{shop.desc}</p>
                <button className='text-white hover:text-black bg-[#111111] hover:bg-white transition-all duration-500 border-2 border-black font-bold px-[20px] py-[12px] mt-[20px]'>Shop Tops</button><br className='sm:hidden' />
                <button className='text-white hover:text-black bg-[#111111] hover:bg-white transition-all duration-500 border-2 border-black font-bold px-[20px] py-[12px] mt-[20px] sm:ml-[20px]'>Shop All Womens</button>
            </div>
        </div>
    )
}
