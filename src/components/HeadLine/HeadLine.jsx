/* eslint-disable react/prop-types */

const HeadLine = ({ title }) => {
	return (
		<h2 className="relative text-3xl md:text-5xl text-[#040218] text-center font-bold mb-10">
			{title}
			<span className="absolute inset-x-0 -bottom-3 h-[2px] bg-gradient-to-r from-[#040218]/0 via-[#040218]/70 to-[#040218]/0"></span>
		</h2>
	);
};

export default HeadLine;
