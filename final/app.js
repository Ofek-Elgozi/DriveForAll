const courses = [
  {
    id: 1,
    title: "Calculus 1",
    category: "First Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/18MyQdZRvLZNOQ64u8mg0SRtOMw_g5e2A?usp=sharing",
    img: "./images/calculus1-course.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Computer Architerture I",
    category: "First Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1xDNU1L55xLZYcQW8IBHXY4eamAybSroV?usp=sharing",
    img: "./images/archi1-course.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 3,
    title: "Discrete mathematics I",
    category: "First Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1BSeTz9JFHKTn7ocUuDjCc89_yE9AJQtI?usp=sharing",
    img: "./images/logic1-course.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 4,
    title: "Introduction to Computer Science (C)",
    category: "First Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1GNJUihmfRyeC_ONr1Kn5z995D5sVifnw?usp=sharing",
    img: "./images/c-course.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 5,
    title: "Linear Algebra",
    category: "First Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1j3Z0V0ffMABOp6uwoeC9wUB5K8imPbDQ?usp=sharing",
    img: "./images/linar-course.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 6,
    title: "Calculus 2",
    category: "First Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1BSgZR1iQa_5iUwhZYgNbYy-rQ5753OeS?usp=sharing",
    img: "./images/calculus2-course.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 7,
    title: "Discrete mathematics II",
    category: "First Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/11wbuSZSTfOZxXsz4C01nfLFkUGlLAQ8_?usp=sharing",
    img: "./images/logic2-course.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 8,
    title: "Computer Architerture II",
    category: "First Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1Axop2F-LV16Ozd1IrNqOgvZkqTV8EGmf?usp=sharing",
    img: "./images/archi2.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 9,
    title: "Probability and Statistics",
    category: "First Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1znD-be3jbb_QAn-GlWLWEb1s8QHYK-rq?usp=sharing",
    img: "./images/ststistics-course.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 10,
    title: "OOP (C++) ",
    category: "First Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1KKZifBNo8eMr5nk3gYK4ySeMPZZjbxht?usp=sharing",
    img: "./images/cpp-course.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 11,
    title: "Software Engineering Basics",
    category: "Second Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/10Q3VinM8-F9toxlM2_5Jj6w3c7nbRabZ?usp=sharing",
    img: "./images/Basics.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 12,
    title: "SE Requirements",
    category: "Second Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1oDHuhM3tLEFbDpjZtOvx_52a7hFoiq5n?usp=sharing",
    img: "./images/Requirements.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 13,
    title: "Programming principles (Python)",
    category: "Second Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1mBUKUYPbcjCHLZeqcugQhtSGTjbBr24n?usp=sharing",
    img: "./images/Python.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 14,
    title: "Physics Software Engineering",
    category: "Second Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/12Ks5Rh1BK-fxxzRHSqf8W3n5SxZuh6K5?usp=sharing",
    img: "./images/Physics.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 15,
    title: "Numerical Analysis",
    category: "Second Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/16MP2OAUl3NUbkrQ6ymGjh96s44JC5iph?usp=sharing",
    img: "./images/Numerical-Analysis.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 16,
    title: "Data Structures",
    category: "Second Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1_yUIXFR4kMlNfVSmwG7XjCIHHWCBecU5?usp=sharing",
    img: "./images/Data-Structures.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 17,
    title: "Automata and formal languages",
    category: "Second Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1gkUBKI9dT53KGzygYmKoToYfOsFJbKoh?usp=sharing",
    img: "./images/Automata.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 18,
    title: "Advance OOP (Java)  ",
    category: "Second Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1ZMbSHQ9kQsT8OYlrGOYQ2q1kn35sgsWX?usp=sharing",
    img: "./images/Advance-OOP.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 19,
    title: " Algorithms I",
    category: "Second Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1mrOqx1raLPeT2VJ0q8ytIiTMpuMBsFWF?usp=sharing",
    img: "./images/algo2.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 20,
    title: "DB",
    category: "Third Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1wWGiwyQ-ezmhDejAJJLZAQSYzFdwZkjV?usp=sharing",
    img: "./images/db-course.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 21,
    title: " Software Testing and Quality",
    category: "Third Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1nZlziICxOJHVGtZ8RtvyNo5Wcj6XTM9Q?usp=sharing",
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 22,
    title: "Advanced Algorithms II ",
    category: "Third Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1JPZDUfiloe80iplQeGDhEJZHr267H0ja?usp=sharing",
    img: "./images/algo2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 23,
    title: "Introduction to Communication",
    category: "Third Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1niovDoj7duCoh65NCjUdYYeQared4Zci?usp=sharing",
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 24,
    title: "Android",
    category: "Third Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1N6_mZiJocsx99S8iUJQUw3dQ8a_nTK3k?usp=sharing",
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 25,
    title: "Project Management",
    category: "Third Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/16DsLtofpgaft605ozqSmI2odTK2j56LC?usp=sharing",
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 26,
    title: "Operating System",
    category: "Third Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1E_j1Vr7f_kcNRxg-YwtarE-ytkU-Lvs4?usp=sharing",
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 27,
    title: "Network Communication",
    category: "Third Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1HHB027uaMcsj8Beuk1S91ZUrhtR1vclv?usp=sharing",
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 28,
    title: "Data Security",
    category: "Third Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1WXMsopFmbzhw9BvG2IzjW86FE-d4di2v?usp=sharing",
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 29,
    title: "Compilation Intro",
    category: "Third Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1d38jY4-JRWxLAYm1XINl2Yusin_mFVtW?usp=sharing",
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 30,
    title: "Software Security",
    category: "Fourth Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1h3_0DuD3xa-zfXVSvkcBV1AjmBETMBwH?usp=sharing",
    img: "./images/item-2.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 31,
    title: "Complexity",
    category: "Fourth Year",
    date: '01/2022',
    link: "https://drive.google.com/drive/folders/1eAbv6keHEhrcE8ci8TVqboz4wAjPIZJf?usp=sharing",
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
          <a href= ${item.link} target="_blank">
          <img src=${item.img} alt=${item.title} class="photo"/>
          </a>
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
