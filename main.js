


const students = {
    name: "AARAV SHAH",
    rollNo: 1,
    admissionNo: "2016JU05580",
    academicYear: "2026-2027",
    class: "VIII A",
    houseCategory: "—",

    performance: {
        terminal: {
            rank: 1,
            classAverage: 36.38,
            attendance: 98
        },

        final: {
            rank: 1,
            classAverage: 79.4,
            attendance: 98
        }
    },

    subjects: [
        {
            name: "Science",
            term1: 64,
            average1: 37,
            term2: "NA",
            average2: ""
        },
        {
            name: "English",
            term1: 50,
            average1: 38,
            term2: "NA",
            average2: ""
        },
        {
            name: "Hindi",
            term1: 72,
            average1: 37,
            term2: "NA",
            average2: ""
        },
        {
            name: "Mathematics",
            term1: 93,
            average1: 48,
            term2: 95,
            average2: 95
        },
        {
            name: "Computers",
            term1: 39,
            average1: 24,
            term2: 64,
            average2: 64
        }
    ]
};




document.getElementById("studentName").textContent = students.name;

document.getElementById("rollNo").textContent = students.rollNo;

document.getElementById("admissionNo").textContent = students.admissionNo;

document.getElementById("studentClass").textContent = students.class;

document.getElementById("academicYear").textContent = students.academicYear;

document.getElementById("houseCategory").textContent = students.houseCategory;




let table = document.getElementById("marksTable");

students.subjects.forEach(function(subject) {

    let row = document.createElement("tr");

    row.innerHTML = `
        <td><b>${subject.name}</b></td>
        <td>${subject.term1}</td>
        <td>${subject.average1}</td>
        <td>${subject.term2}</td>
        <td>${subject.average2}</td>
    `;

    table.appendChild(row);

});



let term1Total = 0;

students.subjects.forEach(function(subject) {

    term1Total = term1Total + subject.term1;

});

console.log("Terminal Total:", term1Total);



let term2Total = 0;
let finalSubjects = 0;

students.subjects.forEach(function(subject) {

    if (typeof subject.term2 === "number") {

        term2Total = term2Total + subject.term2;

        finalSubjects++;

    }

});

console.log("Final Total:", term2Total);




// Terminal Percentage

let maximumMarks1 = students.subjects.length * 100;

let percentage1 = (term1Total / maximumMarks1) * 100;




let maximumMarks2 = finalSubjects * 100;

let percentage2 = (term2Total / maximumMarks2) * 100;


console.log("Terminal Percentage:", Math.round(percentage1));

console.log("Final Percentage:", Math.floor(percentage2));




function calculateDivision(percentage) {

    if (percentage >= 89.5) {

        return "Distinction";

    }
    else if (percentage >= 74.5) {

        return "1st Division";

    }
    else if (percentage >= 59.5) {

        return "2nd Division";

    }
    else if (percentage >= 39.5) {

        return "3rd Division";

    }
    else {

        return "Fail";

    }

}




let term1Division = calculateDivision(percentage1);

let term2Division = calculateDivision(percentage2);


console.log("Terminal Division:", term1Division);

console.log("Final Division:", term2Division);




// Total Row

let totalRow = document.createElement("tr");

totalRow.innerHTML = `
    <td><b>TOTAL</b></td>
    <td><b>${term1Total}</b></td>
    <td></td>
    <td><b>${term2Total}</b></td>
    <td></td>
`;

table.appendChild(totalRow);


// Percentage Row

let percentageRow = document.createElement("tr");

percentageRow.innerHTML = `
    <td><b>Percentage</b></td>
    <td>${Math.round(percentage1)}%</td>
    <td></td>
    <td>${Math.floor(percentage2)}%</td>
    <td></td>
`;

table.appendChild(percentageRow);


// Division Row

let divisionRow = document.createElement("tr");

divisionRow.innerHTML = `
    <td><b>Division</b></td>
    <td>${term1Division}</td>
    <td></td>
    <td>${term2Division}</td>
    <td></td>
`;
table.appendChild(divisionRow);



function addSummaryRow(label, terminalValue, finalValue) {

    let row = document.createElement("tr");

    row.innerHTML = `
        <td><b>${label}</b></td>
        <td >${terminalValue}</td>
        <td></td>
        <td >${finalValue}</td>
    `;

    table.appendChild(row);

}



addSummaryRow(
    "Rank",
    students.performance.terminal.rank,
    students.performance.final.rank
);



addSummaryRow(
    "Class Average",
    students.performance.terminal.classAverage,
    students.performance.final.classAverage
);



addSummaryRow(
    "Attendance",
    students.performance.terminal.attendance,
    students.performance.final.attendance
);