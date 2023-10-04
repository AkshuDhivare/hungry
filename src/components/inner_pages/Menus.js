import React, { useState } from "react";
import MenuCard from "./menu/MenuCard";
import Menu_Filter_btn from "./menu/Menu_Filter_btn";
import Menu_data from "./menu/Menu_data";

const filter_category = [
  "ALL", // Changed "aLL" to "ALL" to match categories
  ...new Set(
    Menu_data.map((element) => {
      return element.category;
    })
  ),
];

function Menu() {
  const [menuData, setMenuData] = useState(Menu_data);
  const [newcategory, setNewcategory] = useState(filter_category);

  const filter_data = (category) => {
    if (category === "ALL") {
      setMenuData(Menu_data); // Reset to all menu items
    } else {
      const new_filter_menu = Menu_data.filter((element) => {
        return element.category === category;
      });
      setMenuData(new_filter_menu);
    }
  };

  return (
    <>
      <section className="about_us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pt-3 text-center ">
              <h1>Menu's</h1>
              <Menu_Filter_btn
                filter_data={filter_data}
                filter_category={filter_category}
                className="py-5"
              />
              <hr />
              <section>
                <div className="container-fluid">
                  <div className="row py-5 justify-content-center ">
                    <MenuCard menuData={menuData} />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
