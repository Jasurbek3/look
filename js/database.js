let users = window.localStorage.getItem("users")
let foods = window.localStorage.getItem("foods")
let orders = window.localStorage.getItem("orders")



users = JSON.parse(users) || [
    { userId: 1, userName: "Quvondiq", contact: "+99899777655" },
    { userId: 2, userName: "Rahimjon", contact: "+99899777668" },
    { userId: 3, userName: "Timur", contact: "+99899777613" },
    { userId: 4, userName: "Jasurbek", contact: "+9989977766" },
];
foods = JSON.parse(foods) || [
    { foodId: 1, foodName: "burger_cheese", foodImg: "burger_cheese.jpeg" },
    { foodId: 2, foodName: "chicken_togora", foodImg: "chicken_togora.jpeg" },
    { foodId: 3, foodName: "chicken_wings", foodImg: "chicken_wings.jpeg" },
    { foodId: 4, foodName: "cola", foodImg: "cola.jpeg" },
    { foodId: 5, foodName: "combo", foodImg: "combo.jpeg" },
    { foodId: 6, foodName: "fanta", foodImg: "fanta.jpeg" },
    { foodId: 7, foodName: "spinner", foodImg: "spinner.jpeg" },
];
orders = JSON.parse(orders) || [
    { userId: 2, foodId: 1, count: 1 },
    { userId: 1, foodId: 3, count: 1 },
    { userId: 3, foodId: 5, count: 3 },
    { userId: 4, foodId: 7, count: 2 },
]
