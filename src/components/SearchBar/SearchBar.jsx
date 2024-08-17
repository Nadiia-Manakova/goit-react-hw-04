import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <header>
      <form className={css.section} onSubmit={handleSubmit}>
        <input
          type="text"
          name="topic"
          autoComplete="off"
          placeholder="Search images and photos"
          className={css.formField}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
    </header>
  );
}
