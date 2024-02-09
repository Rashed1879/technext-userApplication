import { useEffect, useState } from 'react';
import './App.css';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

function App() {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		fetch('https://dummyjson.com/users')
			.then((res) => res.json())
			.then((data) => setUserData(data.users));
	}, []);

	return (
		<>
			<div className="mt-5 container mx-auto px-5">
				<h2 className="relative text-3xl md:text-5xl text-[#040218] text-center font-bold mb-10">
					User Application
					<span className="absolute inset-x-0 -bottom-3 h-[2px] bg-gradient-to-r from-[#040218]/0 via-[#040218]/70 to-[#040218]/0"></span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{userData.map((user) => (
						<div
							key={user.id}
							className="flex flex-col justify-center p-6 shadow-lg shadow-current hover:shadow-2xl rounded-xl hover:-translate-y-2 bg-gradient-to-b 
              from-[#000000] to-[#040218] text-gray-300 transition-all duration-300 cursor-pointer"
						>
							<div className="rounded-xl py-5">
								<img
									src={user.image}
									alt="user avatar image"
									className="w-24 h-24 mx-auto rounded-full bg-gray-300 aspect-square mb-5"
								/>
								<Link to={`/${user.id}`}>
									<h2 className="text-xl space-x-2 font-semibold sm:text-2xl text-center">
										<span>{user.firstName}</span>
										<span>{user.lastName}</span>
									</h2>
								</Link>
							</div>
							<div className="space-y-4">
								<div className="my-2 space-y-3 text-white">
									<p className="flex items-center space-x-2">
										<MdOutlineEmail className="text-xl" />{' '}
										<span>{user.email}</span>
									</p>
									<p className="flex items-start space-x-2 whitespace-pre-wrap">
										<MdOutlineLocationOn className="text-xl" />{' '}
										<span>
											{user.address.address},{' '}
											{user.address.city},{' '}
											{user.address.state}
										</span>
									</p>
									<p className="flex items-center space-x-2 whitespace-pre-wrap">
										<HiOutlineBuildingOffice2 className="text-xl" />{' '}
										<span>{user.company.name}</span>
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default App;
