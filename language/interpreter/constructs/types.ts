export interface ParseContext {
  line: string;
  indentLevel: number;
  inIfBlock: boolean;
  inWhileLoop: boolean;
  inFunction: boolean;
  declaredVariables: Set<string>;
  declaredFunctions: Set<string>;
}

export interface ParseResult {
  jsCode: string;
  indentLevel: number;
  inIfBlock: boolean;
  inWhileLoop: boolean;
  inFunction: boolean;
  declaredVariables: Set<string>;
  declaredFunctions: Set<string>;
  handled: boolean;
}
