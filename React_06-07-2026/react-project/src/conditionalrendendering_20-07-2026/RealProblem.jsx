function RealProblem() {
  const age = 20;

  return (
    <div>
      <h1>Voting Eligibility</h1>

      {age >= 18 ? (
        <p>You are eligible to vote.</p>
      ) : (
        <p>You are not eligible to vote.</p>
      )}
    </div>
  );
}
export default RealProblem;
