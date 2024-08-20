// Add background color to navbar on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const signupLink = document.getElementById("signupLink");
  if (signupLink) {
    signupLink.addEventListener("click", function (e) {
      e.preventDefault();
      const signupTab = new bootstrap.Tab(
        document.getElementById("signup-tab")
      );
      signupTab.show();
    });
  }

  var myCarousel = new bootstrap.Carousel(
    document.getElementById("heroCarousel"),
    {
      interval: 5000,
      wrap: true,
      pause: "hover",
    }
  );

  // Create zodiac circle
  const zodiacSigns = [
    {
      name: "Aries",
      image:
        "https://plus.unsplash.com/premium_photo-1679941208802-1862b910082d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Taurus",
      image:
        "https://plus.unsplash.com/premium_photo-1679941208863-0e168d0a4b9f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    { name: "Gemini", image: "all images/geminicard.avif" },
    { name: "Cancer", image: "all images/cancercard.avif" },
    {
      name: "Leo",
      image:
        "https://plus.unsplash.com/premium_photo-1679941208839-43ddba36971c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    { name: "Virgo", image: "all images/virgocard.avif" },
    { name: "Libra", image: "all images/libracard.avif" },
    {
      name: "Scorpio",
      image:
        "https://plus.unsplash.com/premium_photo-1679941208895-91501f622a90?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    { name: "Sagittarius", image: "all images/sagittariuscard.avif" },
    { name: "Capricorn", image: "all images/capricorncard.avif" },
    {
      name: "Aquarius",
      image:
        "https://plus.unsplash.com/premium_photo-1679941208830-d621aa499fa1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    { name: "Pisces", image: "all images/libracard.avif" },
  ];

  const zodiacCircle = document.querySelector(".zodiac-circle");
  const radius = 180; // Adjust this value to change the circle size

  zodiacSigns.forEach((sign, index) => {
    const angle = (index / zodiacSigns.length) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    const zodiacItem = document.createElement("div");
    zodiacItem.className = "zodiac-item";
    zodiacItem.style.left = `${x + radius}px`;
    zodiacItem.style.top = `${y + radius}px`;
    zodiacItem.style.width = "120px"; // Set circle size
    zodiacItem.style.height = "120px"; // Set circle size
    zodiacItem.style.borderRadius = "50%"; // Make it circular
    zodiacItem.style.overflow = "hidden";
    zodiacItem.style.margin = "30px";

    const img = document.createElement("img");
    img.src = sign.image;
    img.alt = sign.name;
    img.style.width = "100%"; // Increased image size
    img.style.height = "100%";
    img.style.objectFit = "cover";
    // Increased image size
    zodiacItem.appendChild(img);

    zodiacCircle.appendChild(zodiacItem);
  });

  // Add hover effect
  const zodiacItems = document.querySelectorAll(".zodiac-item");
  zodiacCircle.style.animationDuration = "20s"; // Faster speed
  zodiacItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      zodiacCircle.style.animationPlayState = "paused";
    });
    item.addEventListener("mouseout", () => {
      zodiacCircle.style.animationPlayState = "running";
    });
  });

  // Falling shapes
  const shapeContainer = document.getElementById("falling-shapes-container");
  const zodiacImages = [
    "https://plus.unsplash.com/premium_photo-1679941208802-1862b910082d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1679941208863-0e168d0a4b9f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1679941208839-43ddba36971c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1679941208895-91501f622a90?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1679941208830-d621aa499fa1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  function createFallingShape() {
    const shape = document.createElement("div");
    const imageUrl =
      zodiacImages[Math.floor(Math.random() * zodiacImages.length)];
    const shapeType = ["cube", "pyramid", "octahedron"][
      Math.floor(Math.random() * 3)
    ];

    shape.className = `falling-shape shape-${shapeType}`;
    shape.style.left = `${Math.random() * 100}vw`;
    shape.style.animationDuration = `${Math.random() * 5 + 5}s`;

    let sides;
    if (shapeType === "cube") {
      sides = ["front", "back", "right", "left", "top", "bottom"];
    } else if (shapeType === "pyramid") {
      sides = ["front", "back", "right", "left"];
    } else {
      // octahedron
      sides = ["front", "back", "right", "left", "top", "bottom"];
    }

    sides.forEach((side) => {
      const face = document.createElement("div");
      face.className = side;
      face.style.backgroundImage = `url(${imageUrl})`;
      shape.appendChild(face);
    });

    shapeContainer.appendChild(shape);

    // Remove the shape after animation ends
    shape.addEventListener("animationend", () => {
      shape.remove();
    });
  }

  // Create 12 falling shapes (one for each zodiac sign)
  for (let i = 0; i < 12; i++) {
    setTimeout(createFallingShape, i * 500);
  }
});
