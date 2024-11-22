const menuEmail = document.querySelector(".navbar-email");
const burguerMenu = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    };

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    };

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 300,
    image: 'https://www.worldcomputers.com.ec/wp-content/uploads/2022/03/Computador-de-escritiorio.webp',
});
productList.push({
    name: 'Laptop',
    price: 350,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT84Fy08oMXKt99j3kD-x7c4s3YMMnWA5fbFA&s',
});
productList.push({
    name: 'Tablet',
    price: 250,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMMcmyCUXbTQ0r1b1uEQGAGMxOKbP77PJsg&s',
});
productList.push({
    name: 'Televisor',
    price: 400,
    image: 'https://compucentro.co/wp-content/uploads/18471476-800-auto.png',
});
productList.push({
    name: 'Nevera',
    price: 600,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7a_pTd5gPVjlTdHkNkXwhvbAC7gx3kuexXg&s',
});

/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
*/

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfofigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', 'icons/bt_add_to_cart.svg');
    
        productInfofigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfofigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);    
     }
}
 
renderProducts(productList);