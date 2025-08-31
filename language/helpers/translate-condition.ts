export function translateCondition(condition: string): string {
  // Handle boolean operators first (AND, OR)
  if (condition.includes(" and ")) {
    const parts = condition.split(" and ");
    const leftCondition = translateCondition(parts[0].trim());
    const rightCondition = translateCondition(parts[1].trim());
    return `${leftCondition} && ${rightCondition}`;
  }

  if (condition.includes(" or ")) {
    const parts = condition.split(" or ");
    const leftCondition = translateCondition(parts[0].trim());
    const rightCondition = translateCondition(parts[1].trim());
    return `${leftCondition} || ${rightCondition}`;
  }

  // GREATER THAN OR EQUAL TO
  if (condition.includes(" is greater than or equal to ")) {
    const [left, right] = condition.split(" is greater than or equal to ");
    return `${left.trim()} >= ${right.trim()}`;
  }

  // LESS THAN OR EQUAL TO
  if (condition.includes(" is less than or equal to ")) {
    const [left, right] = condition.split(" is less than or equal to ");
    return `${left.trim()} <= ${right.trim()}`;
  }

  // GREATER THAN
  if (condition.includes(" is greater than ")) {
    const [left, right] = condition.split(" is greater than ");
    return `${left.trim()} > ${right.trim()}`;
  }

  // LESS THAN
  if (condition.includes(" is less than ")) {
    const [left, right] = condition.split(" is less than ");
    return `${left.trim()} < ${right.trim()}`;
  }

  // INEQUALITY (must come before EQUALITY to avoid conflicts)
  if (condition.includes(" is not equal to ")) {
    const [left, right] = condition.split(" is not equal to ");
    return `${left.trim()} !== ${right.trim()}`;
  }

  // EQUALITY
  if (condition.includes(" is equal to ")) {
    const [left, right] = condition.split(" is equal to ");
    return `${left.trim()} === ${right.trim()}`;
  }

  // SHORT EQUALITY (e.g., "age is 18")
  if (
    condition.includes(" is ") &&
    !condition.includes(" is not ") &&
    !condition.includes(" is greater ") &&
    !condition.includes(" is less ")
  ) {
    const [left, right] = condition.split(" is ");
    return `${left.trim()} === ${right.trim()}`;
  }

  return condition;
}
