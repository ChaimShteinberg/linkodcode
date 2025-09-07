function Like(props: { sum: number }) {
  return (
    <>
      <img src="../assets/icons/like.svg" alt="like" />
      <p>{props.sum}</p>
    </>
  );
}

export default Like;
