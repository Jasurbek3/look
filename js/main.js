const customersList = document.querySelector('.customers-list')
const foodsSelect = document.querySelector('#foodsSelect')
const ordersList = document.querySelector('.orders-list')
const clientId = document.querySelector('#clientId')
const customerName = document.querySelector('.customer-name')
const userAdd = document.querySelector('#userAdd')
const usernameInput = document.querySelector("#usernameInput")
const telephoneInput = document.querySelector("#telephoneInput")
const foodsForm = document.querySelector("#foodsForm")
const foodsCount = document.querySelector('#foodsCount')

function renderUsers() {
    customersList.innerHTML = null
    for (const user of users) {
        // console.log(user)
        // const  li = document.createElement('li')
        // const span = document.createElement('span')
        // const  a = document.createElement('a')
        const [li, span, a] = createElement('li', 'span', 'a')
        li.classList.add('customer-item')
        span.classList.add('customer-name')
        a.classList.add('customer-phone')

        a.setAttribute('href', 'tel:' + user.contact)
        span.textContent = user.userName
        a.textContent = user.contact

        li.append(span, a)
        customersList.append(li)
        // console.log(li)

        li.addEventListener('click', function () {
            renderOrder(user.userId)
            clientId.textContent = user.userId
            customerName.textContent = user.userName
        })
    }
}

function renderFoods() {
    for (const food of foods) {
        // console.log(food)
        const [option] = createElement('option')
        option.textContent = food.foodName
        option.value = food.foodId
        //  console.log(option)
        foodsSelect.append(option)

    }
}

function renderOrder(userId) {
    ordersList.innerHTML = null
    for (const order of orders) {

        if (!(order.userId == userId)) continue
        const food = foods.find(el => el.foodId == order.foodId)

        const [elLi, elImg, elDiv, elName, elCount] = createElement('li', 'img', 'div', 'span', 'span')
        elLi.classList.add('order-item')
        elName.classList.add('order-name')
        elCount.classList.add('order-count')

        elName.textContent = food.foodName
        elCount.textContent = order.count
        elImg.setAttribute('src', "./img/" + food.foodImg)

        elDiv.append(elName, elCount)
        elLi.append(elImg, elDiv)
        ordersList.append(elLi)

    }
}

function addUser(event) {
    // console.log(event)
    event.preventDefault()
    const userName = usernameInput.value.trim()
    const contact = telephoneInput.value.trim()

    if (!userName || userName.length > 30 || !isNaN(userName)) {
        alert("Client ismi xato❌")
    }
    // /998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/
    if (!(/998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/).test(contact)) {
        return alert("telefon nomer xato kiritilgan🚫")
    }

    const newUser = {
        userId: users.length ? users[users.length - 1].userId + 1 : 1,
        userName: userName,
        contact
    }
    console.log(newUser)

    users.push(newUser)
    window.localStorage.setItem('users', JSON.stringify(users))
    return renderUsers()
}

function addOrder(event) {
    event.preventDefault()
    const foodId = foodsSelect.value.trim()
    const count = foodsCount.value.trim()
    const userId = clientId.textContent

    let order = orders.find(el => el.foodId == foodId && el.userId == userId)
    // console.log(order)
    if (!count || +count > 10 || !userId) {
        alert("Notog'ri zakaz qildingiz")
        return
    }

    if (order) {
        order.count = +count + +order.count
    } else {
        newOrder = {
            foodId: foodId,
            userId,
            count
        }

        orders.push(newOrder)
        window.localStorage.setItem('orders', JSON.stringify(orders))
    }

    return renderOrder(userId)



}



userAdd.addEventListener('submit', function (event) {
    addUser(event)
})

foodsForm.addEventListener('submit', function (event) {
    addOrder(event)
})

renderUsers()
renderFoods()
renderOrder()