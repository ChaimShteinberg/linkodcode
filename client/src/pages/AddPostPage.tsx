import { useState } from "react";
import "../styles/addPostPage.css";
import { addPost } from "../api/posts";
import { useNavigate } from "react-router";

function AppPostPage() {
  const navigate = useNavigate();
  const [image, setImage] = useState<FileList | null>(null);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData();
          if (image) formData.append("image", image[0]);
          formData.append("description", description);
          formData.append("name", name);
          formData.append("time", new Date().toLocaleString());
          async function add() {
            const result = await addPost(formData);
            if (result.msg === "The post was added successfully") {
              navigate("/");
            } else if (result.msg === "You must log in to the system") {
              navigate("/login");
            }
          }
          add();
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
              setImage(e.target.files);
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
              setDescription(e.target.value);
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
              setName(e.target.value);
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
