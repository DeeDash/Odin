export default function createMenu() {
    const content = document.getElementById('content');
    content.innerHTML = renderMenu();
}

function renderMenu() {
    return `
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
        </section>`
}