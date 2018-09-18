const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount = 0
let uncheckedCount = 0

function updateItemCount(diff) {
  itemCount += diff
  itemCountSpan.textContent = itemCount
}

function updateUncheckedCount(diff) {
  uncheckedCount += diff
  uncheckedCountSpan.textContent = uncheckedCount
}

function newTodo() {
  const li = document.createElement("li")
  li.classList.add("todo-container")
  list.append(li)

  const content = document.createElement("label")
  content.htmlFor = "todo-checkbox"
  content.textContent = prompt("Enter your new ToDo item!")

  const checkbox = document.createElement("input")
  checkbox.classList.add("todo-checkbox")
  checkbox.setAttribute("type", "checkbox")
  checkbox.onchange = updateCount

  const del = document.createElement("button")
  del.classList.add("todo-delete")
  del.textContent = "delete"
  del.onclick = removeItem

  li.appendChild(checkbox)
  li.appendChild(content)
  li.appendChild(del)

  updateItemCount(1)
  updateUncheckedCount(1)
}

function updateCount() {
  if (this.checked) updateUncheckedCount(-1)
  else updateUncheckedCount(1)
}

function removeItem() {
  var check = this.parentNode.firstChild
  if (check.checked === true) {
    check.checked = false
    updateCount()
  }
  this.parentNode.parentNode.removeChild(this.parentNode)
  updateItemCount(-1)
  updateUncheckedCount(-1)
}
