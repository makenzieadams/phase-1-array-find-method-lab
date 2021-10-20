function isWinner(winner) {
  return winner.result === "W";
}

function superbowlWin(football) {
  const results = football.find(isWinner);

  if (results) {
    return results.year;
  }
  return undefined;
}
