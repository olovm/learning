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
	learning.tenFriendsView = function(spec) {
		var ENTER_KEY_CODE = 13;
		var view;
		var currentRow;
		var currentInput;

		function start() {
			createTheView();
		}

		function createTheView() {
			createBasicView();
			createHeaderText();
		}

		function createBasicView() {
			view = document.createElement("DIV");
		}

		function createHeaderText() {
			var tenFriendsText = document.createElement("H1");
			view.appendChild(tenFriendsText);
			tenFriendsText.appendChild(document.createTextNode("Tiokompisar!"));
		}

		function getView() {
			return view;
		}

		function createNumberOfChoice(setNumberOfFunction) {
			var numberOfRow = document.createElement("DIV");
			view.appendChild(numberOfRow);
			numberOfRow.appendChild(document.createTextNode("Välj hur många tal du skall göra"));
			var numberOfInput = document.createElement("INPUT");
			numberOfInput.type = "number";
			numberOfRow.appendChild(numberOfInput);
			numberOfInput.addEventListener("keyup", function(event) {
				if (ENTER_KEY_CODE === event.keyCode) {
					setNumberOfFunction(numberOfInput.value);
				}
			});
		}

		function createNewRow(number, checkValueFunction) {
			createRow();
			addNumberAndAddSingToRow(number);
			createAndAddInputToRow(checkValueFunction);
			addEqualsAndTenToRow();

		}

		function createRow() {
			currentRow = document.createElement("DIV");
			view.appendChild(currentRow);
		}

		function addNumberAndAddSingToRow(number) {
			currentRow.appendChild(document.createTextNode(number + " +"));
		}

		function createAndAddInputToRow(checkValueFunction) {
			currentInput = document.createElement("INPUT");
			currentInput.type = "number";
			currentRow.appendChild(currentInput);
			currentInput.addEventListener("keyup", function(event) {
				if (ENTER_KEY_CODE === event.keyCode) {
					checkValueFunction(currentInput.value);
				}
			});
			currentInput.focus();
		}

		function addEqualsAndTenToRow() {
			currentRow.appendChild(document.createTextNode("= 10"));
		}

		function setCurrentRowAsCorrect() {
			currentRow.className = "correct";
		}
		function setCurrentRowAsError() {
			currentRow.className = "error";
		}

		function setCorrectAnswer(correctAnswer) {
			var correctNode = document.createElement("SPAN");
			correctNode.appendChild(document.createTextNode("(" + correctAnswer + ")"));
			correctNode.className = "correct";
			currentRow.appendChild(correctNode);
		}

		start();

		return Object.freeze({
			"type" : "tenFriendsView",
			getView : getView,
			createNumberOfChoice : createNumberOfChoice,
			createNewRow : createNewRow,
			setCurrentRowAsCorrect : setCurrentRowAsCorrect,
			setCurrentRowAsError : setCurrentRowAsError,
			setCorrectAnswer : setCorrectAnswer
		});
	};
	return learning;
}(LEARNING));