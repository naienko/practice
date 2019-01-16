const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`;
}

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`;
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`;
}

const studentBlock = (name, sectionContent, passFail, info) => {
    return `<div id="student">
    ${h1(name, `xx-large ${passFail}`)}
    ${section(sectionContent, "section--padded")}
    ${aside(info, "pushRight")}
    </div>
    `
}

//remember to use return keyword if using curly braces in arrow composition functions such as above

const container = document.querySelector("#container");

// students.forEach(currentStudent => {
//     const studentHTMLRepresentation = student (
//         currentStudent.name, 
//         currentStudent.class, 
//         currentStudent.info);
//         container.innerHTML += studentHTMLRepresentation;
// })

for (let student of students) {
    let studentComponent = "";
    if (student.score >= 60) {
        studentComponent = studentBlock(student.name, student.class, "passing", student.info)
    } else {
        studentComponent = studentBlock(student.name, student.class, "failing", student.info)
    }
    container.innerHTML += studentComponent;
}