# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

//----------------------------------------------------------------------------------------------------------------//

// 320 - SBA - React Web Applicaiton

Packages:

1. AXIOS.
2. React-Router-Dom.
3. React.
4. React-dom.

Note: The .gitignore file has been added to this code.

API: This applicatoin is using the Fake Store API. No API key is required for getting the data from the website.

How it works:
HOME PAGE at root (/)- Displays all the products received from the fake store API.
MEN'S PAGE at root (/mens) - Displays all men's clothing products received from the fake store API.
WOMEN'S PAGE at root (/womens) - Displays all women's clothing products received from the fake store API.
JEWELERY PAGE at root (/jewelery) - Displays all jewelery products received from the fake store API.
ELECTRONICS PAGE at root (/electronics) - Displays all electronics products received from the fake store API.

Each product has been created in its own container component. The component has:

1. The product Title - Clickable link.
2. Product image.
3. Four line of product description.
4. Product Price.
5. link for "more details" about the product.

Product Details:
By clicking on the product title or "more details" link at the bottom of each product component, a new page of product details will open to shpw the product details.
The product details page shows:

1. HOME button to go back to the Home Page.
2. The product Title.
3. Product image.
4. Four line of product description.
5. Product Rating and reviews
6. Product Price.
7. REquired Quantity Option Selector.
8. ADD TO CART button - Not Active.



