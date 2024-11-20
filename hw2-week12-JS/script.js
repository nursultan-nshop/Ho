function language() {
    let language = prompt(
      'Student kay tilde soileidi? | (Kazakh/Russian/English)'
    ).toLowerCase()
  
    if (language == 'kazakh') {
      kazStudent()
    } else if (language == 'russian') {
      rusStudent()
    } else if (language == 'english') {
      engStudent()
    } else {
      alert('okinishke orai tek kazakh, russian, english tilderin kabyldaimyz')
    }
  }
  
  function kazStudent() {
    let name = prompt('Student atyn engiziniz')
    if (name) {
      alert(`Salem, ${name}! Kalynyz kalay`)
    }
  }
  
  function rusStudent() {
    let name = prompt('Student atyn engiziniz')
    if (name) {
      alert(`Privet, ${name}! Kak dela?`)
    }
  }
  
  function engStudent() {
    let name = prompt('Student atyn engiziniz')
    if (name) {
      alert(`Hello, ${name}! How are you?`)
    }
  }
  
  language()