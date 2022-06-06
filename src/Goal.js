function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <div>A.<MadeGoal /></div>;
  }
  return <div>B.<MissedGoal /></div>;
}

export default Goal