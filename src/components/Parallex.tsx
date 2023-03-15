import { ParallaxBanner } from 'react-scroll-parallax';

export default function Parallex() {
    return (
        <ParallaxBanner
            layers={[{ image: '/parallex.webp', speed: -25 }]}
            className=" h-[100%] ml:min-h-[650px] min-h-[500px]"
        >
            <div className="absolute ml:inset-0 bottom-0 left-0 bg-white w-auto ml:w-[310px] h-[270px] ml:m-10 m-2 p-10">
                <h1 className=' text-base'>ATHLETE FEATURE</h1>
                <h1 className=' text-3xl font-bold pt-2 '>James Harrison</h1>
                <p className=' text-base pt-2'>We know how important it is to have gear that doesn't let you down when you're pushing your limits. That's why we only use the highest quality fabrics.</p>
            </div>
        </ParallaxBanner>
    )
}
