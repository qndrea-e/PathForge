/* =====================================================
   PlayForge JavaScript
===================================================== */

// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(".section");

function revealOnScroll() {

    revealElements.forEach(section => {

        const windowHeight = window.innerHeight;
        const revealTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {
            section.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===============================
// Navbar Shadow
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.boxShadow = "0 5px 25px rgba(0,0,0,.45)";

    }

    else{

        navbar.style.boxShadow = "none";

    }

});


// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll", ()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// Floating Particles
// ===============================

const particleContainer = document.createElement("div");

particleContainer.id = "particles";

document.body.appendChild(particleContainer);

for(let i=0;i<35;i++){

    const particle=document.createElement("span");

    particle.className="particle";

    particle.style.left=Math.random()*100+"vw";

    particle.style.animationDuration=6+Math.random()*8+"s";

    particle.style.animationDelay=Math.random()*8+"s";

    particle.style.opacity=Math.random();

    particleContainer.appendChild(particle);

}


// ===============================
// Hover Glow Effect
// ===============================

const cards=document.querySelectorAll(".feature-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});


// ===============================
// Console Welcome
// ===============================

console.log(
`
⚒️ Welcome to PlayForge!

Forge Your Path.
Escape Mechatria.

Knowledge earns the tile.
Ethics builds the path.
Integrity opens the gate.
`
);
