const stars = 40;
const sky = document.querySelector("#sky");
sky.innerHTML = `
<div class="sky__phase sky__dawn"></div>
	<div class="sky__phase sky__noon"></div>
	<div class="sky__phase sky__dusk"></div>
	<div class="sky__phase sky__midnight">
		<div id="sky__stars"></div>
	</div>
	<div class="orbit">
		<div class="sun"></div>
		<div class="moon"></div>
	</div>`;
const snow = document.getElementById('snow');
for(let i1 = 0; i1 < 50; i1++){
    let snowFlake = document.createElement('div');
    snowFlake.classList.add('snowflake');
    snow.appendChild(snowFlake);
}
const skyStars = document.getElementById("sky__stars");
// Generate stars randomly using absolute position
function createStars() {
    for(let i = 0; i < stars; i++){
        let x = Math.floor(Math.random() * 100 + 1);
        let y = Math.floor(Math.random() * 100 + 1);
        const starPoint = document.createElement("div");
        starPoint.style.left = `${x}%`;
        starPoint.style.top = `${y}%`;
        skyStars.appendChild(starPoint);
    }
}
createStars();

//# sourceMappingURL=index.1c08766c.js.map
