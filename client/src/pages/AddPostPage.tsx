import { useRef } from "react";
import "../styles/addPostPage.css";

function AppPostPage() {
  const image = useRef<Object>(null);
  const description = useRef("");
  const name = useRef("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newPost = {
            image: image.current,
            description: description.current,
            name: name.current,
          };
        }}
      >
        <fieldset>
          <label htmlFor="image">Upload the image to the post</label>
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              image.current = e.target.files;
            }}
            required
          />
        </fieldset>

        <fieldset>
          <label htmlFor="description">description</label>
          <textarea
            name="description"
            id="description"
            rows={10}
            onChange={(e) => {
              description.current = e.target.value;
            }}
            required
          ></textarea>
        </fieldset>

        <fieldset>
          <label htmlFor="name">Enter the name of the post author</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => {
              name.current = e.target.value;
            }}
            required
          />
        </fieldset>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </>
  );
}

export default AppPostPage;
