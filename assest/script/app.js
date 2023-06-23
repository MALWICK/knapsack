const form = document.querySelector('form')
const itemList = document.querySelector('#item-list')
const totalWeight = document.querySelector('#total-weight')
const totalValue = document.querySelector('#total-value')
const maxWeight = document.querySelector('#max-weight')
const clearAllBtn = document.querySelector('.clear-all')
const Add = document.querySelector('#add')

const itemInput = document.querySelector('#item')
const weightInput = document.querySelector('#weight')
const valueInput = document.querySelector('#value')
const MaximumWeight = document.querySelector('#maxi-weight')

const items = []
form.addEventListener('submit', addItem)

function addItem (e) {
  e.preventDefault()

  const item = {
    name: itemInput.value,
    weight: parseInt(weightInput.value),
    value: parseInt(valueInput.value),
    maxw: parseInt(MaximumWeight.value)
  }

  items.push(item)

  calculateResult()

  itemInput.value = ''
  weightInput.value = ''
  valueInput.value = ''
  MaximumWeight.disabled = true
}

function calculateResult () {
  let totalWeightValue = 0
  let totalValueValue = 0
  let maxWeigh = 0
  let itemName
  let weightInput
  let valueInput

  items.forEach((item) => {
    totalWeightValue += item.weight
    totalValueValue += item.value
    maxWeigh = item.maxw
    itemName = item.name
    weightInput = item.weight
    valueInput = item.value
  })

  if (totalWeightValue > maxWeigh) {
    window.alert(`The maximum weight allowed is ${maxWeigh}`)
    console.log(`The maximum weight allowed is ${maxWeigh} and its full`)
    Add.style.backgroundColor = 'red'
    Add.disabled = true
  } else {
    const li = document.createElement('li')
    li.style.backgroundColor = '#afe1af'
    li.innerHTML = `  <span>${itemName}</span>
      <span>${weightInput}Kg</span>
      <span>${valueInput}XFA</span>
     `
    itemList.appendChild(li)
    totalWeight.textContent = totalWeightValue
    totalValue.textContent = totalValueValue
    maxWeight.textContent = maxWeigh
  }
}

clearAllBtn.onclick = function reset () {
  window.location.reload()
}

clearAllBtn.addEventListener('click', () => {
  window.location.reload(true)
})
