function Like(props: { sum: number }) {
  return (
    <section className=".like">
      <img src="src/assets/icons/like.svg" alt="like" />
      <p>{props.sum}</p>
    </section>
  );
}

export default Like;
