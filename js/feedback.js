document.getElementById('toggleFeedbackBtn').addEventListener('click', function () {
    const feedbackFormContainer = document.getElementById('feedbackFormContainer');
    feedbackFormContainer.classList.toggle('hidden');
});

document.getElementById('myFeedbacksBtn').addEventListener('click', function () {
    const feedbackList = document.getElementById('feedbackList');
    feedbackList.innerHTML = ''; // Clear existing feedback items

    fetch('/fetch_user_feedback/') // Replace with your actual API endpoint
        .then(response => response.json())
        .then(data => {
            if (data.feedbacks.length === 0) {
                feedbackList.innerHTML = '<p>No feedback submitted yet.</p>';
            } else {
                data.feedbacks.forEach(feedback => {
                    const feedbackItem = document.createElement('div');
                    feedbackItem.classList.add('feedback-item');
                    feedbackItem.setAttribute('data-email', feedback.email);

                    feedbackItem.innerHTML = `
                        <h3>${feedback.username}</h3>
                        <p><strong>Email:</strong> ${feedback.email}</p>
                        <p>${feedback.feedback_text}</p>
                        <p><em>Submitted on: ${feedback.submitted_at}</em></p>
                    `;
                    feedbackList.insertBefore(feedbackItem, feedbackList.firstChild);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching feedback:', error);
            feedbackList.innerHTML = '<p>Error fetching feedback. Please try again later.</p>';
        });
});

// Handle form submission
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const feedbackData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        feedback_text: document.getElementById('feedback').value
    };

    fetch('/submit_feedback/', { // Replace with your actual API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedbackData)
    })
        .then(response => {
            if (response.ok) {
                alert('Feedback submitted successfully!');
                this.reset(); // Reset form fields
                document.getElementById('feedbackFormContainer').classList.add('hidden'); // Hide the form
            } else {
                alert('Failed to submit feedback. Please try again.');
            }
        })
        .catch(error => console.error('Error submitting feedback:', error));
});
