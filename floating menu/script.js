const list = document.querySelectorAll(".navigation ul li");

// Function to activate the clicked link
function activeLink() {
  // Remove 'active' class from all items
  list.forEach((item) => {
    item.classList.remove("active");
  });

  // Add 'active' class to the clicked item
  this.classList.add("active");
}

// Attach the click event listener to each list item
list.forEach((item) => {
  item.addEventListener("click", activeLink);
});
