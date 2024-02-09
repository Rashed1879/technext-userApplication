import { useLoaderData } from 'react-router-dom';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';

const UserDetails = () => {
	const userData = useLoaderData();
	const { image, firstName, lastName, email, address, company } = userData;
	return (
		<div className="mt-5 container mx-auto px-5">
			<h2 className="relative text-3xl md:text-5xl text-[#040218] text-center font-bold mb-10">
				User Details
				<span className="absolute inset-x-0 -bottom-3 h-[2px] bg-gradient-to-r from-[#040218]/0 via-[#040218]/70 to-[#040218]/0"></span>
			</h2>

			<div
				className="p-6 shadow-lg shadow-current hover:shadow-2xl rounded-xl bg-gradient-to-b 
              from-[#000000] to-[#040218] text-gray-300"
			>
				<div className="rounded-xl py-5 flex items-center gap-5">
					<img
						src={image}
						alt="user avatar image"
						className="w-32 h-32 rounded-full bg-gray-300 aspect-square mb-5"
					/>

					<h2 className="text-xl space-x-2 font-semibold sm:text-2xl text-center">
						<span>{firstName}</span>
						<span>{lastName}</span>
					</h2>
				</div>
				<div className="space-y-4">
					<div className="my-2 space-y-5 text-white pl-5">
						<p className="flex items-center space-x-2">
							<MdOutlineEmail className="text-3xl" />{' '}
							<span>{email}</span>
						</p>
						<p className="flex items-start space-x-2 whitespace-pre-wrap">
							<MdOutlineLocationOn className="text-3xl" />{' '}
							<span>
								{address.address}, {address.city},{' '}
								{address.state}
							</span>
						</p>
						<p className="flex items-center space-x-2 whitespace-pre-wrap">
							<HiOutlineBuildingOffice2 className="text-3xl" />{' '}
							<span>{company.name}</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;
