let device = [
    {
        id: "3",
        name: "Tablet",
        quantity: "8",
        image:
            "https://cdn.tgdd.vn//News/1420010//nen-mua-ipad-hay-may-tinh-bang-android-(1)-730x408.jpg",
        price: "500",
    },
    {
        id: "2",
        name: "Phone",
        quantity: "10",
        image:
            "https://images.expertreviews.co.uk/wp-content/uploads/2023/03/best_android_smartphone_uk_2023_phones.jpg",
        price: "800",
    },
    {
        id: "1",
        name: "Laptop",
        quantity: "5",
        image:
            "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn//News/1499078//laptop-15-800x450-1.jpg",
        price: "1200",
    },
];

function print(devices) {
    document.getElementById("result").innerHTML = "";
    for (let i = 0; i < devices.length; i++) {
        document.getElementById(
            "result"
        ).innerHTML += `<center><div style='flex:30%, wrap: true'>
      <p>ID: ${devices[i].id}</p>
      <p id='name'>Name:  ${devices[i].name}</p>
      <p id='quantity'>Quantity:  ${devices[i].quantity}</p>
      <img id='img' width=250 height=180 src='${devices[i].image}' />
      <p id='price'>Price: ${devices[i].price}</p>
      </div></center>`;
    }
}

function sort() {
    document.getElementById("result").innerHTML = "";
    let sortedByName = device.sort((a, b) =>
        a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1
    );
    print(device);
}



function addBottom() {
    let id = device.length + 1;
    let nameInput = document.getElementById("nameInput").value;
    let quantityInput = parseInt(
        document.getElementById("quantityInput").value
    );
    let imgInput = document.getElementById("imgInput").value;
    let priceInput = parseFloat(
        document.getElementById("priceInput").value
    );
    if (validation(id, nameInput, quantityInput.imgInput, priceInput)) {
        if (!isDup(nameInput)) {
            device.push({
                id,
                name: nameInput,
                quantity: quantityInput,
                image: imgInput,
                price: priceInput,
            });
            document.getElementById("warning").innerHTML = "SUCCESSFULLY ADDED!";
        }
    }
    print(device);
}

function addTop() {
    let id = device.length + 1;
    let nameInput = document.getElementById("nameInput").value;
    let quantityInput = parseInt(
        document.getElementById("quantityInput").value
    );
    let imgInput = document.getElementById("imgInput").value;
    let priceInput = parseFloat(
        document.getElementById("priceInput").value
    );
    if (validation(id, nameInput, quantityInput.imgInput, priceInput)) {
        if (!isDup(nameInput)) {
            device.unshift({
                id,
                name: nameInput,
                quantity: quantityInput,
                image: imgInput,
                price: priceInput,
            });
            document.getElementById("warning").innerHTML = "SUCCESSFULLY ADDED!";
        }
    }
    print(device);
}
function searchByName() {
    let nameInput = document.getElementById("search").value;
    if (validation(nameInput)) {
        let searched = [{}];
        for (let i = 0; i < device.length; i++) {
            if (nameInput.toLowerCase() === device[i].name.toLowerCase()) {
                searched.push({ "id": device[i].id, "name": device[i].name, "quantity": device[i].quantity, "image": device[i].image, "price": device[i].price })
            }
        }
        searched.shift()
        print(searched);
    }
}
function removeByID() {
    let id = document.getElementById("remove").value;
    for (let i = 0; i < device.length; i++) {
        if (device[i].id === id) {
            device.splice(i, 1);
            print(device);
        }
    }

}

function isDup(nameInput) {
    for (let i = 0; i < device.length; i++) {
        if (nameInput.toLowerCase() === device[i].name.toLowerCase()) {
            alert("DUPLICATE DEVICE!")
            return true;
        }
    }
    return false;
}
function validation() {
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] == "") {
            alert("Please enter the information needed! ");
            return false;
        }
    }
    return true;
}
function edit() {
    let nameInput = document.getElementById("nameInput2").value;
    let quantityInput = parseInt(
        document.getElementById("quantityInput2").value
    );
    let imgInput = document.getElementById("imgInput2").value;
    let priceInput = parseFloat(
        document.getElementById("priceInput2").value
    );
    let change = document.getElementById("edit").value;
    for (let i = 0; i < device.length; i++) {
        if (device[i].id === change) {
            device[i].quantity = quantityInput;
            device[i].price = priceInput;
            device[i].image = imgInput;
            device[i].name = nameInput;
        }
    }
    print(device);
}
