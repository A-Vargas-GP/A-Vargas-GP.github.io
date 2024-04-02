function changeDarkLight() {
    const elem = document.getElementById("DarkLightToggle");
    val = elem.bootstrapToggle();
    var element = document.body;
    element.classList.toggle("dark-mode");
  }