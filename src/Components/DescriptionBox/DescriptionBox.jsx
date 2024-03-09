import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          hic saepe sunt quod consequuntur ipsa quam optio cum doloremque
          repellat dicta distinctio repudiandae aspernatur nesciunt eaque.
          Dolorum non dicta maxime nam maiores, delectus at vitae consectetur
          est! Sint excepturi impedit ipsam dicta reprehenderit in, doloremque,
          totam velit nemo suscipit odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem magnam debitis excepturi? Voluptate odit quasi odio
          dolorem unde veritatis nobis!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
