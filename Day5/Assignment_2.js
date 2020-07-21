class User
{
    constructor(names,age,email)
    {
        this.names=names;
        this.age=age;
        this.email=email;
        this.coins=0;
        this.courses=[];
        this.count=0;
    }
    login(email)
    {
        if(this.email==email){
        console.log(`${this.names} has logged in.`);
        }
        else
        {
            console.log(`${this.names} check the email id`);
        }
    }
    logout(email)
    {
        if(this.email==email)
        {
            console.log(`${this.names} has logged out.`);
        }
        else
        {
            console.log(`${this.names} check the email id`);
        }
    }
}

class Moderator extends User
{
    constructor(names,age,email,role)
    {
        super(names,age,email);
        this.role=role;
    }
    addCoins(user)
    {
        user.coins++;
        return this;
    }
    removeCoins(user)
    {
        user.coins--;
        return this;
    }
}

class Admin extends Moderator
{
    addCourse(user,course)
    {
        user.courses.push(course);
        this.count++;
        return this;
    }
    deleteCourse(user,course)
    {
        for(var i=0;i<this.count;i++)
    {
        if(user.courses[i]==course)
        {
            user.courses.splice(i,1);
            break;
        }
    }
    return this;
    }
}

let user1= new User('Adithya',15,'adithya@gmail.com');
let user2= new User('Usha',47,'usha@gmail.com');
let mod=new Moderator('Beulah',24,'beulah@gmail.com','Moderator');
let admin=new Admin('Keerthana',28,'keerthi@gmail.com','Adminstrator');

totalUsers=[user1,user2,mod,admin];

admin.login('keerthi@gmail.com');
admin.addCourse(user1,'Javascript');
admin.addCourse(user2,'Python');
admin.addCourse(user2,'Blockchain');
admin.addCourse(user1,'AI');
admin.addCourse(user2,'Machine Language');

admin.deleteCourse(user1,'AI');
admin.deleteCourse(user2,'Python');
admin.logout('keerthi@gmail.com');

user1.login('usha@gmail.com');

mod.login('beulah@gmail.com');
mod.addCoins(user2);
mod.addCoins(user1);
mod.addCoins(user1);
mod.addCoins(user2);

user2.login('usha@gmail.com');
mod.addCoins(user1);
mod.addCoins(user2);
mod.removeCoins(user1);
mod.addCoins(user2);
mod.addCoins(user2);

user2.logout('usha@gmail.com');
user1.logout('usha@gmail.com');

mod.removeCoins(user2);
mod.logout('beulah@gmail.com');

console.log(totalUsers);