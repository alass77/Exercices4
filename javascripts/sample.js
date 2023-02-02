function addElement() {
     const hhh = document.getElementsByTagName("h1");
     hhh.append("azerty");
    const element = document.createElement("p");
    const teste = document.createTextNode("Bonjour");
    document.appendChild(element);
    element.appendChild(teste);
    console.log(element);
  };
  
  addElement();