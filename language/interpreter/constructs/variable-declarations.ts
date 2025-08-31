import { getIndent, translateExpression } from "../../helpers";
import type { ParseContext, ParseResult } from "./types";

export function parseVariableDeclarations(context: ParseContext): ParseResult {
  const { line, indentLevel, inIfBlock, inWhileLoop, declaredVariables } = context;

  // ARRAY DECLARATION
  if (line.includes(" is a list containing ")) {
    const [varName, values] = line.split(" is a list containing ");
    const trimmedVarName = varName.trim();
    const valueList = values.split(",").map((v) => v.trim());
    const jsValues = valueList.map((v) => translateExpression(v)).join(", ");

    let jsCode = "";
    if (declaredVariables.has(trimmedVarName)) {
      jsCode = `${getIndent(indentLevel)}${trimmedVarName} = [${jsValues}];\n`;
    } else {
      jsCode = `${getIndent(indentLevel)}let ${trimmedVarName} = [${jsValues}];\n`;
      declaredVariables.add(trimmedVarName);
    }

    return {
      jsCode,
      indentLevel,
      inIfBlock,
      inWhileLoop,
      declaredVariables,
      handled: true,
    };
  }

  // VARIABLE ASSIGNMENT
  if (line.includes(" is equal to ")) {
    const [varName, value] = line.split(" is equal to ");
    const trimmedVarName = varName.trim();
    const jsValue = translateExpression(value);

    let jsCode = "";
    if (declaredVariables.has(trimmedVarName)) {
      jsCode = `${getIndent(indentLevel)}${trimmedVarName} = ${jsValue};\n`;
    } else {
      jsCode = `${getIndent(indentLevel)}let ${trimmedVarName} = ${jsValue};\n`;
      declaredVariables.add(trimmedVarName);
    }

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
    declaredVariables,
    handled: false,
  };
}
