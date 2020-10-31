import React from 'react'
import Button from "elements/Button";

export default function MostPicked({ data }) {
    return (
        <section className="container bg-card">
            <h4 className="mb-3">Most Picked</h4>
            <div className="container-grid">
                {
                    data.map((item, index) => {
                        return (
                            <div key={`mostpicked-${index}`} className={`item column-2${index === 0 ? " row-1" : " row-1"}`}>
                                <div className="card card-featured">
                                    <div className="tag">
                                        <span className="text-white">{item.sold} Sold</span>
                                    </div>
                                    <figure className="img-wrapper">
                                        <img className="img-cover" src={item.imageUrl} alt={item.name} />
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button type="link" href={`/properties/${item._id}`} className="stretched-link d-block text-white">
                                            <h5 className="h4">{item.name}</h5>
                                        </Button>
                                        <span className="text-gray-300">
                                            {item.type}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </section >
    );
}
