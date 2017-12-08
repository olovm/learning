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
var LEARNING = (function(learning) {
	"use strict";
	learning.tenFriends = function(view) {
		var latestRandomNumber = -1;
		var maxNumberOf = 0;
		var generatedNo = 0;

		function start() {
			view.createNumberOfChoice(setNumberOf);
		}

		function setNumberOf(valueIn) {
			maxNumberOf = valueIn * 1;
			if(maxNumberOf>0){
				generateNewRow();
			}
		}

		function generateNewRow() {
			generatedNo++;
			latestRandomNumber = getRandomInt(0, 11);
			view.createNewRow(latestRandomNumber, checkValueFunction);
		}

		function checkValueFunction(valueIn) {
			if (validateInput(valueIn)) {
				view.setCurrentRowAsCorrect();
			} else {
				view.setCurrentRowAsError();
				view.setCorrectAnswer(latestRandomNumber + valueIn * 1);
			}
			if (maxNumberOf > generatedNo) {
				generateNewRow();
			}
		}

		function validateInput(value) {
			return 10 - latestRandomNumber === value * 1;
		}

		function getLatestRandomNumber() {
			return latestRandomNumber;
		}

		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min)) + min;
		}

		start();

		return Object.freeze({
			"type" : "tenFriends",
			setNumberOf : setNumberOf,
			checkValueFunction : checkValueFunction,
			getLatestRandomNumber : getLatestRandomNumber
		});
	};
	return learning;
}(LEARNING));