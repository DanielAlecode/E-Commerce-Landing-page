import { useState, useContext } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import { ShoppingCartContext } from '../../Context';

const ITEMS_PER_PAGE = 8;

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    filteredItems,
    searchByTitle,
    setSearchByTitle
  } = useContext(ShoppingCartContext);

  // Nueva base: paginación basada en productos filtrados
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Layout>
      <h1 className="text-xl font-bold mb-4">Exclusive Products</h1>

      <div className="relative w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          value={searchByTitle}
          onChange={(event) => {
            setSearchByTitle(event.target.value);
            setCurrentPage(1); // Reinicia a la página 1 al buscar
          }}
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>
      </div>

      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {paginatedItems.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-4 gap-2">
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="text-lg font-bold">{currentPage} / {totalPages}</span>
        <button
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <ProductDetail />
    </Layout>
  );
}

export default Home;
