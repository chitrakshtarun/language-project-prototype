import { getIndent } from "../../helpers";
import type { ParseContext, ParseResult } from "./types";

export function parseArithmeticOperations(context: ParseContext): ParseResult {
  const { line, indentLevel, inIfBlock, inWhileLoop, inFunction, declaredVariables, declaredFunctions } = context;

  // INCREMENT
  if (line.startsWith("increment ") && line.includes(" by ")) {
    const parts = line.replace("increment ", "").split(" by ");
    const varName = parts[0].trim();
    const amount = parts[1].trim();
    const jsCode = `${getIndent(indentLevel)}${varName} += ${amount};\n`;

    return {
      jsCode,
      indentLevel,
      inIfBlock,
      inWhileLoop,
      inFunction,
      declaredVariables,
      declaredFunctions,
      handled: true,
    };
  }

  // DECREMENT
  if (line.startsWith("decrement ") && line.includes(" by ")) {
    const parts = line.replace("decrement ", "").split(" by ");
    const varName = parts[0].trim();
    const amount = parts[1].trim();
    const jsCode = `${getIndent(indentLevel)}${varName} -= ${amount};\n`;

    return {
      jsCode,
      indentLevel,
      inIfBlock,
      inWhileLoop,
      inFunction,
      declaredVariables,
      declaredFunctions,
      handled: true,
    };
  }

  return {
    jsCode: "",
    indentLevel,
    inIfBlock,
    inWhileLoop,
    inFunction,
    declaredVariables,
    declaredFunctions,
    handled: false,
  };
}
