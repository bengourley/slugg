var slugg = require('..')
  , assert = require('assert')

describe('slug()', function () {

  it('should not modify a url-safe string', function () {
    assert.equal(slugg('latest-news'), 'latest-news')
    assert.equal(slugg('-'), '')
  })

  it('should convert non-word characters to dashes', function () {
    assert.equal(slugg('my great blog post'), 'my-great-blog-post')
    assert.equal(slugg('who.are_you?'), 'who-are-you')
    assert.equal(slugg('%^T%^~!@##$$#%^$^/?????.'), 't')
  })

  it('should replace non-english alphanumeric characters', function () {
    assert.equal(slugg('Füße'), 'fusse')
    assert.equal(slugg('lýs'), 'lys')
    assert.equal(slugg('£5+5'), '5-5')
  })

  it('should not produce a string with successive dashes', function () {
    assert.equal(slugg('this cost £50'), 'this-cost-50')
    assert.equal(slugg('eh----what'), 'eh-what')
    assert.equal(slugg('Foo & Bar Bazing Day:'), 'foo-bar-bazing-day')
  })

  it('should not produce a string with leading/trailing dashes', function () {
    assert.equal(slugg('----boo!--'), 'boo')
  })

  it('should convert to lower case', function () {
    assert.equal(slugg('HEY ThErE'), 'hey-there')
  })

})