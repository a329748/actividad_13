const acquireHelmet = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Acquiring helmet");
	}, 1*1000)
})

const acquireGloves = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Acquiring gloves");
	}, 2*1000)
})

const ride = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Riding bicycle");
	}, 8*1000)
})

const bikeRiding = () => {
	acquireHelmet
		.then(helmetMessage => {
			console.log(helmetMessage);
			document.getElementById("update")
					.innerHTML = `Current task: ${helmetMessage}`;
			return acquireGloves;
		})
		.then(glovesMessage => {
			console.log(glovesMessage);
			document.getElementById("update")
					.innerHTML = `Current task: ${glovesMessage}`;
			return ride;
		})
		.then(bikeMessage => {
			console.log(bikeMessage);
			document.getElementById("update")
					.innerHTML = `Current task: ${bikeMessage}`;
			return bikeMessage;
		})
		.catch(error => {
			document.getElementById("update")
					.innerHTML = error;
			console.log(error);
		})
		.finally(() => {
			setTimeout(() => {
				console.log("All tasks have been finished.");
				document.getElementById("update")
						.innerHTML = "All tasks have been finished.";
			}, 1*1000)
		})
}

bikeRiding();