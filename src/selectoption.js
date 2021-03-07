import React from 'react';


function selectOp(props) {

 

  

    let SelectHandler = e => {
   
     
        props.filter(e.target.value);
     
    }
    let items =props.lists;

    return (
   
        <select className="form-control w-50 mb-4" onChange={SelectHandler}>
        <option defaultValue>All</option>
        {
         items.map(item => {
            return (
              <option key={item.id}>
                {item.name}
              </option>
            )
          })
        }
      </select>

    )

}
export default selectOp;