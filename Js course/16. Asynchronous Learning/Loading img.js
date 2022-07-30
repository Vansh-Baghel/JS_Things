// let loadImg = document.createElement("img");

// let timer = function (seconds) {
//   return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
// };

// let divEl = document.getElementsByClassName("image");

// function deleteImg(input) {
//   () => (input.src = "");
// }

// function imgInsert(imgPath) {
//   // Created img element in html using DOM

//   // Did set the attribute of src to the input value of the createImage function

//   loadImg.src = `${imgPath}`;
//   console.log(loadImg.src);
//   // Inserted the img into the div of the html
//   document.getElementById("img").appendChild(loadImg);
// }

// function createImage(imgPath1, imgPath2) {
//   return new Promise((resolve, reject) => {
//     resolve(
//       // Here I added the timer so that the img takes 2 sec to load
//       timer(2)
//         .then(() => {
//           imgInsert(`${imgPath1}`);
//         })
//         .then(() => deleteImg(loadImg))
//         .then(() => timer(2).then(() => imgInsert(`${imgPath2}`)))
//         .then(() => deleteImg(loadImg))
//     );
//     if (!resolve) reject(console.error("Img has failed to load!"));
//   });
// }

// createImage(
//   "/Resources_imgs,pdfs/keep going.jpg",
//   "/Resources_imgs,pdfs/congrats.gif"
// );

/////////////////////////////////
// Lecture method

let imgContainer = document.querySelector(".images");

let timer = function (seconds) {
  return new Promise((response) => {
    setTimeout(response, seconds * 1000);
  });
};

let createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    let img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
      console.log("Img loaded");
    });

    img.addEventListener("load", () => reject(new Error("Image not found")));
  }).catch((err) => console.log(err.message));
};

let currentImg;

createImage("/Resources_imgs,pdfs/keep going.jpg")
  .then((img) => {
    currentImg = img;
    /* This timer will convey that the first img must be loaded after 2 sec */
    return timer(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    createImage("/Resources_imgs,pdfs/congrats.gif");
  })
  .then((img) => {
    currentImg = img;
    return timer(2);
  })
  .catch((err) => console.log(err));
