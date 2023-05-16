import { useState } from "react";

export default function RotatingText() {
  var ReactRotatingText = require("react-rotating-text");
  return (
    <ReactRotatingText items={["Hello👋", "你好👋", "Bonjour👋","नमस्ते👋", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ👋"]} />
  );
}
