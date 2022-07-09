export class Admin{

    public id: number;
    public email: string;
    public password: string


    constructor(
        id: number,
        email: string,
        password: string
        ){

            this.id = id;
            this.email = email;
            this.password = password;


    }
}

export class Rooms{

    public id: number;
    public contentsofroom: string;
    public priceofroom: string;
    public typeofroom: string;
    public sizeofroom: string;


    constructor(
         id: number,
         contentsofroom: string,
         priceofroom: string,
         typeofroom: string,
         sizeofroom: string
        ){

             this.id = id;
             this.contentsofroom = contentsofroom;
             this.priceofroom = priceofroom;
             this.typeofroom = typeofroom;
             this.sizeofroom = sizeofroom;


    }
}


export class Event{

    public id: number;
    public contents: string;
    public venue: string;
    public entryfee: string;
  

    constructor(
         id: number,
         contents: string,
         venue: string,
         entryfee: string,
        ){

             this.id = id;
             this.contents = contents;
             this.venue = venue;
             this.entryfee = entryfee;


    }
}

