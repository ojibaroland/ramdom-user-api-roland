const randUser = async() =>{
    let Data = await fetch("https://randomuser.me/api")
     let convertedData = await Data.json();
     let output = convertedData.results;
     let result = output[0]
     let finalResult = `<img src="${result.picture.large}"><br> Full name: ${result.name.title} ${result.name.first} ${result.name.last} <br> Home: ${result.location.street.number}, ${result.location.street.name} <br> State: ${result.location.state} <br> Country: ${result.location.country} <br> E-mail: ${result.email} <br> DOB: ${result.dob.date}<br> Age: ${result.dob.age}<br> Phone: ${result.phone}`
      return document.body.innerHTML = finalResult
    
}
 randUser();
//  