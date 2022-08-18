import { useState, useEffect } from "react";
import axios from "axios";
const useBooks = (page) => {
  const [books, setBooks] = useState(Array<any>);
  const [isNext, setIsNext] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    getBooks(page);
  }, [page]);

  
  const getBooks = async (page) => {
    setIsLoading(true)
    const response = await axios.get(`https://gutendex.com/books/?page=${page}&sort=popular%3Fcopyright%3Dfalse%3Fpage%3D3`);
    if(response.data.next!== null) {
      setIsNext(true)
    }
    setBooks(response.data.results);
    window.scrollTo(0,0)
    setIsLoading(false)
    
  };

  return [books, isNext, isLoading];
};

export default useBooks;
