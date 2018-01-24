/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Logic blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.logic');  // Deprecated
goog.provide('Blockly.Constants.Logic');

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['initdrone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initialise Drone");
	this.appendValueInput("IP")		
        .setCheck(null).appendField('Set IP').setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("Port")
        .setCheck(null).appendField('Set Port').setAlign(Blockly.ALIGN_RIGHT);
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Connect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Connect Drone");	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arming'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Arm Drone");	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Disarming'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Disarm Drone");	
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['SetThrottle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Throttle Drone");
    this.appendValueInput("Throttle")
        .setCheck(null).appendField('value').setAlign(Blockly.ALIGN_RIGHT);
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['SetRoll'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Roll Drone");
	this.appendValueInput("Roll")		
        .setCheck(null).appendField('value').setAlign(Blockly.ALIGN_RIGHT);
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['SetPitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Pitch Drone");
	this.appendValueInput("Pitch")		
        .setCheck(null).appendField('value').setAlign(Blockly.ALIGN_RIGHT);
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['SetYaw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Yaw Drone");
	this.appendValueInput("Yaw")		
        .setCheck(null).appendField('value').setAlign(Blockly.ALIGN_RIGHT);
	this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['Disconnect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Disconnect Drone");	
    this.setPreviousStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};