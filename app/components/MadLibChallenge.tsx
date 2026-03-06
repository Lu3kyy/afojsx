"use client";

import { Alert, Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { callChallengeApi } from "./DataService";

type MadLibForm = {
  noun1: string;
  noun2: string;
  adjective1: string;
  adjective2: string;
  verb1: string;
  verb2: string;
  adverb: string;
  placeNoun: string;
};

const initialForm: MadLibForm = {
  noun1: "",
  noun2: "",
  adjective1: "",
  adjective2: "",
  verb1: "",
  verb2: "",
  adverb: "",
  placeNoun: "",
};

export function MadLibChallenge() {
  const [form, setForm] = useState<MadLibForm>(initialForm);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (field: keyof MadLibForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const runChallenge = async () => {
    setError("");
    setLoading(true);
    try {
      const text = await callChallengeApi("/api/challenge/MadLib", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      setResult(text);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <Label htmlFor="noun1">Noun 1</Label>
          <TextInput id="noun1" value={form.noun1} onChange={(e) => onChange("noun1", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="noun2">Noun 2</Label>
          <TextInput id="noun2" value={form.noun2} onChange={(e) => onChange("noun2", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="adjective1">Adjective 1</Label>
          <TextInput
            id="adjective1"
            value={form.adjective1}
            onChange={(e) => onChange("adjective1", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="adjective2">Adjective 2</Label>
          <TextInput
            id="adjective2"
            value={form.adjective2}
            onChange={(e) => onChange("adjective2", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="verb1">Verb 1</Label>
          <TextInput id="verb1" value={form.verb1} onChange={(e) => onChange("verb1", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="verb2">Verb 2</Label>
          <TextInput id="verb2" value={form.verb2} onChange={(e) => onChange("verb2", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="adverb">Adverb</Label>
          <TextInput id="adverb" value={form.adverb} onChange={(e) => onChange("adverb", e.target.value)} />
        </div>
        <div>
          <Label htmlFor="placeNoun">Place Noun</Label>
          <TextInput
            id="placeNoun"
            value={form.placeNoun}
            onChange={(e) => onChange("placeNoun", e.target.value)}
          />
        </div>
      </div>
      <Button onClick={runChallenge} disabled={loading}>
        Create Mad Lib
      </Button>
      {result && <Alert color="success">{result}</Alert>}
      {error && <Alert color="failure">{error}</Alert>}
    </Card>
  );
}


