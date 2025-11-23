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

  // FUNCTION CALL - With parameters
  // Pattern: "run x with a and b"
  if (expr.startsWith("run ") && expr.includes(" with ")) {
    const afterRun = expr.replace("run ", "").trim();
    const parts = afterRun.split(" with ");
    
    if (parts.length === 2) {
      const functionName = parts[0].trim();
      const argsString = parts[1].trim();
      
      // Parse arguments: "5 and 10" -> ["5", "10"]
      const args = argsString.split(" and ").map(arg => translateExpression(arg.trim()));
      
      const jsArgs = args.join(", ");
      return `${functionName}(${jsArgs})`;
    }
  }

  // FUNCTION CALL - No parameters
  // Pattern: "run x"
  if (expr.startsWith("run ") && !expr.includes(" with ")) {
    const functionName = expr.replace("run ", "").trim();
    return `${functionName}()`;
  }

  return expr.trim();
}
