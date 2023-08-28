
const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products', id: 'product', child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ]
    },
    { name: 'Contact Us', id: 'contact' },
  ];
  
  function createTopMenu() {
    const topMenu = document.querySelector('.top-menu-list');
    
    navbar.forEach(item => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = item.name;
      a.href = `#${item.id}`;
      li.appendChild(a);
      
      if (item.child) {
        const subMenu = document.createElement('ul');
        subMenu.classList.add('sub-menu');
        item.child.forEach(subItem => {
          const subLi = document.createElement('li');
          const subA = document.createElement('a');
          subA.textContent = subItem.name;
          subA.href = `#${subItem.id}`;
          subLi.appendChild(subA);
          subMenu.appendChild(subLi);
        });
        li.appendChild(subMenu);
      }
      
      topMenu.appendChild(li);
    });
  }
  
  // Call the createTopMenu function when the window loads
  window.onload = function () {
    createTopMenu();
  };

// Function to validate the form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (name === "" || email === "" || message === "") {
      alert("All fields must be filled out");
      return false;
    }
  
   
  
    return true;
  }
  
  // Function to toggle the display of the contact form
  function toggleContactForm() {
    var contactForm = document.getElementById("contact-form");
    if (contactForm.style.display === "none" || contactForm.style.display === "") {
      contactForm.style.display = "block";
    } else {
      contactForm.style.display = "none";
    }
  }
  
  // Add an event listener to the "Contact Us" link
  var contactLink = document.getElementById("contact-link");
  if (contactLink) {
    contactLink.addEventListener("click", function (event) {
      event.preventDefault();
      toggleContactForm();
    });
  }
  

// Function to fetch and display product data
async function fetchProductData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      
      const productList = document.getElementById("product-list");
      productList.innerHTML = products.map(product => `
        <li>
          <img src="${product.image}" alt="${product.title}">
          <p>${product.title}</p>
        </li>
      `).join("");
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }
  
  // Call the fetch function when the page loads
  window.addEventListener("load", fetchProductData);
  