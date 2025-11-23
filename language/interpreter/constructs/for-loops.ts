import { getIndent } from "../../helpers";
import type { ParseContext, ParseResult } from "./types";

export function parseForLoops(context: ParseContext): ParseResult {
  const { line, indentLevel, inIfBlock, inWhileLoop, inFunction, declaredVariables, declaredFunctions } = context;

  // FOR LOOPS - Array iteration
  if (line.startsWith("for ") && line.includes(" in ")) {
    const parts = line.replace("for ", "").split(" in ");
    const varName = parts[0].trim();
    const arrayName = parts[1].trim();

    let jsCode = "";
    if (!declaredVariables.has(varName)) {
      jsCode += `${getIndent(indentLevel)}let ${varName};\n`;
      declaredVariables.add(varName);
    }
    jsCode += `${getIndent(indentLevel)}for (${varName} of ${arrayName}) {\n`;

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

  // FOR LOOPS - Numeric range
  if (line.startsWith("for ") && line.includes(" from ") && line.includes(" to ")) {
    const parts = line.replace("for ", "").split(" from ");
    const varName = parts[0].trim();
    const range = parts[1].split(" to ");
    const start = range[0].trim();
    const end = range[1].trim();

    let jsCode = "";
    if (!declaredVariables.has(varName)) {
      jsCode += `${getIndent(indentLevel)}let ${varName} = ${start};\n`;
      declaredVariables.add(varName);
    }
    jsCode += `${getIndent(indentLevel)}for (${varName} = ${start}; ${varName} <= ${end}; ${varName}++) {\n`;

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

  // END FOR LOOPS
  if (line === "endfor") {
    const jsCode = `${getIndent(indentLevel - 1)}}\n`;

    return {
      jsCode,
      indentLevel: indentLevel - 1,
      inIfBlock,
      inWhileLoop,
      declaredVariables,
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
