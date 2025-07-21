function showPopUp() {
    document.getElementById("myForm").style.visibility = "visible";
}

function closePopUp() {
    document.getElementById("myForm").style.visibility = "hidden";
}

function showCaptainAmericaPopup() {
    document.getElementById("captainAmericaPopup").style.visibility = "visible";
}

function closeCaptainAmericaPopup() {
    document.getElementById("captainAmericaPopup").style.visibility = "hidden";
}

function testResults() {
    // Get the values from the input fields
    const title = document.getElementById("titleInp").value;
    const author = document.getElementById("authorInp").value;
    const genre = document.getElementById("genreInp").value;
    const submit = document.getElementById("submitInp").value;

    console.log(`Title: ${title}, Author: ${author}, Genre: ${genre}, Submitted by: ${submit}`);

    // Check for Captain America fun fact
    if (title.toLowerCase() === 'hot' &&
        author.toLowerCase() === 'soldier' &&
        genre.toLowerCase() === 'white man' &&
        submit.toLowerCase() === 'america') {
        
        showCaptainAmericaPopup();
        // Clear the input fields after showing the popup
        document.getElementById("titleInp").value = "";
        document.getElementById("authorInp").value = "";
        document.getElementById("genreInp").value = "";
        document.getElementById("submitInp").value = "";
        closePopUp(); // Close the suggestion form popup
        return; // Stop further execution
    }

    // Validate input fields
    if (!title || !author || !genre || !submit) {
        alert("Please fill in all fields.");
        return;
    }

    // Add values to table
    const table = document.getElementById("booksTable");
    const newRow = table.insertRow(-1);
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${genre}</td>
        <td>${submit}</td>
        <th class="deleteBtn" onclick="deleteRow()">DELETE</th>
    `;

    // Clear the input fields
    document.getElementById("titleInp").value = "";
    document.getElementById("authorInp").value = "";
    document.getElementById("genreInp").value = "";
    document.getElementById("submitInp").value = "";

    closePopUp();
}

function deleteRow() {
    const row = event.target.parentNode;
    const table = document.getElementById("booksTable");
    table.deleteRow(row.rowIndex);
}

function change_color() {
    const checkbox = document.getElementById("Rstatus");
    const bookItem = checkbox.closest(".bookItem");
    if (checkbox.checked) {
        bookItem.style.backgroundColor = "lightgreen";
    } else {
        bookItem.style.backgroundColor = "";
    }
}

function cancel_book() {
    const AbandonnedBook = document.getElementById("AbandonnedStatus");
    const bookItem = AbandonnedBook.closest(".bookItem");
    if (AbandonnedBook.checked) {
        bookItem.style.backgroundColor = "lightcoral";
    } else {
        bookItem.style.backgroundColor = "";
    }
}