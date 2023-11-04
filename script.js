// Sample course data
const data = [
  {
    "image-url": "images/company-logo/ibm-logo.png",
    "course-img": "images/course-img/course1-img.png",
    "company-name": "IBM",
    "course-title": "IBM Full Stack Developer",
    "skills-description": "Cloud computing , python , Cloud applications, ...",
    //   "skills-description": "HTML, CSS, JavaScript, React, React-router, Front-end Web development, Web Frameworks...",
    star: "4.6",
    reviews: "(40k reviews)",
    level: "Beginner",
    certificate: "Professional Certificate",
    duration: "3 months",
  },
  {
    "image-url": "images/company-logo/meta-logo.png",
    "course-img": "images/course-img/course2-img.png",
    "company-name": "Meta",
    "course-title": "Meta Front-End Developer",
    "skills-description":
      "HTML, CSS, JavaScript, React, React-router, Front-end Web development, Web Frameworks...",
    star: "4.7",
    reviews: "(14k reviews)",
    level: "Beginner",
    certificate: "Professional Certificate",
    duration: "2 months",
  },
  {
    "image-url": "images/company-logo/john-logo.png",
    "course-img": "images/course-img/course3-img.png",
    "company-name": "Johns Hopkins University",
    "course-title": "HTML, CSS, and Javascript for Web developers",
    "skills-description":
      "Front-End Web development, HTML and CSS, Javascript...",
    // "skills-description": "HTML, CSS, JavaScript, React, React-router, Front-end Web development, Web Frameworks...",
    star: "4.7",
    reviews: "(15k reviews)",
    level: "Beginner",
    certificate: "Course",
    duration: "2 months",
  },
  {
    "image-url": "images/company-logo/michigan-logo.png",
    "course-img": "images/course-img/course4-img.png",
    "company-name": "Universtity of Michigan",
    "course-title":
      "Web Design for Everybody: Basics of Web Development & Coding",
    "skills-description":
      "Front-End Web development, HTML and CSS, Javascript...",
    // "skills-description": "HTML, CSS, JavaScript, React, React-router, Front-end Web development, Web Frameworks...",
    star: "4.7",
    reviews: "(34k reviews)",
    level: "Beginner",
    certificate: "Specialisation",
    duration: "3 months",
  },
  {
    "image-url": "images/company-logo/meta-logo.png",
    "course-img": "images/course-img/course5-img.png",
    "company-name": "Meta",
    "course-title": "Introduction to Front-End Development",
    "skills-description":
      "HTML, CSS, JavaScript, React, React-router, Front-end Web development, Web Frameworks...",
    star: "4.8",
    reviews: "(8.7k reviews)",
    level: "Beginner",
    certificate: "Professional Certificate",
    duration: "1 months",
  },
  {
    "image-url": "images/company-logo/ibm-logo.png",
    "course-img": "images/course-img/course6-img.png",
    "company-name": "IBM",
    "course-title":
      "Indtroduction fo Web Development with HTML, CSS, JavaScript",
    "skills-description": "Web development , Cloud applications, Javascript...",
    star: "4.6",
    reviews: "(1.6k reviews)",
    level: "Beginner",
    certificate: "Professional Certificate",
    duration: "3 months",
  },
  {
    "image-url": "images/company-logo/coursera-proj-logo.png",
    "course-img": "images/course-img/course7-img.png",
    "company-name": "Coursera project network",
    "course-title": "Build a Portfolio website with HTML, CSS and Javascript",
    "skills-description": "HTML, CSS, JavaScript, Web Design and Development",
    star: "4.1",
    reviews: "(18 reviews)",
    level: "Intermediate",
    certificate: "Guided project",
    duration: "1 months",
  },
  {
    "image-url": "images/company-logo/meta-logo.png",
    "course-img": "images/course-img/course8-img.png",
    "company-name": "Meta",
    "course-title": "Meta Back-End Developer",
    "skills-description":
      "Python programming, Databases, HTML and CSS, SQL, Database design, Programming principles",
    star: "4.7",
    reviews: "(5.8k reviews)",
    level: "Beginner",
    certificate: "Professional Certificate",
    duration: "5 months",
  },
  {
    "image-url": "images/company-logo/ibm-logo.png",
    "course-img": "images/course-img/course9-img.png",
    "company-name": "IBM",
    "course-title": "IBM Front-End Developer",
    "skills-description":
      "Software engineering , cloud application, Application Developme t, computer programming",
    star: "4.5",
    reviews: "(2.9k reviews)",
    level: "Beginner",
    certificate: "Professional Certificate",
    duration: "6 months",
  },
  {
    "image-url": "images/company-logo/california-logo.png",
    "course-img": "images/course-img/course10-img.png",
    "company-name": "University of California, Davis",
    "course-title": "Introduction to Web development",
    "skills-description":
      "Computer programming, Front-end web development, HTML and CSS ...",
    star: "4.7",
    reviews: "(3.6k reviews)",
    level: "Beginner",
    certificate: "Course",
    duration: "3 months",
  },
  {
    "image-url": "images/company-logo/google-logo.png",
    "course-img": "images/course-img/course11-img.png",
    "company-name": "Google",
    "course-title": "Google UX Design",
    "skills-description":
      "User Experience, User Experience Design, User Research, Audit Collaboration, Human computer...",
    star: "4.8",
    reviews: "(72.6k reviews)",
    level: "Beginner",
    certificate: "Professional Certificate",
    duration: "5 months",
  },
  {
    "image-url": "images/company-logo/ibm-logo.png",
    "course-img": "images/course-img/course12-img.png",
    "company-name": "IBM",
    "course-title": "IBM Back-End Development",
    "skills-description":
      "Application Development, Software engineering, Python programming, computer development...",
    star: "4.6",
    reviews: "(36.6k reviews)",
    level: "Beginner",
    certificate: "Professional Certificate",
    duration: "3 months",
  },
  // Add other course objects here as needed
];

const durationCheckboxes = document.querySelectorAll(
  'input[type="checkbox"][data-duration-min]'
);
const levelCheckboxes = document.querySelectorAll(
  'input[type="checkbox"][data-level]'
);

durationCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", filterCourses);
});

levelCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", filterCourses);
});

function displayCourses1(courses) {
  //   const coursesDiv = document.getElementsById('course-cards1');
  const coursesDiv = document.getElementById("course-cards1");

  coursesDiv.innerHTML = "";

  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("cards1");
    courseCard.innerHTML = `
          <div class="course-img" style="position:'relative';height:'100%';width:'100%'">
          <img src="${course["course-img"]}" style="height:100%;width:100%" alt=""> 
          </div>
          <span class="company-logo">
              <img src="${course["image-url"]}" style="
                  /* Your inline styles for the company logo */
              " alt="">
          </span>
          <span class="company-name" style="position: relative; top: -5px; font-size: 14px;">
              ${course["company-name"]}
          </span>
          <div class="course-title">${course["course-title"]}</div>
          <div class="skills">
              <span class="skill-you">Skills you will gain :</span>
              <span class="skills-description">
                  ${course["skills-description"]}
              </span>
          </div>
          <div class="ratings">
              <div class="rating-data">
                  <!-- Your SVG code for ratings -->
                  <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-us1a98" id="cds-react-aria-255"><path d="M13.63 6.32h-4L8.3 2.22a.33.33 0 00-.547-.143.35.35 0 00-.083.123L6.32 6.32h-4a.34.34 0 00-.32.32.36.36 0 00.12.27L5.5 9.49l-1.3 4.08a.33.33 0 00.23.41.358.358 0 00.3-.05L8 11.39l3.28 2.54a.33.33 0 00.46 0 .3.3 0 00.06-.31l-1.31-4.13 3.37-2.58a.32.32 0 00.08-.45.34.34 0 00-.136-.112c-.055-.024-.063-.034-.123-.028h-.051z" fill="#F2D049"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.723 1.525a.83.83 0 011.054.546L9.993 5.82h3.668a.635.635 0 01.317.058l.02.01.012.005a.84.84 0 01.336.275l.001.002a.82.82 0 01-.191 1.143l-3.083 2.36 1.2 3.786a.8.8 0 01-.166.81l-.009.01-.01.01a.83.83 0 01-1.131.023L8 12.022l-2.975 2.312-.012.008a.86.86 0 01-1.007-.026.832.832 0 01-.286-.885l.003-.013 1.194-3.744L1.8 7.296l-.014-.013a.86.86 0 01-.287-.645V6.61a.84.84 0 01.791-.79l.015-.001h3.652L7.2 2.029l.006-.016a.85.85 0 01.51-.485l.007-.003zM4.298 14.462h-.002l.134-.482-.132.482zM7.98 2.857L6.682 6.82H2.826l3.257 2.486-1.244 3.907 3.16-2.456 3.14 2.431-1.232-3.882 3.248-2.486H9.267L7.98 2.857zm5.75 3.96z" fill="#7C6919"></path></svg>
                  <span class="star">${course.star}</span>
                  <span class="reviews">${course.reviews}</span>
              </div>
          </div>
          <div class="card-footer">
              <span class="level">${course.level}</span>
              <span class="certificate">${course.certificate}</span>
              <span class="duration">${course.duration}</span>
          </div>
      `;
    coursesDiv.appendChild(courseCard);
  });
  console.log(coursesDiv);
}
function displayCourses2(courses) {
  //   const coursesDiv = document.getElementsById('course-cards1');
  const coursesDiv = document.getElementById("course-cards2");

  coursesDiv.innerHTML = "";

  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.classList.add("cards2");
    courseCard.innerHTML = `
    <div class="course-img" style="position:'relative';height:'100%';width:'100%'">
          <img src="${course["course-img"]}" style="height:100%;width:100%" alt=""> 
          </div>
              <span class="company-logo">
                  <img src="${course["image-url"]}" style="
                      /* Your inline styles for the company logo */
                  " alt="">
              </span>
              <span class="company-name" style="position: relative; top: -5px; font-size: 14px;">
                  ${course["company-name"]}
              </span>
              <div class="course-title">${course["course-title"]}</div>
              <div class="skills">
                  <span class="skill-you">Skills you will gain :</span>
                  <span class="skills-description">
                      ${course["skills-description"]}
                  </span>
              </div>
              <div class="ratings">
                  <div class="rating-data">
                      <!-- Your SVG code for ratings -->
                      <svg aria-hidden="true" fill="none" focusable="false" height="16" viewBox="0 0 16 16" width="16" class="css-us1a98" id="cds-react-aria-255"><path d="M13.63 6.32h-4L8.3 2.22a.33.33 0 00-.547-.143.35.35 0 00-.083.123L6.32 6.32h-4a.34.34 0 00-.32.32.36.36 0 00.12.27L5.5 9.49l-1.3 4.08a.33.33 0 00.23.41.358.358 0 00.3-.05L8 11.39l3.28 2.54a.33.33 0 00.46 0 .3.3 0 00.06-.31l-1.31-4.13 3.37-2.58a.32.32 0 00.08-.45.34.34 0 00-.136-.112c-.055-.024-.063-.034-.123-.028h-.051z" fill="#F2D049"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.723 1.525a.83.83 0 011.054.546L9.993 5.82h3.668a.635.635 0 01.317.058l.02.01.012.005a.84.84 0 01.336.275l.001.002a.82.82 0 01-.191 1.143l-3.083 2.36 1.2 3.786a.8.8 0 01-.166.81l-.009.01-.01.01a.83.83 0 01-1.131.023L8 12.022l-2.975 2.312-.012.008a.86.86 0 01-1.007-.026.832.832 0 01-.286-.885l.003-.013 1.194-3.744L1.8 7.296l-.014-.013a.86.86 0 01-.287-.645V6.61a.84.84 0 01.791-.79l.015-.001h3.652L7.2 2.029l.006-.016a.85.85 0 01.51-.485l.007-.003zM4.298 14.462h-.002l.134-.482-.132.482zM7.98 2.857L6.682 6.82H2.826l3.257 2.486-1.244 3.907 3.16-2.456 3.14 2.431-1.232-3.882 3.248-2.486H9.267L7.98 2.857zm5.75 3.96z" fill="#7C6919"></path></svg>
                      <span class="star">${course.star}</span>
                      <span class="reviews">${course.reviews}</span>
                  </div>
              </div>
              <div class="card-footer">
                  <span class="level">${course.level}</span>
                  <span class="certificate">${course.certificate}</span>
                  <span class="duration">${course.duration}</span>
              </div>
          `;
    coursesDiv.appendChild(courseCard);
  });
  console.log(coursesDiv);
}

function filterCourses() {
  const selectedDurations = Array.from(durationCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => ({
      min: parseInt(checkbox.getAttribute("data-duration-min")),
      max: parseInt(checkbox.getAttribute("data-duration-max")),
    }));

  const selectedLevels = Array.from(levelCheckboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.getAttribute("data-level"));

  const filteredCourses = data.filter((course) => {
    const duration = parseDuration(course.duration);
    return (
      (selectedDurations.length === 0 ||
        selectedDurations.some(
          (range) => duration >= range.min && duration <= range.max
        )) &&
      (selectedLevels.length === 0 || selectedLevels.includes(course.level))
    );
  });

  displayCourses1(filteredCourses);
  displayCourses2(filteredCourses);
}

function parseDuration(durationString) {
  const durationArray = durationString.split(" ");
  const durationValue = durationArray[0]; // Extracting the numeric value
  return parseInt(durationValue);
}

// Initial display of courses
displayCourses1(data);
displayCourses2(data);
let hamclicked = false;
let crossclicked = false;

//to show tha navbar when hamburger is clicked

function showhamnav() {
  var navBar = document.getElementById("nav-small");
  var heroSmall = document.getElementById("small-hero");
  var dataSmall = document.getElementById("data-small");
  var hamnav = document.getElementById("ham-nav");
  hamnav.style.display = "block";
  navBar.style.display = "none";
  heroSmall.style.display = "none";
  dataSmall.style.display = "none";
}

//to show tha navbar when cross is clicked or when it's first time appear
function showsmallnav() {
  var navBar = document.getElementById("nav-small");
  var heroSmall = document.getElementById("small-hero");
  var dataSmall = document.getElementById("data-small");
  var hamnav = document.getElementById("ham-nav");
  hamnav.style.display = "none";
  navBar.style.display = "flex";
  heroSmall.style.display = "flex";
  dataSmall.style.display = "flex";
}

//handling the nav
function handlenav() {
  if (hamclicked == false && crossclicked === false) {
    showsmallnav();
  }

  if (hamclicked === true) {
    showhamnav();
  }

  if (crossclicked === true) {
    console.log("cross clicked");

    showsmallnav();
  }
}

function handleCross() {
  crossclicked = true;
  hamclicked = false;
  handlenav();
}

// hamburger
function handleBurger() {
  hamclicked = true;
  crossclicked = false;
  handlenav();
}

window.onresize = function () {
  var hamnav = document.getElementById("ham-nav");
  var navBar = document.getElementById("nav-small");
  var heroSmall = document.getElementById("small-hero");
  var dataSmall = document.getElementById("data-small");
  if (screen.width >= 1175) {
    heroSmall.style.display = "none";
    navBar.style.display = "none";
    dataSmall.style.display = "none";
    hamnav.style.display = "none";
  } else {
    console.log("it runs");
    handlenav();
  }
};
