class user{
    constructor(userID, email, password, img, firstName, lastName, DOB, interests, gender, sexualPrefference, matches){
        this.userID=userID;   
        this.email=email;
        this.password=password;
        this.img=img;
        this.firstName=firstName;
        this.lastName=lastName;
        this.DOB=DOB;
        this.interests=interests;
        this.gender=gender;
        this.sexualPrefference=sexualPrefference;
        this.matches=matches;
    }
}
module.exports = user;

