import React from 'react'

function List({ items, removet }) {
    return items.map((item) => {
        let { name, price, info, image, id } = item;
        let d1 = info.slice(0, info.length / 2);
        let d2 = info.slice(info.length / 2 + 1, info.length);
        var show = false
        function showmore(id) {
            var dots = document.getElementById("dots" + id)
            var text2 = document.getElementById("text2" + id)
            var readmore = document.getElementById("readmore" + id)
            dots.style.display = show === false ? "none" : "inline-block"
            text2.style.display = show === false ? "inline" : "none"
            readmore.textContent = show === false ? "Show Less" : "Read More"
            show = !show
        }
        return (
            <div className="card" key={id}>
                <img src={image} alt="tourimg" />
                <div>
                    <div className="info">
                        <p className="name">{name}</p>
                        <p className="price">${price}</p>
                    </div>
                    <p className="description" >
                        {d1}
                        <span className="dots" id={`dots${id}`}>...</span>
                        <span className="text2" id={`text2${id}`} style={{ display: "none" }}>{d2} </span>
                        <a className="readmore" id={`readmore${id}`} style={{ display: "inline-block" }} onClick={() => { showmore(id) }}>Read More</a>
                    </p>
                    <button className="notinterested" onClick={() => removet(id)}>Not Interested</button>
                </div>
            </div>
        );
    });
};

export default List;