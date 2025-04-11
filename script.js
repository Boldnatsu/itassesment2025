function validateForm() {
    let valid = true;

    document.getElementById('error-name').innerText = '';
    document.getElementById('error-email').innerText = '';
    document.getElementById('error-subject').innerText = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject= document.getElementById('subject').value.trim();


    if (name === '') {
    document.getElementById('error-name').innerText = 'Name is required.';
    valid = false;
    }


    if (email === '') {
    document.getElementById('error-email').innerText = 'Email is required.';
    valid = false;
    } else if (!/^\S+@\S+.\S+$/.test(email)) {
    document.getElementById('error-email').innerText = 'Email is invalid.';
    valid = false;
    }


    if (subject=== '') {
    document.getElementById('error-subject').innerText = 'Subject is Required.';
    valid = false;
    } 

    return valid;
}