import { ButtonLoadMore } from "./LoadMoreButton";

export function LoadMoreButton({ onClick }) {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load more
    </ButtonLoadMore>
  );
}
