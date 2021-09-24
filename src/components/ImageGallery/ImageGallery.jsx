import { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ContentLoader } from "../Loader/Loader";
import { LoadMoreButton } from "../Button/Button";

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    const currentQuery = this.props.searchQuery;
    const prevQuery = prevProps.searchQuery;
    const prevPage = prevState.page;
    const currentPage = this.state.page;
    const { page } = this.state;

    if (currentQuery !== prevQuery || prevPage !== currentPage) {
      fetch(
        `https://pixabay.com/api/?key=22675606-31d87174acbb5d82d82bc8eb4&q=${currentQuery}&page=${page}&image_type=photo&orientation=horizontal&per_page=20`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.totalHits === 0) {
            return this.setState({ status: "rejected" });
          }

          if (this.state.page === 1) {
            this.setState({ status: "pending" });
            return this.setState({ images: data.hits, status: "resolved" });
          }

          if (this.state.page > 1) {
            return this.setState((prevState) => ({
              images: [...prevState.images, ...data.hits],
              status: "resolved",
            }));
          }
        });
    }
  }

  handleLoadMoreBtnClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    return;
  };

  render() {
    const { status } = this.state;

    if (status === "idle") {
      return <p>Пожалуйста, введите поисковый запрос.</p>;
    }

    if (status === "pending") {
      return <ContentLoader />;
    }

    if (status === "resolved") {
      return (
        <div>
          <ImageGalleryItem images={this.state.images} />
          <LoadMoreButton onClick={this.handleLoadMoreBtnClick} />
        </div>
      );
    }

    if (status === "rejected") {
      return <p>Изображения с именем {this.props.searchQuery} не найдены!</p>;
    }
  }
}
