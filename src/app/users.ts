export class Users{

    public id: number;
    public f_name: string;
    public l_name: string;
    public email: string;
    public country: string;
    public phone_number: string;
    public username: string;
    public password: string


    constructor(
        id: number,
        f_name: string, 
        l_name: string,
        email: string,
        country: string, 
        phone_number: string,
        username: string,
        password: string
        ){

            this.id = id;
            this.f_name = f_name;
            this.l_name = l_name;
            this.email = email;
            this.country = country;
            this.phone_number = phone_number;
            this.username = username;
            this.password = password;


    }
}
