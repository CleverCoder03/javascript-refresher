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
