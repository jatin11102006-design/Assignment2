const products = [
    { name: "Smartphone", price: 699, rating: 4.5, category: "Electronics" },
    { name: "Laptop", price: 1200, rating: 4.7, category: "Electronics" },
    { name: "Headphones", price: 199, rating: 4.2, category: "Electronics" },
    { name: "Smart Watch", price: 299, rating: 4.3, category: "Electronics" },
    { name: "Camera", price: 850, rating: 4.6, category: "Electronics" },

    { name: "T-Shirt", price: 25, rating: 4.0, category: "Clothing" },
    { name: "Jeans", price: 55, rating: 4.1, category: "Clothing" },
    { name: "Jacket", price: 120, rating: 4.4, category: "Clothing" },
    { name: "Sneakers", price: 90, rating: 4.5, category: "Clothing" },
    { name: "Cap", price: 15, rating: 3.9, category: "Clothing" },

    { name: "Novel Book", price: 18, rating: 4.3, category: "Books" },
    { name: "Science Book", price: 30, rating: 4.6, category: "Books" },
    { name: "History Book", price: 22, rating: 4.1, category: "Books" },
    { name: "Comics", price: 12, rating: 4.0, category: "Books" },
    { name: "Biography", price: 28, rating: 4.4, category: "Books" },

    { name: "Sofa", price: 500, rating: 4.2, category: "Home" },
    { name: "Chair", price: 80, rating: 4.0, category: "Home" },
    { name: "Table", price: 150, rating: 4.1, category: "Home" },
    { name: "Lamp", price: 45, rating: 3.8, category: "Home" },
    { name: "Curtains", price: 60, rating: 4.3, category: "Home" },

    { name: "Football", price: 35, rating: 4.5, category: "Sports" },
    { name: "Cricket Bat", price: 120, rating: 4.6, category: "Sports" },
    { name: "Badminton Racket", price: 70, rating: 4.4, category: "Sports" },
    { name: "Yoga Mat", price: 25, rating: 4.2, category: "Sports" },
    { name: "Tennis Ball", price: 10, rating: 4.0, category: "Sports" },

    { name: "Face Cream", price: 20, rating: 4.1, category: "Beauty" },
    { name: "Perfume", price: 65, rating: 4.5, category: "Beauty" },
    { name: "Lipstick", price: 18, rating: 4.0, category: "Beauty" },
    { name: "Hair Oil", price: 12, rating: 3.9, category: "Beauty" },
    { name: "Makeup Kit", price: 55, rating: 4.4, category: "Beauty" }
];

const productContainer = document.getElementById("productContainer");
const sortSelect = document.getElementById("sortSelect");
const categoryFilter = document.getElementById("categoryFilter");

function displayProducts(list) {
    productContainer.innerHTML = "";
    list.forEach(p => {
        productContainer.innerHTML += `
            <div class="product">
                <h3>${p.name}</h3>
                <p>Price: $${p.price}</p>
                <p>Rating: ⭐ ${p.rating}</p>
                <p class="category">${p.category}</p>
            </div>
        `;
    });
}

function applyFilters() {
    let filtered = [...products];

    const category = categoryFilter.value;
    if (category !== "all") {
        filtered = filtered.filter(p => p.category === category);
    }

    const sortValue = sortSelect.value;
    if (sortValue) {
        const [key, order] = sortValue.split("-");
        filtered.sort((a, b) => {
            if (key === "name") {
                return order === "asc"
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);
            }
            return order === "asc" ? a[key] - b[key] : b[key] - a[key];
        });
    }

    displayProducts(filtered);
}

sortSelect.addEventListener("change", applyFilters);
categoryFilter.addEventListener("change", applyFilters);

displayProducts(products);
