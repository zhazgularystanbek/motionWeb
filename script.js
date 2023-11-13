// const techBlock = document.querySelector(".tech-block");
// const techTool = document.querySelectorAll(".tech-tool");

// function fil() {
//   techBlock.addEventListener("click", (e) => {
//     const targetId = e.target.dataset.id;

//     switch (targetId) {
//       case "frontendtool":
//         getItems(targetId);
//         break;
//       case "backendtool":
//         getItems(targetId);
//         break;
//       case "uitool":
//         getItems(targetId);
//         break;
//       case "dbtool":
//         getItems(targetId);
//         break;
//     }
//   });
// }
// fil();
// function getItems(clName) {
//   techTool.forEach((item) => {
//     if (item.classList.contains(clName)) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// }
const frcl = document.querySelector(".fr-cl"),
  bcl = document.querySelector(".b-cl"),
  uicl = document.querySelector(".ui-cl"),
  dbcl = document.querySelector(".db-cl"),
  frtool = document.querySelectorAll(".frontendtool"),
  btool = document.querySelectorAll(".backendtool"),
  uitool = document.querySelectorAll(".uitool"),
  dbtool = document.querySelectorAll(".dbtool");

frcl.addEventListener("click", () => {
  frtool.forEach((item) => {
    item.style.display = "block";
  });
  btool.forEach((item) => {
    item.style.display = "none";
  });
  uitool.forEach((item) => {
    item.style.display = "none";
  });
  dbtool.forEach((item) => {
    item.style.display = "none";
  });
});

bcl.addEventListener("click", () => {
  frtool.forEach((item) => {
    item.style.display = "none";
  });
  btool.forEach((item) => {
    item.style.display = "block";
  });
  uitool.forEach((item) => {
    item.style.display = "none";
  });
  dbtool.forEach((item) => {
    item.style.display = "none";
  });
});

uicl.addEventListener("click", () => {
  frtool.forEach((item) => {
    item.style.display = "none";
  });
  btool.forEach((item) => {
    item.style.display = "none";
  });
  uitool.forEach((item) => {
    item.style.display = "block";
  });
  dbtool.forEach((item) => {
    item.style.display = "none";
  });
});

dbcl.addEventListener("click", () => {
  frtool.forEach((item) => {
    item.style.display = "none";
  });
  btool.forEach((item) => {
    item.style.display = "none";
  });
  uitool.forEach((item) => {
    item.style.display = "none";
  });
  dbtool.forEach((item) => {
    item.style.display = "block";
  });
});
