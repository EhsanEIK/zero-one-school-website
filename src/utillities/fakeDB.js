// add to local storage
const addToDB = id => {
    const courseCart = getDataFromDB();
    let quantity = courseCart[id];
    if (quantity) {
        courseCart[id] = quantity + 1;
    }
    else {
        courseCart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(courseCart));
}

// get data from local storage
const getDataFromDB = () => {
    let courseCart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        courseCart = JSON.parse(storedCart);
    }
    return courseCart;
}

export { addToDB, getDataFromDB }