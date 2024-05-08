import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../utils/CartContext"; // Importa l'hook useCart
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react"; // Importa useAuth0 per l'autenticazione degli utenti

// Funzione helper per generare interi casuali
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const BookList = ({ searchQuery }) => {
  const [books, setBooks] = useState([]); // Inizializza i libri come un array vuoto
  const [loading, setLoading] = useState(true);
  const { addToCart, cartItems } = useCart(); // Accedi alla funzione addToCart e agli elementi del carrello da CartContext
  const { isAuthenticated } = useAuth0(); // Accedi a isAuthenticated da Auth0
  const [selectedResults, setSelectedResults] = useState(10); // Riduci i risultati per ottimizzare l'uso della chiave API
  const isTrue = true;
  useEffect(() => {
    // Sostituisci 'YOUR_API_KEY' con la tua effettiva chiave API di Google Books
    const apiKey = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;
    const query = searchQuery ? `intitle:${searchQuery}` : "programming"; // Filtra per titolo se è fornito searchQuery, altrimenti usa una query predefinita

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=${selectedResults}`
      )
      .then((response) => {
        if (response.data.items) {
          const booksData = response.data.items.map((book) => {
            // Determina le informazioni sulla disponibilità (più disponibili che non)
            const isAvailable = Math.random() < 0.7; // 70% di possibilità di essere disponibile
            const availableCopies = isAvailable ? getRandomInt(15, 35) : 0;

            return {
              id: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors
                ? book.volumeInfo.authors.join(", ")
                : "Sconosciuto",
              subject: book.volumeInfo.categories
                ? book.volumeInfo.categories.join(", ")
                : "Sconosciuto",
              published: book.volumeInfo.publishedDate || "Sconosciuto",
              isAvailable, // Memorizza lo stato di disponibilità
              availableCopies, // Memorizza le copie disponibili
              image: book.volumeInfo.imageLinks?.thumbnail || "", // URL dell'immagine
            };
          });
          setBooks(booksData);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel recupero dei dati dei libri:", error);
        setLoading(false);
      });
  }, [searchQuery, selectedResults]);

  // Funzione per aggiungere un libro al carrello e diminuire le copie disponibili
  const handleAddToCart = (bookId) => {
    if (!isTrue) {
      // Controlla se l'utente non è loggato
      toast.error("Effettua il login per utilizzare questa funzione.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
      });
      return;
    }

    const updatedBooks = books.map((book) => {
      if (book.id === bookId && book.isAvailable) {
        addToCart(book); // Aggiungi il libro al carrello
        const updatedCopies = book.availableCopies - 1;
        const updatedBook = {
          ...book,
          addedToCart: true,
          availableCopies: updatedCopies,
        };
        toast.success(
          `"${updatedBook.title}" è stato aggiunto al tuo carrello.`,
          {
            position: toast.POSITION.TOP_CENTER, // Imposta la posizione del toast
            autoClose: 3000, // Chiudi il toast dopo 3 secondi (aggiustabile come necessario)
            hideProgressBar: true, // Nascondi la barra di avanzamento
            closeButton: false, // Non mostrare un pulsante di chiusura
          }
        );
        return updatedBook;
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const handleResultsChange = (event) => {
    setSelectedResults(event.target.value);
  };

  return (
    <div className="container mx-auto p-4 py-12 m-auto">
      <h1 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
        Esplora la nostra collezione
      </h1>
      <p className="text-lg text-gray-600 mb-4">
        Scopri una vasta varietà di libri nella nostra collezione. Che tu stia
        cercando narrativa, saggistica o un genere specifico, abbiamo qualcosa
        per ogni appassionato di libri.
      </p>

      <div className="mb-4">
        <label className="text-gray-600 font-semibold">
          Mostra risultati per pagina:
        </label>
        <select
          className="ml-2 border rounded-lg px-2 py-1 pr-4 focus:outline-none focus:border-blue-500 shadow-sm text-gray-800"
          value={selectedResults}
          onChange={handleResultsChange}
        >
          <option value={5}>5 risultati</option>
          <option value={10}>10 risultati</option>
          <option value={20}>20 risultati</option>
          <option value={30}>30 risultati</option>
        </select>
      </div>

      {loading ? (
        <p className="text-gray-600">Caricamento in corso...</p>
      ) : (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="page-turn bg-[#ead9c6] border rounded-lg shadow-md p-4"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {book.title}
              </h2>
              {book.isAvailable ? (
                <p className="text-green-600 font-semibold mb-2">
                  Disponibile -{" "}
                  <span className="font-semibold">
                    {book.availableCopies}
                    {book.availableCopies === 1 ? " copia" : " copie"}
                  </span>
                </p>
              ) : (
                <p className="text-red-600 font-semibold mb-2">
                  Non Disponibile
                </p>
              )}
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-auto mb-2"
              />
              <div className="text-sm text-gray-600">
                <p className="mb-1">Autore: {book.author || "Sconosciuto"}</p>
                <p className="mb-1">Genere: {book.subject || "Sconosciuto"}</p>
                <p className="mb-1">
                  Pubblicato: {book.published || "Sconosciuto"}
                </p>
              </div>
              <div className="flex justify-end">
                {book.addedToCart ? (
                  <button
                    className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full cursor-not-allowed"
                    disabled
                  >
                    Aggiunto al carrello
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(book.id)}
                    className={`mt-2 ${
                      book.isAvailable
                        ? "bg-[#46331f] hover:bg-[#bd8345]"
                        : "bg-gray-300 cursor-not-allowed"
                    } text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out`}
                    disabled={!book.isAvailable}
                  >
                    Aggiungi al Carrello
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
