import { getIndent } from "../helpers";
import {
  parseIfStatements,
  parseForLoops,
  parseWhileLoops,
  parseArithmeticOperations,
  parseVariableDeclarations,
  parsePrintStatements,
  parseFunctions,
  parseFunctionCalls,
  type ParseContext,
} from "./constructs";

export function customParse(englishCode: string): string {
  const lines = englishCode.split("\n");
  let jsCode = "";
  let indentLevel = 0;
  let inIfBlock = false;
  let inWhileLoop = false;
  let inFunction = false;

  const declaredVariables = new Set<string>();
  const declaredFunctions = new Set<string>();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "") {
      jsCode += "\n";
      continue;
    }

    const context: ParseContext = {
      line,
      indentLevel,
      inIfBlock,
      inWhileLoop,
      inFunction,
      declaredVariables,
      declaredFunctions,
    };

    // Try each construct parser in order
    // Functions and function calls should come before variable declarations to avoid conflicts with "let"
    const parsers = [
      parseIfStatements,
      parseForLoops,
      parseWhileLoops,
      parseFunctions,
      parseFunctionCalls,
      parseArithmeticOperations,
      parseVariableDeclarations,
      parsePrintStatements,
    ];

    let handled = false;
    for (const parser of parsers) {
      const result = parser(context);
      if (result.handled) {
        jsCode += result.jsCode;
        indentLevel = result.indentLevel;
        inIfBlock = result.inIfBlock;
        inWhileLoop = result.inWhileLoop;
        inFunction = result.inFunction;
        handled = true;
        break;
      }
    }

    // If no parser handled the line, mark it as unsupported
    if (!handled) {
      jsCode += `${getIndent(indentLevel)}// Unsupported: ${line}\n`;
    }
  }

  return jsCode;
}
