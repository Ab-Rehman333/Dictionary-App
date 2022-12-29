// getting input 
let getInput = document.querySelector(".getInput")
let getBtn = document.querySelector(".getBtn")
let apiKey = "77c4e85f-423e-453c-b51c-dcd6e379235b";
let notFound = document.querySelector(".notFound")
let getDef = document.querySelector("#random-meaning");
let getAudio = document.querySelector(".randome-meaning-audio")
let Defination = document.querySelector("#Defination")
let loading = document.querySelector("#loading")


getBtn.addEventListener("click", function (e) {

    e.preventDefault()



    // clear fields 
    getDef.innerHTML = ""
    notFound.innerHTML = ""
    getAudio.innerHTML = ""


    let word = getInput.value;
    if (word === "") {
        return
    }

    getData(word);

})


async function getData(word) {

    loading.style.display = "block"
    const response = await fetch(`https://dictionaryapi.com/api/v3/references/spanish/json/${word}?key=538beaf0-b150-47b8-b91d-c4b14de9013b`);
    const getData = await response.json();
    Defination.innerText = "Defination :"

    console.log(getData);
    if (!getData.length) {
        Defination.style.display = "none"
        loading.style.display = "none"
        notFound.innerText = "Sorry Your Result is not Found"
        return
    }

    if (typeof getData[0] === 'string') {
        Defination.style.display = "none"
        loading.style.display = "none"
        let heading = document.createElement('h4')
        heading.innerText = "Did you mean"
        notFound.appendChild(heading);
        getData.forEach(element => {
            let tags = document.createElement("span")
            tags.classList.add("fortags")
            tags.innerText = element;
            notFound.appendChild(tags)

        })
        return
    }


    let defination = getData[0].shortdef[0];
    loading.style.display = "none"
    getDef.innerHTML = defination
    Defination.style.display = "block"


    // const soundName = getBtn[0].hwi.prs[0].sound.audio;
    // if (soundName) {
    //     // renderSound(soundName)
    // }
}
// function renderSound(soundName) {
//     let subFolder = soundName.charAt(0);
//     let soundSrc = `https://media.merriam-webster.com/soundc11/${subFolder}/${soundName}.wav?key=${apiKey}`;

//     let audio = document.createElement("audio")
//     audio.src = soundSrc;
//     audio.controls = true;
//     getAudio.appendChild(audio)

// }
