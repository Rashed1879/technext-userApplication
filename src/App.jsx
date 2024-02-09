import { useEffect, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import UserCard from './components/UserCard/UserCard';
import HeadLine from './components/HeadLine/HeadLine';

function App() {
	const [userData, setUserData] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		fetch('https://dummyjson.com/users')
			.then((res) => res.json())
			.then((data) => setUserData(data.users));
	}, []);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const filteredUsers = userData.filter(
		(user) =>
			user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<div className="mt-5 container mx-auto px-5">
				<HeadLine title="User Application" />
				{/* for search bar and filter options */}
				<div className="my-10">
					<div className="relative flex items-center h-12 w-96 rounded-lg focus-within:shadow-lg overflow-hidden border border-gray-700">
						<div className="flex justify-center items-center text-2xl w-12 h-full text-gray-400">
							<GoSearch />
						</div>
						<input
							className="peer h-full w-full outline-none text-lg text-gray-700 px-2"
							type="text"
							id="search"
							placeholder="Search username.."
							onChange={handleSearch}
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredUsers.map((user) => (
						<UserCard key={user.id} user={user} />
					))}
				</div>
			</div>
		</>
	);
}

export default App;
