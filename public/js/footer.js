const createFooter =  () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">t-shirt</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirt</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>

                <ul class="category">
                    <li class="category-title">women</li>
                    <li><a href="#" class="footer-link">t-shirt</a></li>
                    <li><a href="#" class="footer-link">sweatshirts</a></li>
                    <li><a href="#" class="footer-link">shirt</a></li>
                    <li><a href="#" class="footer-link">jeans</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">shoes</a></li>
                    <li><a href="#" class="footer-link">casuals</a></li>
                    <li><a href="#" class="footer-link">formals</a></li>
                    <li><a href="#" class="footer-link">sports</a></li>
                    <li><a href="#" class="footer-link">watch</a></li>
                </ul>
            </div>
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Clothing (also known as clothes, apparel, and attire) are items worn on the body. Typically, clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials and natural products found in the environment, put together. The wearing of clothing is mostly restricted to human beings and is a feature of all human societies. The amount and type of clothing worn depends on gender, body type, social factors, and geographic considerations. Garments cover the body, footwear covers the feet, gloves cover the hands, while hats and headgear cover the head. Eyewear and jewelry are not generally considered items of clothing, but play an important role in fashion and clothing as costume.</p>
        <p class="info">support emails -help@clothing.com, customersupport@clothing.com</p>
        <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="Social-link">terms & services</a>
                <a href="#" class="Social-link">privacy page</a>
            </div>
            <div>
                <a href="#" class="Social-link">instagram</a>
                <a href="#" class="Social-link">facebook</a>
                <a href="#" class="Social-link">twitter</a>
            </div>
        </div>
        <p class="footer-credit"> clothes, best apparels online store</p>
    `;
} 

createFooter();