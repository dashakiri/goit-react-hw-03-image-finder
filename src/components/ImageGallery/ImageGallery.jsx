import { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { ContentLoader } from "../Loader/Loader";
import { FetchImages } from "../FetchImages/FetchImages";
import { LoadMoreButton } from "../Button/Button";
import { GalleryList } from "../ImageGalleryItem/ImageGalleryItem.styled";
import { Modal } from "../Modal/Modal";

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    largeImageURL: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    const currentQuery = this.props.searchQuery;
    const prevQuery = prevProps.searchQuery;
    const prevPage = prevState.page;
    const currentPage = this.state.page;
    const { page } = this.state;

    if (currentQuery !== prevQuery || prevPage !== currentPage) {
      FetchImages(currentQuery, page).then((data) => {
        if (data.totalHits === 0) {
          return this.setState({ status: "rejected" });
        }

        if (this.state.page === 1) {
          this.setState({ status: "pending" });
          return this.setState({ images: data.hits, status: "resolved" });
        }

        if (this.state.page > 1) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });

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

  onModalClose = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { status, images, largeImageURL } = this.state;

    if (status === "idle") {
      return <p>Пожалуйста, введите поисковый запрос.</p>;
    }

    if (status === "pending") {
      return <ContentLoader />;
    }

    if (status === "resolved") {
      return (
        <GalleryList>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => {
            return (
              <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
                onClick={() => {
                  this.setState({ largeImageURL: largeImageURL });
                }}
              />
            );
          })}

          {largeImageURL && (
            <Modal
              largeImageUrl={largeImageURL}
              onModalClose={this.onModalClose}
            />
          )}

          <LoadMoreButton onClick={this.handleLoadMoreBtnClick} />
        </GalleryList>
      );
    }

    if (status === "rejected") {
      return <p>Изображения с именем {this.props.searchQuery} не найдены!</p>;
    }
  }
}
