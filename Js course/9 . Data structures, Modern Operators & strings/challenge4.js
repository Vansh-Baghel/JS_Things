"use strict";

if (typeof window !== "undefined") {
  //here `window` is available, so `window.document` (or simply `document`) is available too
  document.append(document.createElement("textarea"));
  document.body.append(document.createElement("button"));

  document.querySelector(".buttonn").addEventListener("click", function () {
    const text = document.querySelector("textarea").value;
    const rows = text.split("\n");

    for (const [i, row] of rows.entries()) {
      const [first, second] = row.toLowerCase().trim().split("_");

      const output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}`;
      console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
    }
  });
}
