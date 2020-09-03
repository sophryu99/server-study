
var sehwa = [
    {
        name : '류세화', 
        nickname: '애플이', 
        age : 23,
        printInfo: function(){
            console.log(this.name, this.nickname, this.age)
        }
    },
    {
        name : '양재욱', 
        nickname : '하정우', 
        age : 25,
        printInfo: function(){
            console.log(this.name, this.nickname, this.age)
        }
    },
    {
        name : '아무개', 
        nickname: '랄랄', 
        age: 5, 
        printInfo: function(){
            console.log(this.name, this.nickname, this.age)
        }
    },
];

console.log('sehwa :' + JSON.stringify(sehwa));

sehwa.forEach (
    sehwa => sehwa.printInfo()
)


