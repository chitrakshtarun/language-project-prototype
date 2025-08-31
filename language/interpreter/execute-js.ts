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
