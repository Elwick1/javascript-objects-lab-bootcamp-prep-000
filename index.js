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
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}