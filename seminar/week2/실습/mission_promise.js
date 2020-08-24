let isMomHappy = true;
let phone = {
    brand: 'Samsung',
    color: 'black'
};

var willIGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        // 객체 출력하기
        resolve = console.log(phone);
    }
    else if (isMomHappy == false) {
        console.log('mom is not happy');
        reject(Error('isMomHappy : error'));
    }
    
})
