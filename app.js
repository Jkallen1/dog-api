// fetch('https://dog.ceo/api/breeds/image/random').then(function(value) { return value.json() }).then((json) => {

//     const image = document.querySelector('img')
//     image.src = json.message
// })


fetch('https://dog.ceo/api/breed/husky/images/random').then(function (value) {
    return value.json()
}).then((json) => {

    const image = document.querySelector('img')
    image.src = json.message
})

//https://dog.ceo/api/breed/Husky/images/random