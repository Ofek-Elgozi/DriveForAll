const courses = [
  {
    id: 1,
    title: "Calculus 1",
    category: "First Year",
    date: '01/2022',
    img: "./images/calculus1-course.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Computer Architerture I",
    category: "First Year",
    date: '01/2022',
    img: "./images/archi1-course.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 3,
    title: "Discrete mathematics I",
    category: "First Year",
    date: '01/2022',
    img: "./images/logic-one-course.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 4,
    title: "Introduction to Computer Science (C)",
    category: "First Year",
    date: '01/2022',
    img: "./images/C-course.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 5,
    title: "Linear Algebra",
    category: "First Year",
    date: '01/2022',
    img: "./images/linar-course.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 6,
    title: "Calculus 2",
    category: "First Year",
    date: '01/2022',
    img: "./images/calculus2-course.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 7,
    title: "Discrete mathematics II",
    category: "First Year",
    date: '01/2022',
    img: "./images/item-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 8,
    title: "Computer Architerture II",
    category: "First Year",
    date: '01/2022',
    img: "./images/item-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 9,
    title: "Probability and Statistics",
    category: "First Year",
    date: '01/2022',
    img: "./images/ststistics-course.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 10,
    title: "OOP (C++) ",
    category: "First Year",
    date: '01/2022',
    img: "./images/cpp-course.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 11,
    title: "Software Engineering Basics",
    category: "Second Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 12,
    title: "SE Requirements",
    category: "Second Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 13,
    title: "Programming principles (Python)",
    category: "Second Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 14,
    title: "Physics Software Engineering",
    category: "Second Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 15,
    title: "Numerical Analysis",
    category: "Second Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 16,
    title: "Data Structures",
    category: "Second Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 17,
    title: "Automata and formal languages",
    category: "Second Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 18,
    title: "Advance OOP (Java)  ",
    category: "Second Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 19,
    title: " Algorithms I",
    category: "Second Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 20,
    title: "DB",
    category: "Third Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 21,
    title: " Software Testing and Quality",
    category: "Third Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 22,
    title: "Advanced Algorithms II ",
    category: "Third Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 23,
    title: "Introduction to Communication",
    category: "Third Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 24,
    title: "Android",
    category: "Third Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 25,
    title: "Project Management",
    category: "Third Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 26,
    title: "Operating System",
    category: "Third Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 27,
    title: "Network Communication",
    category: "Third Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 28,
    title: "Data Security",
    category: "Third Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 29,
    title: "Compilation Intro",
    category: "Third Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 30,
    title: "Software Security",
    category: "Fourth Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 31,
    title: "Complexity",
    category: "Fourth Year",
    date: '01/2022',
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },

  
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayCoursesItems(courses);
  displayCoursesButtons();
});

function diplayCoursesItems(CoursesItems) {
  let displayCourses = CoursesItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="date">${item.date}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayCourses = displayCourses.join("");
  sectionCenter.innerHTML = displayCourses;
}
function displayCoursesButtons() {
  const categories = courses.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  console.log(categories)
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      let category = e.currentTarget.dataset.id;
      category += ' Year';
      console.log(category)
      const coursesCategory = courses.filter(function (courseYear) {
        if (courseYear.category === category) {
          return courseYear;
        }
      });
      if (category === "all Year") 
      {
        diplayCoursesItems(courses);
      } else {
        diplayCoursesItems(coursesCategory);
      }
    });
  });
}
