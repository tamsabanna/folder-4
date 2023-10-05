const select = document.getElementById("select");
const body = document.body;

const myfunction = () =>{
    switch (select.value) {
        case "aries":
            body.style.backgroundColor = "red";
            break;
        case "Taurus":
            body.style.backgroundColor = "blue";
            break;
        case "Gemini":
            body.style.backgroundColor = "yellow";
            break;
        case "Cancer":
            body.style.backgroundColor = "pink";
            break;
        case "Leo":
            body.style.backgroundColor = "black";
            break;
        case "Virgo":
            body.style.backgroundColor = "gray";
            break;
        case "Libra":
            body.style.backgroundColor = "green";
            break;
        case "Scorpius":
            body.style.backgroundColor = "purple";
            break;
        case "Sagittarius":
            body.style.backgroundColor = "orange";
            break;
        case "Capricornus":
            body.style.backgroundColor = "lightgreen";
            break;
        case "Aquarius":
            body.style.backgroundColor = "aqua";
            break;
        case "Pisces":
            body.style.backgroundColor = "lightblue";
            break;
    
        default:
            body.style.backgroundColor = "white";
            break;
    }
};