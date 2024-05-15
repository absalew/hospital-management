document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const message = document.getElementById('message');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if(!username ||!password) {
            message.textContent = 'Please provide both a username and a password.';
            return;
        }else{
            window.location.href = '/web/about.html'; // Redirect to dashboard page on successful login   
        }

    //     try {
    //         const response = await fetch('http://localhost:3000/login', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ username, password })
    //         });

    //         const data = await response.json();

    //         if (response.ok) {
    //             message.textContent = data.message;
    //             window.location.href = '/web/about.html'; // Redirect to dashboard page on successful login
    //         } else {
    //             message.textContent = data.error;
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         message.textContent = 'An error occurred. Please try again later.';
    //     }
    });
});
