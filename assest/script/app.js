const form = document.querySelector("form");
const itemList = document.querySelector("#item-list");
const totalWeight = document.querySelector("#total-weight");
const totalValue = document.querySelector("#total-value");
const maxWeight = document.querySelector("#max-weight");
let clearAllBtn = document.querySelector(".clear-all");
let Error = document.querySelector(".error");
let Add = document.querySelector("#add");

let items = [];
let maxVal = 100; // set the maximum value here // set the maximum value here
form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();

  const itemInput = document.querySelector("#item");
  const weightInput = document.querySelector("#weight");
  const valueInput = document.querySelector("#value");
  const MaximumWeight = document.querySelector("#maxi-weight");

  const item = {
    name: itemInput.value,
    weight: parseInt(weightInput.value),
    value: parseInt(valueInput.value),
    maxw: parseInt(MaximumWeight.value),
  };

  if (item.weight > item.maxw) {
    alert(`The maximum weight allowed is ${item.maxw}`);
    console.log(`The maximum weight allowed is ${item.maxw} and its full`);
    Add.style.backgroundColor = "red";
    Add.disabled = true;
    return;
  }

  console.log(item.maxw, item.weight);
  items.push(item);

  displayItems();

  itemInput.value = "";
  weightInput.value = "";
  valueInput.value = "";
  MaximumWeight.disabled = true;
}

function displayItems() {
  itemList.innerHTML = "";

  items.forEach((item, index) => {
    if (item.weight < item.maxw) {
      const li = document.createElement("li");
      li.innerHTML = `  <span>${item.name}</span>
      <span>${item.weight}Kg</span>
      <span>${item.value}XFA</span>
      <button class="delete" onclick="removeItem(${index})">Remove</button>`;
      itemList.appendChild(li);
    } else {
      alert(`The maximum weight allowed is ${item.maxw}`);
      console.log(`The maximum weight allowed is ${item.maxw} and its full`);
      Add.style.backgroundColor = "red";
      Add.disabled = true;
      return;
    }
  });

  calculateResult();
}

function removeItem(index) {
  items.splice(index, 1);
  displayItems();
}

function calculateResult() {
  let totalWeightValue = 0;
  let totalValueValue = 0;
  let maxWeigh = 0;

  items.forEach((item) => {
    totalWeightValue += item.weight;
    totalValueValue += item.value;
    /*  maxWeight += item.maxw; */
    maxWeigh = item.maxw;
  });

  if (totalWeightValue > maxWeigh) {
    alert(`The maximum weight allowed is ${maxWeigh}`);
    console.log(`The maximum weight allowed is ${maxWeigh} and its full`);
    Add.style.backgroundColor = "red";
    Add.disabled = true;
    return;
  } else {
    totalWeight.textContent = totalWeightValue;
    totalValue.textContent = totalValueValue;
    maxWeight.textContent = maxWeigh;
    return;
  }

  /* maxWeight.textContent = maxWeight; */
}

clearAllBtn.onclick = function reset() {
  window.location.reload();
};

clearAllBtn.addEventListener("click", () => {
  window.location.reload(true);
});
