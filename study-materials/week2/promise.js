let isSehwaHappy = true;
const drink = {
    location : '사당',
    members : ['세화', '지혜', '수진', '연상', '재욱', '정우', '수현', '가영'],
    printMembers: function() {
        this.members.forEach(member => {
            console.log(`${this.location}에서 적시자!`, member)
        });
    }
}

const letsDrink = new Promise((res, rej) => {
    if(isSehwaHappy){
        res(drink.printMembers())
    } else {
        rej(console.log(new Error('Sehwa is not happy')))
    }

})