describe('FEATURE 1 : Have a way to count donuts.',()=> {
    describe('Can add to donut count',() => {
        
        let underTest;

        beforeEach(() =>{
            underTest = new Donut();
        });

        it('Should start with a click count of 0',()=>{
            
            expect(underTest.donutCount).toBe(0);
        });
        it('Should add one click to the click count when a click is recorded', () =>{
          underTest.recordClick();
            expect(underTest.donutCount).toBe(1);
       });
       it('Should have a clickCount of 2 if 2 clicks recorded', () =>{
           underTest.recordClick();
           underTest.recordClick();
           expect(underTest.donutCount).toBe(2);
       });
    });
});
describe('FEATURE 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.', () => {
  describe('As a user, I want to be able to purchase Auto Clickers, so that I dont have to keep clicking a button all day.', () => {

    let underTest;

    beforeEach(() =>{
      underTest = new Donut();
    })
    it('Can retrieve an Auto Clicker count. ',() =>{
      expect(underTest.AutoClickerCount).toBe(0);
      
    })
    it('Can add to the Donut Multiplier count ',() =>{
      underTest.addAutoClicker();
      expect(underTest.AutoClickerCount).toBe(1);
      
    })
    it('Can add to the Donut Multiplier count again ',() =>{
      underTest.addAutoClicker();
      underTest.addAutoClicker();
      expect(underTest.AutoClickerCount).toBe(2);
      
    })
    it('Subtract the amount of the Donut Multiplier cost from the donut count ',() =>{
      underTest.addAutoClicker();
      expect(underTest.donutCount).toBe(-100);
      
    })
  });
  
});
describe('FEATURE 3 : The cost of each Auto Clicker will go up with each purchase..', () => {
  describe('As a game designer, I want the game to become more difficult as the game progresses, so that users will continue to play the game..', () => {
    let underTest;

    beforeEach(() =>{
      underTest = new Donut();
    });

    it('Increase the cost of the second Auto Clicker by an additional ten percent ',() =>{
      underTest.addAutoClicker();
      expect(underTest.AutoClickerCost).toBe(110);
    })
    it('Increase the cost of every additional Auto Clicker by an additional ten percent. ',() =>{
      underTest.addAutoClicker();
      expect(underTest.AutoClickerCost).toBe(110);
    })
  });
  
});

describe('FEATURE 4 : Create a section for the Donut Multipliers', () => {
  describe('As a user, I want to be able to buy and see how many Donut Multipliers I have, so that my clicks can become super powered.', () => {
    let underTest;

    beforeEach(() =>{
      underTest = new Donut(); 
    });
    it('Increase the cost of every additional Auto Clicker by an additional ten percent. ',() =>{
      underTest.addAutoClicker();
      expect(underTest.AutoClickerCost).toBe(110);
    })
  });
  
});