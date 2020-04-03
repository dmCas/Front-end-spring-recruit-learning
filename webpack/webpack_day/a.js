function a() {
  var div = document.createElement("div")
  div.setAttribute("id", "number")
  div.innerHTML = 121
  document.body.appendChild(div)
}

export default a