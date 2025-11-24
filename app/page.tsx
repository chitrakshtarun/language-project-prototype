"use client";

import { Card } from "@/components/ui/card";
import { Editor } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { Resizable } from "re-resizable";
import { codeExamples } from "@/language/examples";
import { useState, useEffect } from "react";
import { customParse, executeJS } from "@/language/interpreter";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

export default function Home() {
  const [error, setError] = useState("");
  const [output, setOutput] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [code, setCode] = useState(codeExamples[0].code);

  const handleRunCode = () => {
    try {
      const js = customParse(code);
      setJsCode(js);
      setError("");

      const result = executeJS(js);
      setOutput(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      console.error(error);
      setOutput(`Error: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  const handleExampleChange = (value: string) => {
    const example = codeExamples.find((ex) => ex.id === value);
    if (example) {
      setCode(example.code);
    }
  };

  useEffect(() => {
    handleRunCode();
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <nav className="flex flex-row w-screen items-center justify-between overflow-hidden border-b py-4 px-8">
        <h1 className="text-2xl font-bold">General-Purpose Programming Language Prototype</h1>
        <div className="flex gap-4">
          <Link href={"/docs"}>
            <Button variant={"link"}>Documentation</Button>
          </Link>
          <Link href={"/test"}>
            <Button variant={"link"}>Test Suite</Button>
          </Link>
          <Button onClick={handleRunCode}>Run Code</Button>
        </div>
      </nav>

      <main className="flex-1 w-screen p-8 overflow-hidden">
        <div className="flex h-full gap-4">
          <Resizable
            defaultSize={{ width: "50%", height: "100%" }}
            minWidth="30%"
            maxWidth="70%"
            enable={{ right: true }}
            className="border rounded-md overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="bg-muted p-2 font-medium flex items-center justify-between">
                <span>Code Editor - Custom Programming Language</span>
                <Select onValueChange={handleExampleChange} defaultValue={codeExamples[0].id}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select example" />
                  </SelectTrigger>
                  <SelectContent>
                    {codeExamples.map((example) => (
                      <SelectItem key={example.id} value={example.id}>
                        {example.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Editor
                  height="100%"
                  defaultLanguage="plaintext"
                  value={code}
                  onChange={(value) => setCode(value || "")}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: "on",
                  }}
                  theme={"vs-dark"}
                />
              </div>
            </div>
          </Resizable>

          <div className="flex-1 flex flex-col gap-4">
            <Card className="flex-1 py-0 gap-0 overflow-hidden flex flex-col">
              <div className="bg-muted p-2 font-medium">Equivalent JavaScript Code</div>
              <div className="flex-1 overflow-hidden">
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  value={jsCode}
                  options={{
                    readOnly: true,
                    minimap: { enabled: false },
                    fontSize: 14,
                    wordWrap: "on",
                  }}
                  theme={"vs-dark"}
                />
              </div>
            </Card>

            <Card className="flex-1 py-0 gap-0 overflow-hidden flex flex-col">
              <div className="bg-muted p-2 font-medium">Output</div>
              <div className="flex-1 p-4 font-mono text-sm whitespace-pre-wrap overflow-auto bg-black text-white">
                {output || "Run your code to see output here..."}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
