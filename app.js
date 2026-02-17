// console.log("kaj ki kore naki?????")

const loadProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => displayProducts(json)) 
    .catch((error) => console.error("Error:", error));
};

const displayProducts = (products) => {

  // 1. get the container and empty
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = "";

  // 2. loop through every product
  products.slice(0, 3).forEach((product) => {

    // 3. create element
    const div = document.createElement("div");
    div.classList.add( "bg-white","rounded-xl","shadow","hover:shadow-lg","transition","p-4","flex","flex-col");

    div.innerHTML = `
      <div class="h-48 flex items-center justify-center">
        <img src="${product.image}" 
             alt="${product.title}" 
             class="h-full object-contain" />
      </div>

      <h3 class="font-semibold mt-4">
        ${product.title}
      </h3>

      <p class="text-indigo-600 font-bold mt-2">
        $${product.price}
      </p>

      <div class="flex justify-between mt-4">
        <button class="px-4 py-2 border rounded hover:bg-gray-100">
          Details
        </button>

        <button class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
          Add
        </button>
      </div>
    `;

    // 4. append into container
    productContainer.appendChild(div);
  });
};

loadProducts();