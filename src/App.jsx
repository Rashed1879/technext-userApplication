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

	// add user

	const handleAddUser = (e) => {
		e.preventDefault();
		const form = e.target;
		const firstName = form.firstName.value;
		const lastName = form.lastName.value;
		const email = form.email.value;
		const address = form.address.value;
		const city = form.city.value;
		const state = form.state.value;
		const companyName = form.companyName.value;
		const image = form.image.value;

		const newUser = {
			firstName,
			lastName,
			email,
			address: {
				address,
				city,
				state,
			},
			company: {
				name: companyName,
			},
			image,
		};

		fetch('https://dummyjson.com/users/add', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newUser),
		})
			.then((res) => res.json())
			.then((data) => {
				setUserData([...filteredUsers, data]);
				alert('Successfully added user!');
			});
	};

	return (
		<>
			<div className="my-5 container mx-auto px-5">
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

				{/* form of add user  */}
				<div className="p-8 rounded border border-gray-700 mt-10">
					<h1 className="font-medium text-3xl">Add User</h1>
					<form onSubmit={handleAddUser}>
						<div className="mt-8 grid lg:grid-cols-2 gap-4">
							<div>
								<label
									htmlFor="firstName"
									className="text-sm text-gray-700 block mb-1 font-medium"
								>
									First Name
								</label>
								<input
									type="text"
									name="firstName"
									id="firstName"
									className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
									placeholder="Enter your first name"
								/>
							</div>
							<div>
								<label
									htmlFor="lastName"
									className="text-sm text-gray-700 block mb-1 font-medium"
								>
									Last Name
								</label>
								<input
									type="text"
									name="lastName"
									id="lastName"
									className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
									placeholder="Enter your last name"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="text-sm text-gray-700 block mb-1 font-medium"
								>
									Email Address
								</label>
								<input
									type="text"
									name="email"
									id="email"
									className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
									placeholder="yourmail@provider.com"
								/>
							</div>

							<div>
								<label
									htmlFor="address"
									className="text-sm text-gray-700 block mb-1 font-medium"
								>
									Street
								</label>
								<input
									type="text"
									name="address"
									id="address"
									className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
									placeholder="Enter Street address"
								/>
							</div>
							<div>
								<label
									htmlFor="city"
									className="text-sm text-gray-700 block mb-1 font-medium"
								>
									City
								</label>
								<input
									type="text"
									name="city"
									id="city"
									className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
									placeholder="Enter City Name"
								/>
							</div>
							<div>
								<label
									htmlFor="state"
									className="text-sm text-gray-700 block mb-1 font-medium"
								>
									State
								</label>
								<input
									type="text"
									name="state"
									id="state"
									className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
									placeholder="Enter State"
								/>
							</div>

							<div>
								<label
									htmlFor="companyName"
									className="text-sm text-gray-700 block mb-1 font-medium"
								>
									Company Name
								</label>
								<input
									type="text"
									name="companyName"
									id="companyName"
									className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
									placeholder="Enter your Company Name"
								/>
							</div>
							<div>
								<label
									htmlFor="image"
									className="text-sm text-gray-700 block mb-1 font-medium"
								>
									Image URL
								</label>
								<input
									type="url"
									name="image"
									id="image"
									className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
									placeholder="Enter your Image URL"
								/>
							</div>
						</div>

						<div className="mt-8">
							<button
								type="submit"
								className="py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-700 active:bg-gray-700 disabled:opacity-50"
							>
								Add User
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default App;
