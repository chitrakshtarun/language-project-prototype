import { getIndent, translateExpression } from "../../helpers";
import type { ParseContext, ParseResult } from "./types";

export function parseVariableDeclarations(context: ParseContext): ParseResult {
  const { line, indentLevel, inIfBlock, inWhileLoop, inFunction, declaredVariables, declaredFunctions } = context;

  // USER INPUT - Pattern: "initialise x with user input" or "initialise x as type with user input" or with custom prompt
  if (line.startsWith("initialise ") && line.includes(" with user input")) {
    // Extract variable name and the rest
    const afterInitialise = line.replace("initialise ", "").trim();
    
    let varName: string;
    let type: string | null = null;
    let promptMessage = "Enter value:";
    
    // Check for quoted prompt message at the end: "..." or '...'
    const quotedPromptMatch = line.match(/(["'])([^"']*)\1\s*$/);
    if (quotedPromptMatch) {
      promptMessage = quotedPromptMatch[2];
      // Remove the quoted prompt from the line for further parsing
      const lineWithoutPrompt = line.replace(quotedPromptMatch[0], "").trim();
      const afterInitialiseWithoutPrompt = lineWithoutPrompt.replace("initialise ", "").trim();
      
      // Check for type specification: "x as number with user input"
      const asTypeMatch = afterInitialiseWithoutPrompt.match(/^(\w+)\s+as\s+(\w+)\s+with\s+user\s+input$/);
      if (asTypeMatch) {
        varName = asTypeMatch[1].trim();
        type = asTypeMatch[2].trim().toLowerCase();
      } else {
        // No type: "x with user input"
        const noTypeMatch = afterInitialiseWithoutPrompt.match(/^(\w+)\s+with\s+user\s+input$/);
        if (noTypeMatch) {
          varName = noTypeMatch[1].trim();
        } else {
          // Fallback
          varName = afterInitialiseWithoutPrompt.split(" ")[0].trim();
        }
      }
    } else {
      // No custom prompt message
      // Check for type specification: "x as number with user input"
      const asTypeMatch = afterInitialise.match(/^(\w+)\s+as\s+(\w+)\s+with\s+user\s+input$/);
      if (asTypeMatch) {
        varName = asTypeMatch[1].trim();
        type = asTypeMatch[2].trim().toLowerCase();
      } else {
        // No type: "x with user input"
        const noTypeMatch = afterInitialise.match(/^(\w+)\s+with\s+user\s+input$/);
        if (noTypeMatch) {
          varName = noTypeMatch[1].trim();
        } else {
          // Fallback
          varName = afterInitialise.split(" ")[0].trim();
        }
      }
    }
    
    // Generate JavaScript code based on type
    let jsValue: string;
    if (type === "number") {
      jsValue = `Number(prompt("${promptMessage}"))`;
    } else if (type === "boolean") {
      // Boolean parsing - prompt once and check for true/false
      jsValue = `(function() { const input = prompt("${promptMessage}"); return input === "true" || input === "True" || input?.toLowerCase() === "true"; })()`;
    } else if (type === "string") {
      jsValue = `prompt("${promptMessage}")`;
    } else {
      // Default: string
      jsValue = `prompt("${promptMessage}")`;
    }
    
    let jsCode = "";
    if (declaredVariables.has(varName)) {
      jsCode = `${getIndent(indentLevel)}${varName} = ${jsValue};\n`;
    } else {
      jsCode = `${getIndent(indentLevel)}let ${varName} = ${jsValue};\n`;
      declaredVariables.add(varName);
    }
    
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
      inFunction,
      declaredVariables,
      declaredFunctions,
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
