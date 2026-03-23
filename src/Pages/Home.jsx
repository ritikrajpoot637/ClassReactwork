import React, { use, useContext, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Theme } from '../utils/ThemeContext';

const fetched = fetch("https://dummyjson.com/products").then(res => res.json());

const Home = () => {
  const data = use(fetched);
  const { theme, togleTheme } = useContext(Theme);
  const [searchParams] = useSearchParams();
  
  const curpage = Number(searchParams.get('page')) || 1;
  const perpageItem = 8;
  const { products } = data;
  const rproducts = [...products].reverse();
  const Totalpage = Math.ceil(rproducts.length / perpageItem);
  
  const lastIndex = curpage * perpageItem;
  const firstIndex = lastIndex - perpageItem;
  const res = rproducts.slice(firstIndex, lastIndex);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [curpage]);

  // Dynamic Bootstrap Classes based on Theme
  const bgClass = theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark';
  const cardClass = theme === 'dark' ? 'bg-secondary text-white border-0' : 'bg-white border-0 shadow-sm';

  return (
    <div className={`${bgClass} min-vh-100 transition-all`} style={{ transition: '0.3s' }}>
      
      {/* Hero Section & Theme Toggle */}
      <header className="container py-5 text-center">
        <h1 className="display-4 fw-bold">Premium Collection</h1>
        <p className="lead opacity-75">Discover our latest products with seamless navigation</p>
        <button 
          className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'} mt-3`}
          onClick={togleTheme}
        >
          {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <div className="container pb-5">
        <div className="row g-4 justify-content-center">
          {res.map((val) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={val.id}>
              <div className={`card h-100 ${cardClass}`}>
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={val.thumbnail} 
                    className="card-img-top w-100 h-100" 
                    alt={val.title}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h6 className="card-title fw-bold text-truncate">{val.title}</h6>
                  <p className="card-text small opacity-75 text-truncate" style={{ WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', whiteSpace: 'normal' }}>
                    {val.description}
                  </p>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="fw-bold fs-5">${val.price}</span>
                      <span className="badge bg-warning text-dark">★ {val.rating}</span>
                    </div>
                    <Link to={`/product/${val.id}`} className="btn btn-primary w-100 rounded-pill">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Pagination */}
        <nav className="mt-5">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${curpage === 1 ? "disabled" : ''}`}>
              <Link className="page-link shadow-none" to={`?page=${curpage - 1}`}>Previous</Link>
            </li>

            {[...Array(Totalpage)].map((_, i) => (
              <li key={i} className={`page-item ${curpage === i + 1 ? "active" : ''}`}>
                <Link className="page-link shadow-none" to={`?page=${i + 1}`}>{i + 1}</Link>
              </li>
            ))}

            <li className={`page-item ${curpage === Totalpage ? "disabled" : ''}`}>
              <Link className="page-link shadow-none" to={`?page=${curpage + 1}`}>Next</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
