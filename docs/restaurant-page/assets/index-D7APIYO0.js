(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();function a(){const e=document.getElementById("content");e.innerHTML=s()}function s(){return`
        <section id="menu">
            <h2>Our Menu</h2>
            <p>Explore our wide range of dishes, from appetizers to entrees to desserts.</p>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Items</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Appetizers</td>
                        <td>Bruschetta, Stuffed Mushrooms, Garlic Bread</td>
                    </tr>
                    <tr>
                        <td>Entrees</td>
                        <td>Grilled Salmon, Spaghetti Carbonara, Chicken Parmesan</td>
                    </tr>
                    <tr>
                        <td>Desserts</td>
                        <td>Tiramisu, Cheesecake, Chocolate Lava Cake</td>
                    </tr>
                </tbody>
            </table>
        </section>`}function d(){const e=document.getElementById("content");e.innerHTML=u(),document.getElementById("hero").querySelector("button").addEventListener("click",()=>a())}function u(){return`
            <section id="hero">
                <h1>Welcome to Sangria</h1>
                <p>Discover our delicious menu and experience our warm hospitality.</p>
                <button>View Menu</button>
            </section>`}function l(){const e=document.getElementById("content");e.innerHTML=m()}function m(){return`
        <section id="about">
            <h2>About Us</h2>
            <p>We are a family-owned restaurant dedicated to serving delicious food using only the freshest ingredients.
            </p>
        </section>`}function f(){const e=document.getElementById("content");e.innerHTML=b()}function b(){return`
        <section id="contact">
            <h2>Contact Us</h2>
            <p>Get in touch with us for reservations or any inquiries.</p>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name">

                <label for="email">Email:</label>
                <input type="email" id="email" name="email">

                <label for="message">Message:</label>
                <textarea id="message" name="message"></textarea>

                <button type="submit">Send Message</button>
            </form>
        </section>`}function p(){const e=document.createElement("header");e.innerHTML=h(),document.body.appendChild(e),y()}function h(){return`
        <nav>
            <ul>
                <li><button id="home-btn">Home</button></li>
                <li><button id="menu-btn">Menu</button></li>
                <li><button id="about-btn">About</button></li>
                <li><button id="contact-btn">Contact</button></li>
            </ul>
        </nav>`}function y(){Object.entries({"home-btn":d,"menu-btn":a,"about-btn":l,"contact-btn":f}).forEach(([o,i])=>{var r;(r=document.getElementById(o))==null||r.addEventListener("click",()=>{setTimeout(()=>{i()},500)})})}function g(){v(),E();const e=document.createElement("main");e.id="content",document.body.appendChild(e),d()}function v(){const e=document.createElement("div");e.id="overlay",document.body.appendChild(e)}function E(){document.querySelectorAll("header button").forEach(e=>{e.addEventListener("click",()=>{overlay.classList.add("active"),setTimeout(()=>{overlay.classList.remove("active")},500)})})}function L(){const e=document.createElement("footer");e.innerHTML=M(),document.body.appendChild(e)}function M(){return"<p>&copy; 2025 Sangria. All rights reserved.</p>"}p();g();L();
