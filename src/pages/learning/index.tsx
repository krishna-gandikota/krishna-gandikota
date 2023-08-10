import React, { useState, useEffect, useCallback } from 'react';
import style from './learning.module.scss';
import { ChevronUp, ChevronDown } from 'react-feather';

const Array = [1,2,3,4,5,6];
const Learning = () => {
  const [products, setProducts] = useState<any>([]);
  const [searchTerm, setSearchTerm] = useState(' ');
  const [sortColumn, setSortColumn] = useState('');
const [sortDirection, setSortDirection] = useState('');
const [itemsPerPage, setItemsPerPage] = useState(3); 
  const [currentPage, setCurrentPage] = useState(1);
  const [arrData,setArrData] = useState<any>(Array);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        console.log(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event:any) => {
    setSearchTerm(event.target.value);
  };
    
  const applyFilters = () => {
    const filtered = products.filter((product: any) => {
      const { title, price } = product;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
  
      const matchesSearchTerm = title.toLowerCase().includes(lowerCaseSearchTerm);
  
      if (price) {
        const filterValue = parseFloat(searchTerm);
        const productPrice = parseFloat(price);
  
        if (!isNaN(filterValue)) {
          if (isNaN(productPrice)) {
            return false;
          }
          return productPrice === filterValue;
        }
      }
      return matchesSearchTerm;
    },);
  
    const sortedProducts = [...filtered].sort((a: any, b: any) => {
      if (sortColumn === 'id') {
        if (sortDirection === 'asc') {
          return a.id - b.id;
        } else {
          return b.id - a.id;
        }
      } else if (sortColumn === 'name') {
        if (sortDirection === 'asc') {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      } else if (sortColumn === 'price') {
        if (sortDirection === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      } else if (sortColumn === 'description') {
        if (sortDirection === 'asc') {
          return a.description.localeCompare(b.description);
        } else {
          return b.description.localeCompare(a.description);
        }
      } else if (sortColumn === 'discount') {
        if (sortDirection === 'asc') {
          return a.discount - b.discount;
        } else {
          return b.discount - a.discount;
        }
      } else if (sortColumn === 'rating') {
        if (sortDirection === 'asc') {
          return a.rating - b.rating;
        } else {
          return b.rating - a.rating;
        }
      } else if (sortColumn === 'stock') {
        if (sortDirection === 'asc') {
          return a.stock - b.stock;
        } else {
          return b.stock - a.stock;
        }
      } else if (sortColumn === 'brand') {
        if (sortDirection === 'asc') {
          return a.brand.localeCompare(b.brand);
        } else {
          return b.brand.localeCompare(a.brand);
        }
      } else if (sortColumn === 'category') {
        if (sortDirection === 'asc') {
          return a.category.localeCompare(b.category);
        } else {
          return b.category.localeCompare(a.category);
        }
      }
      return 0;
    });
  
    setFilteredProducts(sortedProducts);
  };
  
  useEffect(()=>{
    applyFilters();
    setArrData(generatePageNumbers(filteredProducts.length, itemsPerPage));
}, [products, searchTerm, sortColumn, sortDirection, itemsPerPage]);   

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  
  const handleItemsPerPageChange = (event:any) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);

  };
  const handlePageChange = (pageNumber:any) => {
    setCurrentPage(pageNumber);
  };

  const generatePageNumbers = (totalRows:any, itemsPerPage:any) => {
    const totalPages = Math.ceil(totalRows / itemsPerPage);
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return pageNumbers;
  };
  
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  
  return (
    <div>
        <div className='flex justify-between '>
        <label>Show</label>
        <select id="itemsPerPage" value={itemsPerPage} onChange={handleItemsPerPageChange}>
         <option value="03">03</option>
         <option value="06">06</option>
         <option value="09">09</option>
         <option value="12">12</option>
         <option value="15">15</option>
         <option value="18">18</option>
         <option value="21">21</option>
         <option value="24">24</option>
         <option value="27">27</option>
         <option value="30">30</option>
       </select>
        <label className='ml-[64rem]'>Search:-</label>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        className=" block w-[20rem] py-[3px] text-sm shodow-sm focus:outline-none border-[1px] border:solid"
        onChange={handleSearch}
      />
      </div>
     
<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
      <table className={` ${style.tabledata} min-w-full text-left text-sm font-light`}>
        <thead className='border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600'>
          <tr>
            <th className="border-[2px] px-1 text-center py-5 border-slate-300"onClick={() => handleSort('id')}><span>ID</span>{sortColumn === 'id' && sortDirection === 'asc' && (<ChevronUp className="inline-block cursor-pointer" />)}{sortColumn === 'id' && sortDirection === 'desc' && (<ChevronDown className="inline-block cursor-pointer" />)}</th>   
            <th className='border-[2px] text-center py-5 border-slate-300' onClick={() => handleSort('name')}><span>Name</span>{sortColumn === 'name' && sortDirection === 'asc' && (<ChevronUp className="ml-1 inline-block cursor-pointer" />)}{sortColumn === 'name' && sortDirection === 'desc' && (<ChevronDown className="ml-1 inline-block cursor-pointer" />)}</th>
            <th className="border-[2px] px-2 text-center py-5 border-slate-300"onClick={() => handleSort('price')}><span>Price</span>{sortColumn === 'price' && sortDirection === 'asc' && (<ChevronUp className="inline-block cursor-pointer" />)}{sortColumn === 'price' && sortDirection === 'desc' && (<ChevronDown className="inline-block cursor-pointer" />)}</th>   
            <th className='border-[2px] text-center py-5 border-slate-300' onClick={() => handleSort('description')}><span>Description</span>{sortColumn === 'description' && sortDirection === 'asc' && (<ChevronUp className="ml-1 inline-block cursor-pointer" />)}{sortColumn === 'description' && sortDirection === 'desc' && (<ChevronDown className="ml-1 inline-block cursor-pointer" />)}</th>
            <th className="border-[2px] px-2 text-center py-5 border-slate-300"onClick={() => handleSort('discount')}><span>Discount</span>{sortColumn === 'discount' && sortDirection === 'asc' && (<ChevronUp className="inline-block cursor-pointer" />)}{sortColumn === 'discount' && sortDirection === 'desc' && (<ChevronDown className="inline-block cursor-pointer" />)}</th>   
            <th className="border-[2px] px-2 text-center py-5 border-slate-300"onClick={() => handleSort('rating')}><span>Rating</span>{sortColumn === 'rating' && sortDirection === 'asc' && (<ChevronUp className="inline-block cursor-pointer" />)}{sortColumn === 'rating' && sortDirection === 'desc' && (<ChevronDown className="inline-block cursor-pointer" />)}</th>   
            <th className="border-[2px] px-2 text-center py-5 border-slate-300"onClick={() => handleSort('stock')}><span>Stock</span>{sortColumn === 'stock' && sortDirection === 'asc' && (<ChevronUp className="inline-block cursor-pointer" />)}{sortColumn === 'stock' && sortDirection === 'desc' && (<ChevronDown className="inline-block cursor-pointer" />)}</th>   
            <th className='border-[2px] text-center py-5 border-slate-300' onClick={() => handleSort('brand')}><span>Brand</span>{sortColumn === 'brand' && sortDirection === 'asc' && (<ChevronUp className="ml-1 inline-block cursor-pointer" />)}{sortColumn === 'brand' && sortDirection === 'desc' && (<ChevronDown className="ml-1 inline-block cursor-pointer" />)}</th>
            <th className='border-[2px] text-center py-5 border-slate-300' onClick={() => handleSort('category')}><span>Category</span>{sortColumn === 'category' && sortDirection === 'asc' && (<ChevronUp className="ml-1 inline-block cursor-pointer" />)}{sortColumn === 'category' && sortDirection === 'desc' && (<ChevronDown className="ml-1 inline-block cursor-pointer" />)}</th>
          </tr>
        </thead>
         <tbody>
          {paginatedProducts.map((product:any) => (
            <tr key={product.id}>
             <td className='border-[2px] px-1 text-center py-4 border-slate-300'>{product.id}</td>
              <td className='border-[2px] text-center py-4 border-slate-300'>{product.title}</td>
              <td className='border-[2px] px-2 text-center py-4 border-slate-300'>{product.price}</td>
              <td className='border-[2px] text-center py-4 border-slate-300'>{product.description}</td>
              <td className='border-[2px] px-2 text-center py-4 border-slate-300'>{product.discountPercentage}</td>
              <td className='border-[2px] px-2 text-center py-4 border-slate-300'>{product.rating}</td>
              <td className='border-[2px] px-2 text-center py-4 border-slate-300'>{product.stock}</td>
              <td className='border-[2px] text-center py-4 border-slate-300'>{product.brand}</td>
              <td className='border-[2px] text-center py-4 border-slate-300'>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='flex justify-end mr-4'>
      <button className='border-[1px] focus:bg-blue-600 focus:text-white focus:border-blue-600  ' disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
         {arrData.map((pageNumber:any) => ( 
           <button
            key={pageNumber}
            className={`border-[1px] focus:bg-blue-600 w-[2%] gap-4 focus:text-white focus:border-blue-600 ${
              pageNumber === currentPage ? 'bg-blue-600 text-white' : ''
            }`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
         ))}
        <button className='border-[1px] focus:bg-blue-600 focus:text-white focus:border-blue-600 '
         disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
      </div>
      </div>
      </div>
      </div>
    
  );
};

export default Learning;