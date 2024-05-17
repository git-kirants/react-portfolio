import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/kiran.png";
import { motion, transform } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},

    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-36 flex flex-wrap ">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
                <motion.h2 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                 className="pb-2 text-1xl font-semibold tracking-tight lg:mt-36  lg:text-3xl lg:pl-4 ">Hello👋,   I'm</motion.h2>
                <motion.h1 
                variants={container(0.2)}
                initial="hidden"
                animate="visible"
                className="pb-3 text-6xl font-semibold tracking-tight lg:text-8xl lg:pl-4">Kiran T S</motion.h1>
                <motion.span 
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r lg:pl-4 text-2xl  lg:text-3xl lg:pl-4 from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-center tracking-tight text-transparent">
                    Full Stack Developer
                </motion.span>
                <motion.p 
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl pl-4 lg:pl-4 lg:leading-relaxed leading-relaxed py-6 font-normal font-roboto text-neutral-300">{HERO_CONTENT}</motion.p>
            </div>
            <div className="w-full lg:w-1/2 lg:pd-8 flex justify-center scale-75">
                <motion.img
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, delay: 1.2}}
                 src={profilepic} alt="Kiran T S" />
            </div>
        </div>
    );
};

export default Hero;
