# Restaurant Order Taker

A order taker to a restaurante with page for the client and administrator!

Try it now [here on deploy](https://restaurant-order-taker.vercel.app)

On deploy login as Adm with the credentials above to test bouth pages
```
AdmEmail: kitchenadm@email.com
AdmPassword: adm
```



## About

This App has the objective to provide a faster response to the client orders, what is extremally necessary on a restaurant's kitchen.

By using this App, the restaurant can automate the experience for the user to make his orders, and be faster in receive the response from the kitchen.

The Kitchen is automatically connected with all tables in the restaurant, while the client is connected only with his table. 

Below are the `already implemented` features on this App:

Client Side:
- Sign Up client.
- Sign In client.
- Main page were the client can see and choose through the options of menu, and his Table.
- Wait Page, where the client confirms and wait for his order.

Adm side:
- Sign In Adm.
- Main page to receive the orders in cascade.
- Confirmation to table orders that perform logout to client (they don't need to care with it).

Below are the `not yet implemented` features on this App:

- feat score to options.
- feat client comments.
- feat cancel order.
- feat update order.
- Add more than one order types.
- Open a React-modal to confirm orders.

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-app%20-%2320232a.svg?&style=for-the-badge&color=60ddf9&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/-socket.io-informational?style=for-the-badge"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react_route%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/styled-components%20-%2320232a.svg?&style=for-the-badge&color=b8679e&logo=styled-components&logoColor=%3a3a3a'>
  
</p>

## How to run


First of all, follow the instructions to [run API repository click here](https://github.com/C137Rodrigolima/Restaurant_Order_Taker-BackEnd)


1. Clone this repository.
2. Create a new archive named `.env` in the project folder and put on it:
```
REACT_APP_BASE_URL=http://localhost:5000
```
3. Install dependencies
```bash
npm i
```
4. Run the front-end with
```bash
npm start
```
5. You can optionally build the project running
```bash
npm run build
```
6. Finally access http://localhost:3000 on your favorite browser.
7. Open a new tab to `AdmLogin`: It's already Registered.
```
AdmEmail: adm@email.com
AdmPassword: adm
```
8. Register as client on `userLogin`, choose your table, options from menu and see through the pages how they're connected.
9. Remember to open in new tabs to simulate new user entries ;) enjoy...
