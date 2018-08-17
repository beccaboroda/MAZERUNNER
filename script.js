let Sphere = document.querySelector("#Sphere")
let Sphere2 = document.querySelector("#Sphere2")
let Player = document.querySelector("#Player")
let monster = document.querySelector("#box-118")
let moster2 = document.querySelector("#box-38")

console.log("loaded!")


Sphere.addEventListener("collide", e => {
    console.log("it workds")
    Player.setAttribute("position", " 12.529 95 20")
})
Sphere2.addEventListener("collide", e => {
    console.log("it workds")
    Player.setAttribute("position", " -6.000 158.634 -11.685")
})

moster2.addEventListener("collide", e => {
    console.log("you lost")
    Player.setAttribute("position", "37 19 -5")
})
monster.addEventListener("collide", e => {
    console.log("you lost")
    Player.setAttribute("position", "37 19 -5")
})

const player = document.querySelector('#player')


player.addEventListener('collide', function(e) {
    console.log(e.detail.contact);

    e.detail.target.el; // Original entity (playerEl).
    e.detail.body.el; // Other entity, which playerEl touched.
    e.detail.contact; // Stats about the collision (CANNON.ContactEquation).
    e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).
});
