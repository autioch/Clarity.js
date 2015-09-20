/* global QUnit, DomControl */

'use strict';

QUnit.module('Ajax');
QUnit.test('Basic functionality', function(assert) {
  assert.strictEqual(typeof DomControl.ajax, 'function');
  var request = DomControl.ajax({});
  assert.ok(request instanceof XMLHttpRequest);
});


/* TODO tests:
 * GET, POST, PUT, DELETE
 * exceptions
 * done, error, always
 * sending data
 **/

 QUnit.module('Dom Control');
 QUnit.test('Create empty Element Wrapper', function(assert) {
   var wrapper = DomControl();
   assert.ok(wrapper instanceof DomControl.Wrapper, 'Result is Wrapper');
   assert.strictEqual(wrapper.length, 0);
   assert.strictEqual(wrapper.elements.length, 0);
 });

 QUnit.test('Create Element Wrapper from string for HTML element', function(assert) {
   var wrapper = DomControl('html');
   assert.ok(wrapper instanceof DomControl.Wrapper, 'Result is Wrapper');
   assert.strictEqual(wrapper.length, 1);
   assert.strictEqual(wrapper.elements.length, 1);
   assert.strictEqual(wrapper.elements[0], document.querySelector('html'));
 });

 QUnit.test('Create Element Wrapper from HTML element', function(assert) {
   var wrapper = DomControl(document.querySelector('html'));
   assert.ok(wrapper instanceof DomControl.Wrapper, 'Result is Wrapper');
   assert.strictEqual(wrapper.length, 1);
   assert.strictEqual(wrapper.elements.length, 1);
   assert.strictEqual(wrapper.elements[0], document.querySelector('html'));
 });

 QUnit.module('Extras');
 QUnit.test('Now', function(assert) {
   assert.strictEqual(typeof DomControl.now, 'function');
   assert.notEqual(DomControl.now(), DomControl.now(true), 'Can not be equal');
   assert.ok(DomControl.now(), 'Returns date');
   assert.ok(DomControl.now(true), 'Returns performance time');
 });

 QUnit.test('No operation', function(assert) {
   assert.strictEqual(typeof DomControl.noop, 'function');
   assert.strictEqual(DomControl.noop(), undefined);
 });
