import { useCart } from "../utils/CartContext";
import { toast } from "react-toastify"; // Importa il modulo toast
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const goToRentConfirmation = () => {
    if (cartItems.length === 0) {
      // Verifica se il carrello è vuoto
      toast.error(
        "Il tuo carrello è vuoto. Per favore aggiungi degli articoli da noleggiare.",
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000,
          hideProgressBar: true,
          closeButton: false,
        }
      );
    } else {
      // Il carrello non è vuoto

      // Ottieni la data e l'ora attuali
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      // Log dettagliato dei libri noleggiati
      console.log(
        `Libri noleggiati il ${formattedDate} alle ${formattedTime}:`,
        JSON.stringify(cartItems, null, 2)
      );

      // Pulisci il carrello e mostra il messaggio di successo
      clearCart();

      toast.success(
        "Evviva! 🎉 Hai noleggiato con successo gli articoli selezionati. Goditi la tua avventura di lettura!",
        {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
          hideProgressBar: true,
          closeButton: false,
        }
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfcfb] via-[#e2d1c3] to-[#fdfcfb]">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4 text-center">Carrello</h1>
        {cartItems.length === 0 ? (
          <div className="text-center mt-4">
            <h1 className="text-3xl text-gray-500">
              Ops! Il tuo carrello è vuoto{" "}
              <span role="img" aria-label="Faccina sorridente">
                😊
              </span>
            </h1>
            <p className="text-gray-500 mt-2">
              È un po&apos; solitario qui dentro! Perché non inizi ad aggiungere
              alcuni libri fantastici al tuo carrello? Buoni acquisti!
            </p>

            <button
              onClick={() => goBack()} // Sostituisci goBack() con la funzione per tornare indietro
              className="bg-[#46331f] hover:bg-[#bd8345] text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out mt-10"
            >
              Torna Indietro
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="flex w-full items-center justify-center flex-wrap">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg p-4 bg-white shadow-md h-72 m-2.5 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 mb-4 relative transition-all duration-700 hover:scale-105"
                >
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <div className="m-3">
                    <p className="text-gray-700">Autore: {item.author}</p>
                    <p className="text-gray-700">Genere: {item.genre}</p>
                    <p className="text-gray-700">
                      Data di pubblicazione: {item.published}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-gray-700">
                        Quantità: {item.quantity}
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 font-semibold py-2.5 px-10 rounded-md absolute bottom-5 left-1/2 transform -translate-x-1/2 border border-red-700"
                    >
                      Rimuovi
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex w-3/12  justify-center items-center mt-4 space-x-2">
              <button
                className="relative w-56 inline-flex items-center justify-center px-10 py-4 overflow-hidden text-white bg-[#46331f] rounded-lg group"
                onClick={clearCart}
                style={{ whiteSpace: "nowrap" }}
              >
                <span className="absolute w-10 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
                <span className="relative">Svuota Carrello</span>
              </button>
              <button
                onClick={goToRentConfirmation}
                className="relative w-56 inline-flex items-center justify-center px-10 py-4 overflow-hidden text-white bg-[#46331f] rounded-lg group"
              >
                <span className="absolute w-10 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30"></span>
                <span className="relative">Noleggia</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
