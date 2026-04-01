// //    1. QUANTITY CONTROL (Plus/Minus)

// function changeQty(id, delta) {
//     const inputField = document.getElementById(id);
//     if (inputField) {
//         let currentVal = parseInt(inputField.value) || 1;
//         let newVal = currentVal + delta;

//         // Quantity 1 se kam nahi honi chahiye
//         if (newVal >= 1) {
//             inputField.value = newVal;
//         }
//     }
// }


// //    2. SEARCH FUNCTIONALITY

// document.addEventListener('DOMContentLoaded', function() {
//     const searchForm = document.querySelector('.search-form');
//     const searchInput = document.querySelector('.search-form input');
//     const productCards = document.querySelectorAll('.product-card');

//     if (searchForm) {
//         searchForm.addEventListener('submit', function(e) {
//             e.preventDefault(); // Page refresh hone se rokna
//             const searchTerm = searchInput.value.toLowerCase().trim();

//             productCards.forEach(card => {
//                 const title = card.querySelector('.card-title').innerText.toLowerCase();
                
//                 // Agar search term title mein hai, to dikhao, warna chupa do
//                 if (title.includes(searchTerm)) {
//                     card.parentElement.style.display = "block";
//                 } else {
//                     card.parentElement.style.display = "none";
//                 }
//             });
//         });
//     }

    
//     //    3. ORDER BUTTON ACTION
       
//     const orderButtons = document.querySelectorAll('.btn-maroon, .order-btn');

//     orderButtons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             // Agar link khali hai to action perform kare
//             if (this.getAttribute('href') === "#") {
//                 e.preventDefault();
                
//                 // Card se product ka naam uthana
//                 const card = this.closest('.card') || this.closest('.product-page-wrapper');
//                 const productName = card.querySelector('.card-title, .product-title').innerText;
                
//                 alert(`Shukriya! Aapka "${productName}" ka order process ho raha hai.`);
//             }
//         });
//     });
// });



// // CONTACK INFO


// // Function to open the Contact Modal
// function openContactBox() {
//     const modal = document.getElementById("contactModal");
//     if (modal) {
//         modal.style.display = "block";
//     }
// }

// // Function to close the Contact Modal
// function closeContactBox() {
//     const modal = document.getElementById("contactModal");
//     if (modal) {
//         modal.style.display = "none";
//     }
// }

// // Function to send message to WhatsApp
// function sendToWhatsApp() {
//     const messageInput = document.getElementById("userMessage");
//     const message = messageInput.value.trim();
//     const phoneNumber = "923297225744"; // Your WhatsApp number

//     if (message === "") {
//         alert("Please enter a message before sending.");
//         return;
//     }

//     // Creating WhatsApp API link
//     const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
//     // Open WhatsApp in a new tab
//     window.open(whatsappURL, "_blank");

//     // Clear input and close modal
//     messageInput.value = "";
//     closeContactBox();
// }

// // Close modal if user clicks outside the box
// window.onclick = function(event) {
//     const modal = document.getElementById("contactModal");
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
<!-- <div class="quantity-control-wrapper d-flex align-items-center mb-4">
                            <button class="btn btn-outline-maroon quantity-btn px-3" onclick="changeQty('productQuantity', 1)">+</button>
                            <input type="text" class="form-control quantity-input" value="1" id="productQuantity" readonly>
                            <button class="btn btn-outline-maroon quantity-btn px-3" onclick="changeQty('productQuantity', -1)">-</button>
                        </div>
                         -->
                        <!-- <div class="product-actions d-flex gap-3">
                            <button class="btn btn-maroon flex-grow-1 py-2">Order Now</button>
                            <button class="btn btn-outline-maroon flex-grow-1 py-2">Add to Cart 🛒</button>
                        </div>
                    </div> -->