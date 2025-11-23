import { getIndent, translateCondition } from "../../helpers";
import type { ParseContext, ParseResult } from "./types";

export function parseIfStatements(context: ParseContext): ParseResult {
  const { line, indentLevel, inIfBlock, inWhileLoop, inFunction, declaredVariables, declaredFunctions } = context;

  // IF CONDITIONS
  if (line.startsWith("if ") && line.includes(" then")) {
    const condition = line.replace("if ", "").replace(" then", "");
    const jsCondition = translateCondition(condition);
    const jsCode = `${getIndent(indentLevel)}if (${jsCondition}) {\n`;

    return {
      jsCode,
      indentLevel: indentLevel + 1,
      inIfBlock: true,
      inWhileLoop,
      inFunction,
      declaredVariables,
      declaredFunctions,
      handled: true,
    };
  }

  // ELSE CONDITIONS
  if (line === "else") {
    const jsCode = `${getIndent(indentLevel)}} else {\n`;

    return {
      jsCode,
      indentLevel: indentLevel + 1,
      inIfBlock,
      inWhileLoop,
      inFunction,
      declaredVariables,
      declaredFunctions,
      handled: true,
    };
  }

  // END IF CONDITIONS
  if (line === "endif") {
    const jsCode = `${getIndent(indentLevel - 1)}}\n`;

    return {
      jsCode,
      indentLevel: indentLevel - 1,
      inIfBlock: false,
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
