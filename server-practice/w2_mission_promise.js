let isMomHappy = false;
let phone = {
    brand: 'Samsung',
    color: 'black'
};

var willIGetNewPhone = new Promise((resolve, reject) => {
    if (isMomHappy) {
        resolve = console.log(phone);
    }
    else if (isMomHappy == false) {
        console.log('mom is not happy');
        reject(Error('isMomHappy : error'));
        
    }
    
})