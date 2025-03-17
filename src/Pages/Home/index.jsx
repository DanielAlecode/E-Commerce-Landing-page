import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

const ITEMS_PER_PAGE = 8;

function Home() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);
  
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedItems = items.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
      <h1 className="text-xl font-bold mb-4">Home</h1>
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
      <ProductDetail/>
    </Layout>
  );
}

export default Home;
