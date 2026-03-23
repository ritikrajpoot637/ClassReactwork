import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ErrorOfBlog from '../BlogDynmic/ErrorOfBlog';

const ProductDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [arr, setObj] = useState({});
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let res1 = async () => {
            let res = await fetch("https://dummyjson.com/products/" + id);
            if (!res.ok) {
                setIsError(true);
                return;
            }
            res = await res.json();
            setObj(res);
        }
        res1();
    }, [id])

    if (isError) return <ErrorOfBlog />

    return (
        <div className="container mt-5">
            {/* Back Button */}
            <button className="btn btn-link text-decoration-none p-0 mb-4" onClick={() => navigate(-1)}>
                <i className="bi bi-arrow-left"></i> ← Back to Products
            </button>

            <div className="row g-5">
                {/* Left Side: Product Images */}
                <div className="col-md-6">
                    <div className="card border-0 shadow-sm overflow-hidden">
                        <img 
                            src={arr.images?.[0]} 
                            className="img-fluid" 
                            alt={arr.title} 
                            style={{ minHeight: '400px', objectFit: 'contain', background: '#f8f9fa' }}
                        />
                    </div>
                    {/* Thumbnail Row (Optional) */}
                    <div className="d-flex gap-2 mt-3 overflow-auto">
                        {arr.images?.slice(1, 4).map((img, index) => (
                            <img key={index} src={img} width="80" height="80" className="img-thumbnail cursor-pointer" alt="preview" />
                        ))}
                    </div>
                </div>

                {/* Right Side: Product Content */}
                <div className="col-md-6">
                    <div className="ps-lg-4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb small text-uppercase fw-bold">
                                <li className="breadcrumb-item"><span className="text-primary">{arr.category}</span></li>
                                <li className="breadcrumb-item active">{arr.brand}</li>
                            </ol>
                        </nav>

                        <h1 className="display-5 fw-bold mb-3">{arr.title}</h1>
                        
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <span className="h2 fw-bold text-success mb-0">${arr.price}</span>
                            <span className="badge bg-danger">-{arr.discountPercentage}% OFF</span>
                        </div>

                        <p className="lead text-muted mb-4">{arr.description}</p>

                        <ul className="list-group list-group-flush mb-4">
                            <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="text-muted">Availability</span>
                                <span className={arr.stock > 0 ? "text-success fw-bold" : "text-danger"}>
                                    {arr.stock > 0 ? `In Stock (${arr.stock} units)` : "Out of Stock"}
                                </span>
                            </li>
                            <li className="list-group-item px-0 d-flex justify-content-between">
                                <span className="text-muted">Weight</span>
                                <span>{arr.weight}g</span>
                            </li>
                        </ul>

                        <div className="d-grid gap-2">
                            <button className="btn btn-primary btn-lg rounded-pill shadow-sm">
                                <i className="bi bi-cart-plus me-2"></i> Add to Cart
                            </button>
                            <button className="btn btn-outline-dark btn-lg rounded-pill">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
