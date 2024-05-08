# Mia Libreria 📚

Mia Libreria è un'applicazione web moderna e user-friendly per la gestione di biblioteche, sviluppata con React.js, Vite, Tailwind CSS e alimentata dall'API di Google per il recupero dei dati sui libri. Incorpora anche Auth0 per un'autenticazione sicura e la gestione delle sessioni, icone di Font Awesome per lo styling, Axios per le chiamate API, React Infinite Scroll per il caricamento pigro, Toastify per i messaggi di notifica e `react-autocomplete` per i suggerimenti di ricerca.

🚨 **Nota importante**:

## Indice dei Contenuti

- [Mia Libreria 📚](#mialibreria-)
  - [Indice dei Contenuti](#indice-dei-contenuti)
  - [Tecnologie Utilizzate 🛠️](#tecnologie-utilizzate-️)
  - [Funzionalità ✅](#funzionalità-)
  - [Configurazione - Impostazione delle Chiavi API 🛠️](#configurazione---impostazione-delle-chiavi-api-)
  - [Primi Passi 🚀](#primi-passi-)

## Tecnologie Utilizzate 🛠️

- [Vite](https://vitejs.dev/) - Strumento di costruzione rapido per React.js.
- [React.js](https://reactjs.org/) - Libreria JavaScript per la costruzione di interfacce utente.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS first-utility per uno styling veloce e personalizzabile.
- [API Libri di Google](https://developers.google.com/books/docs/overview) - Utilizzata come endpoint per i dati sui libri.
- [Auth0](https://auth0.com/) - Gestione autenticazioni e sessioni.
- [Font Awesome](https://fontawesome.com/) - Libreria di icone per lo styling.
- [Axios](https://axios-http.com/) - Client HTTP basato su promesse per le chiamate API.
- [React Infinite Scroll](https://github.com/ankeetmaini/react-infinite-scroll-component) - Componente per lo scrolling infinito per una paginazione efficiente.
- [Toastify](https://fkhadra.github.io/react-toastify/introduction/) - Libreria di notifiche React per il feedback degli utenti.
- [react-autocomplete](https://github.com/reactjs/react-autocomplete) - Componente React per i suggerimenti di ricerca.
- [Vercel](https://vercel.com/) - Piattaforma di deployment per l'hosting di applicazioni web.

---

## Funzionalità ✅

- [x] Un'animazione di caricamento esteticamente piacevole e ottimizzata.
- [x] Registrazione e login degli utenti, usando un'autenticazione adeguata e gestione delle sessioni (Accesso con i social media, verifica dell'email e del numero di telefono ricevono punti extra).
- [x] Gli utenti possono visualizzare l'elenco dei libri, preferibilmente utilizzando un endpoint reale (API) come fonte di dati per i libri.
- [x] Invece di caricare tutti i risultati sulla pagina, eseguire una paginazione ottimizzata (scrolling infinito con caricamento pigro).
- [x] Una barra di ricerca ben realizzata, con suggerimenti (come la ricerca Google, YouTube) che suggerisce e cerca in base a tutti i campi come nome del libro, nome dell'autore, genere, anno di pubblicazione, ecc.
- [x] Un modo esclusivo di indicare la disponibilità dei libri e il numero di copie disponibili, insieme ai campi sopra menzionati.
- [x] Gli utenti possono filtrare e ordinare l'elenco dei libri in base a Titolo, Autore, Argomento e Data di pubblicazione.
- [x] Mostra il conteggio dei libri dopo ogni risultato di ricerca e dopo ogni filtraggio.
- [x] Implementa una funzionalità di carrello, aggiungendo libri al carrello, l'utente sarà in grado di effettuare il checkout e noleggiarli. Questo dovrebbe riflettersi nella disponibilità e nel numero di copie dei campi.

---

## Configurazione - Impostazione delle Chiavi API 🛠️

Per utilizzare alcune funzionalità del progetto Mia Libreria, sarà necessario configurare le seguenti chiavi API:

1. 📚 **Chiave API Libri di Google**: Questa chiave è necessaria per recuperare le informazioni sui libri dall'API Libri di Google.

2. 🔐 **Dominio e ID Cliente di Auth0**: Questi sono necessari per l'autenticazione e la gestione degli utenti.

Segui questi passi per impostare le chiavi API:

### 1. Chiave API Libri di Google

Per ottenere una Chiave API Libri di Google:

1. 🌐 Visita il [Google Cloud Console](https://console.cloud.google.com/).
2. 🏗️ Crea un nuovo progetto se non ne hai già uno.
3. 🛠️ Naviga nella sezione "API & Servizi" > "Credenziali".
4. ➕ Clicca su "Crea Credenziali" e seleziona "Chiave API".
5. 📋 Copia la chiave API generata.

### 2. Credenziali Auth0

Per ottenere le credenziali Auth0:

1. 🌐 Visita [Auth0](https://auth0.com/) e accedi o crea un account.
2. 🏗️ Crea una nuova applicazione o usa una esistente.
3. ⚙️ Naviga nelle "Impostazioni" della tua applicazione Auth0.
4. 📋 Trova e copia il "Dominio" e l'"ID Cliente".

### 3. Crea un File .env

Una volta ottenute le necessarie chiavi API, crea un file `.env` nella directory radice del progetto (se non esiste già) e aggiungi le seguenti variabili d'ambiente con le tue chiavi API:

```env
VITE_REACT_APP_GOOGLE_API_KEY=LA_TUA_CHIAVE_API_GOOGLEBOOK
VITE_REACT_APP_AUTH0_DOMAIN=IL_TUO_DOMINIO_AUTH0
VITE_REACT_APP_AUTH0_CLIENT_ID=IL_TUO_ID_CLIENTE_AUTH0
```

Sostituisci LA_TUA_CHIAVE_API_GOOGLEBOOK, IL_TUO_DOMINIO_AUTH0, e IL_TUO_ID_CLIENTE_AUTH0 con i rispettivi valori che hai ottenuto da Google e Auth0.

Assicurati di mantenere il tuo file .env sicuro e di non condividere pubblicamente le tue chiavi API.

Ora, hai configurato con successo le chiavi API richieste per il progetto Mia Libreria. Puoi iniziare a utilizzare queste chiavi nel tuo codice per accedere all'API Libri di Google e autenticarti con Auth0.

---

## Primi Passi 🚀

Segui questi passi per configurare, eseguire e distribuire Mia Libreria su Vercel:

Clona il repository:

```bash
git clone https://github.com/suryanshsingh2001/MiaLibreria.git
cd client
```

2. Installa le Dipendenze nella Directory client

```
npm install
```

3. Configura le variabili d'ambiente: Crea un file .env e fornisce le necessarie chiavi API e credenziali Auth0.

```env
VITE_REACT_APP_GOOGLE_API_KEY=LA_TUA_CHIAVE_API_GOOGLEBOOK
VITE_REACT_APP_AUTH0_DOMAIN=IL_TUO_DOMINIO_AUTH0
VITE_REACT_APP_AUTH0_CLIENT_ID=IL_TUO_ID_CLIENTE_AUTH0
```

4. Avvia il server di sviluppo:

```
npm run dev
```

5. Apri il tuo browser e accedi a http://localhost:5173.

6. Distribuisci su Vercel:

- Iscriviti per un account su [Vercel](https://vercel.com/).
- Segui le istruzioni di Vercel per collegare il tuo repository GitHub e distribuire la tua app.
