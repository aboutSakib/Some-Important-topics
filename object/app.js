class object {
    constructor(name, jr_number, sallery) {
        this.name;
        this.jr_number;
        this.sallery;
        this.output = function () {
            console.log(name);
            console.log(jr_number);
            console.log(sallery);
        };
    }
}
let sha=new object("sakib",75,150000)
let rakib=new object("rakib",18,30)
sha.output();
rakib.output();
