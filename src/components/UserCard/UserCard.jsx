/* eslint-disable react/prop-types */
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const UserCard = ({ user }) => {
	const { id, image, firstName, lastName, email, address, company } = user;
	return (
		<>
			<div
				className="flex flex-col justify-center p-6 shadow-lg shadow-current hover:shadow-2xl rounded-xl hover:-translate-y-2 bg-gradient-to-b 
              from-[#000000] to-[#040218] text-gray-300 transition-all duration-300 cursor-pointer"
			>
				<div className="rounded-xl py-5">
					<img
						src={image}
						alt="user avatar image"
						className="w-24 h-24 mx-auto rounded-full bg-gray-300 aspect-square mb-5"
					/>
					<Link to={`/${id}`}>
						<h2 className="text-xl space-x-2 font-semibold sm:text-2xl text-center">
							<span>{firstName}</span>
							<span>{lastName}</span>
						</h2>
					</Link>
				</div>
				<div className="space-y-4">
					<div className="my-2 space-y-3 text-white">
						<p className="flex items-center space-x-2">
							<MdOutlineEmail className="text-xl" />{' '}
							<span>{email}</span>
						</p>
						<p className="flex items-start space-x-2 whitespace-pre-wrap">
							<MdOutlineLocationOn className="text-xl" />{' '}
							<span>
								{address.address}, {address.city},{' '}
								{address.state}
							</span>
						</p>
						<p className="flex items-center space-x-2 whitespace-pre-wrap">
							<HiOutlineBuildingOffice2 className="text-xl" />{' '}
							<span>{company.name}</span>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserCard;
