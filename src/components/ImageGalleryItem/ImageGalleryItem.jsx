import { GalleryList, ListItem } from "./ImageGalleryItem.styled";

export function ImageGalleryItem({ images }) {
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, tags }) => {
        return (
          <ListItem key={id}>
            <img src={webformatURL} alt={tags} width="300" height="200" />
          </ListItem>
        );
      })}
    </GalleryList>
  );
}
