const items = [
  { name: "book", weight: 8, value: 200 },
  { name: "pen", weight: 2, value: 100 },
  { name: "ruler", weight: 4, value: 300 },
  { name: "pencil", weight: 3, value: 100 },
  { name: "calculator", weight: 5, value: 1000 },
  { name: "sweet", weight: 1, value: 50 },
  { name: "biscuit", weight: 3, value: 25 },
  { name: "bread", weight: 6, value: 100 },
  { name: "doughnut", weight: 7, value: 50 },
  { name: "cake", weight: 5, value: 125 },
  { name: "shoe", weight: 12, value: 5000 },
  { name: "balloon", weight: 5, value: 25 },
  { name: "computer", weight: 50, value: 100000 },
  { name: "iPhone", weight: 15, value: 300000 },
  { name: "stopwatch", weight: 2, value: 800 },
  { name: "t-shirt", weight: 4, value: 2500 },
  { name: "coat", weight: 8, value: 15000 },
  { name: "handkerchief", weight: 2, value: 700 },
  { name: "USB-key", weight: 3, value: 5000 },
  { name: "smartphone", weight: 2, value: 75000 },
];

const options = document.getElementById("select");
const maxCapacity = document.querySelector(".capacity");
const results = document.querySelector(".final-state");
const done = document.querySelector(".btn1");
const add = document.querySelector(".btn2");
const restart = document.querySelector(".btn3");
const itemList = document.querySelector("#item-list");
const maxi = document.querySelector(".max-res");
let sumWeight = 0;
let sumValue = 0;

done.onclick = function () {
  const inputVal = maxCapacity.value;
  maxCapacity.disabled = true;
  done.disabled = true;

  if (inputVal === "") {
    window.alert("Please enter the max-width of the knapsack");
    window.location.reload();
  }

  add.addEventListener("click", () => {
    for (let i = 0; i < items.length; i++) {
      if (options.value === items[i].name) {
        sumWeight += items[i].weight;
        sumValue += items[i].value;
        console.log(sumWeight);
        console.log(sumValue);
        if (sumWeight <= inputVal) {
          itemList.style.backgroundColor = "#e2f4e2";
          const li = document.createElement("li");
          li.innerHTML = `  <span>${options.value}</span>
            <span>${items[i].weight}kg</span>
            <span>${items[i].value}fcfa</span>`;
          itemList.appendChild(li);

          const deleteBtn = document.createElement("button");
          deleteBtn.innerText = "Delete";
          deleteBtn.classList.add("delete");
          li.appendChild(deleteBtn);

          deleteBtn.addEventListener("click", () => {
            sumWeight -= items[i].weight;
            li.remove();
          });

          results.innerHTML = `
            <div>
              <p>Total weight: ${sumWeight}</p>
              <p>Total value(XAF): ${sumValue}</p>
              <p><p>
            </div>`;

          add.style.backgroundColor = "#4caf50";
          maxi.innerHTML= `
            <p>Max weight: ${inputVal}</p>
          `
        }
        if (sumWeight > inputVal) {
          window.alert(
            `Exceeded maximum weight of ${inputVal}kg. You can reduce the items in the knapsack.`
          );
          done.disabled = true;
          done.style.backgroundColor = "#f08080";
          itemList.style.backgroundColor = "#f08080";
          add.style.backgroundColor = "#f08080";
          add.disabled = true;
         options.disabled = true;
          options.style.backgroundColor = "#f08880";
          restart.style.backgroundColor = "#f00080"
          maxi.style.backgroundColor = "#f00080"
        }
      }
    }
  });
};

restart.onclick = function () {
  window.location.reload();
};
