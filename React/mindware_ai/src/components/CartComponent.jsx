import { useState, useEffect } from "react";
import React from "react";

function CartComponent() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCartItems = () => {
    var userDataString = localStorage.getItem("userData");

    // Parse the JSON string into a JavaScript object
    var userData = JSON.parse(userDataString);

    // Access the 'id' property
    var id = userData.id;

    // Fetch the cart items from the server endpoint
    fetch(`http://127.0.0.1:3000/carts/user/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the cart items state with the fetched data
        setCartItems(data);

        // Calculate the total price by summing up the prices of all products in the cart
        // Assuming `cartItems` and `setCartItems` are state variables

        // Iterate over the cartItems and sum up the prices
        let priceCount = 0;
        data.forEach((item, index) => {
          priceCount += priceCount + item.product.price * item.quantity;
        });
        setTotalPrice(priceCount);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // Fetch the initial cart items when the component mounts
    fetchCartItems();
  }, []);

  useEffect(() => {
    // Save the cart items to local storage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemove = (index) => {
    // Perform the delete action for the item at the given index
    fetch(`http://127.0.0.1:3000/carts/${index}`, {
      method: "DELETE",
    })
      .then((response) => {
        // Handle the response
        if (response.ok) {
          console.log(response);
          // Item deleted successfully
          // Refresh the cart items by fetching the updated data
          fetchCartItems();
        } else {
          console.log(response);
          // Error occurred while deleting the item
          // Handle the error appropriately
          // You can show an error message to the user or perform any other necessary actions
        }
      })
      .catch((error) => {
        // Handle any network or other errors
        console.error(error);
        // You can show an error message to the user or perform any other necessary actions
      });
  };

  const handleQuantityChange = (index, newQuantity) => {
    console.log(index, newQuantity);
    // Perform the update action for the item at the given index with the new quantity
    fetch(`http://127.0.0.1:3000/carts/${index}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then((response) => {
        // Handle the response
        if (response.ok) {
          console.log(response);
          // Quantity updated successfully
          // Refresh the cart items by fetching the updated data
          fetchCartItems();
        } else {
          // Error occurred while updating the quantity
          // Handle the error appropriately
          // You can show an error message to the user or perform any other necessary actions
        }
      })
      .catch((error) => {
        // Handle any network or other errors
        console.error(error);
        // You can show an error message to the user or perform any other necessary actions
      });
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cart, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="w-32 p-4">
                  <img src={cart.product.image_url} alt="Apple Watch" />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {cart.product.name}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <button
                      className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                      onClick={() => {
                        if (cart.quantity > 1) {
                          handleQuantityChange(cart.id, cart.quantity - 1);
                        }
                      }}
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 2"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1h16"
                        />
                      </svg>
                    </button>
                    <div>
                      <input
                        type="number"
                        id={`product_${index}`}
                        className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={cart.quantity}
                        value={cart.quantity}
                        onChange={(e) => console.log(e, cart.quantity)}
                        required
                      />
                    </div>
                    <button
                      className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                      type="button"
                      onClick={(e) =>
                        handleQuantityChange(cart.id, cart.quantity + 1)
                      }
                    >
                      <span className="sr-only">Quantity button</span>
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 18 18"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 1v16M1 9h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  ${cart.product.price}
                </td>
                <td className="px-6 py-4">
                  <button
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    onClick={() => handleRemove(cart.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 text-right text-green-500 dark:text-green-500">
        Total Price: {totalPrice}
      </div>
    </div>
  );
}

export default CartComponent;
