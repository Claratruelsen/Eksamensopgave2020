class User {
    constructor(username, password, firstName, lastName, age, interest, gender, matches){
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.interest = interest;
        this.gender = gender;
        this.matches=matches;
    };
};

module.exports = User;

