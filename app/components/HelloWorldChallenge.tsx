"use client";

import { Alert, Button, Card } from "flowbite-react";
import { useState } from "react";
import { callChallengeApi } from "./DataService";

export function HelloWorldChallenge() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const runChallenge = async () => {
    setError("");
    setLoading(true);
    try {
      const text = await callChallengeApi("/api/challenge/HelloWorld");
      setResult(text);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <p className="afo-muted text-sm">Call the API and display the greeting.</p>
      <Button onClick={runChallenge} disabled={loading}>
        Run Hello World
      </Button>
      {result && <Alert color="success">{result}</Alert>}
      {error && <Alert color="failure">{error}</Alert>}
    </Card>
  );
}


