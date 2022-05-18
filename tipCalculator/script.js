const input = document.querySelector("input");
const output = document.querySelector(".output");
const percentButtons = document.querySelectorAll(".percent-btn");
const resetButton = document.querySelector("#reset-btn");
const otherButton = document.querySelector("#other-btn");

input.focus();

const noInputAlert = () => {
  alert("Please add bill amount before calculating your tip");
  input.focus();
};

const calculateTip = (percentage) => {
  const amount = Number(input.value);
  const percent = Number(percentage);

  const tip = Number((amount * (percent / 100)).toFixed(2));

  output.innerHTML = `Your ${percent.toLocaleString()}% tip of $${amount.toLocaleString()} is $${tip.toLocaleString()}`;
};

for (const button of percentButtons) {
  button.addEventListener("click", (e) => {
    if (!input.value) {
      return noInputAlert();
    }

    const { percentage } = e.target.dataset;
    calculateTip(percentage);
  });
}

otherButton.addEventListener("click", () => {
  if (!input.value) {
    return noInputAlert();
  }

  const percentage = Number(prompt("Please enter other percentage (%)", ""));

  if (percentage === NaN || percentage === 0) {
    return;
  }

  calculateTip(percentage);
});

resetButton.addEventListener("click", () => {
  input.value = "";
  output.innerHTML = "";
  input.focus();
});
