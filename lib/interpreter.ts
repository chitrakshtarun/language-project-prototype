export function parseEnglishToJS(englishCode: string): string {
  const lines = englishCode.split("\n");
  let jsCode = "";
  let indentLevel = 0;
  let inIfBlock = false;
  let inWhileLoop = false;

  const declaredVariables = new Set<string>();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line === "") {
      jsCode += "\n";
      continue;
    }

    // IF CONDITIONS
    if (line.startsWith("if ") && line.includes(" then")) {
      const condition = line.replace("if ", "").replace(" then", "");
      const jsCondition = translateCondition(condition);
      jsCode += `${getIndent(indentLevel)}if (${jsCondition}) {\n`;
      indentLevel++;
      inIfBlock = true;
      continue;
    }

    // ELSE CONDITIONS
    if (line === "else") {
      jsCode += `${getIndent(indentLevel)}} else {\n`;
      indentLevel++;
      continue;
    }

    // END IF CONDITIONS
    if (line === "endif") {
      indentLevel--;
      jsCode += `${getIndent(indentLevel)}}\n`;
      inIfBlock = false;
      continue;
    }

    // FOR LOOPS
    if (line.startsWith("for ") && line.includes(" from ") && line.includes(" to ")) {
      const parts = line.replace("for ", "").split(" from ");
      const varName = parts[0].trim();
      const range = parts[1].split(" to ");
      const start = range[0].trim();
      const end = range[1].trim();

      if (!declaredVariables.has(varName)) {
        jsCode += `${getIndent(indentLevel)}let ${varName} = ${start};\n`;
        declaredVariables.add(varName);
      }
      jsCode += `${getIndent(indentLevel)}for (${varName} = ${start}; ${varName} <= ${end}; ${varName}++) {\n`;
      indentLevel++;
      continue;
    }

    // END FOR LOOPS
    if (line === "endfor") {
      indentLevel--;
      jsCode += `${getIndent(indentLevel)}}\n`;
      continue;
    }

    // WHILE CONDITIONS
    if (line.startsWith("while ") && line.includes(" do")) {
      const condition = line.replace("while ", "").replace(" do", "");
      const jsCondition = translateCondition(condition);
      jsCode += `${getIndent(indentLevel)}while (${jsCondition}) {\n`;
      indentLevel++;
      inWhileLoop = true;
      continue;
    }

    // END WHILE CONDITIONS
    if (line === "endwhile") {
      indentLevel--;
      jsCode += `${getIndent(indentLevel)}}\n`;
      inWhileLoop = false;
      continue;
    }

    // INCREMENT
    if (line.startsWith("increment ") && line.includes(" by ")) {
      const parts = line.replace("increment ", "").split(" by ");
      const varName = parts[0].trim();
      const amount = parts[1].trim();
      jsCode += `${getIndent(indentLevel)}${varName} += ${amount};\n`;
      continue;
    }

    // DECREMENT
    if (line.startsWith("decrement ") && line.includes(" by ")) {
      const parts = line.replace("decrement ", "").split(" by ");
      const varName = parts[0].trim();
      const amount = parts[1].trim();
      jsCode += `${getIndent(indentLevel)}${varName} -= ${amount};\n`;
      continue;
    }

    // SETTER
    if (line.includes(" is equal to ")) {
      const [varName, value] = line.split(" is equal to ");
      const trimmedVarName = varName.trim();
      const jsValue = translateExpression(value);

      if (declaredVariables.has(trimmedVarName)) {
        jsCode += `${getIndent(indentLevel)}${trimmedVarName} = ${jsValue};\n`;
      } else {
        jsCode += `${getIndent(indentLevel)}let ${trimmedVarName} = ${jsValue};\n`;
        declaredVariables.add(trimmedVarName);
      }
      continue;
    }

    // TERNARY CONDITIONAL
    if (line.startsWith("if ") && line.includes(" print ") && line.includes(" otherwise print ")) {
      const parts = line.match(/^if (.+?) print (.+?) otherwise print (.+)$/);
      if (parts) {
        const condition = parts[1].trim();
        const trueValue = parts[2].trim();
        const falseValue = parts[3].trim();

        const jsCondition = translateCondition(condition);
        const jsTrueValue = translateExpression(trueValue);
        const jsFalseValue = translateExpression(falseValue);

        jsCode += `${getIndent(indentLevel)}console.log(${jsCondition} ? ${jsTrueValue} : ${jsFalseValue});\n`;
        continue;
      }
    }

    // PRINT
    if (line.startsWith("print ")) {
      const value = line.replace("print ", "");
      const jsValue = translateExpression(value);
      jsCode += `${getIndent(indentLevel)}console.log(${jsValue});\n`;
      continue;
    }

    jsCode += `${getIndent(indentLevel)}// Unsupported: ${line}\n`;
  }

  return jsCode;
}

function translateExpression(expr: string): string {
  if (expr.startsWith('"') && expr.endsWith('"')) {
    return expr;
  }

  // ADD
  if (expr.includes(" plus ")) {
    const [left, right] = expr.split(" plus ");
    return `${translateExpression(left.trim())} + ${translateExpression(right.trim())}`;
  }

  // SUBTRACT
  if (expr.includes(" minus ")) {
    const [left, right] = expr.split(" minus ");
    return `${translateExpression(left.trim())} - ${translateExpression(right.trim())}`;
  }

  // PRODUCT
  if (expr.includes(" times ")) {
    const [left, right] = expr.split(" times ");
    return `${translateExpression(left.trim())} * ${translateExpression(right.trim())}`;
  }

  // DIVISION
  if (expr.includes(" divided by ")) {
    const [left, right] = expr.split(" divided by ");
    return `${translateExpression(left.trim())} / ${translateExpression(right.trim())}`;
  }

  return expr.trim();
}

function translateCondition(condition: string): string {
  // Handle boolean operators first (AND, OR)
  if (condition.includes(" and ")) {
    const parts = condition.split(" and ");
    const leftCondition = translateCondition(parts[0].trim());
    const rightCondition = translateCondition(parts[1].trim());
    return `${leftCondition} && ${rightCondition}`;
  }

  if (condition.includes(" or ")) {
    const parts = condition.split(" or ");
    const leftCondition = translateCondition(parts[0].trim());
    const rightCondition = translateCondition(parts[1].trim());
    return `${leftCondition} || ${rightCondition}`;
  }

  // GREATER THAN OR EQUAL TO
  if (condition.includes(" is greater than or equal to ")) {
    const [left, right] = condition.split(" is greater than or equal to ");
    return `${left.trim()} >= ${right.trim()}`;
  }

  // LESS THAN OR EQUAL TO
  if (condition.includes(" is less than or equal to ")) {
    const [left, right] = condition.split(" is less than or equal to ");
    return `${left.trim()} <= ${right.trim()}`;
  }

  // GREATER THAN
  if (condition.includes(" is greater than ")) {
    const [left, right] = condition.split(" is greater than ");
    return `${left.trim()} > ${right.trim()}`;
  }

  // LESS THAN
  if (condition.includes(" is less than ")) {
    const [left, right] = condition.split(" is less than ");
    return `${left.trim()} < ${right.trim()}`;
  }

  // INEQUALITY (must come before EQUALITY to avoid conflicts)
  if (condition.includes(" is not equal to ")) {
    const [left, right] = condition.split(" is not equal to ");
    return `${left.trim()} !== ${right.trim()}`;
  }

  // EQUALITY
  if (condition.includes(" is equal to ")) {
    const [left, right] = condition.split(" is equal to ");
    return `${left.trim()} === ${right.trim()}`;
  }

  // SHORT EQUALITY (e.g., "age is 18")
  if (
    condition.includes(" is ") &&
    !condition.includes(" is not ") &&
    !condition.includes(" is greater ") &&
    !condition.includes(" is less ")
  ) {
    const [left, right] = condition.split(" is ");
    return `${left.trim()} === ${right.trim()}`;
  }

  return condition;
}

function getIndent(level: number): string {
  return "  ".repeat(level);
}

export function executeJS(jsCode: string): string {
  let output = "";

  const originalConsoleLog = console.log;
  console.log = (...args) => {
    output += args.join(" ") + "\n";
  };

  try {
    new Function(jsCode)();
  } catch (error) {
    output += `Error: ${error instanceof Error ? error.message : String(error)}\n`;
  } finally {
    console.log = originalConsoleLog;
  }

  return output;
}
