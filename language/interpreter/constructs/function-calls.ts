import { getIndent, translateExpression } from "../../helpers";
import type { ParseContext, ParseResult } from "./types";

export function parseFunctionCalls(context: ParseContext): ParseResult {
  const { line, indentLevel, inIfBlock, inWhileLoop, inFunction, declaredVariables, declaredFunctions } = context;

  // FUNCTION CALL - No parameters
  // Pattern: "run x"
  if (line.startsWith("run ") && !line.includes(" with ")) {
    const functionName = line.replace("run ", "").trim();
    const jsCode = `${getIndent(indentLevel)}${functionName}();\n`;

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

  // FUNCTION CALL - With parameters
  // Pattern: "run x with a and b"
  if (line.startsWith("run ") && line.includes(" with ")) {
    const afterRun = line.replace("run ", "").trim();
    const parts = afterRun.split(" with ");
    
    if (parts.length === 2) {
      const functionName = parts[0].trim();
      const argsString = parts[1].trim();
      
      // Parse arguments: "5 and 10" -> ["5", "10"]
      // Handle "a and b and c" -> ["a", "b", "c"]
      const args = argsString.split(" and ").map(arg => translateExpression(arg.trim()));
      
      const jsArgs = args.join(", ");
      const jsCode = `${getIndent(indentLevel)}${functionName}(${jsArgs});\n`;

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

  // RETURN STATEMENT
  // Pattern: "return value"
  if (line.startsWith("return ")) {
    const returnValue = line.replace("return ", "").trim();
    const jsReturnValue = translateExpression(returnValue);
    const jsCode = `${getIndent(indentLevel)}return ${jsReturnValue};\n`;

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


