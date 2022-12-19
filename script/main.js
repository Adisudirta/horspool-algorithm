const searchInput = document.getElementById("search-input");
const buttonInput = document.getElementById("search-button");

render(students);

buttonInput.addEventListener("click", function () {
  students.forEach((student) => {
    const isMatch = horspool(
      searchInput.value.toLowerCase(),
      student.name.toLowerCase()
    );

    if (isMatch === -1) {
      student.isActive = false;
    } else {
      student.isActive = true;
    }
  });

  render(students);
});
