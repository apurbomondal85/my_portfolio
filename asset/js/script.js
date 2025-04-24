document.addEventListener('DOMContentLoaded', function () {

    // Hero Slider
    let heroSlider = new Swiper(".heroSwiper", {
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        loop: true,
        effect: "cube"
    });

    // text-typed-auto 
    var typed = new Typed('.typed', {
        // Waits 1000ms after typing "First"
        strings: ['front-End developer.', 'full stack web developer.', 'front-End developer.',],
        typeSpeed: 50,
        loop: true,
        backDelay: 900,
        backSpeed: 30,
    });

    // scroll-top

    const home = document.querySelector("#home");

    const footerElem = document.querySelector(".footer-section");

    const scrollElement = document.createElement('div');

    scrollElement.classList.add("scrollTop-style");

    // scrollElement.innerHTML = `<span class="scroll-top"><i class="fa-solid fa-arrow-up"></i></span>`;

    footerElem.after(scrollElement);

    const scrollTop = () => {
        home.scrollIntoView({ behavior: "smooth" });
    };

    scrollElement.addEventListener('click', scrollTop);


    // Skill Animation 
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const nodes = document.querySelectorAll('.node');
    const popup = document.getElementById('popup');
    const skillBarFill = document.getElementById('skill-bar-fill');
    const skillLabel = document.getElementById('skill-label');

    const skills = ["Laravel", "PHP", "Vue.js", "React.js", "MySQL", "Figma"];

    function resizeCanvas() {
      const container = document.querySelector('.skill');
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    }

    resizeCanvas();

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    const radius = 250;
    let angleStep = (2 * Math.PI) / nodes.length;

    const points = Array.from(nodes).map((el, i) => {
      return {
        el,
        angle: i * angleStep,
        speed: 0.0025,
        x: 0,
        y: 0
      };
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const positions = [];
      points.forEach(p => {
        p.angle += p.speed;
        const x = centerX + radius * Math.cos(p.angle);
        const y = centerY + radius * Math.sin(p.angle);
        p.x = x;
        p.y = y;
        p.el.style.left = `${x - 180}px`;
        p.el.style.top = `${y - 160}px`;
        positions.push({ x, y });
      });

      for (let i = 0; i < positions.length; i++) {
        for (let j = i + 1; j < positions.length; j++) {
          ctx.beginPath();
          ctx.moveTo(positions[i].x, positions[i].y);
          ctx.lineTo(positions[j].x, positions[j].y);
          ctx.strokeStyle = 'rgba(0, 255, 170, 0.3)';
          ctx.lineWidth = 1;
          ctx.setLineDash([5, 5]);
          ctx.stroke();
          ctx.setLineDash([]);
        }
      }

      if (popup.dataset.activeIndex !== undefined) {
        const i = parseInt(popup.dataset.activeIndex);
        const p = points[i];
        popup.style.left = `${p.x - 200}px`;
        popup.style.top = `${p.y - 75}px`;
      }

      requestAnimationFrame(animate);
    }

    animate();

    let currentIndex = 0;
    setInterval(() => {
      popup.dataset.activeIndex = currentIndex;
      const p = points[currentIndex];
      popup.style.left = `${p.x - 150}px`;
      popup.style.top = `${p.y - 20}px`;
      popup.style.display = 'block';
      skillLabel.innerHTML = `<strong>Skill:</strong> ${skills[currentIndex]}`;
      skillBarFill.style.width = '0%';
      setTimeout(() => skillBarFill.style.width = '90%', 100);

      setTimeout(() => {
        popup.style.display = 'none';
        popup.removeAttribute('data-active-index');
      }, 3000);

      currentIndex = (currentIndex + 1) % points.length;
    }, 4000);

    window.addEventListener('resize', () => {
      resizeCanvas();
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
    });

});