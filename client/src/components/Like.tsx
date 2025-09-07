import { useState } from "react";
import "../styles/like.css";

function Like(props: { sum: number }) {
  const [likes, setLikes] = useState(props.sum);

  return (
    <section className="like">
      <p>{likes}</p>
      <button onClick={() => setLikes(likes + 1)}>
        <img src="src/assets/icons/like.svg" alt="like" />
      </button>
    </section>
  );
}

export default Like;
