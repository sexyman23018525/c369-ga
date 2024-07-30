const searchForm = document.getElementById('search-form');
const searchResultsDiv = document.getElementById('search-results');

const mockCustomers = [
    {
        id: 1,
        name: 'John Doe',
        birthdate: '1990-01-01',
        icNumber: '12345678',
        picture: '/Users/nistc/Downloads/john.jpg',
        phone: '012-3456789'
    },
    {
        id: 2,
        name: 'Jane Smith',
        birthdate: '1992-02-02',
        icNumber: '90123456',
        picture: 'path/to/jane-smith-picture.png',
        phone: '011-1111111'
    },
    {
        id: 3,
        name: 'Bob Brown',
        birthdate: '1985-03-03',
        icNumber: '45678901',
        picture: 'path/to/bob-brown-picture.png',
        phone: '012-2222222'
    }
];

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name || phone) {
        let foundCustomer = null;
        for (const customer of mockCustomers) {
            if ((name && customer.name.toLowerCase().includes(name.toLowerCase())) ||
                (phone && customer.phone === phone)) {
                foundCustomer = customer;
                break;
            }
        }

        if (foundCustomer) {
            // Redirect to profile page with customer details
            window.location.href = `profile.html?name=${encodeURIComponent(foundCustomer.name)}&birthdate=${encodeURIComponent(foundCustomer.birthdate)}&ic=${encodeURIComponent(foundCustomer.icNumber)}&picture=${encodeURIComponent(foundCustomer.picture)}`;
        } else {
            searchResultsDiv.innerHTML = 'No customer found.';
        }
    } else {
        searchResultsDiv.innerHTML = 'Please enter a name or phone number.';
    }
});



