function createItinerary() {
    // Get user input values
    const destination = document.getElementById('destination').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
    const activities = document.getElementById('activities').value;

    // Validate input to make sure fields are not empty
    if (!destination || !startDate || !endDate || !activities) {
        alert('Please fill out all fields.');
        return;
    }

    // Create a new itinerary entry
    const itineraryHTML = `
        <div class="itinerary-item">
            <h3>${destination}</h3>
            <p><strong>Start Date:</strong> ${startDate}</p>
            <p><strong>End Date:</strong> ${endDate}</p>
            <p><strong>Activities:</strong></p>
            <p>${activities}</p>
        </div>
        <hr>
    `;

    // Append the new itinerary to the "guides-list" div
    document.getElementById('guides-list').innerHTML += itineraryHTML;

    // Clear the form fields
    document.getElementById('destination').value = '';
    document.getElementById('start-date').value = '';
    document.getElementById('end-date').value = '';
    document.getElementById('activities').value = '';
}