// Don't use console.log, because your algorithm is to slow then...
function crack(hash) {
  // G00D LUCK
  for (let i = 0; i < 100000; i++) {
    const pin = i.toString().padStart(5, "0");
    if (md5(pin) === hash) {
      return pin;
    }
  }
}
