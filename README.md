<h2 align="center">
    <img src="https://static.docs-hub.com/deepseek.png" height="64">
    <br>Deepseek
</h2>
<h3 align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=colourafredi.vscode-deepseek" alt="Marketplace version">
        <img src="https://img.shields.io/visual-studio-marketplace/v/colourafredi.vscode-deepseek?label=VS%20Code%20Marketplace" />
    </a>
    <a href="https://marketplace.visualstudio.com/items?itemName=colourafredi.vscode-deepseek" alt="Marketplace download count">
        <img src="https://img.shields.io/visual-studio-marketplace/stars/colourafredi.vscode-deepseek" />
    </a>
    <a href="https://marketplace.visualstudio.com/items?itemName=colourafredi.vscode-deepseek" alt="Marketplace download count">
        <img src="https://img.shields.io/visual-studio-marketplace/d/colourafredi.vscode-deepseek?label=Downloads" />
    </a>
</h3>
<p align="center">Keyless,Magic-free,Login-free,Multilingual</p>
<p align="center" >免Key,免魔法,免登录,多语言</p>
<p align="center" >無需Key，無需魔法，無需登入，多語言</p>

**English**

### Usage Instructions

Press the shortcut key `Ctrl+Shift+P (Command + Shift + P)`, type `Deepseek:Set up a custom proxy server🌐`, press Enter, and then enter the proxy server URL. Press Enter again to complete the configuration.

## Features

- 💻 Copy and insert code into current and new files
- 🚀 Add predefined prompts for quick input during questioning
- 📤 Export code or entire conversations as markdown files
- 💾 Save your conversation history on your local hard drive, replay, continue, and manage at any time
- 🔑 Bind your own API key that supports DeepSeek R1 to use the DeepSeek R1 model
- 🗣️ Bind your own API key to support streaming context conversation and you can pause the response at any time
- 🌐 Use your own OpenAI server
- 🔒 Privacy secured, all information is saved on your local hard drive, without uploading any information to any server
- 🌍 The plugin supports multiple languages, including English, Simplified Chinese, and Traditional Chinese. If you wish to add a new language, please raise an [issue](https://github.com/zhangrenyang/vscode-deepseek/issues) here.

## Commands

- **Check the following code for bugs and provide repair suggestions 🐛**: Use the code error-finding feature to analyze and highlight errors in the code
- **Explain the following code in detail 💬**: Use the code explanation feature for a better understanding of your code
- **Refactor this code and tell me what did you change 🔧**: Refactor code and understand clearly what you've changed
- **Deepseek:Add tests for the following code 🧪**: Easily add tests for your code
- **Deepseek:Add Predefined Prompt➕**: Add predefined prompts through a combination of shortcuts and input
- **Deepseek: Choose Predefined Prompt 🔍**: Choose a predefined prompt
- **Deepseek:Custom prompt❓**: Generate custom queries for Deepseek
- **Deepseek: Add predefined prompt ➕**: Add predefined prompt
- **Deepseek: Edit predefined prompt ✏️**: Edit predefined prompt
- **Deepseek:Bind your own API key🔀🔑**: Easily bind your own API key using a combination of shortcuts and commands
- **Deepseek:Validate API key✔️🔑**: Validate your API key to ensure its validity and correct function
- **Deepseek:Unbind API key🗑️🔑**: Unbind You Own API key
- **Deepseek:Set language🌍**: Set the language you want with shortcuts and commands. The default is English
- **Deepseek:Set up a custom proxy server🌐**: Set and use your own proxy server by inputting your proxy server information
- **Deepseek:Cancel proxy server settings🌐**: Cancel proxy server settings
- **Deepseek:Ask a question❓**: Click on the Deepseek icon and input your content, then press Enter to get a reply from Deepseek
- **Deepseek:Clear list🗑️**: Able to clear the current conversation
- **Deepseek:Export markdown📤**: Able to export the current conversation as a markdown file

## 📖 Usage

### 🔧 Install the extension

Install the extension from the [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=colourafredi.vscode-deepseek)

### Ask question❓

Press the shortcut key `Ctrl+Shift+P(Command + Shift + P )`, type `Deepseek:Ask a question ❓`, press Enter, type your question, press Enter again, and the answer panel will automatically open to provide an answer.

Alternatively, click on the Deepseek icon on the left, enter what you want to say, press Enter, and wait a few seconds for Deepseek's reply to appear.

On the answer page, the first small icon is for copying to the clipboard, the second small icon is for inserting the answer at the current cursor position, and the third small icon is for creating and opening a file and inserting the answer at the current cursor position.

### 🔑 API key

### 📚 What is an API key?

OpenAI's API key is a mechanism for authenticating and authorizing access to OpenAI's API (Application Programming Interface). An API key is like a password, allowing developers to interact with OpenAI's services in a secure manner. The API key is a critical factor in establishing a connection between the server and the client, used to verify the legitimacy of the request. Typically, only users with a valid API key can access a specific API.

Here are the general steps to use the OpenAI API key:

- Create an OpenAI account: You first need to [click here](https://platform.openai.com/signup) to create an OpenAI account, and then generate your API key in that account.

- Generate API key: In the OpenAI dashboard, [click here](https://platform.openai.com/account/api-keys) you can generate a new API key."

### Bind your own API key🔀🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:Bind your own API key🔀🔑`, press Enter, input the API key, press Enter again, and the API key will be updated.

You can also open any file, right-click, select `Deepseek:Bind your own API key🔀🔑`, input the API key, and press Enter to update the API key. If the update is successful, the balance and expiry date of the API key and supported models will be displayed. If the update fails, you will be prompted to re-enter the API key.

### Validate API key✔️🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:Validate API key ✔️🔑`, press Enter, and the API key will be validated.

You can also open any file, right-click, select `Deepseek:Validate API key ✔️🔑`, and press Enter to validate the API key. If the validation is successful, the balance and expiry date and supported models of the API key will be displayed. If the validation fails, you will receive API key invalid notification.

If you wish to use DeepSeek R1, you need to [click here](https://openai.com/waitlist/DeepSeek R1-api) to apply for DeepSeek R1 API permissions.

### Unbind API key🗑️🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:Unbind API key🗑️🔑`,You can then unbind You Own API key

### Why is there a bug in this code?🐛

Open any file, select a piece of code (if no code is selected, the whole content of the file will be considered), then right-click and choose `Deepseek:Why is there a bug in this code? 🐛💻` from the menu. This can help you analyze your code and highlight any errors.

### Help me explain the code?💬

Open any file, select a piece of code (if no code is selected, the whole content of the file will be considered), then right-click and choose `Deepseek:Help me explain the code? 💬` from the menu. This can help explain your code.

### Refactor this code and tell me what did you change?🔧💻

Open any file, select a piece of code (if no code is selected, the whole content of the file will be considered), then right-click and choose `Deepseek:Refactor this code and tell me what did you change? 🔧💻` from the menu. This can help refactor your code.

### Add some tests for this code for me🧪

Open any file, select a piece of code (if no code is selected, the whole content of the file will be considered), then right-click and choose `Deepseek:Add some test for this code for me 🧪` from the menu. This can help add tests for your code.

### Custom prompt❓

Open any file, select a piece of code (if no code is selected, the whole content of the file will be considered), then right-click and choose `Deepseek:Custom prompt ❓` from the menu. An input box will pop up, type your question, press Enter, and you will get an answer.

### Add predefined prompts➕

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:Add Predefined Prompt ➕`, press Enter, and you can enter predefined prompts, which could be a title or content.
After input, in the question input box, you can type / to pop up a predefined selection box, then use the up and down arrow keys to select a predefined prompt. Press Enter or click to confirm and it will be automatically filled into the question input box.



## 🗣️ Communication

- You are welcome to join


