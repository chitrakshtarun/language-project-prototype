export interface ParseContext {
  line: string;
  indentLevel: number;
  inIfBlock: boolean;
  inWhileLoop: boolean;
  declaredVariables: Set<string>;
}

export interface ParseResult {
  jsCode: string;
  indentLevel: number;
  inIfBlock: boolean;
  inWhileLoop: boolean;
  declaredVariables: Set<string>;
  handled: boolean;
}
