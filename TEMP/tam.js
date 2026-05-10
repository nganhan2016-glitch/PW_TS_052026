function taoBoDem(tenNut){
    let dem = 0;

    return {
        click() {
            dem ++;
            console.log(`login button: ${dem} clicks`);
            
        },
        reset (){
            dem  = 0;
            console.log("reset Xong");
        }
    };
}

const tenNut = taoBoDem();
tenNut.click();
tenNut.click();
tenNut.reset();
tenNut.click();
tenNut.click();
