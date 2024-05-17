import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
const iconVarients = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10], 
        transition:
        {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})
const Technologies = () => {
return <div className="border-b border-neutral-800 pb-24">
    <motion.h2
    whileInView={{opacity: 1, x: 0}}
    initial={{opacity: 0, x: -100}}
    transition={{duration: 1.4}}
    className="my-20 text-center text-4xl">Techonologies</motion.h2>
    <motion.div
    whileInView={{opacity: 1, x: 0}}
    initial={{opacity: 0, x: -100}}
    transition={{duration: 1.5}}
    className="flex flex-wrap items-center justify-center gap-4">
    <motion.div
    variants={iconVarients(2.5)}
    initial= "initial"
    animate= "animate"
    className="rounded-2xl border-4 border-neutral-800 p-3">
            <RiReactjsLine className="text-7xl text-cyan-400"></RiReactjsLine>
        </motion.div>
        <motion.div
        variants={iconVarients(3)}
        initial= "initial"
        animate= "animate"
         className="rounded-2xl border-4 border-neutral-800 p-3">
            <TbBrandNextjs className="text-7xl text-white-400"></TbBrandNextjs>
        </motion.div>

        <motion.div
        variants={iconVarients(5)}
        initial= "initial"
        animate= "animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
            <SiMongodb className="text-7xl text-green-500"></SiMongodb>
        </motion.div>

        <motion.div
        variants={iconVarients(2)}
    initial= "initial"
    animate= "animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
            <FaNodeJs className="text-7xl text-green-500"></FaNodeJs>
        </motion.div>

        <motion.div
        variants={iconVarients(6)}
    initial= "initial"
    animate= "animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
            <SiTailwindcss className="text-7xl text-sky-300"></SiTailwindcss>
        </motion.div>
        <motion.div
        variants={iconVarients(3)}
    initial= "initial"
    animate= "animate"
        className="rounded-2xl border-4 border-neutral-800 p-3">
            <SiFirebase className="text-7xl text-orange-500"></SiFirebase>
        </motion.div>

    </motion.div>
</div>
};

export default Technologies