// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('deepseek.askAI', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active editor');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        if (!text) {
            vscode.window.showErrorMessage('No text selected');
            return;
        }

        try {
            const response = await axios.post('https://api.deepseek.com', {
                prompt: text,
                model: 'deepseek-code',
                max_tokens: 200,
            });

            if (response.data) {
                vscode.window.showInformationMessage('AI Response: ' + response.data.result);
            }
        } catch (error) {
            vscode.window.showErrorMessage('Error communicating with DeepSeek API');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
