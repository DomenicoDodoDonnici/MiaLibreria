import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../index.css";

const Footer = () => {
  return (
    <footer className="bg-[#523f1b] text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <div className="text-3xl font-semibold mb-2">
          Esplora altri libri incredibili!
        </div>
        <div className="text-lg text-gray-400 mb-4">
          Perché leggere è l&apos;avventura definitiva.
        </div>
        <div className="flex items-center space-x-2">
          <a
            href="https://github.com/DomenicoDodoDonnici/MiaLibreria"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-56 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className=" relative">
                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                Visualizza il codice sorgente
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
          {/* Aggiungi altri link ai social media o contatti se necessario */}
        </div>
        <div className="mt-4">&copy; {new Date().getFullYear()} MyLibrary</div>
      </div>
    </footer>
  );
};

export default Footer;
