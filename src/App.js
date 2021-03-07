import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

// componentImport
import SelectOption from './selectoption';
import TableRows from './TableRow';



class App extends Component {
  state = {

    isLoaded: false,
    items: [],
    filterItem: []
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
            filterItem: result
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  selectsearch(SelectValue) {

    if (SelectValue != "All") {
      let newList = this.state.items.filter(item => item.name == SelectValue)
      this.setState({ filterItem: newList })
    }
    else {
      this.setState({ filterItem: this.state.items })
    }
  }


  render() {




    return (
      <div className='container'>


<SelectOption filter={this.selectsearch.bind(this)}  lists={this.state.items}/>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name and surname</th>
              <th scope="col">Username</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>

            </tr>
          </thead>
          <tbody>
            <TableRows items={this.state.filterItem} />
          </tbody>
        </table>
      </div>


    )
  }
}

export default App;
