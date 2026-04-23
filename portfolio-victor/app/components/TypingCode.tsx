"use client";

import { useEffect, useState } from "react";

const text = "<code/>";

export default function TypingCode() {
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");
  const [index, setIndex] = useState(0);
  const [blinkCount, setBlinkCount] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // DIGITANDO
    if (phase === "typing") {
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, 200);
      } else {
        timeout = setTimeout(() => {
          setPhase("pause");
        }, 300);
      }
    }

    // PAUSA (cursor piscando)
    else if (phase === "pause") {
      timeout = setTimeout(() => {
        setShowCursor((prev) => !prev);
        setBlinkCount((prev) => prev + 1);
      }, 350);

      if (blinkCount >= 10) {
        timeout = setTimeout(() => {
          setPhase("deleting");
        }, 300);
      }
    }

    // DELETANDO
    else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
        }, 200);
      } else {
        timeout = setTimeout(() => {
          setIndex(0);
          setBlinkCount(0);
          setShowCursor(true);
          setPhase("typing");
        }, 500);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, phase, blinkCount, displayed]);

  return (
    <span className="text-[80px] md:text-[120px] font-semibold text-zinc-600">
      {displayed}
      <span
        className={`ml-1 transition-opacity duration-200 ${
          showCursor ? "text-zinc-400" : "text-zinc-600"
        }`}
      >
        |
      </span>

    </span>
  );
}
