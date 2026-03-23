export function validateAnswer(userOrder, correctOrder) {
  const isCorrect = userOrder.every((item, index) =>
    item.id === correctOrder[index].id
  );

  return {
    correct: isCorrect,
    userOrder,
    correctOrder
  };
}

export function getCorrectOrder(items) {
  return [...items].sort((a, b) => a.correctPosition - b.correctPosition);
}
