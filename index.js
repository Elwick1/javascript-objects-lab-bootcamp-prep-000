var recipes = { }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  // it('updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object'
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  // it('deletes `key` from a clone of object and returns the new object (it is non-destructive)',
  var copy = key 
  console.log(copy)
  delete[key]
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  // it('returns object without the delete key/value pair',
  
}