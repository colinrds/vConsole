/*
Tencent is pleased to support the open source community by making vConsole available.

Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.

Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
http://opensource.org/licenses/MIT

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * A Front-End Console Panel for Mobile Webpage
 */

// classes
import VConsole from './core/core.js';
import VConsolePlugin from './lib/plugin.js';
// built-in tabs
import VConsoleDefaultTab from './log/default.js';
import VConsoleSystemTab from './log/system.js';
import VConsoleNetworkTab from './network/network.js';

// here we go
const vConsole = new VConsole();

const defaultTab = new VConsoleDefaultTab('default', 'Log');
vConsole.addPlugin(defaultTab);

const systemTab = new VConsoleSystemTab('system', 'System');
vConsole.addPlugin(systemTab);

const networkTab = new VConsoleNetworkTab('network', 'Network');
vConsole.addPlugin(networkTab);

// export
vConsole.VConsolePlugin = VConsolePlugin;
export default vConsole;