function rgb(r, g, b) {
  // function to clamp and convert to 2-digit hex
  function toHex(value) {
    // clamp between 0 and 255
    value = Math.max(0, Math.min(255, value));
    // convert to hex and pad with 0 if needed
    let hex = value.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
  }

  return toHex(r) + toHex(g) + toHex(b);
}