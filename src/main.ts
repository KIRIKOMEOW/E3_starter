const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// Build the chosen moon face inside the refactored function.
function buildFace(): SVGSVGElement {
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute(
    "aria-label",
    "A sleepy moon face with a purple and blue gradient",
  );

  // Purple-to-blue gradient
  const defs = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "defs",
  );

  const gradient = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "linearGradient",
  );
  gradient.setAttribute("id", "moon-gradient");
  gradient.setAttribute("x1", "0%");
  gradient.setAttribute("y1", "0%");
  gradient.setAttribute("x2", "100%");
  gradient.setAttribute("y2", "100%");

  const startColor = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  startColor.setAttribute("offset", "0%");
  startColor.setAttribute("stop-color", "#8755d6");

  const endColor = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "stop",
  );
  endColor.setAttribute("offset", "100%");
  endColor.setAttribute("stop-color", "#a8ecff");

  gradient.append(startColor, endColor);
  defs.append(gradient);
  face.append(defs);

  // Gradient head
  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
  head.setAttribute("cx", "100");
  head.setAttribute("cy", "100");
  head.setAttribute("rx", "78");
  head.setAttribute("ry", "86");
  head.setAttribute("fill", "url(#moon-gradient)");
  head.setAttribute("stroke", "#302c29");
  head.setAttribute("stroke-width", "4");
  face.append(head);

  // Left closed eye
  const leftEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  leftEye.setAttribute("d", "M 55 83 Q 72 101 89 83");
  leftEye.setAttribute("fill", "none");
  leftEye.setAttribute("stroke", "#302c29");
  leftEye.setAttribute("stroke-width", "4");
  leftEye.setAttribute("stroke-linecap", "round");
  face.append(leftEye);

  // Right closed eye
  const rightEye = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  rightEye.setAttribute("d", "M 111 83 Q 128 101 145 83");
  rightEye.setAttribute("fill", "none");
  rightEye.setAttribute("stroke", "#302c29");
  rightEye.setAttribute("stroke-width", "4");
  rightEye.setAttribute("stroke-linecap", "round");
  face.append(rightEye);

  // Nose
  const nose = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line",
  );
  nose.setAttribute("x1", "100");
  nose.setAttribute("y1", "99");
  nose.setAttribute("x2", "96");
  nose.setAttribute("y2", "113");
  nose.setAttribute("stroke", "#302c29");
  nose.setAttribute("stroke-width", "4");
  nose.setAttribute("stroke-linecap", "round");
  face.append(nose);

  // Bezier curve smile
  const mouth = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path",
  );
  mouth.setAttribute("d", "M 78 135 Q 100 153 122 135");
  mouth.setAttribute("fill", "none");
  mouth.setAttribute("stroke", "#302c29");
  mouth.setAttribute("stroke-width", "4");
  mouth.setAttribute("stroke-linecap", "round");
  face.append(mouth);

  return face;
}

// Mounting and Spin stay outside buildFace().
const face = buildFace();
portrait.append(face);

spin.addEventListener("click", () => {
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});
