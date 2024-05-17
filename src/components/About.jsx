import { motion } from "framer-motion";
import aboutimage from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return <div className="border-b border-neutral-900 pb-4">
    <h1 className="my-20 text-center text-5xl font-semibold">About
    <span className="text-neutral-500"> Me</span>
    </h1>
    <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}}
        className="w-full lg:w-1/2 lg:p-8">
            <img className="rounded-2xl" src={aboutimage} alt="about" />
        </motion.div>
        <div className="w-full lg:w-1/2">
            <motion.div
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{duration: 0.5}}
            className="flex justify-center lg:justify-start">
                <p className="my-2 max-w-xl py-6 leading-relaxed lg:leading-relaxed font-Inter">{ABOUT_TEXT}</p>
            </motion.div>
        </div>
    </div>
  </div>
}

export default About