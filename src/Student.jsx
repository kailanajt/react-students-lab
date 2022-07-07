import Score from "./Score";

const Student = (props) => {
  return ( 
    <>
    <div>
   <h2>{props.student.name}</h2>
      <h3>Bio:</h3>
    <p>{props.student.bio}</p>
    {props.student.scores.map(score =>
      <Score score={score}/>
      )}
    </div>
    </>
   );
}
 
export default Student;