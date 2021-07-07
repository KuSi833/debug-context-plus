# Debug Context+

## Features

This extension adds an additional debug context (`debug-context-plus.context: bool`) which can be used in the **when clause** section of your Keybindings. 

It can be toggled through the Command Palette or added to a Keybinding, but I personally recommend you use it together with [Which Key](https://github.com/VSpaceCode/VSpaceCode). That way I can toggle it by pressing `space` -> `d` -> `t`.

## Example

You could bind Arrow Keys to use in Debug Mode instead of having to reach for the Function keys or some other key binding which could collide with your other key bindings. 

- `RightArrow` - Step Over
- `DownArrow` - Step Into
- `UpArrow` - Step Out

For this configuration to work you'd have to add the following keybindings:
```json
{
    "command": "workbench.action.debug.stepInto",
    "key": "down",
    "when": "debug-context-plus.context && debugState != 'inactive'" 
},
{
    "command": "workbench.action.debug.stepOut",
    "key": "up",
    "when": "debug-context-plus.context && debugState == 'stopped'" 
},
{
    "command": "workbench.action.debug.stepOver",
    "key": "right",
    "when": "debug-context-plus.context && debugState == 'stopped'" 
}
```

## Settings

| Setting | Description | Default Value |
| --- | --- | --- |
| `config.statusBarItem` | Specify whether to show a symbol on the Status Bar when active | `true` |
| `config.notification` | Specify whether to send a notification on mode toggle | `false`

