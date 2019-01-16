const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`;
}

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`;
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`;
}

// arguments = html tag, object piece, style
const elementBuilder = (...arguments) => {
    return `<${arguments[0]} class="${arguments[2]}">${arguments[1]}</${arguments[0]}>`;
}

//info = student.name, student.class, studentComponent (styles), student.info
const studentBlock = (...info) => {
    return `<div id="student">
    ${elementBuilder("h1", info[0], `xx-large ${info[2]}`)}
    ${elementBuilder("section", info[1], "bordered dashed section--padded")}
    ${elementBuilder("aside", info[3], "pushRight")}
    </div>
    `
}

// const studentBlock = (...info) => {
//     return `<div id="student">
//     ${h1(info[0], `xx-large ${info[2]}`)}
//     ${section(info[1], "section--padded")}
//     ${aside(info[3], "pushRight")}
//     </div>
//     `
// }
//remember to use return keyword if using curly braces in arrow composition functions such as above

const container = document.querySelector("#container");

// students.forEach(currentStudent => {
//     const studentHTMLRepresentation = student (
//         currentStudent.name, 
//         currentStudent.class, 
//         currentStudent.info);
//         container.innerHTML += studentHTMLRepresentation;
// })

// for (student of students) {
//     let studentComponent = "";
//     if (student.score >= 60) {
//         studentComponent = studentBlock(student.name, student.class, "passing", student.info)
//     } else {
//         studentComponent = studentBlock(student.name, student.class, "failing", student.info)
//     }
//     container.innerHTML += studentComponent;
// }

//nathan's simpler version
for (student of students) {
    let studentComponent = "";
    if (student.score >= 60) {
        studentComponent = "passing";
    } else {
        studentComponent = "failing";
    }
    container.innerHTML += studentBlock(student.name, student.class, studentComponent, student.info);
}