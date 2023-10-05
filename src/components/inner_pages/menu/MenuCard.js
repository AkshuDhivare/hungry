import React from "react";

function MenuCard({ menuData }) {
  return (
    <>
      {menuData.map((element, index) => {
        const { image, name, category, price, desc } = element;
        return (
          <div
            className="col-lg-3 my-3 text-start"
            key={index}
            data-aos="zoom-in-up"
            data-aos-duration="800"
          >
            <div class="card p-3">
              <img class="img-fluid W-25" src={image} alt={name} />
              <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">{desc}</p>
                <p class="card-text">{category}</p>
                <p class="card-text">{price}</p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MenuCard;
