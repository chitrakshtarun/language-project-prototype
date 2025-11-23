import { getIndent, translateCondition, translateExpression } from "../../helpers";
import type { ParseContext, ParseResult } from "./types";

export function parsePrintStatements(context: ParseContext): ParseResult {
  const { line, indentLevel, inIfBlock, inWhileLoop, inFunction, declaredVariables, declaredFunctions } = context;

  // TERNARY CONDITIONAL PRINT
  if (line.startsWith("if ") && line.includes(" print ") && line.includes(" otherwise print ")) {
    const parts = line.match(/^if (.+?) print (.+?) otherwise print (.+)$/);
    if (parts) {
      const condition = parts[1].trim();
      const trueValue = parts[2].trim();
      const falseValue = parts[3].trim();

      const jsCondition = translateCondition(condition);
      const jsTrueValue = translateExpression(trueValue);
      const jsFalseValue = translateExpression(falseValue);

      const jsCode = `${getIndent(indentLevel)}console.log(${jsCondition} ? ${jsTrueValue} : ${jsFalseValue});\n`;

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
  }

  // REGULAR PRINT
  if (line.startsWith("print ")) {
    const value = line.replace("print ", "");
    const jsValue = translateExpression(value);
    const jsCode = `${getIndent(indentLevel)}console.log(${jsValue});\n`;

    return {
      jsCode,
      indentLevel,
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
