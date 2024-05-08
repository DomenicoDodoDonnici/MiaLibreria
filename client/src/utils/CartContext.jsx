import { createContext, useState, useContext, useEffect } from "react";

// Crea un contesto
const CartContext = createContext();

// Crea un componente provider che avvolgerà l'intera applicazione
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Funzione per caricare i dati del carrello da localStorage al montaggio del componente
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Funzione per salvare i dati del carrello in localStorage ogni volta che cartItems cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    // Includi dettagli aggiuntivi nell'articolo
    const newItem = {
      id: item.id,
      title: item.title,
      author: item.author,
      genre: item.subject, // Includi il genere
      published: item.published,
      quantity: 1,
    };

    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Crea un hook personalizzato per accedere al contesto del carrello
const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
