/**
    Class representing a Calculator
*/
class AppCalculator {

    /**
     * Creates an object AppCalculator.
     * @param {pdocument} doc - the document of HTML.
     */
    constructor(pdocumento) {
        console.log("Objeto AppCalculator created");
        this.doc = pdocumento;
        
        this.memory = 0;
        this.local = new appLocalDB();

        this.init();
    }
	
	/**
        Method to inicialize class AppCalculator.
    */
	init(){
        this.printScreen(0);
	}

    /**
     * 
     * @param {String} words - string.
     */
    printScreen(letters) {
        this.doc.getElementById('result').value = letters;
    }


    /** setResult(): Updates the value of screen.
    */
    setResult(value) {
        this.printScreen(value);
    }

    /**
    getResult(): This method takes the value of last result obtained
                 or the mathematical expression from the input box. 
    */
    getResult() {
        return(document.getElementById("result").value);
    }

    /**
    add(): Adds the pressed number key to the screen.
    */
    add(key) { 

        var result = this.getResult();
        if (result!='0' || isNaN(key)){
            this.setResult(result + key);
        }
        else{
            this.setResult(key);
        }
    }

    /**
    addOperator(): Adds the pressed operator key to the screen.
    */
    addOperator(key){

        var lastChar = this.getResult().charAt(this.getResult().length-1)
        console.log("Last " + lastChar);

        if(lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/" || 
            lastChar == "."){
        }
        else{
            this.setResult(this.getResult() + key);
        }   
    }

    onkeyup = function (event) {
        console.log("Wooohoo", event.key);
    };

    /**
    calc(): this method does the calculation of the mathematical expression.
            Using the eval() method and writes the reault on the screen.
    */
    calc() {
        var result = eval(this.getResult()); 
        this.setResult(result);
    }

    /**
    delete(): puts to zero the screen.
    */
    delete() { 
        this.setResult(0);
    }

    /**
    erase(): erases the memory of the calculator.
    */
    erase(){
        this.memory = 0;
    }

    /**
    store(): saves the value in the variable memory.
    */
    store(){
        this.memory = this.getResult();
        this.local.saveCookie(this.memory);
    }

    /**
    recover(): shows the value of the variable memory.
    */
    recover(){
        if(this.local.getCookie() == isNaN){
            this.setResult("Ningun valor guardado");
        }
        else{
            this.setResult(this.local.getCookie());
        }
    }

}