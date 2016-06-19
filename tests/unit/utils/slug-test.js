import slug from 'dummy/utils/slug';
import { module, test } from 'qunit';

module('Unit | Utility | slug');

test('string is turned into lowercase', function(assert) {
  let result = slug('String');
  assert.equal(result, 'string');
});

test('single spaces get relaced by dash', function(assert) {
  let result = slug('simple string');
  assert.equal(result, 'simple-string');
});

test('punctuation gets removed', function(assert) {
  let result = slug('hello. do you like me? answer, now!');
  assert.equal(result, 'hello-do-you-like-me-answer-now');
});

test('leading whitespace gets removed', function(assert) {
  let result = slug('  string');
  assert.equal(result, 'string');
});

test('trailing whitespace gets removed', function(assert) {
  let result = slug('string  ');
  assert.equal(result, 'string');
});

test('multiple spaces get reduced to one', function(assert) {
  let result = slug('complex  string');
  assert.equal(result, 'complex-string');
});

test('German special characters get replaced', function(assert) {
  let result = slug('änderungen im süden sind böse maßnahmen');
  assert.equal(result, 'aenderungen-im-sueden-sind-boese-massnahmen');
});
