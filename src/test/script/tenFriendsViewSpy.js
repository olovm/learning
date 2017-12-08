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
var LEARNINGTEST = (function(learningTest) {
	"use strict";
	learningTest.tenFriendsViewSpy = function() {
		var number = "";
		var noOfCreatedChoice = 0;
		var setNumberOfFunction;
		var checkValueFunction = "";
		var noOfCreatedRows = 0;
		var rowsToCorrect = 0;
		var rowsToError = 0;
		var correctAnswer = "";
		var resultText = "";

		function createNumberOfChoice(setNumberOf) {
			noOfCreatedChoice++;
			setNumberOfFunction = setNumberOf;
		}

		function getCreateNumberOfChoice() {
			return noOfCreatedChoice;
		}

		function getSetNumberOfFunction() {
			return setNumberOfFunction;
		}

		function createNewRow(numberIn, checkValueFunctionIn) {
			noOfCreatedRows++;
			number = numberIn;
			checkValueFunction = checkValueFunctionIn;
		}

		function getNoOfCreatedRows() {
			return noOfCreatedRows;
		}

		function getNumber() {
			return number;
		}

		function getCheckValueFunction() {
			return checkValueFunction;
		}

		function setCurrentRowAsCorrect() {
			rowsToCorrect++;
		}

		function getSetCurrentRowAsCorrect() {
			return rowsToCorrect;
		}
		function setCurrentRowAsError() {
			rowsToError++;
		}

		function getSetCurrentRowAsError() {
			return rowsToError;
		}

		function setCorrectAnswer(correctAnswerIn) {
			correctAnswer = correctAnswerIn;
		}

		function getSetCorrectAnswer() {
			return correctAnswer;
		}

		function setResultText(textIn){
			resultText = textIn;
		}
		function getSetResultText(){
			return resultText;
		}
		
		var out = Object.freeze({
			"type" : "tenFriendsViewSpy",
			createNewRow : createNewRow,
			createNumberOfChoice : createNumberOfChoice,
			getCreateNumberOfChoice : getCreateNumberOfChoice,
			getSetNumberOfFunction : getSetNumberOfFunction,
			getNoOfCreatedRows : getNoOfCreatedRows,
			getNumber : getNumber,
			getCheckValueFunction : getCheckValueFunction,
			setCurrentRowAsCorrect : setCurrentRowAsCorrect,
			getSetCurrentRowAsCorrect : getSetCurrentRowAsCorrect,
			setCurrentRowAsError : setCurrentRowAsError,
			getSetCurrentRowAsError : getSetCurrentRowAsError,
			setCorrectAnswer : setCorrectAnswer,
			getSetCorrectAnswer : getSetCorrectAnswer,

			setResultText : setResultText,
			getSetResultText : getSetResultText
		});
		return out;
	};
	return learningTest;
}(LEARNINGTEST));
