function sendValentineResponse(event) {
    event.preventDefault();
    
    fetch('http://localhost:3000/send-valentine', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        alert("Yay! Your response has been sent! 💝");
        document.body.style.animation = "celebrate 1s ease";
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Oops! Something went wrong. But I still love you! 💝");
    });
}

function handleLeave(event) {
    event.preventDefault();
    event.returnValue = "Wait! Don't you want to be my Valentine? 💔";
    return event.returnValue;
}
