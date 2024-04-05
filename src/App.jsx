import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    const searchQuery = event.target.elements.searchQuery.value;

    console.log(searchQuery);
  };
  const handleLoadMoreClick = () => {
    setIsLoading(true);

    setIsLoading(false);
  };
  const errorMessage = "";
  return (
    <>
      <LoadMoreBtn onClick={handleLoadMoreClick} />
      {isLoading && <p>Loading...</p>}
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery />
      <LoadMoreBtn onClick={handleLoadMoreClick} />
      <ErrorMessage message={errorMessage} />
    </>
  );
}

export default App;
