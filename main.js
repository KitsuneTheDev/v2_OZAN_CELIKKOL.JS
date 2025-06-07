(() => {
    const buildHTML = () => {
        const html = `
          <div class="carousel-body">
            <div class="left-arrow-container"><span>&lt;</span></div>
            <div class="main-content-container">
            <h2 class="carousel-header">Sizin için Seçtiklerimiz</h2>
            <div class="card-content"></div>
            </div>
            <div class="right-arrow-container"><span>&gt;</span></div>
        </div>
        `
    const container = document.querySelector(".Section3");
    container.innerHTML = html;
    }

    const buildCSS = () => {
        const CSS = `
    .left-arrow-container{
      padding-right: 5px;
      display: none;
      cursor: pointer;
    }

    .left-arrow-container span{
      display: inline-block;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: #f28e00;
      font-weight: bolder;
      font-size: 36px;
      background-color: #fef6eb;
    }

    .right-arrow-container{
      padding-left: 5px;
      display: none;
      cursor: pointer;
    }
    
    .right-arrow-container span{
      display: inline-block;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      color: #f28e00;
      font-weight: bolder;
      font-size: 36px;
      background-color: #fef6eb;
    }

    .carousel-body{
      font-family: 'Quicksand', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      padding-left: 15px;
      padding-right: 15px;
    }

    .carousel-header{
      font-size: 1.4rem;
      font-weight: 700;
      color: #f28e00;
      margin: 0;
      padding-left: 15px;
      padding-right: 22px;
      margin-bottom: 15px;
    }

    h3{
      font-family: 'Poppins', sans-serif;
      color: #7d7d7d;
      height: 97px;
      width: 90%;
      font-size: 12px;
      padding: 0 5px 5px 13px;
    }

    .brand-name{
      color: #6d6d6d;
    }

    .card-content{
      display: flex;
      justify-content: start;
      align-items: center;
      width: 100vw;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .card-container{
      position: relative;
      width: calc(100% / 2 - 20px);
      margin-left: 7.5px;
      margin-right: 7.5px;
      border: 1px solid #c3cdd6;
      border-radius: 1rem;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .card-container:hover{
      border: 2px solid #f28e00;
    }

    .product-anchor{
      width: 100%;
    }

    ::-webkit-scrollbar{
      display: none;
    }

    .product-figure{
      position: relative;
      height: 160px;
      width: 100%;
      margin-bottom: 65px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      padding-left: 5px;
      padding-right: 5px;
      margin-inline-start: 0;
      margin-inline-end: 0;
    }

    .hearth-icon{
      position: absolute;
      z-index: 10;
      top: 11px;
      right: 11px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: white;
      background-image: url('https://www.e-bebek.com/assets/svg/default-favorite.svg');
      background-repeat: no-repeat;
      background-position: center;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); 
    }

    .hearth-icon:hover{
      border: 1px solid #f28e00;
      cursor: pointer;
    }

    .hearth-icon:hover{
      background-image: url('https://www.e-bebek.com/assets/svg/default-hover-favorite.svg');
    }

    .hearth-icon.faved{
      background-image: url('https://www.e-bebek.com/assets/svg/added-favorite.svg');
    }

    .product-figure img{
      width: 160px;
      margin: 0;
      padding: 0;
    }

    .price-container{
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 139.5px;
      align-items: flex-start;
      height: 42px;
      font-size: 20px;
      font-weight: 600;
      padding: 0 5px 5px 13px;
      font-family: "Poppins", sans-serif;
      color: #7d7d7d;
    }

    .old-price{
      font-size: 14px;
    }

    .new-price{
      position: absolute;
      top: 7px;
      color: #00a365;
    }

    .atc-container{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .atc-button{
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      width: 90%;
      height: 48px;
      margin-bottom: 13px;
      margin-top: 100px;
      border: none;
      border-radius: 2rem;
      color: #f28e00;
      background-color: #fff7ec;
    }

    .old-price{
      text-decoration: line-through;
    }

    a:visited,
    a:link {
      text-decoration: none;
    }

    @media(min-width: 768px) {
      .card-container{
        flex: 0 0 calc((100% - 40px) / 3);
      }

      .right-arrow-container{
        display: block;
      }

      .left-arrow-container{
        display: block;
      }

      .card-content{
        width: 85vw;
      }

      .product-figure{
        padding: 0;
      }

      h2{
        width: 100%;
        background-color: #fef6eb;
        display: flex;
        border-top-right-radius: 2rem;
        border-top-left-radius: 2rem;
        align-items: center;
        padding: 25px 67px;
        font-size: 3rem;
      }

      .hearth-icon{
        right: 15px;
      }
    }

    @media(min-width: 1280px) {

      .card-container{
        flex: 0 0 calc((100% - 60px) / 4);
      }
      
      .hearth-icon{
        right: 15px;
      }
    }

    @media(min-width: 1480px) {
      .card-container{
        flex: 0 0 calc((100% - 80px) / 5);
      }
      
      .hearth-icon{
        right: 15px;
      }
    }

    @media(max-width: 990px) {
      .card-container{
        flex: 0 0 calc((100% - 20px) / 2);
      }
      
      .hearth-icon{
        right: 15px;
      }
    }
        `
    const fontQuickLink = document.createElement('link');
    fontQuickLink.href = 'https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap';
    fontQuickLink.rel = "stylesheet";
    document.head.appendChild(fontQuickLink);

    const fontPoppinsLink = document.createElement('link');
    fontPoppinsLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Quicksand:wght@300..700&display=swap';
    fontPoppinsLink.rel = "stylesheet";
    document.head.appendChild(fontPoppinsLink);
    
    const style = document.createElement('style');
    style.classList.add("carousel-style");
    style.textContent = CSS;
    document.head.append(style);
    }

      // PRODUCT FETCH FUNCTION
    async function getProducts() {
        const url = 'https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json';
        try {
          const response = await fetch(url);
          if(!response.ok) {
            throw new Error('Response status -->', response.status);
          }
          const fetchData = await response.json();
          localStorage.setItem('products', JSON.stringify(fetchData));
          return fetchData;

        } catch(error) {
          console.error('An error has occured. Error -->', error);
        }
      }

      // INITIALIZING DATA CARIABLE THAT CONTAINS PRODUCTS
    async function getSaved() {
        if(!localStorage.getItem('products')) {
          console.log("No saved products. Fetching ...");
          await getProducts();
        }

        const savedData = JSON.parse(localStorage.getItem('products'));
        console.log("Using saved data. Products -->", savedData);
        return savedData;
      }

          // CREATE CAROUSEL CARDS FUNCTION
    const createCard = (product) => {
        const cardContent = document.querySelector('.card-content');
        // OUTER - CARD MAIN
        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card-container');
        cardContainer.dataset.productId = product.id;
        cardContainer.dataset.productName = product.name;

        // UP - PRODUCT INFO
        const productAnchor = document.createElement('a');
        productAnchor.classList.add('product-anchor');
        productAnchor.href = product.url;

        /* --- IMAGE STARTS HERE --- */
        const productFigure = document.createElement('figure');
        productFigure.classList.add('product-figure');

        const hearthIcon = document.createElement('span');
        hearthIcon.classList.add('hearth-icon');
        
        // APPENDING HEARTH ICON
        cardContainer.appendChild(hearthIcon);

        const productImage = document.createElement('img');
        productImage.classList.add('product-image');
        productImage.src = product.img;

        productFigure.appendChild(productImage);
        productAnchor.appendChild(productFigure);
        /* --- IMAGE ENDS HERE --- */

        /* --- INFO STARTS HERE --- */
        // MAIN
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        // HEADER
        const productName = document.createElement('h3');
        productName.classList.add('product-name');
        const brandName = document.createElement('span');
        brandName.classList.add('brand-name');
        brandName.innerText = `${product.brand} - `;
        // PRICE
        const priceContainer = document.createElement('div');
        priceContainer.classList.add('price-container');
          // OLD PRICE
        const oldPrice = document.createElement('div');
        oldPrice.classList.add('old-price');
        const oldPriceDisplay = document.createElement('p');
        oldPriceDisplay.classList.add('old-price-display');
        oldPriceDisplay.innerText = product.original_price;
        oldPrice.style.display = `${product.original_price === product.price ? "none" : ""}`;
        oldPrice.appendChild(oldPriceDisplay);
          // NEW PRICE
        const newPrice = document.createElement('div');
        newPrice.classList.add('new-price');
        const newPriceDisplay = document.createElement('p');
        newPriceDisplay.classList.add('new-price');
        newPriceDisplay.innerText = product.price;
        newPrice.appendChild(newPriceDisplay);
        // APPENDING PRICES TO PRICE CONTAINER 
        priceContainer.append(oldPrice, newPrice);
        
        // APENDING NAMES TO PRODUCT NAME
        productName.append(brandName, product.name);

        // APPENDING PRODUCT NAME TO ANCHOR
        productAnchor.appendChild(productName);

        // APPENDING PRICE CONTAINER TO ANCHOR
        productAnchor.appendChild(priceContainer);
        /* --- INFO EDNS HERE --- */

        // DOWN - ATC BUTTON
        const atcContainer = document.createElement('div');
        atcContainer.classList.add('atc-container');

        const atcButton = document.createElement('button');
        atcButton.classList.add('atc-button');
        atcButton.innerText = 'Sepete Ekle'

        atcContainer.appendChild(atcButton);

        // APPEND TO OUTER
        cardContainer.append(productAnchor, atcContainer);
        cardContent.append(cardContainer);

      }

    const setEvents = () => {

        let favorites = [];
        const allHearthIcons = document.querySelectorAll('.hearth-icon');
        console.log('All Hearth Icons:', allHearthIcons);
        const leftArrow = document.querySelector('.left-arrow-container');
        const rightArrow = document.querySelector('.right-arrow-container');
        const scrollContainer = document.querySelector('.card-content');
        const cardWidth = document.querySelector('.card-container')?.offsetWidth || 300;
        const storedFav = localStorage.getItem('favorites');

        if(storedFav) {
          try {
            favorites = JSON.parse(storedFav);
          } catch(error) {
            console.error('Error parsing: ', error);
            localStorage.removeItem('favorites');
          }
        }
        console.log('Favorites --->', favorites);

        const handleFavClick = (event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log("Adding to favorites...");

          const favs = JSON.parse(localStorage.getItem('favorites')) || [];

          const cardContainer = event.target.closest('.card-container');
          const productId = cardContainer?.dataset?.productId;
          
          if (!productId) return;

          if(favorites.indexOf(productId) === -1) {
            favorites.push(productId);
            event.target.classList.add('faved');
          } else {
            favorites.splice(favorites.indexOf(productId), 1);
            event.target.classList.remove('faved');
          }

          localStorage.setItem('favorites', JSON.stringify(favorites));         
        }

        const handleLeftClick = () => {
          scrollContainer?.scrollBy({left: -(cardWidth + 20), behavior: "smooth"})
        }

        const handleRightClick = () => {
          scrollContainer?.scrollBy({left: cardWidth + 20, behavior: "smooth"})
        }

        allHearthIcons.forEach(hearthIcon => {
          const productId = hearthIcon.closest('.card-container')?.dataset?.productId;

          if(favorites.includes(productId)) {
            hearthIcon.classList.add('faved');
          }

          hearthIcon.addEventListener('click', handleFavClick);
        })

        leftArrow.addEventListener('click', handleLeftClick);
        rightArrow.addEventListener('click', handleRightClick);
      }

    const buildUI = () => {
        buildHTML();
        getSaved().then(data => {
            data.forEach((data) => createCard(data));
            setEvents();
        })
        buildCSS();
    }

    window.location.href === "https://www.e-bebek.com/" ? buildUI() : console.log("wrong page");
})();
