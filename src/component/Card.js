import React, { useState } from "react";

// Props
// function Card(props) {
//   function removeHandler() {
//     props.removeTour(props.id);
//   }

//   const [readmore, setReadmore] = useState(false);
//   const description = readmore
//     ? props.info
//     : `${props.info.substring(0, 200)}....`;

//   function readmoreHandler() {
//     setReadmore(!readmore);
//   }

//   return (
//     <div>
//       <div>
//         <img src={props.image} alt="" />
//       </div>
//       <div>
//         <div>{props.price}</div>
//         <div>{props.name}</div>
//       </div>
//       <div className="description">
//         {description}
//         <span className="read-more" onClick={readmoreHandler}>
//           {readmore ? `Show Less` : `Read More`}
//         </span>
//       </div>
//       <div>
//         <button onClick={()=>removeHandler(props.id)}>Not Interested</button>
//       </div>
//     </div>
//   );
// }

// Direct Pass the parameters in function

function Card({ id, name, info, image, price, removeTour }) {
  function removeHandler() {
    removeTour(id);
  }

  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt="" />
      <div className="tour-info">
        <div className="tour-detail">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmoreHandler}>
            {readmore ? `Show Less` : `Read More`}
          </span>
        </div>
      </div>
      <button className="btn-red" onClick={removeHandler}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
