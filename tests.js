// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello Alex!"' ,function () {
        expect(sayHello("Alex")).toBe("Hello Alex!");
    });
    it('should return the string "Hello Jane!"', function () {
         expect(sayHello("Jane")).toBe("Hello Jane!");
    });
    it('should return the string "Hello Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello Pat!");
    });
    it('should return the string "Hello World!"', function () {
        expect(sayHello()).toBe("Hello World!");
    });
    it('should return string "Hello World!"', function (){
        expect(sayHello(true)).toBe("Hello World!");
    });
    it('should return the string "Hello World!"', function () {
        expect(sayHello(false)).toBe("Hello World!");
    });
    it('should return the string "Input is Null!"', function () {
        expect(sayHello(null)).toBe("Input is Null!");
    });
    it('should return the string "Please enter a Name"', function () {
        expect(sayHello("")).toBe("Please enter a Name.");
    });
});
//come back and add more tests

describe('isFive',function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean regardless of input', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return "true" when passed with 5' , function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return "true" when passed with "5"', function () {
        expect(isFive("5")).toBe(true);
     });

});
describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean regardless of input', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return "true" when called with 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return "true" when called with -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return "false" when called with 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return "false" when called with banana', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return "true" when called with 8', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return "false" when called with Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return "false" when called with true', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return "false" when called with Infinity', function () {
        expect(isEven(false)).toBe(false);
    });
});
describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean regardless of input', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should should return "true" when called with an "a', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should should return "true" when called with an "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should should return "false" when called with an "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should should return "false" when called with an "4"', function () {
        expect(isVowel("4")).toBe(false);
    });
    it('should should return "false" when called with an "true"', function () {
        expect(isVowel("true")).toBe(false);
    });
    it('should should return "false" when called with an "false"', function () {
        expect(isVowel("false")).toBe(false);
    });
    it('should should return "false" when called with an "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    })
    it('should should return "false" when called with as an undefined function', function () {
        expect(isVowel()).toBe(false);
    })


});