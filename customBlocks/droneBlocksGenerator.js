/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Python for colour blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Python.colour');

goog.require('Blockly.Python');

Blockly.Python['initdrone'] = function(block) {
  var value_ip = Blockly.Python.valueToCode(block, 'IP', Blockly.Python.ORDER_ATOMIC);
  var value_port = Blockly.Python.valueToCode(block, 'Port', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  Blockly.Python.definitions_.droneAPIimport="import pyMultiWii"
  var code = "myDrone=pyMultiWii.pyMultiWii("+value_ip+","+value_port+")\n";
  console.log(code);
  return code;
};

Blockly.Python['arming'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "myDrone.arm()\n";
  console.log(code);
  return code;
};

Blockly.Python['Disarming'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "myDrone.disarm()\n";
  console.log(code);
  return code;
};

Blockly.Python['SetThrottle'] = function(block) {
  var value_throttle = Blockly.Python.valueToCode(block, 'Throttle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "myDrone.setThrottle("+value_throttle+")\n";
  console.log(code);
  return code;
};

Blockly.Python['SetRoll'] = function(block) {
  var value_roll = Blockly.Python.valueToCode(block, 'Roll', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "myDrone.setRoll("+value_roll+")\n";
  console.log(code);
  return code;
};

Blockly.Python['SetPitch'] = function(block) {
  var value_Pitch = Blockly.Python.valueToCode(block, 'Pitch', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "myDrone.setPitch("+value_Pitch+")\n";
  console.log(code);
  return code;
};

Blockly.Python['SetYaw'] = function(block) {
  var value_Yaw = Blockly.Python.valueToCode(block, 'Yaw', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "myDrone.setYaw("+value_Yaw+")\n";
  console.log(code);
  return code;
};

Blockly.Python['Disconnect'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "myDrone.disconnect()\n";
  console.log(code);
  return code;
};

Blockly.Python['Delay'] = function(block) {
	var value_Delay = Blockly.Python.valueToCode(block, 'Delay', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  Blockly.Python.definitions_.timeimport="import time"
  var code = "time.sleep("+value_Delay+")\n";
  console.log(code);
  return code;
};

Blockly.Python['Break'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = "break\n";
  console.log(code);
  return code;
};