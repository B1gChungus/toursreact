import React from 'react'

function List({ items, removet }) {
    return items.map((item) => {
        let { name, price, info, image, id } = item;
        let d1 = info.slice(0, info.length / 2);
        let d2 = info.slice(info.length / 2 + 1, info.length);
        return (
            <div className="card" key={id}>
                <img src={image} alt="tourimg" />
                <div>
                    <p className="name">{name}</p>
                    <p className="price">{price}</p>
                    <p className="description">{d1}<p className="readmore">{d2}</p></p>
                    <button className="notinterested" onClick={() => removet(id)}>Not Interested</button>
                </div>
            </div>
        );
    });
};

export default List;