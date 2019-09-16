import React, { Component } from "react";
import "./index.css";
import { data } from "./data";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { getHeaders } from "../../UI/misc";
import axios from "axios";

class addItem extends Component {
  state = {
    data: {
      id: "", 
      code: "",
      name: "",
      active: true,
      service: true,
      price: "",
      note: ""
    },
    submit: false,
    valid: false,
    validId: true, 
    error: ''
  };

  changeHandler = (event, name) => {
    const newData = { ...this.state.data };
    newData[name] = event.target.value;
    newData.id = this.props.lastId
    this.setState({ data: newData });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.setState({ submit: true });
    let valid = true;
    const data = {...this.state.data}
    for (let key in data) {
      valid = data[key] !== "" && valid;
    } 
    if (valid) {
      axios
        .post(`https://api.rentauto.xyz/additions`, data, getHeaders())
        .then(res => {
          const response = res.data;
          this.props.onAddHandler(response, null)
          const newData = {...this.state.data}
          
          newData.note = "";
          newData.price = "";
          newData.code = "";
          newData.name = "";

          this.setState({
            data: newData,
            submit: false,
            valid: true,
            validId: true, 
          });
        })
        .catch(error => {
          this.setState({error})
        });
     
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.error ? 
        <TableRow><div className="error_message">{this.state.error}</div></TableRow> : null
      }        
      <TableRow>
        <TableCell>id</TableCell>
        {data.map(item => (
          <TableCell key={item.name}>

            <input
              style={item.style}
              type={item.type}
              value={this.state.data[item.name]}
              placeholder={item.name}
              name={item.name}
              className={
                this.state.submit
                  ? this.state.data[item.name] === ""
                    ? "Danger"
                    : "Valid"
                  : "Default"
              }
              onChange={event => this.changeHandler(event, item.name)}
            />
          </TableCell>
        ))}
        <TableCell>
          <button className="button" onClick={this.onSubmitHandler}>
            <i className="large material-icons">add_circle_outline</i>
          </button>
        </TableCell>
      </TableRow>
      </React.Fragment>
    );
  }
}

export default addItem;
