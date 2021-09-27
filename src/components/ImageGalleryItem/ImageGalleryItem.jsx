import { ListItem } from "./ImageGalleryItem.styled";

export function ImageGalleryItem({ webformatURL, tags, onClick }) {
  return (
    <ListItem onClick={onClick}>
      <img src={webformatURL} alt={tags} width="300" height="200" />
    </ListItem>
  );
}
