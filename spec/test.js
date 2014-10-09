// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time

var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('Car', function(){

  beforeEach(function(){
    myCar = new Car("chevy", "volt", new Date().getFullYear(), "red");
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){
      expect(myCar.year).is.equal(2014);
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(myCar.state).is.equal("off");
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(myCar.previousOwners).is.deep.eq([]);
    });
  });

  describe('#curretOwner', function(){
    it('should initially be manufacturer', function(){
      expect(myCar.currentOwner).is.deep.eq(myCar.make);
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(myCar.passengers).is.deep.eq([]);
    });
  });

  describe('#sale', function(){

    it('should move currentOwner to previousOwners array', function(){
      myCar.sale("Matthew");
      expect(myCar.previousOwners).is.deep.eq(["chevy"]);
    });

    it('should update currentOwner with the new owner', function(){
      myCar.sale("Matthew");
      expect(myCar.currentOwner).is.eq("Matthew");
    });
  });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      myCar.paint("blue");
      expect(myCar.color).is.eq("blue");      
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      myCar.start();
      expect(myCar.state).is.eq("on");
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      myCar.off();
      expect(myCar.state).is.equal("off");
    });
  });

  describe('#park', function(){
    it('should make sure to only work when the car is off', function(){
      myCar.park();

    });

  });

  describe('#driveTo', function(){
    it('should make sure to only work when the car is on', function(){
      myCar.start();
      myCar.driveTo();

    });

  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      myCar.start();
      myCar.pickUp("Tim");
      expect(myCar.passengers).is.deep.eq(["Tim"]);
    });

    it('should not modify the passengers array if car is off', function(){
      myCar.pickUp("Tim");
      expect(myCar.passengers).is.deep.eq([]);
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      myCar.start();
      myCar.pickUp("Tim");
      myCar.dropOff("Tim");
      expect(myCar.passengers).is.deep.eq([]);
    });

    it('should leave passenger in the passengers array if car is off', function(){
      myCar.start();
      myCar.pickUp("Tim");
      myCar.off();
      myCar.dropOff("Tim");
      expect(myCar.passengers).is.deep.eq(["Tim"]);
    });
  });

});


