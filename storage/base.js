var menuText = `<div class="menu-bar">
            <a title="Manomays" id="logo" href="/"><img src="storage/logo.png"></a>
            <hr>
            <div class="menu">
                <div class="dropdown">
                    <a href="jewelry/" class="dropbtn">JEWELRY</a>
                    <div class="dropdown-content">
                        <a href="#">Necklaces</a>
                        <a href="#">Earrings</a>
                        <a href="#">Bracelets</a>
                        <a href="#">Accessories</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a href="gemstones/" class="dropbtn">GEMSTONES</a>
                    <div class="dropdown-content">
                        <a href="#">Stuff</a>
                        <a href="#">Things</a>
                        <a href="#">More Stuff</a>
                        <a href="#">More Things</a>
                        <a href="#">More Stuff</a>
                        <a href="#">More Things</a>
                        <a href="#">More Stuff</a>
                        <a href="#">More Things</a>
                        <a href="#">More Stuff</a>
                        <a href="#">More Things</a>
                    </div>
                </div>
                <a href="collections/">COLLECTIONS</a>
                <a href="gift-certificates/">GIFT CERTIFICATES</a>
                <a href="new-arrivals/">NEW ARRIVALS</a>
            </div>
            <hr>
        </div>`;
$("body").prepend(menuText);
