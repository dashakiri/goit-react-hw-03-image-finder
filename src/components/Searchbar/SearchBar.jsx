import { Component } from "react";
import { toast } from "react-toastify";
import { Header, Form, Input, Button } from "./SearchBar.js";

export class SearchBar extends Component {
  state = {
    searchQuery: "",
  };

  handleInputChange = (e) => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === "") {
      toast.warn("Введите поисковый запрос");
      return;
    }

    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />

          <Button type="submit">
            <span>Search</span>
          </Button>
        </Form>
      </Header>
    );
  }
}
