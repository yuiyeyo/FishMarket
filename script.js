document.addEventListener("DOMContentLoaded", function () {
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $(entry.target).addClass("animate");
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  observer.observe(document.querySelector(".writing"));
  observer.observe(document.querySelector(".picture"));
  observer.observe(document.querySelector(".tagline"));
  observer.observe(document.querySelector(".calendar"));
  observer.observe(document.querySelector(".parttwoheading"));


  
});

