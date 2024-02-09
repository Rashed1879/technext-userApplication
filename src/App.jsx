import { useEffect, useState } from 'react';
import { GoSearch } from 'react-icons/go';
import UserCard from './components/UserCard/UserCard';
import HeadLine from './components/HeadLine/HeadLine';

function App() {
	const [userData, setUserData] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [sortOption, setSortOption] = useState('');

	useEffect(() => {
		fetch('https://dummyjson.com/users')
			.then((res) => res.json())
			.then((data) => setUserData(data.users));
	}, []);

	const handleSearch = (event) => {
		setSearchTerm(event.target.value);
	};

	const handleSort = (event) => {
		setSortOption(event.target.value);
	};

	const sortedUsers = [...userData].sort((a, b) => {
		switch (sortOption) {
			case 'sortByName':
				return a.firstName.localeCompare(b.firstName);
			case 'sortByEmail':
				return a.email.localeCompare(b.email);
			case 'sortByCompanyName':
				return a.company.name.localeCompare(b.company.name);
			default:
				return 0;
		}
	});

	const filteredUsers = sortedUsers.filter(
		(user) =>
			user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			<div className="mt-5 container mx-auto px-5">
				<HeadLine title="User Application" />
				{/* for search bar and filter options */}
				<div className="my-10 flex flex-col md:flex-row justify-between items-center space-y-5 md:space-y-0">
					<div className="relative flex items-center h-12 w-full md:w-64 lg:w-96 rounded-lg focus-within:shadow-lg overflow-hidden border border-gray-700">
						<div className="flex justify-center items-center text-2xl w-12 h-full text-gray-400">
							<GoSearch />
						</div>
						<input
							className="h-full w-full outline-none text-lg text-gray-700 px-2"
							type="text"
							id="search"
							placeholder="Search username.."
							onChange={handleSearch}
						/>
					</div>
					<div className="w-full md:w-64 lg:w-96">
						<select
							id="sortOptions"
							className="border border-gray-700 text-sm text-black rounded-lg focus:border-gray-500 w-full h-12 p-2"
							onChange={handleSort}
							defaultValue=""
						>
							<option disabled value="">
								Sort by
							</option>
							<option value="sortByName">Sort by name</option>
							<option value="sortByEmail">Sort by email</option>
							<option value="sortByCompanyName">
								Sort by Company name
							</option>
						</select>
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
