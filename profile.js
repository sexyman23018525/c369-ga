window.addEventListener('load', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const customerId = urlParams.get('id');

    const customers = [
        { id: 1, name: 'John Doe', phone: '98367543', birthdate: 'January 1, 1990', ic: '12345678', picture: '\Users\nistc\Downloads\john.jpg' },
        { id: 2, name: 'Jane Smith', phone: '98765432', birthdate: 'February 2, 1992', ic: '87654321', picture: 'path/to/jane-picture.png' },
        { id: 3, name: 'Alice Johnson', phone: '96743212', birthdate: 'March 3, 1988', ic: '11223344', picture: 'path/to/alice-picture.png' },
    ];

    const customer = customers.find(c => c.id == customerId);

    if (customer) {
        document.getElementById('profile-picture').src = customer.picture;
        document.getElementById('profile-name').textContent = `Name: ${customer.name}`;
        document.getElementById('profile-birthdate').textContent = `Birthdate: ${customer.birthdate}`;
        document.getElementById('profile-ic').textContent = `IC Number: ${customer.ic}`;
    } else {
        document.querySelector('.profile-box').innerHTML = '<p>Customer not found.</p>';
    }
});
