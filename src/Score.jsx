const Score = (props) => {
  console.log(props)
  return ( 
    <>
      <h2>
        Date:
      </h2>
      {props.score.date} 
      <h2>
        Score:
      </h2>
      {props.score.score}
    </>
  );
}

 
export default Score;