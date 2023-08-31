
const searchBar = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const userList = document.getElementById('userList');

// Sample user data
const users = [
  {
    _id: '1',
    firstName: 'Marina',
    lastName: 'Mary',
    email: 'marina@kahvana.com',
    phoneNumber: '202-555-0105'
  },
  {
    _id: '2',
    firstName: 'Delores',
    lastName: 'Mind',
    email: 'delores@kahvana.com',
    phoneNumber: '202-555-0111'
  },
  {
    _id: '3',
    firstName: 'Lorie',
    lastName: 'Enak',
    email: 'lorie@kahvana.com"',
    phoneNumber: '202-555-0162'
  },

  // ... Other user entries ...
];

searchButton.addEventListener('click', () => {
  const query = searchBar.value.trim();
  const filteredUsers = users.filter(user => 
    user.firstName.includes(query) ||
    user.lastName.includes(query) ||
    user.email.includes(query) ||
    user.phoneNumber.includes(query)
  );

  displayUsers(filteredUsers);
});

function displayUsers(usersArray) {
  userList.innerHTML = ''; // Clear previous results

  usersArray.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = `${user.firstName} ${user.lastName} - ${user.email}`;
    userList.appendChild(listItem);
  });
}
