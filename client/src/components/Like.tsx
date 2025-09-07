import "../styles/like.css"

function Like(props: { sum: number }) {
  return (
    <section className="like">
      <p>{props.sum}</p>
      <img src="src/assets/icons/like.svg" alt="like" />
    </section>
  );
}

export default Like;
