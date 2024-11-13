function createTable() {
    // Prompt user to input number of rows and columns
    let rows = prompt("Input number of rows");
    let cols = prompt("Input number of columns");

    // Parse the input to integers
    rows = parseInt(rows);
    cols = parseInt(cols);

    // Get the table element by its id
    let table = document.getElementById("myTable");

    // Clear any existing content in the table
    table.innerHTML = "";

    // Create the table rows and columns dynamically
    for (let i = 0; i < rows; i++) {
        // Create a new row
        let row = table.insertRow();

        for (let j = 0; j < cols; j++) {
            // Create a new cell in the row
            let cell = row.insertCell();
            // Set the cell content to "Row-i Column-j"
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}

