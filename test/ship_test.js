var expect = require('chai').expect;

describe('checkForShip', function () {
    var checkForShip = require('../game_logic/ship_methods').checkForShip;

    it('should correctly report no ship at a given players coordinate', function () {
        var player = {
            ships: [
                {
                    locations: [[0, 0]]
                }
            ]
        };
        expect(checkForShip(player, [9, 9])).to.be.false;
    })
});