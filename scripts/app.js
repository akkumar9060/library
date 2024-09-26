// Handling Login
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    if (userId === 'admin' && password === 'admin') {
        window.location.href = 'admin-home.html';  // Admin Dashboard
    } else if (userId === 'user' && password === 'user') {
        window.location.href = 'user-home.html';  // User Dashboard
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid credentials. Try again.';
    }
};

// Book Issue Logic
document.getElementById('issueBookForm').onsubmit = function(e) {
    e.preventDefault();
    const issueDate = new Date(document.getElementById('issueDate').value);
    const returnDate = new Date(issueDate);
    returnDate.setDate(issueDate.getDate() + 15);  // Set return date 15 days later
    document.getElementById('returnDate').value = returnDate.toISOString().slice(0, 10);
};

// Book Return Logic
document.getElementById('returnBookForm').onsubmit = function(e) {
    const serialNo = document.getElementById('serialNo').value;
    if (!serialNo) {
        alert('Please enter the serial number.');
    } else {
        alert('Book returned successfully.');
    }
};

// Fine Payment Logic
document.getElementById('payFineForm').onsubmit = function(e) {
    const finePaid = document.getElementById('finePaid').checked;
    if (!finePaid) {
        alert('Please pay the fine to complete the transaction.');
    } else {
        alert('Fine paid successfully.');
    }
};