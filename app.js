let elem = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".rangers input");

inputs.forEach(inp => inp.addEventListener ("input", generateCode));

function generateCode(){
  let hShadow = document.getElementById("h-shadow").value;
  let vShadow = document.getElementById("v-shadow").value;
  let blur = document.getElementById("blur").value;
  let spread = document.getElementById("spread").value;
  let shadowColor = document.getElementById("shadow-color").value;
  let shadowColorOpacity = document.getElementById("shadow-color-opacity").value;
  let shadowInset = document.getElementById("shadow-inset").checked;

  let boxShadow = shadowInset ? `inset ${hShadow}px ${vShadow}px ${blur}px ${spread}px
  ${rgba(shadowColor,shadowColorOpacity)}` 
  : `${hShadow}px ${vShadow}px ${blur}px ${spread}px
  ${rgba(shadowColor,shadowColorOpacity)}`;

 
  elem.style.boxShadow = boxShadow;
  code.textContent = `box Shadow: ${boxShadow};`;
} 

function rgba (shadowColor,shadowColorOpacity){
  let r = parseInt(shadowColor.substr((1,2),16));
  let g = parseInt(shadowColor.substr((3,2),16));
  let b = parseInt(shadowColor.substr((5,2),16));

  return `rgba(${r},${g},${b},${shadowColorOpacity})`;
}

function copy (){
  code.select();
  document.execCommand("copy");
}

window.onload = generateCode();


