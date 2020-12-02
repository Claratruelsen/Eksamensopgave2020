class User {
    constructor(id, username, password, firstName, lastName, age, interest, gender, matches){
        this.id = id;
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

