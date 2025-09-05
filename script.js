document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navBar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            }
        });
    };

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navBar.classList.toggle('active');
    };

    // Smooth scrolling effect for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // Show more
const showMoreBtn = document.getElementById('showMoreBtn');
const showLessBtn = document.getElementById('showLessBtn');
const portfolioBoxes = document.querySelectorAll('.portfolio-box.hidden');

showMoreBtn.addEventListener('click', () => {
  portfolioBoxes.forEach(box => box.classList.remove('hidden'));
  showMoreBtn.style.display = 'none';
  showLessBtn.style.display = 'inline-block';
});

showLessBtn.addEventListener('click', () => {
  document.querySelectorAll('.portfolio-box').forEach((box, index) => {
    if (index >= 6) {
      box.classList.add('hidden');
    }
  });
  showLessBtn.style.display = 'none';
  showMoreBtn.style.display = 'inline-block';
});


// Animated filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const boxes = document.querySelectorAll('.portfolio-box');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const f = btn.dataset.filter;
    boxes.forEach(box => {
      if (f === 'all' || box.classList.contains(f)) {
        box.classList.remove('hidden');
      } else {
        box.classList.add('hidden');
      }
    });
    showMoreBtn.style.display = document.querySelectorAll('.portfolio-box.hidden').length ? 'block' : 'none';
  });
});

// Lightbox logic
const lightbox = document.getElementById('lightbox');
const lbImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    const img = box.querySelector('img');
    if (!img) return;
    lbImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

});
// Show more functionality
document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.getElementById('showMoreBtn');
    const hiddenItems = document.querySelectorAll('.portfolio-box.hidden');

    showMoreBtn.addEventListener('click', () => {
        hiddenItems.forEach(item => item.classList.remove('hidden'));
        showMoreBtn.style.display = 'none';
    });

    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');

            portfolioBoxes.forEach(box => {
                if (filter === 'all') {
                    box.style.display = 'block';
                } else {
                    box.style.display = box.classList.contains(filter) ? 'block' : 'none';
                }
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const showLessBtn = document.getElementById('showLessBtn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const boxes = document.querySelectorAll('.portfolio-box');

  let currentFilter = 'all';

  // Filter logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;

      let count = 0;
      boxes.forEach((box, index) => {
        if (currentFilter === 'all' || box.classList.contains(currentFilter)) {
          box.classList.remove('hidden');
          count++;
          if (count > 6) {
            box.classList.add('hidden');
          }
        } else {
          box.classList.add('hidden');
        }
      });

      // Update button visibility
      const filteredItems = [...boxes].filter(box => currentFilter === 'all' || box.classList.contains(currentFilter));
      if (filteredItems.length > 6) {
        showMoreBtn.style.display = 'inline-block';
      } else {
        showMoreBtn.style.display = 'none';
      }
      showLessBtn.style.display = 'none';
    });
  });

  // Show More button
  showMoreBtn.addEventListener('click', () => {
    boxes.forEach(box => {
      if (currentFilter === 'all' || box.classList.contains(currentFilter)) {
        box.classList.remove('hidden');
      }
    });
    showMoreBtn.style.display = 'none';
    showLessBtn.style.display = 'inline-block';
  });

  // Show Less button
  showLessBtn.addEventListener('click', () => {
    let count = 0;
    boxes.forEach(box => {
      if (currentFilter === 'all' || box.classList.contains(currentFilter)) {
        count++;
        if (count > 6) {
          box.classList.add('hidden');
        } else {
          box.classList.remove('hidden');
        }
      }
    });
    showLessBtn.style.display = 'none';
    showMoreBtn.style.display = 'inline-block';
  });

  // Default: apply "all" filter on load
  filterBtns[0].click();
});
// Animate skill bars on scroll
// Animate skill bars on scroll
// Circular skill animation on scroll
const skillCircles = document.querySelectorAll('.circle-skill');
let animatedCircles = false;

window.addEventListener('scroll', () => {
  const skillTop = document.querySelector('#skills').offsetTop;
  if (!animatedCircles && window.scrollY + window.innerHeight > skillTop + 100) {
    skillCircles.forEach(circle => {
      const progress = circle.querySelector('.progress');
      const percentText = circle.querySelector('.percent');
      const target = +circle.dataset.percent;
      let current = 0;

      const stroke = 283;
      const interval = setInterval(() => {
        if (current <= target) {
          let offset = stroke - (stroke * current) / 100;
          progress.style.strokeDashoffset = offset;
          percentText.textContent = `${current}%`;
          current++;
        } else {
          clearInterval(interval);
        }
      }, 20);
    });
    animatedCircles = true;
  }
});

// Custom cursor logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorCircle = document.querySelector('.cursor-circle');

window.addEventListener('mousemove', (e) => {
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
  cursorCircle.style.left = `${e.clientX}px`;
  cursorCircle.style.top = `${e.clientY}px`;
});

const hoverElements = document.querySelectorAll('a, .btn, .service-box, .filter-btn, .portfolio-box img, .skill-icon');

hoverElements.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursorCircle.classList.add('expand');
  });
  el.addEventListener('mouseleave', () => {
    cursorCircle.classList.remove('expand');
  });
});



