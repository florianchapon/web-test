
document.addEventListener("DOMContentLoaded", slide_to_top); 


function slide_to_top() {
    const boxes = document.querySelectorAll('.jobs');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
        else {
            entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is visible
  
    boxes.forEach(box => {
      observer.observe(box);
    });
  }
  