document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    document.getElementById("myParagraph").textContent =
      "This is new paragraph";
  });

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    document
      .getElementById("citiesList")
      .firstElementChild.classList.add("highlight");
  });

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffee = document.getElementById("coffeeType");
  coffee.textContent = "Espresso";
  coffee.style.backgroundColor = "red";
});

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";

  document.getElementById("shoppingList").appendChild(newItem);
});

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove();
  });

document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("Are you Senpai?!");
});

document.getElementById("teaList").addEventListener("click", function (e) {
  console.log(e.target.textContent.toUpperCase());
  if (e.target && e.target.matches(".teaItem")) {
    alert(`Selected item is ${e.target.textContent.toUpperCase()}`);
  }
});

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let label =
      document.getElementById("feedbackForm").firstElementChild.textContent;

    let newP = document.createElement("p");
    newP.textContent = label.toUpperCase();

    newP.style.color = "#fff";

    document.getElementById("example-8").appendChild(newP);

    let value = document.getElementById("feedbackInput").value.toUpperCase();

    document.getElementById("feedbackDisplay").textContent = value;
  });

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    document.getElementById("descriptionText").classList.toggle("highlight");
  });
