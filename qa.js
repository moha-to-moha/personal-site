document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const question = document.getElementById('question').value;

    fetch('https://moha-to-moha.github.io/personal-site/accessqa.html', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: question })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('your question has been sent!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('there was an error sending your question. sorry!');
    });
});
