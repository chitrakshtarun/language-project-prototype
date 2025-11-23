import { getIndent } from "../../helpers";
import type { ParseContext, ParseResult } from "./types";

export function parseFunctions(context: ParseContext): ParseResult {
  const { line, indentLevel, inIfBlock, inWhileLoop, inFunction, declaredVariables, declaredFunctions } = context;

  // FUNCTION DECLARATION - No parameters
  // Pattern: "let x be a function"
  if (line.startsWith("let ") && line.includes(" be a function") && !line.includes(" accepting ")) {
    const functionName = line.replace("let ", "").replace(" be a function", "").trim();
    
    if (!declaredFunctions.has(functionName)) {
      declaredFunctions.add(functionName);
    }

    const jsCode = `${getIndent(indentLevel)}function ${functionName}() {\n`;

    return {
      jsCode,
      indentLevel: indentLevel + 1,
      inIfBlock,
      inWhileLoop,
      inFunction: true,
      declaredVariables,
      declaredFunctions,
      handled: true,
    };
  }

  // FUNCTION DECLARATION - With parameters
  // Pattern: "let x be a function accepting a and b"
  if (line.startsWith("let ") && line.includes(" be a function accepting ")) {
    const afterLet = line.replace("let ", "").trim();
    const functionNameMatch = afterLet.match(/^(\w+)\s+be a function accepting (.+)$/);
    
    if (functionNameMatch) {
      const functionName = functionNameMatch[1].trim();
      const paramsString = functionNameMatch[2].trim();
      
      // Parse parameters: "a and b" -> ["a", "b"]
      // Handle "a and b and c" -> ["a", "b", "c"]
      const params = paramsString.split(" and ").map(p => p.trim());
      
      if (!declaredFunctions.has(functionName)) {
        declaredFunctions.add(functionName);
      }

      const jsParams = params.join(", ");
      const jsCode = `${getIndent(indentLevel)}function ${functionName}(${jsParams}) {\n`;

      return {
        jsCode,
        indentLevel: indentLevel + 1,
        inIfBlock,
        inWhileLoop,
        inFunction: true,
        declaredVariables,
        declaredFunctions,
        handled: true,
      };
    }
  }

  // END FUNCTION
  if (line === "end function") {
    const jsCode = `${getIndent(indentLevel - 1)}}\n`;

    return {
      jsCode,
      indentLevel: indentLevel - 1,
      inIfBlock,
      inWhileLoop,
      inFunction: false,
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

