import React, { Component } from 'react';





class TableRows extends Component {





  render() {
    let { items } = this.props
    return (
      <>
        {
          items.map(item => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
              </tr>
            )
          })
        }
      </>


    )
  }
}

export default TableRows;
