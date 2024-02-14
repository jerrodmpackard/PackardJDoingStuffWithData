let injectHere = document.getElementById('injectHere');
let sortByIDBtn = document.getElementById('sortByIDBtn');
let sortByFirstNameBtn = document.getElementById('sortByFirstNameBtn');
let sortByLastNameBtn = document.getElementById('sortByLastNameBtn');
let sortByHeightBtn = document.getElementById('sortByHeightBtn');
let sortByAgeBtn = document.getElementById('sortByAgeBtn');


const getData = async () => {
    const promise = await fetch('../data/data.json');
    const data = await promise.json();
    // console.log(data.People);
    return data.People;
}

// We need to use element creation to generate a table. We need to first create the cells and then append them to the rows and append the rows to the table? We also need to create row headers and append those to the table
// ID   First Name  Last Name   Email   Height  Age

const displayNames = async () => {
    let people = await getData();

    injectHere.textContent = '';

    let table = document.createElement('table');
    table.className = 'w-full';

    let tableHeaders = document.createElement('tr');

    let idHeader = document.createElement('th');
    idHeader.textContent = 'ID';

    let firstNameHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';

    let lastNameHeader = document.createElement('th');
    lastNameHeader.textContent = 'Last Name';

    let emailHeader = document.createElement('th');
    emailHeader.textContent = 'Email';

    let heightHeader = document.createElement('th');
    heightHeader.textContent = 'Height';

    let ageHeader = document.createElement('th');
    ageHeader.textContent = 'Age';

    injectHere.append(table);
    table.append(tableHeaders);
    tableHeaders.append(idHeader);
    tableHeaders.append(firstNameHeader);
    tableHeaders.append(lastNameHeader);
    tableHeaders.append(emailHeader);
    tableHeaders.append(heightHeader);
    tableHeaders.append(ageHeader);

    people.map(person => {

        let row = document.createElement('tr');

        let personID = document.createElement('td');
        personID.textContent = person.Id;
        personID.className = 'text-xl p-5';

        let personFirstName = document.createElement('td');
        personFirstName.textContent = person.FirstName;
        personFirstName.className = 'text-xl ';

        let personLastName = document.createElement('td');
        personLastName.textContent = person.LastName;
        personLastName.className = 'text-xl ';

        let personEmail = document.createElement('td');
        personEmail.textContent = person.Email;
        personEmail.className = 'text-xl ';

        let personHeight = document.createElement('td');
        personHeight.textContent = person.Height;
        personHeight.className = 'text-xl ';

        let personAge = document.createElement('td');
        personAge.textContent = person.Age;
        personAge.className = 'text-xl p-3';

        table.append(row);
        row.append(personID);
        row.append(personFirstName);
        row.append(personLastName);
        row.append(personEmail);
        row.append(personHeight);
        row.append(personAge);
        
    });

}

displayNames();

sortByIDBtn.addEventListener('click', async () => {
    let people = await getData();

    injectHere.textContent = '';

    let table = document.createElement('table');
    table.className = 'w-full';

    let tableHeaders = document.createElement('tr');

    let idHeader = document.createElement('th');
    idHeader.textContent = 'ID';

    let firstNameHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';

    let lastNameHeader = document.createElement('th');
    lastNameHeader.textContent = 'Last Name';

    let emailHeader = document.createElement('th');
    emailHeader.textContent = 'Email';

    let heightHeader = document.createElement('th');
    heightHeader.textContent = 'Height';

    let ageHeader = document.createElement('th');
    ageHeader.textContent = 'Age';

    injectHere.append(table);
    table.append(tableHeaders);
    tableHeaders.append(idHeader);
    tableHeaders.append(firstNameHeader);
    tableHeaders.append(lastNameHeader);
    tableHeaders.append(emailHeader);
    tableHeaders.append(heightHeader);
    tableHeaders.append(ageHeader);

    people.map(person => {

        let row = document.createElement('tr');

        let personID = document.createElement('td');
        personID.textContent = person.Id;
        personID.className = 'text-xl p-5';

        let personFirstName = document.createElement('td');
        personFirstName.textContent = person.FirstName;
        personFirstName.className = 'text-xl ';

        let personLastName = document.createElement('td');
        personLastName.textContent = person.LastName;
        personLastName.className = 'text-xl ';

        let personEmail = document.createElement('td');
        personEmail.textContent = person.Email;
        personEmail.className = 'text-xl ';

        let personHeight = document.createElement('td');
        personHeight.textContent = person.Height;
        personHeight.className = 'text-xl ';

        let personAge = document.createElement('td');
        personAge.textContent = person.Age;
        personAge.className = 'text-xl p-3';

        table.append(row);
        row.append(personID);
        row.append(personFirstName);
        row.append(personLastName);
        row.append(personEmail);
        row.append(personHeight);
        row.append(personAge);
    });

});

sortByFirstNameBtn.addEventListener('click', async () => {
    const people = await getData();

    people.sort(function(a, b) {
        if(a.FirstName < b.FirstName) {
            return -1;
        } 
        if(a.FirstName > b.FirstName) {
            return 1;
        }
        return 0;
    });

    injectHere.textContent = '';

    let table = document.createElement('table');
    table.className = 'w-full';

    let tableHeaders = document.createElement('tr');

    let idHeader = document.createElement('th');
    idHeader.textContent = 'ID';

    let firstNameHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';

    let lastNameHeader = document.createElement('th');
    lastNameHeader.textContent = 'Last Name';

    let emailHeader = document.createElement('th');
    emailHeader.textContent = 'Email';

    let heightHeader = document.createElement('th');
    heightHeader.textContent = 'Height';

    let ageHeader = document.createElement('th');
    ageHeader.textContent = 'Age';

    injectHere.append(table);
    table.append(tableHeaders);
    tableHeaders.append(idHeader);
    tableHeaders.append(firstNameHeader);
    tableHeaders.append(lastNameHeader);
    tableHeaders.append(emailHeader);
    tableHeaders.append(heightHeader);
    tableHeaders.append(ageHeader);

    people.map(person => {

        let row = document.createElement('tr');

        let personID = document.createElement('td');
        personID.textContent = person.Id;
        personID.className = 'text-xl p-5';

        let personFirstName = document.createElement('td');
        personFirstName.textContent = person.FirstName;
        personFirstName.className = 'text-xl ';

        let personLastName = document.createElement('td');
        personLastName.textContent = person.LastName;
        personLastName.className = 'text-xl ';

        let personEmail = document.createElement('td');
        personEmail.textContent = person.Email;
        personEmail.className = 'text-xl ';

        let personHeight = document.createElement('td');
        personHeight.textContent = person.Height;
        personHeight.className = 'text-xl ';

        let personAge = document.createElement('td');
        personAge.textContent = person.Age;
        personAge.className = 'text-xl p-3';

        table.append(row);
        row.append(personID);
        row.append(personFirstName);
        row.append(personLastName);
        row.append(personEmail);
        row.append(personHeight);
        row.append(personAge);
    });

});

sortByLastNameBtn.addEventListener('click', async () => {
    const people = await getData();

    people.sort(function(a, b) {
        if(a.LastName < b.LastName) {
            return -1;
        } 
        if(a.LastName > b.LastName) {
            return 1;
        }
        return 0;
    });

    injectHere.textContent = '';

    let table = document.createElement('table');
    table.className = 'w-full';

    let tableHeaders = document.createElement('tr');

    let idHeader = document.createElement('th');
    idHeader.textContent = 'ID';

    let firstNameHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';

    let lastNameHeader = document.createElement('th');
    lastNameHeader.textContent = 'Last Name';

    let emailHeader = document.createElement('th');
    emailHeader.textContent = 'Email';

    let heightHeader = document.createElement('th');
    heightHeader.textContent = 'Height';

    let ageHeader = document.createElement('th');
    ageHeader.textContent = 'Age';

    injectHere.append(table);
    table.append(tableHeaders);
    tableHeaders.append(idHeader);
    tableHeaders.append(firstNameHeader);
    tableHeaders.append(lastNameHeader);
    tableHeaders.append(emailHeader);
    tableHeaders.append(heightHeader);
    tableHeaders.append(ageHeader);

    people.map(person => {

        let row = document.createElement('tr');

        let personID = document.createElement('td');
        personID.textContent = person.Id;
        personID.className = 'text-xl p-5';

        let personFirstName = document.createElement('td');
        personFirstName.textContent = person.FirstName;
        personFirstName.className = 'text-xl ';

        let personLastName = document.createElement('td');
        personLastName.textContent = person.LastName;
        personLastName.className = 'text-xl ';

        let personEmail = document.createElement('td');
        personEmail.textContent = person.Email;
        personEmail.className = 'text-xl ';

        let personHeight = document.createElement('td');
        personHeight.textContent = person.Height;
        personHeight.className = 'text-xl ';

        let personAge = document.createElement('td');
        personAge.textContent = person.Age;
        personAge.className = 'text-xl p-3';

        table.append(row);
        row.append(personID);
        row.append(personFirstName);
        row.append(personLastName);
        row.append(personEmail);
        row.append(personHeight);
        row.append(personAge);
    });

});

sortByHeightBtn.addEventListener('click', async () => {
    const people = await getData();

    people.sort(function(a, b) {
        if(a.Height < b.Height) {
            return -1;
        } 
        if(a.Height > b.Height) {
            return 1;
        }
        return 0;
    });

    injectHere.textContent = '';

    let table = document.createElement('table');
    table.className = 'w-full';

    let tableHeaders = document.createElement('tr');

    let idHeader = document.createElement('th');
    idHeader.textContent = 'ID';

    let firstNameHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';

    let lastNameHeader = document.createElement('th');
    lastNameHeader.textContent = 'Last Name';

    let emailHeader = document.createElement('th');
    emailHeader.textContent = 'Email';

    let heightHeader = document.createElement('th');
    heightHeader.textContent = 'Height';

    let ageHeader = document.createElement('th');
    ageHeader.textContent = 'Age';

    injectHere.append(table);
    table.append(tableHeaders);
    tableHeaders.append(idHeader);
    tableHeaders.append(firstNameHeader);
    tableHeaders.append(lastNameHeader);
    tableHeaders.append(emailHeader);
    tableHeaders.append(heightHeader);
    tableHeaders.append(ageHeader);

    people.map(person => {

        let row = document.createElement('tr');

        let personID = document.createElement('td');
        personID.textContent = person.Id;
        personID.className = 'text-xl p-5';

        let personFirstName = document.createElement('td');
        personFirstName.textContent = person.FirstName;
        personFirstName.className = 'text-xl ';

        let personLastName = document.createElement('td');
        personLastName.textContent = person.LastName;
        personLastName.className = 'text-xl ';

        let personEmail = document.createElement('td');
        personEmail.textContent = person.Email;
        personEmail.className = 'text-xl ';

        let personHeight = document.createElement('td');
        personHeight.textContent = person.Height;
        personHeight.className = 'text-xl ';

        let personAge = document.createElement('td');
        personAge.textContent = person.Age;
        personAge.className = 'text-xl p-3';

        table.append(row);
        row.append(personID);
        row.append(personFirstName);
        row.append(personLastName);
        row.append(personEmail);
        row.append(personHeight);
        row.append(personAge);
    });

});

sortByAgeBtn.addEventListener('click', async () => {
    const people = await getData();

    people.sort(function(a, b) {
        if(a.Age < b.Age) {
            return -1;
        } 
        if(a.Age > b.Age) {
            return 1;
        }
        return 0;
    });

    injectHere.textContent = '';

    let table = document.createElement('table');
    table.className = 'w-full';

    let tableHeaders = document.createElement('tr');

    let idHeader = document.createElement('th');
    idHeader.textContent = 'ID';

    let firstNameHeader = document.createElement('th');
    firstNameHeader.textContent = 'First Name';

    let lastNameHeader = document.createElement('th');
    lastNameHeader.textContent = 'Last Name';

    let emailHeader = document.createElement('th');
    emailHeader.textContent = 'Email';

    let heightHeader = document.createElement('th');
    heightHeader.textContent = 'Height';

    let ageHeader = document.createElement('th');
    ageHeader.textContent = 'Age';

    injectHere.append(table);
    table.append(tableHeaders);
    tableHeaders.append(idHeader);
    tableHeaders.append(firstNameHeader);
    tableHeaders.append(lastNameHeader);
    tableHeaders.append(emailHeader);
    tableHeaders.append(heightHeader);
    tableHeaders.append(ageHeader);

    people.map(person => {

        let row = document.createElement('tr');

        let personID = document.createElement('td');
        personID.textContent = person.Id;
        personID.className = 'text-xl p-5';

        let personFirstName = document.createElement('td');
        personFirstName.textContent = person.FirstName;
        personFirstName.className = 'text-xl ';

        let personLastName = document.createElement('td');
        personLastName.textContent = person.LastName;
        personLastName.className = 'text-xl ';

        let personEmail = document.createElement('td');
        personEmail.textContent = person.Email;
        personEmail.className = 'text-xl ';

        let personHeight = document.createElement('td');
        personHeight.textContent = person.Height;
        personHeight.className = 'text-xl ';

        let personAge = document.createElement('td');
        personAge.textContent = person.Age;
        personAge.className = 'text-xl p-3';

        table.append(row);
        row.append(personID);
        row.append(personFirstName);
        row.append(personLastName);
        row.append(personEmail);
        row.append(personHeight);
        row.append(personAge);
    });

});