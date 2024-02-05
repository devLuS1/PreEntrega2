let username = "";
let password = "";

//Login
alert("Welcome to SKY Shop.\nPlease sign in to start shopping.");

while (username === "" || password === "") {
    username = prompt("Enter a username: ");
    password = prompt("Enter a password: ");
    if (username !== "" && password !== "") {
        alert("Successful Login. Welcome " + username + " to SKY Shop");
    } else {
        alert("Please enter a valid username and password");
    }
}

//Products
const products = [
    { id: 1, category: "Tops", name: "Gael Top", price: 68 },
    { id: 2, category: "Tops", name: "Hailee Top", price: 129 },
    { id: 3, category: "Tops", name: "Audrina T-shirt", price: 45 },
    { id: 4, category: "Dresses", name: "Megan Mini Dress", price: 229 },
    { id: 5, category: "Dresses", name: "Serena Dress", price: 175 },
    { id: 6, category: "Dresses", name: "Tara Dress", price: 138 },
    { id: 7, category: "Jackets", name: "Pearl Jacket", price: 325 },
    { id: 8, category: "Jackets", name: "Ivy Faux Leather Jacket", price: 199 },
    { id: 9, category: "Sweaters", name: "Melrose Sweater", price: 128 },
    { id: 10, category: "Sweaters", name: "Ellie Sweater", price: 98 },
    { id: 11, category: "Sweaters", name: "Lexie Sweater", price: 165 },
    { id: 12, category: "Pants", name: "Lilah Pant", price: 109 },
    { id: 13, category: "Pants", name: "Amanda Pant", price: 128 },
    { id: 14, category: "Pants", name: "Stevie Faux Leather Pant", price: 152 },
    { id: 15, category: "Shorts", name: "Anna Short", price: 89 },
    { id: 16, category: "Shorts", name: "Parker Short", price: 119 },
    { id: 17, category: "Skirts", name: "Maya Skirt", price: 128 },
    { id: 18, category: "Skirts", name: "Polly Mini Skirt", price: 88 },
];

//Cart
class Cart {
    constructor() {
        this.products = [];
        this.discount = 10;
        this.minProductsQuantityDiscount = 5;
    }

    addProduct(id) {
        let product = products.find(prod => prod.id === id);

        if (product) {
            this.products.push(product);
            alert("You added " + product.name + " to your cart.");
        }
    }

    showCartProducts() {
        let productList = "";

        this.products.forEach(item => {
            productList += item.name + " - $" + item.price + "\n";
        });

        return productList;
    }

    productsQuantity() {
        return this.products.length;
    }

    applyDiscount() {
        if (this.productsQuantity() >= this.minProductsQuantityDiscount) {
            return Math.round((this.estimatedTotal() * this.discount) / 100);
        } else {
            return 0;
        }
    }

    estimatedTotal() {
        let subTotal = 0;

        this.products.forEach(item => {
            subTotal += item.price;
        });

        return subTotal;
    }
}

function showProducts() {
    let productList = "";

    products.forEach(item => {
        productList += item.id + " - " + item.name + " - $" + item.price + "\n";
    });

    return productList;
}

function finalAmount() {
    return Math.round(cart.estimatedTotal() - cart.applyDiscount());
}

//Purchase
const cart = new Cart();
let option = "";

while (option != "0") {
    option = parseInt(prompt("Select the product to add to the Cart: \n\n" + showProducts() + "\n Press 0 to finish"));

    if (option === "0") {
        break;
    }

    cart.addProduct(option);
}

let buyProducts = "Order Summary:\n" + cart.showCartProducts();
let subTotalAmount = "Subtotal: $" + cart.estimatedTotal();
let discountAmount = "Discount: $" + cart.applyDiscount();
let totalPrice = "Estimated Total: $" + finalAmount();
alert(buyProducts + "\n" + subTotalAmount + "\n" + discountAmount + "\n" + totalPrice);
alert("Purchase finished. Thank you for shopping at SKY Shop!");