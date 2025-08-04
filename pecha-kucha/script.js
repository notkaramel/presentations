import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm";
import RevealMath from "reveal.js/plugin/math/math";
import RevealHighlight from "reveal.js/plugin/highlight/highlight";

/**
 * 20 secondes par diapositives
 *
 * Auto slide for Pecha Kucha:
 * https://revealjs.com/auto-slide/
 */

new Reveal({
  plugins: [Markdown, RevealMath.KaTeX, RevealHighlight],
}).initialize({
  backgroundTransition: "slide",
  slideNumber: "h/v",
  autoPlayMedia: true,
  autoSlide: 20000,
  backgroundTransition: "fade"
});
