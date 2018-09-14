// export default {
//   bind: (element, binding) => {
//     if (binding.arg !== "position") return;

//     Object.keys(binding.modifiers).forEach(key => {
//       element.style[key] = "5px";
//     });
//     element.style.position = "absolute";
//   }
// };

export default function(element, binding) {
  Object.keys(binding.modifiers).forEach(key => {
    element.style[key] = "5px";
  });
  element.style.position = "absolute";
}
