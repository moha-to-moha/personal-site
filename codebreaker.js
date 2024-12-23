document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('codeForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var code = document.getElementById('codeInput').value;
        if (code == "@yeye102405181923") {
            window.location.href = 'admin.html';
        }
    });
});
