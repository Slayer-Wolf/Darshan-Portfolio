import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<motion.div
			variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
			className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<img src={icon} alt={title} className="w-16 h-16 object-contain" />
				<h3 className="text-taupe text-[18px] font-bold text-center">
					{title}
				</h3>
			</div>
		</motion.div>
	);
};

const About = () => {
	return (
		<div className="-mt-[6rem]">
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
			>
				As a skilled web developer with over a year of hands-on experience, I
				have honed my expertise in crafting dynamic and visually engaging
				websites. My portfolio boasts a diverse range of projects, including
				full-stack and front-end development, showcasing my proficiency in both
				back-end functionality and user interface design. With a keen eye for
				detail and a passion for innovation, I thrive on bringing creative
				concepts to life through code. Continuously seeking to expand my
				knowledge and stay abreast of emerging technologies, I am committed to
				delivering high-quality solutions that exceed client expectations. My
				dedication to excellence and my ability to adapt to evolving industry
				trends make me a valuable asset in any web development endeavor.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(About, "about");
