window.onload = () => {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "5107a355f0mshff5e59e28a599d4p147358jsn70be46886c1a",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5107a355f0mshff5e59e28a599d4p147358jsn70be46886c1a",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
    })
    .then(response => {
	console.log(response);
    })
    .catch(err => {
	console.error(err);
    });

    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5107a355f0mshff5e59e28a599d4p147358jsn70be46886c1a",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
    })
    .then(response => {
	console.log(response);
    })
    .catch(err => {
	console.error(err);
    });
    };
