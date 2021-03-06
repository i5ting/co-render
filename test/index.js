
var assert = require('assert');
var render = require('..');
var co = require('co');

describe('co-render', function(){
  it('should render pug template', function(){
    return co(function *(){
      var html = yield render(__dirname + '/fixtures/user.pug', {
        user: {
          name: 'tobi',
          species: 'ferret'
        }
      });

      assert.equal(html, '<p>tobi is a ferret</p>');
    });
  })
})
