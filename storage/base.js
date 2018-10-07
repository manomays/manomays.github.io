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
var footerText = `<hr>
        <div class="wrapper">
            <div class="footer">
                <div class="about">
                    <h3>About Us</h3>
                    <a href="about/"><p>Company Info</p></a>
                    <a href="contact/"><p>Contact Us</p></a>
                    <a href="become-an-affiliate/"><p>Become an Affiliate</p></a>
                </div>
                <div class="account">
                    <h3>My Account</h3>
                    <a href="account"><p>View Cart</p></a>
                    <a href="account"><p>Sign In</p></a>
                    <a href="account"><p>Order Status</p></a>
                </div>
                <div class="products">
                    <h3>Products</h3>
                    <a href="cindex/"><p>Category Index</p></a>
                    <a href="products/"><p>Product Index</p></a>
                </div>
                <div class="info">
                    <h3>Helpful Info</h3>
                    <a href="help-desk/"><p>Help Desk</p></a>
                    <a href="privacy-policy/"><p>Privacy Policy</p></a>
                    <a href="terms-conditions/"><p>Terms and Conditions</p></a>
                </div>
                <div class="social">
                    <h3>Connect With Us!</h3>
                    <a class="social" href="https://www.facebook.com/Manomays.A.Wearable.Art"><img style="height: 37.5px" src=storage/social/fb.png></a>
                    <a class="social" href="https://twitter.com/manomaysinc"><img style="height: 37.5px" src=storage/social/twt.png></a>
                    <a class="social" href="https://instagram.com/manomaysawearableart/"><img style="height: 37.5px" src=storage/social/inst.png></a>
                    <a class="social" href="https://pinterest.com/meenumadan"><img style="height: 37.5px" src=storage/social/pin.png></a>
                </div>
                <p style="font-size: 12px"><a onclick="alert('Built by Ishan Madan.')">&#169;2018 Manomay's.</a></p>
            </div>
        </div>`;
$("body").prepend(menuText);
$("body").append(footerText);
