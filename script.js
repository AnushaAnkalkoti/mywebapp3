$(document).ready(function() {
    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();
        const address = $('#address').val();

        // Display the result
        $('#result').html(`
            <h2>Registration Successful!</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
        `);

        // Reset the form
        $('#registrationForm')[0].reset();
    });
});
