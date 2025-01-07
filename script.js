let totalAppointments = 0; // Initialize the appointment counter

document.getElementById("appointmentForm").addEventListener("submit", function (e) 
{
    e.preventDefault();

    // Get form values
    const patientName = document.getElementById("patientName").value.trim();
    const doctorName = document.getElementById("doctorName").value.trim();
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const phone = document.getElementById("phone").value.trim();

    // Validate form fields
    if (!patientName || !doctorName || !date || !time || !phone) {
        alert("Please fill out all fields.");
        return;
    }

    // Add a new row to the appointment table
    const tableBody = document.getElementById("appointmentTable").querySelector("tbody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${patientName}</td>
        <td>${doctorName}</td>
        <td>${date}</td>
        <td>${time}</td>
        <td>${phone}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    tableBody.appendChild(row);

    // Increment the total appointment counter
    totalAppointments++;
    updateTotalAppointments();

    // Send a message to the patient
    sendMessage(phone, patientName, doctorName, date, time);

    // Reset the form fields
    document.getElementById("appointmentForm").reset();
});

// Event delegation for handling delete button clicks
document.getElementById("appointmentTable").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        // Remove the corresponding row
        e.target.closest("tr").remove();

        // Decrement the total appointment counter
        totalAppointments--;
        updateTotalAppointments();
    }
});

// Update the total appointments counter
function updateTotalAppointments() {
    document.getElementById("totalAppointments").textContent = totalAppointments;
}

// Function to send a message to the patient
function sendMessage(phone, patientName, doctorName, date, time) {
    // Replace this with actual integration with an SMS API (e.g., Twilio)
    console.log(
        `Sending message to ${phone}: Hello ${patientName}, your appointment with Dr. ${doctorName} is confirmed for ${date} at ${time}.`
    );

    // Simulated success message (for now)
    alert(
        `Message sent to ${phone}: Hello ${patientName}, your appointment with Dr. ${doctorName} is confirmed for ${date} at ${time}.`
    );
}