import { Component } from "react";
import { ToastContainer } from "react-toastify";
import { SearchBar } from "./Searchbar/SearchBar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

class App extends Component {
  state = {
    searchQuery: "",
  };

  handleFormSubmit = (searchQuery) => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchQuery={searchQuery} />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
