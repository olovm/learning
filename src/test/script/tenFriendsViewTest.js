/*
 * Copyright 2017 Olov McKie
 *
 * This file is part of Learning.
 *
 *     LEARNING is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     LEARNING is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with LEARNING.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";

QUnit.module("tenFriendsTestView.js", {
	beforeEach : function() {
		this.fixture = document.getElementById("qunit-fixture");
		this.tenFriendsView = LEARNING.tenFriendsView();
		this.view = this.tenFriendsView.getView();
		this.fixture.appendChild(this.view);
	},

	afterEach : function() {
	}
});

QUnit.test("test", function(assert) {
	assert.strictEqual(this.tenFriendsView.type, "tenFriendsView");
});

QUnit.test("testGetView", function(assert) {
	assert.strictEqual(this.view.nodeName, "DIV");
	var viewAgain = this.tenFriendsView.getView();
	assert.strictEqual(viewAgain, this.view);
});

QUnit.test("testGetFirstChildTenFriendsText", function(assert) {
	var tenFriendsText = this.view.firstChild;
	assert.strictEqual(tenFriendsText.nodeName, "H1");
	assert.strictEqual(tenFriendsText.textContent, "Tiokompisar!");
});

QUnit.test("testShowNumberOfChoice", function(assert) {
	var numberOf;
	var setNumberOf = function(numberOfIn) {
		numberOf = numberOfIn;
	}

	this.tenFriendsView.createNumberOfChoice(setNumberOf);
	var numberOfRow = this.view.childNodes[1];
	assert.strictEqual(numberOfRow.nodeName, "DIV");
});

QUnit.test("testShowNumberOfChoiceText", function(assert) {
	var numberOf;
	var setNumberOf = function(numberOfIn) {
		numberOf = numberOfIn;
	}

	this.tenFriendsView.createNumberOfChoice(setNumberOf);
	var numberOfRow = this.view.childNodes[1];
	assert.strictEqual(numberOfRow.textContent, "Välj hur många tal du skall göra");
});

QUnit.test("testShowNumberOfChoiceInput", function(assert) {
	var numberOf;
	var setNumberOf = function(numberOfIn) {
		numberOf = numberOfIn;
	}

	this.tenFriendsView.createNumberOfChoice(setNumberOf);
	var numberOfRow = this.view.childNodes[1];
	var input = numberOfRow.childNodes[1];
	assert.strictEqual(input.nodeName, "INPUT");
	assert.strictEqual(input.type, "number");
});

QUnit.test("testNumberOfChoiceInputAnything", function(assert) {
	var numberOf;
	var setNumberOf = function(numberOfIn) {
		numberOf = numberOfIn;
	}

	this.tenFriendsView.createNumberOfChoice(setNumberOf);
	var numberOfRow = this.view.childNodes[1];
	var input = numberOfRow.childNodes[1];

	input.value = "10";

	var event = new Event('keyup');
	event.keyCode = 12;
	input.dispatchEvent(event);
	assert.strictEqual(numberOf, undefined);
});

QUnit.test("testNumberOfChoiceInputOnEnter", function(assert) {
	var numberOf;
	var setNumberOf = function(numberOfIn) {
		numberOf = numberOfIn;
	}

	this.tenFriendsView.createNumberOfChoice(setNumberOf);
	var numberOfRow = this.view.childNodes[1];
	var input = numberOfRow.childNodes[1];

	input.value = "10";

	var event = new Event('keyup');
	event.keyCode = 13;
	input.dispatchEvent(event);
	assert.strictEqual(numberOf, "10");
});

QUnit.test("testCreateNewRow", function(assert) {
	this.tenFriendsView.createNewRow(3);
	var firstRow = this.view.childNodes[1];
	assert.strictEqual(firstRow.nodeName, "DIV");
});

QUnit.test("testCreateContainsCorrectText", function(assert) {
	this.tenFriendsView.createNewRow(3);
	var firstRow = this.view.childNodes[1];
	var text = firstRow.firstChild;
	assert.strictEqual(text.textContent, "3 +");
});

QUnit.test("testCreateContainsInputElement", function(assert) {
	this.tenFriendsView.createNewRow(3);
	var firstRow = this.view.childNodes[1];
	var input = firstRow.childNodes[1];
	assert.strictEqual(input.nodeName, "INPUT");
	assert.strictEqual(input.type, "number");
});

QUnit.test("testCreateRowCheckInputOnAnything", function(assert) {
	var pressedKey;
	var testInput = function(keyIn) {
		pressedKey = keyIn;
	}
	this.tenFriendsView.createNewRow(3, testInput);
	var firstRow = this.view.childNodes[1];
	var input = firstRow.childNodes[1];
	input.value = "10";

	var event = new Event('keyup');
	event.keyCode = 12;
	input.dispatchEvent(event);
	assert.strictEqual(pressedKey, undefined);
});

QUnit.test("testCreateRowCheckInputOnEnter", function(assert) {
	var pressedKey;
	var testInput = function(keyIn) {
		pressedKey = keyIn;
	}
	this.tenFriendsView.createNewRow(3, testInput);
	var firstRow = this.view.childNodes[1];
	var input = firstRow.childNodes[1];
	input.value = "10";

	var event = new Event('keyup');
	event.keyCode = 13;
	input.dispatchEvent(event);
	assert.strictEqual(pressedKey, "10");
});

QUnit.test("testCreateRowCheckInputHasFocus", function(assert) {
	this.tenFriendsView.createNewRow(3);
	var firstRow = this.view.childNodes[1];
	var input = firstRow.childNodes[1];

	assert.strictEqual(document.activeElement, input);
});

QUnit.test("testCreateContainsTextTen", function(assert) {
	this.tenFriendsView.createNewRow(3);
	var firstRow = this.view.childNodes[1];
	var tenText = firstRow.childNodes[2];
	assert.strictEqual(tenText.textContent, "= 10");
});

QUnit.test("testSetCurrentRowAsCorrect", function(assert) {
	this.tenFriendsView.createNewRow(3);
	var firstRow = this.view.childNodes[1];
	this.tenFriendsView.setCurrentRowAsCorrect();
	assert.strictEqual(firstRow.className, "correct");
});

QUnit.test("testSetErrorColor", function(assert) {
	this.tenFriendsView.createNewRow(3);
	var firstRow = this.view.childNodes[1];
	this.tenFriendsView.setCurrentRowAsError();
	assert.strictEqual(firstRow.className, "error");
});

QUnit.test("testSetCorrectAnswer", function(assert) {
	this.tenFriendsView.createNewRow(3);
	var firstRow = this.view.childNodes[1];

	this.tenFriendsView.setCorrectAnswer("12");

	var tenText = firstRow.childNodes[3];
	assert.strictEqual(tenText.nodeName, "SPAN");
	assert.strictEqual(tenText.textContent, "(12)");
	assert.strictEqual(tenText.className, "correct");
});