/*
 * Copyright 2017 Olov McKie
 *
 * This file is part of Learning.
 *
 *     Cora is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     Cora is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with Cora.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";

QUnit.module("tenFriendsTest.js", {
	beforeEach : function() {
		this.viewSpy = new LEARNINGTEST.tenFriendsViewSpy();
		this.tenFriends = LEARNING.tenFriends(this.viewSpy);
	},
	afterEach : function() {
	}
});

QUnit.test("test", function(assert) {
	assert.strictEqual(this.tenFriends.type, "tenFriends");
});

QUnit.test("testNumberOfCreatedOnStart", function(assert) {
	assert.strictEqual(this.viewSpy.getCreateNumberOfChoice(), 1);
});

QUnit.test("testNumberOfCreatedOnStartWithHandleNumberOfChoice", function(assert) {
	assert.notEqual(this.viewSpy.getSetNumberOfFunction(), null);
	assert.strictEqual(this.viewSpy.getSetNumberOfFunction(), this.tenFriends.setNumberOf);
});

QUnit.test("testSetNumberOf", function(assert) {
	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 0);

	this.tenFriends.setNumberOf("2");

	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 1);
});

QUnit.test("testSetNumberOfOnlyStartsIfItIsAPossitiveNumber", function(assert) {
	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 0);
	
	this.tenFriends.setNumberOf("0");
	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 0);

	this.tenFriends.setNumberOf("notNumber");
	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 0);

	this.tenFriends.setNumberOf(0);
	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 0);
	
});

QUnit.test("testRowNotCreatedOnStart", function(assert) {
	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 0);
});

QUnit.test("testRandomNumberGenerated", function(assert) {
	this.tenFriends.setNumberOf("2");
	assert.ok(this.tenFriends.getLatestRandomNumber() <= 11);
	assert.ok(this.tenFriends.getLatestRandomNumber() >= 0);
	assert.strictEqual(this.tenFriends.getLatestRandomNumber(), this.tenFriends
			.getLatestRandomNumber());
});

QUnit.test("testRowCreatedOnStartWithCheckValueFunction", function(assert) {
	this.tenFriends.setNumberOf("2");
	assert.strictEqual(this.viewSpy.getCheckValueFunction(), this.tenFriends.checkValueFunction);
});

QUnit.test("testRowCreatedOnStartRandomNumber", function(assert) {
	this.tenFriends.setNumberOf("2");
	assert.strictEqual(this.viewSpy.getNumber(), this.tenFriends.getLatestRandomNumber());
});

QUnit.test("testNewRowCreatedCorrectAnswer", function(assert) {
	this.tenFriends.setNumberOf("2");
		var number = this.tenFriends.getLatestRandomNumber();
	this.tenFriends.checkValueFunction(10 - number + "");
	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 2);
});

QUnit.test("testCurrentRowSetAsCorrectOnCorrectAnswer", function(assert) {
	this.tenFriends.setNumberOf("2");
	var number = this.tenFriends.getLatestRandomNumber();
	this.tenFriends.checkValueFunction(10 - number + "");
	assert.strictEqual(this.viewSpy.getSetCurrentRowAsCorrect(), 1);
});

QUnit.test("testNewRowCreatedCorrectAnswerUpUntilNumberOf", function(assert) {
	this.tenFriends.setNumberOf("2");
	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 1);
	
	var number = this.tenFriends.getLatestRandomNumber();
	this.tenFriends.checkValueFunction(10 - number + "");
	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 2);
	
	var number = this.tenFriends.getLatestRandomNumber();
	this.tenFriends.checkValueFunction(10 - number + "");
	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 2);
});

QUnit.test("testResultCreatedAfterNumberOf", function(assert) {
	this.tenFriends.setNumberOf("2");
	assert.strictEqual(this.viewSpy.getSetResultText(), "");
	
	var number = this.tenFriends.getLatestRandomNumber();
	this.tenFriends.checkValueFunction(10 - number + "");
	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 2);
	
	var number = this.tenFriends.getLatestRandomNumber();
	this.tenFriends.checkValueFunction(10 - number + "");
	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 2);
});

QUnit.test("testRowMarkedAsErrorOnWrongAnswer", function(assert) {
	var number = this.tenFriends.getLatestRandomNumber();

	assert.strictEqual(this.viewSpy.getSetCurrentRowAsError(), 0);
	this.tenFriends.checkValueFunction(11 - number + "");

	assert.strictEqual(this.viewSpy.getSetCurrentRowAsError(), 1);
});

QUnit.test("testCorrectAnswerAddedToRowOnWrongAnswer", function(assert) {
	var number = this.tenFriends.getLatestRandomNumber();

	assert.strictEqual(this.viewSpy.getSetCurrentRowAsError(), 0);
	this.tenFriends.checkValueFunction(11 - number + "");

	assert.strictEqual(this.viewSpy.getSetCorrectAnswer(), (11));
});

QUnit.test("testNewRowCreatedOnWrongAnswer", function(assert) {
	this.tenFriends.setNumberOf("2");
	var number = this.tenFriends.getLatestRandomNumber();

	this.tenFriends.checkValueFunction(11 - number + "");

	assert.strictEqual(this.viewSpy.getNoOfCreatedRows(), 2);
});
