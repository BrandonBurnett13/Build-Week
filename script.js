let albums = []
let error = false;

function searchDeezer(query) {
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + query, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "5107a355f0mshff5e59e28a599d4p147358jsn70be46886c1a",
            "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("resolved");

        if (data.data) {
            const obj = { title: query, albums: data.data };
            albums.push(obj);
        } else {
            error = true;
        }
    })
    .catch(err => {
        console.log("rejected");
        console.error(err);
    });
}

window.onload = () => {

    searchDeezer("Pink Floyd");
    searchDeezer("Eric Clapton");
    searchDeezer("Eminem");
};
    // fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-key": "5107a355f0mshff5e59e28a599d4p147358jsn70be46886c1a",
    //         "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
    //     }
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log("resolved");
    //     if (data.data) {
    //         albums = data.data;
    //     } else {
    //         error = true;
    //     }
    // })
    // .catch(err => {
    //     console.log("rejected");
    //     console.error(err);
    // });

    // fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=metallica", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-key": "5107a355f0mshff5e59e28a599d4p147358jsn70be46886c1a",
	// 	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	// }
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log("resolved");
    //     console.log(data);
    // })
    // .catch(err => {
    //     console.log("rejected");
    //     console.error(err);
    // });

    // fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=behemoth", {
	// "method": "GET",
	// "headers": {
	// 	"x-rapidapi-key": "5107a355f0mshff5e59e28a599d4p147358jsn70be46886c1a",
	// 	"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	// }
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //     console.log("resolved");
    //     console.log(data);
    // })
    // .catch(err => {
    //     console.log("rejected");
	//     console.error(err);
    // });
    // };














    
    // audio files

    const audio = new Audio("/assets/louis.wav");

    const audio2 = new Audio("/assets/iron.wav");

    const audio3 = new Audio("/assets/The Beatles - Come Together.wav");

    const audio4 = new Audio("/assets/poppacut.wav");

    const audio5 = new Audio("/assets/korn.wav");

    const audio6 = new Audio("/assets/pressure.wav");