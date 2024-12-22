document.getElementById('questionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const question = document.getElementById('question').value;
    const timestamp = new Date().getTime();
    localStorage.setItem(`question_${timestamp}`, question);

    alert('your question has been sent.');
});
