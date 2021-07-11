import setupSettings from "./settings.js";
import { registerSocket } from "./sockets.js";
import registerLayer from "./layers.js";
import registerHooks from "./hooks.js";
import {registerTypes} from './typings.js'

Hooks.once('init', async function() {
    registerLayer();
});

Hooks.once('ready', async function() {
    setupSettings();
    registerSocket();
    registerHooks();
    console.log("Sequencer | Ready to go!")
});

Hooks.once('monaco-editor.ready', registerTypes)
