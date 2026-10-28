
const form = document.getElementById("marksForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("studentName")
    .value.trim();

  const subjectIds = [
    "maths",
    "english",
    "science",
    "computer",
    "social"
  ];

  const marks = subjectIds.map(id =>
    Number(document.getElementById(id).value)
  );

  // Validate marks
  const validMarks = marks.every(mark =>
    Number.isInteger(mark) && mark >= 0 && mark <= 100
  );

  if (!name || !validMarks) {
    alert("Please enter a name and valid whole-number marks from 0 to 100.");
    return;
  }

  // Calculate total and percentage
  const total = marks.reduce(
    (sum, mark) => sum + mark, 0
  );

  const percentage = total / 5;

  // Grade rules for this demo
  let grade;

  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 80) {
    grade = "A";
  } else if (percentage >= 70) {
    grade = "B";
  } else if (percentage >= 60) {
    grade = "C";
  } else if (percentage >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Pass if every subject has at least 35 marks
  const passed = marks.every(mark => mark >= 35);
  const status = passed ? "PASS" : "FAIL";

  // Display result
  document.getElementById("resultName").textContent =
    "Name: " + name;

  document.getElementById("total").textContent =
    total + " / 500";

  document.getElementById("percentage").textContent =
    percentage.toFixed(2) + "%";

  document.getElementById("grade").textContent = grade;

  const statusElement = document.getElementById("status");
  statusElement.textContent = status;
  statusElement.style.color = passed ? "#15803d" : "#dc2626";

  document.getElementById("message").textContent =
    passed
      ? "Congratulations! You passed all subjects."
      : "You did not pass all subjects. Please review your marks.";

  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "start" });
});
