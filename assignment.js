const randUser = async() =>{
    // fetching data
    let dataNeeded= await fetch("https://randomuser.me/api")

    // converting to json
     let jsonData = await dataNeeded.json();

     let output = jsonData.results;

     let result = output[0]
     
     let finalResult = `<img src="${result.picture.large}"><br> Full name: ${result.name.title} ${result.name.first} ${result.name.last} <br> Home: ${result.location.street.number}, ${result.location.street.name} <br> State: ${result.location.state} <br> Country: ${result.location.country} <br> E-mail: ${result.email} <br> DOB: ${result.dob.date}<br> Age: ${result.dob.age}<br> Phone: ${result.phone}`
      return document.body.innerHTML = finalResult
    
}
 randUser();
//  