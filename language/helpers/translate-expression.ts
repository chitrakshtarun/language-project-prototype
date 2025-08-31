export function translateExpression(expr: string): string {
  if (expr.startsWith('"') && expr.endsWith('"')) {
    return expr;
  }

  // ARRAY SIZE
  if (expr.startsWith("size of ")) {
    const arrayName = expr.replace("size of ", "").trim();
    return `${arrayName}.length`;
  }

  // ARRAY INDEXING
  if (expr.includes("position ") && expr.includes(" of ")) {
    const positionMatch = expr.match(/position (\d+) of (\w+)/);
    if (positionMatch) {
      const position = parseInt(positionMatch[1]);
      const arrayName = positionMatch[2];
      // Convert 1-based indexing to 0-based
      return `${arrayName}[${position - 1}]`;
    }
  }

  // ADD (with special handling for concatenation with +)
  if (expr.includes(" plus ")) {
    const [left, right] = expr.split(" plus ");
    return `${translateExpression(left.trim())} + ${translateExpression(right.trim())}`;
  }

  // STRING CONCATENATION (using +)
  if (expr.includes(" + ")) {
    const parts = expr.split(" + ");
    return parts.map((part) => translateExpression(part.trim())).join(" + ");
  }

  // SUBTRACT
  if (expr.includes(" minus ")) {
    const [left, right] = expr.split(" minus ");
    return `${translateExpression(left.trim())} - ${translateExpression(right.trim())}`;
  }

  // PRODUCT
  if (expr.includes(" times ")) {
    const [left, right] = expr.split(" times ");
    return `${translateExpression(left.trim())} * ${translateExpression(right.trim())}`;
  }

  // DIVISION
  if (expr.includes(" divided by ")) {
    const [left, right] = expr.split(" divided by ");
    return `${translateExpression(left.trim())} / ${translateExpression(right.trim())}`;
  }

  return expr.trim();
}
