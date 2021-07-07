import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Debug Context+ is running');

    var config = vscode.workspace.getConfiguration('debug-context-plus');
    var mode: boolean = false;
    vscode.commands.executeCommand(
        'setContext',
        'debug-context-plus.toggleMode',
        false
    );
    if (config.statusBarItem) {
        var statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
        statusBarItem.text = "$(bug)+";
        context.subscriptions.push(statusBarItem);
    }
    let toggleModeCommand = vscode.commands.registerCommand(
        'debug-context-plus.toggleMode',
        () => {
            if (mode) {
                if (config.notification) {
                    vscode.window.showInformationMessage('Debug Context: Off');
                }
                if (config.statusBarItem) {
                    statusBarItem.hide();
                }
                vscode.commands.executeCommand(
                    'setContext',
                    'debug-context-plus.context',
                    false
                );
                mode = false;
            } else {
                if (config.notification) {
                    vscode.window.showInformationMessage('Debug Context: On');
                }
                if (config.statusBarItem) {
                    statusBarItem.show();
                }
                vscode.commands.executeCommand(
                    'setContext',
                    'debug-context-plus.context',
                    true
                );
                mode = true;
            }
        }
    );

    context.subscriptions.push(toggleModeCommand);
}

export function deactivate() {}
