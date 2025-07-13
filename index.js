import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm";
import RevealMath from "reveal.js/plugin/math/math";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

console.log("This is overkill but I like to do things this way anyways so :)");

new Reveal({
  plugins: [Markdown, RevealMath.KaTeX, RevealHighlight],
}).initialize({
  slideNumber: "h/v",
  autoPlayMedia: true,
});