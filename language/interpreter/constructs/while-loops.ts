import { getIndent, translateCondition } from "../../helpers";
import type { ParseContext, ParseResult } from "./types";

export function parseWhileLoops(context: ParseContext): ParseResult {
  const { line, indentLevel, inIfBlock, inWhileLoop, inFunction, declaredVariables, declaredFunctions } = context;

  // WHILE CONDITIONS
  if (line.startsWith("while ") && line.includes(" do")) {
    const condition = line.replace("while ", "").replace(" do", "");
    const jsCondition = translateCondition(condition);
    const jsCode = `${getIndent(indentLevel)}while (${jsCondition}) {\n`;

    return {
      jsCode,
      indentLevel: indentLevel + 1,
      inIfBlock,
      inWhileLoop: true,
      inFunction,
      declaredVariables,
      declaredFunctions,
      handled: true,
    };
  }

  // END WHILE CONDITIONS
  if (line === "endwhile") {
    const jsCode = `${getIndent(indentLevel - 1)}}\n`;

    return {
      jsCode,
      indentLevel: indentLevel - 1,
      inIfBlock,
      inWhileLoop: false,
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
