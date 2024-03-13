class User{
    public static count: number = 0;
    public name: string;
    public login: string;
    public password: string;
    public grade: number;
    constructor(_name: string, _login: string, _password: string, _grade: number){
        this.name=_name
        this.login=_login
        this.password=_password
        this.grade=_grade
        User.count++
    }
    
    show_info(){
        console.log(`Name: ${this.name}, Login: ${this.login}`);
    }
    eq(user:User): boolean {
        return this.grade === user.grade;
      }
    
    lt(user:User): boolean {
        return this.grade < user.grade;
      }
    
    gt(user:User): boolean {
        return this.grade > user.grade;
      }
}

class SuperUser extends User{
    public static count: number = 0;
    public name: string;
    public login: string;
    public password: string;
    public role: string;
    public grade: number;
    constructor(_name: string, _login: string, _grade:number, _password: string, _role: string){
        super(_name,_login,_password,0);
        this.role=_role
        SuperUser.count++
    }

    get _role(): string {
        return this.role;
    }

    set _role(role: string) {
        this._role = role;
    }
    
    show_info() {
        console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
    }
}

const user1 = new User('Paul McCartney', 'paul', '1234', 3)
const user2 = new User('George Harrison', 'george', '5678', 2)
const user3 = new User('Richard Starkey', 'ringo', '8523', 3)
const admin = new SuperUser('John Lennon',  'john',  5, 'admin','0000')

user1.show_info()
admin.show_info()

console.log( user1.lt(user2) )
console.log( admin.gt(user3) )
console.log( user1.eq(user3) )


const users = User.count
const admins = SuperUser.count

console.log(`Всего обычных пользователей: ${users}`)
console.log(`Всего супер-пользователей: ${admins}`)

user3.name = 'Ringo Star'
user1.password= 'Pa$$w0rd'

console.log(user3.name)
console.log(user2.password)
console.log(user2.login)

user2.login = 'geo'
console.log(user3.grade)
admin.grade = 10