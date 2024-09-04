// function decodeBase64(encodedString) {
//     return atob(encodedString);
// }

// const keyword_base64 = "aHR0cHM6Ly93YS5tZS82Mjg5OTk4MDgwMDE/dGV4dD13aDR0NWF1dGgw";

// const keyword_decoded = decodeBase64(keyword_base64);

// console.log("Decoded keyword:", keyword_decoded);

function encodedBase64(decodeString){
    return btoa(decodeString);
}

const keyword = "https://wa.me/628991760050?text=wh4t5auth0";

const keyword_encode = encodedBase64(keyword);

console.log("Encoded keyword:", keyword_encode);