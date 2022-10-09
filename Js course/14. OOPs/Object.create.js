const PersonProto = {
    // Just a function
    calcAge(age){
      console.log(`The age is ${this.age}`);
    },

    info(name , age , gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
  }
  
  // vansh is now an object which will have calcAge function.
  const vansh = Object.create(PersonProto);
  const dhruvi = Object.create(PersonProto);
  vansh.name = "Vansh";
  vansh.age = 18;
  console.log(vansh.name);
  vansh.calcAge();
  dhruvi.info('Dhruvi' , 18 , 'Female');
  console.log(dhruvi.name , dhruvi.age , dhruvi.gender);

