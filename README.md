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

### Edit Predefined Prompts Using a JSON File ✏️

Press the shortcut `Ctrl+Shift+P (Command + Shift + P)` and type `Deepseek: Edit Predefined Prompts ✏️`, then press Enter. This will open the `prompts.json` configuration file where you can edit predefined prompts in one place.

After doing this, you can type `/` in the input box to display a dropdown list of predefined prompts. Use the up and down arrow keys to navigate through the prompts, and press Enter or click to select one and have it automatically inserted into the input box.

### Choose Predefined Prompt ➕

Press the shortcut keys `Ctrl+Shift+P (Command + Shift + P on Mac)`, type in `Deepseek: Choose Predefined Prompt➕`, a selection window will pop up for users to choose their custom prompts they have added.

### Set language🌍

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:Set language 🌍`, press Enter, and select the language you want to set. The default is English.

### Set up a custom proxy server🌐

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:Set up a custom proxy server 🌐` ，Then, by entering your own proxy server, you can use your own proxy server.

### Settings❓

- [OpenAI Documentation](https://platform.openai.com/docs/)
- [OpenAI API Guide](https://platform.openai.com/docs/api-reference)

Users can configure the settings of VS Code plugins by following these steps:

1. **Open Settings:**
   In VS Code, press the shortcut `Ctrl+,` or select `File > Preferences > Settings` from the top menu bar (on Mac it is `Code > Preferences > Settings`).

2. **Search for Plugin Settings:**
   In the settings search bar, enter the name of the plugin or keywords of the configuration parameters. VS Code will dynamically display the configuration options that match your input.

3. **Modify Configuration Parameters:**
   Click the configuration parameter you want to modify, then enter a new value or select a new option. You can also click the edit icon (the pencil icon) to add the configuration parameter to your user settings or workspace settings, and then modify it there.

4. **Save Modifications:**
   VS Code automatically saves your settings after you make modifications. Close the settings tab or click elsewhere, and the new configuration will take effect.

#### 🧠Model

The OpenAI API is powered by a diverse set of [models](https://platform.openai.com/docs/models) with different capabilities and price points. You can also make limited customizations to our original base models for your specific use case with fine-tuning.

#### 🌡️Temperature

In the OpenAI API, `temperature` is a parameter that controls the randomness of the generated text. Its value is between 0 and 1, inclusive.

When the `temperature` is close to 1, the text generated by the model will be more random. In other words, when the model chooses the next word, it will make a more uniform selection among all possible words, even if the probabilities of some words are low. This may result in outputs that are more innovative, but it may also lead to reduced coherence and consistency in the outputs.

When the `temperature` is close to 0, the text generated by the model will be more deterministic. That is, the model will be more inclined to choose the word with the highest probability when selecting the next word. This may result in outputs that are more coherent and consistent, but they may lack innovation.

In summary, the `temperature` parameter can help you find a balance between innovation and coherence. If you want the generated text to be more innovative, you can try to increase the value of `temperature`; if you want the generated text to be more coherent, you can try to decrease the value of `temperature`.

## 🗣️ Communication

- You are welcome to join

the QQ discussion group for discussions

- DeepseekQQ Grou 【957284835】 [Click to join QQ Group](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=KWl8ZyDCDrBRn4NCXUnr5MkyMTl0nwSK&authKey=iGZm2aZDWgj83khMCftofy7j8YIf0ulFSr4gaeXRbcOpTMWA1RRg%2BHRJ0A%2FVdPaa&noverify=0&group_code=957284835)
- Or join by scanning the QQ QR code<br/>
  <img src="https://static.docs-hub.com/qrcode.jpg" height="256">
- Or share design architecture through the Official Accounts<br/>
  <img src="https://vleedesigntheory.github.io/offical_accounts.jpg" height="256">

**中文**

### 使用方式

按下快捷键`Ctrl+Shift+P(Command + Shift + P )`,输入`Deepseek:设置自定义的代理服务器 🌐`,按 Enter 键,输入代理服务器,再次按 Enter 键就会设置成功

## 特色

- 💻 可以复制、插入代码到当前文件和新文件中
- 🚀 可以添加预定义提示词以便在提问的时候快速输入
- 📤 可以导出代码或整个会话为 markdown 文件
- 💾 可以将你的会话记录保存在本地硬盘,随时回放、继续和管理
- 🔑 绑定自己的支持 DeepSeek R1 的 API key 之后可以使用 DeepSeek R1 模型
- 🗣️ 绑定自己的 API key 之后支持流式上下文对话并且可以随时暂停回答
- �� 可以使用你自己的 OpenAI 服务器
- 🔒 隐私安全,所有信息都保存在本地硬盘,不会将任何信息上传至任何服务器
- 🌍 支持多种国家的语言,目前有英文、简体中文、繁体中文,如果你希望添加新的语言可以在这里提[issue](https://github.com/zhangrenyang/vscode-deepseek/issues)

## 命令

- **Deepseek:检查下面代码是否有 BUG 并给出修复建议 🐛**: 使用查找代码错误功能来分析和突出代码中的错误
- **Deepseek:详细讲解下面代码 💬**: 使用解释代码功能来更好地理解您的代码
- **Deepseek:重构下面代码并告诉我你改动了哪里 🔧**: 重构下面代码并告诉我你改动了哪里
- **Deepseek:为下面的代码添加测试 ��**: 为下面的代码添加测试
- **Deepseek:选择预定义提示词 🔍**: 选择预定义提示词
- **Deepseek:自定义提问 ✏️❓**: 为 Deepseek 生成自定义查询
- **Deepseek:增加预定义提示词 ➕**: 增加预定义提示词
- **Deepseek:修改预定义提示词 ✏️**: 修改预定义提示词
- **Deepseek:绑定自己的 API key🔀🔑**: 透过组合快捷鍵和命令輕鬆更新 API key
- **Deepseek:验证 API key✔️🔑**: 验证 API key 以确保其有效性和正确功能
- **Deepseek:解绑 API key🗑️🔑**: 解绑你自己的 API key
- **Deepseek:修改显示语言 🌍**: 透过快捷鍵和命令来設定您想要的語言。預設是英文
- **Deepseek:设置自定义的代理服务器 🌐**: 透过输入自己的代理服务器信息，设置并使用自己的代理服务器
- **Deepseek:取消代理服务器设置 🌐**: 取消代理服务器设置
- **Deepseek:发起提问 ❓**: 点击 Deepseek 图标并输入内容，然后按 Enter 键获取 Deepseek 的回复
- **Deepseek:清空列表 ��️**: 可以清空当前的会话
- **Deepseek:导出 markdown📤**: 可以导出当前的会话为 markdown 文件

## 📖 使用

### 🔧 安装扩展

从[VSCode 市场](https://marketplace.visualstudio.com/items?itemName=colourafredi.vscode-deepseek)安装扩展

### Ask question❓

Press the shortcut key `Ctrl+Shift+P(Command + Shift + P )`, type `Deepseek:发起提问 ❓`, press Enter, type your question, press Enter again, and the answer panel will automatically open to provide an answer.

Alternatively, click on the Deepseek icon on the left, enter what you want to say, press Enter, and wait a few seconds for Deepseek's reply to appear.

On the answer page, the first small icon is for copying to the clipboard, the second small icon is for inserting the answer at the current cursor position, and the third small icon is for creating and opening a file and inserting the answer at the current cursor position.

### 🔑 API key

### 📚 什么是 API key？

OpenAI 的 API key 是一种用于验证和授权访问 OpenAI 的 API（应用程序编程接口）的机制。API key 就像一个密码,允许开发者以安全的方式与 OpenAI 的服务进行交互。API key 在建立服务器和客户端之间的连接中是一个关键因素,用于验证请求的合法性。通常,只有拥有有效 API key 的用户才能访问特定的 API。

以下是使用 OpenAI API key 的一般步骤：

- 创建 OpenAI 账户：你首先需要[点击这里](https://platform.openai.com/signup)创建一个 OpenAI 账户,然后在该账户中生成你的 API key。

- 生成 API key：在 OpenAI 的仪表盘上, [点击这里](https://platform.openai.com/account/api-keys)你可以生成一个新的 API key。

### 绑定自己的 API key🔀🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:绑定自己的API key🔀🔑`, press Enter, input the API key, press Enter again, and the API key will be updated.

You can also open any file, right-click, select `Deepseek:绑定自己的API key🔀🔑`, input the API key, and press Enter to update the API key. If the update is successful, the balance and expiry date of the API key and supported models will be displayed. If the update fails, you will be prompted to re-enter the API key.

### 验证 API key✔️🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:验证API key ✔️🔑`, press Enter, and the API key will be validated.

You can also open any file, right-click, select `Deepseek:验证API key ✔️🔑`, and press Enter to validate the API key. If the validation is successful, the balance and expiry date and supported models of the API key will be displayed. If the validation fails, you will receive API key invalid notification.

如果你希望使用 DeepSeek R1,你需要[点击这里](https://openai.com/waitlist/DeepSeek R1-api)申请 DeepSeek R1 API 权限。

### 解绑 API key🗑️🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:解绑API key 🔄🔑`, you can then unbind You Own API key

### 为什么这段代码有错误？🐛💻

打开任何文件,选择一段代码(如果没有选择代码,将会考虑文件的全部内容),然后右键选择菜单中的`Deepseek:为什么这段代码出现了BUG? 🐛💻`。这可以帮助你分析代码并突出显示任何错误。

### 帮我解释这段代码？💬📖

打开任何文件,选择一段代码(如果没有选择代码,将会考虑文件的全部内容),然后右键选择菜单中的`Deepseek:讲解下面代码 💬📖`。这可以帮助解释你的代码。

### 重构这段代码并告诉我你改动了哪里🔧💻

打开任何文件,选择一段代码(如果没有选择代码,将会考虑文件的全部内容),然后右键选择菜单中的`Deepseek:重构下面代码并告诉我你改动了哪里? 🔧💻`。这可以帮助重构你的代码。

### 为我添加一些测试代码 ➕🧪💻

打开任何文件,选择一段代码(如果没有选择代码,将会考虑文件的全部内容),然后右键选择菜单中的`Deepseek:为我这段代码添加测试 ➕🧪`。这可以帮助为你的代码添加测试。

### 自定义问题 ✏️❓

打开任何文件,选择一段代码(如果没有选择代码,将会考虑文件的全部内容),然后右键选择菜单中的`Deepseek:自定义提问 ✏️❓`。会弹出一个输入框,输入你的问题,按 Enter 键,你就会得到答案。

### 增加预定义提示词 ➕

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:增加预定义提示词 ➕`, press Enter, and you can enter predefined prompts, which could be a title or content.
输入之后在提问输入框可以键入`/`弹出预定义选择框,然后按上下方向键可以选择预定义提示词,回车或点击可以确定并自动填入提问输入框

### 使用 JSON 文件編輯預定義提示詞 ✏️

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:編輯預定義提示詞 ✏️`, press Enter, and you can open a `prompts.json` configuration file to edit predefined prompts in one place.
輸入之後,在提問輸入框中輸入 `/`,會彈出預定義選擇框。接著按上下方向鍵選擇預定義提示詞,按 Enter 或點擊以確定並自動填入提問輸入框。

### 绑定自己的 API key🔀🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:绑定自己的API key🔀🔑`, press Enter, input the API key, press Enter again, and the API key will be updated.

### 验证 API key✔️🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:验证API key✔️🔑`, press Enter, and the API key will be validated.

### 解绑 API key🗑️🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:解绑 API key🗑️🔑`, you can then unbind You Own API key

### 修改显示语言 🌍

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:修改显示语言 🌍`, press Enter, and select the language you want to set. The default is English.

### 设置自定义的代理服务器 🌐

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:设置自定义的代理服务器 🌐`, then input your own proxy server, you can use your own proxy server.

注意,你的代理服务器必须支持 HTTPS,否则它将无法工作。

### ❓ 設定

- [OpenAI 文件](https://platform.openai.com/docs/)
- [OpenAI API 指南](https://platform.openai.com/docs/api-reference)

用戶可以透過以下步驟配置 VS Code 插件的配置參數：

1. **開啟設定：**
   在 VS Code 中,按下快捷鍵`Ctrl+,`或者從頂部菜單列選擇`File > Preferences > Settings` (在 Mac 上是 `Code > Preferences > Settings`)。
2. **搜尋插件設定：**
   在設定的搜尋欄中,輸入插件的名稱或者配置參數的關鍵詞。VS Code 會動態顯示與你的輸入匹配的配置選項。
3. **修改配置參數：**
   點擊你想要修改的配置參數,然後輸入新的值或者選擇新的選項。你也可以通過點擊編輯圖標(鉛筆圖標)將配置參數添加到你的用戶設定或者工作區設定中,然後在那裡進行修改。
4. **儲存修改：**
   VS Code 會在你修改設定後自動儲存。關閉設定標籤頁或者點擊其他地方,新的配置就會生效。

#### 🧠 模型

OpenAI API 由一組具有不同功能和價格點的[模型](https://platform.openai.com/docs/models)驅動。你也可以透過微調對我們的原始基礎模型進行有限的定制,以適應你的特定使用場景。

#### 🌡️Temperature

In the OpenAI API, `temperature` is a parameter that controls the randomness of the generated text. Its value is between 0 and 1, inclusive.

When the `temperature` is close to 1, the text generated by the model will be more random. In other words, when the model chooses the next word, it will make a more uniform selection among all possible words, even if the probabilities of some words are low. This may result in outputs that are more innovative, but it may also lead to reduced coherence and consistency in the outputs.

When the `temperature` is close to 0, the text generated by the model will be more deterministic. That is, the model will be more inclined to choose the word with the highest probability when selecting the next word. This may result in outputs that are more coherent and consistent, but they may lack innovation.

In summary, the `temperature` parameter can help you find a balance between innovation and coherence. If you want the generated text to be more innovative, you can try to increase the value of `temperature`; if you want the generated text to be more coherent, you can try to decrease the value of `temperature`.

## 🗣️ Communication

- You are welcome to join

the QQ discussion group for discussions

- DeepseekQQ Grou 【957284835】 [Click to join QQ Group](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=KWl8ZyDCDrBRn4NCXUnr5MkyMTl0nwSK&authKey=iGZm2aZDWgj83khMCftofy7j8YIf0ulFSr4gaeXRbcOpTMWA1RRg%2BHRJ0A%2FVdPaa&noverify=0&group_code=957284835)
- Or join by scanning the QQ QR code<br/>
  <img src="https://static.docs-hub.com/qrcode.jpg" height="256">
- Or share design architecture through the Official Accounts<br/>
  <img src="https://vleedesigntheory.github.io/offical_accounts.jpg" height="256">

**繁體中文**

### 使用方式

按下快捷鍵`Ctrl+Shift+P(Command + Shift + P )`，輸入`Deepseek: 設置自定義的代理伺服器 🌐`，按 Enter 鍵，輸入代理伺服器，再次按 Enter 鍵就會設置成功。

## 特色

- 💻 可以複製、插入程式碼到當前文件和新文件中
- 🚀 可以添加預定義提示詞以便在提問的時候快速輸入
- 📤 可以導出程式碼或整個對話為 markdown 文件
- 💾 可以將你的對話紀錄保存在本地硬碟，隨時回放、繼續和管理
- 🔑 綁定自己的支持 DeepSeek R1 的 API key 之後可以使用 DeepSeek R1 模型
- 🗣️ 綁定自己的 API key 之後支持流式上下文對話並且可以隨時暫停回答
- �� 可以使用你自己的 OpenAI 伺服器
- 🔒 隱私安全，所有資訊都保存在本地硬碟，不會將任何資訊上傳至任何伺服器
- 🌍 支援多種國家的語言，目前有英文、簡體中文、繁體中文，如果你希望添加新的語言可以在這裡提出[issue](https://github.com/zhangrenyang/vscode-deepseek/issues)

## 命令

- **Deepseek:檢查下面程式碼是否有 BUG 並給出修復建議 🐛**: 使用查找程式碼錯誤功能來分析和突出程式碼中的錯誤
- **Deepseek:詳細講解下面程式碼 💬**: 使用解釋程式碼功能來更好地理解您的程式碼
- **Deepseek:重構下面程式碼並告訴我你改動了哪裡 🔧**: 重構下面程式碼並告訴我你改動了哪裡
- **Deepseek:為下面的程式碼添加測試 🧪**: 為下面的程式碼添加測試
- **Deepseek:選擇預定義提示詞 🔍**: 選擇預定義提示詞
- **Deepseek:自定義提問 ✏️❓**: 為 Deepseek 生成自定義查詢
- **Deepseek:增加預定義提示詞 ➕**: 增加預定義提示詞
- **Deepseek:修改預定義提示詞 ✏️**: 修改預定義提示詞
- **Deepseek:綁定自己的 API key🔀🔑**: 透過組合快捷鍵和命令輕鬆更新 API key
- **Deepseek:驗證 API key✔️🔑**: 驗證 API key 以確保其有效性和正確功能
- **Deepseek:解绑 API key🗑️🔑**: 解绑你自己的 API key
- **Deepseek:修改顯示語言 🌍**: 透過快捷鍵和命令來設定您想要的語言。預設是英文
- **Deepseek:設定自定義的代理伺服器 🌐**: 透過輸入自己的代理伺服器資訊，設定並使用自己的代理伺服器
- **Deepseek:取消代理服务器设置 🌐**: 取消代理服务器设置
- **Deepseek:發起提問 ❓**: 點擊 Deepseek 圖標並輸入內容，然後按 Enter 鍵獲取 Deepseek 的回答
- **Deepseek:清空列表 ��️**: 可以清空當前的對話
- **Deepseek:導出 markdown📤**: 可以導出當前的對話為 markdown 文件

## 📖 使用

### 🔧 安裝擴充套件

從[VSCode 市場](https://marketplace.visualstudio.com/items?itemName=colourafredi.vscode-deepseek)安裝擴充套件

### 提問 ❓

按下快捷鍵`Ctrl+Shift+P(Command + Shift + P )`，輸入`Deepseek:發起提問 ❓`，按 Enter 鍵，輸入問題，再次按 Enter 鍵，就會自動開啟回答面板進行回答

或者點擊左側的 Deepseek 圖標，輸入你想說的內容，按 Enter 鍵，等待幾秒鐘，Deepseek 的回覆就會出現。

在答案頁面上，第一個小圖標是複製到剪貼簿，第二個小圖標是將答案插入到當前游標位置，第三個小圖標是創建並打開文件並將答案插入到當前游標位置。

### 🔑 API key

### �� 什麼是 API key？

OpenAI 的 API key 是一種用於驗證和授權訪問 OpenAI 的 API（應用程序編程介面）的機制。API key 就像一個密碼，允許開發者以安全的方式與 OpenAI 的服務進行交互。API key 在建立伺服器和客戶端之間的連接中是一個關鍵因素，用於驗證請求的合法性。通常，只有擁有有效 API key 的用戶才能訪問特定的 API。

以下是使用 OpenAI API key 的一般步驟：

- 創建 OpenAI 帳戶：你首先需要[點擊這裡](https://platform.openai.com/signup)創建一個 OpenAI 帳戶，然後在該帳戶中生成你的 API key。

- 生成 API key：在 OpenAI 的仪表盘上，[点击这里](https://platform.openai.com/account/api-keys)你可以生成一个新的 API key。

### 绑定自己的 API key🔀🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:绑定自己的API key🔀🔑`, press Enter, input the API key, press Enter again, and the API key will be updated.

You can also open any file, right-click, select `Deepseek:绑定自己的API key🔀🔑`, input the API key, and press Enter to update the API key. If the update is successful, the balance and expiry date of the API key and supported models will be displayed. If the update fails, you will be prompted to re-enter the API key.

### 验证 API key✔️🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:验证API key ✔️🔑`, press Enter, and the API key will be validated.

You can also open any file, right-click, select `Deepseek:验证API key ✔️🔑`, and press Enter to validate the API key. If the validation is successful, the balance and expiry date and supported models of the API key will be displayed. If the validation fails, you will receive API key invalid notification.

如果你希望使用 DeepSeek R1,你需要[点击这里](https://openai.com/waitlist/DeepSeek R1-api)申请 DeepSeek R1 API 权限。

### 解绑 API key🗑️🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:解绑API key 🔄🔑`, you can then unbind You Own API key

### 为什么这段代码有错误？🐛💻

打开任何文件,选择一段代码(如果没有选择代码,将会考虑文件的全部内容),然后右键选择菜单中的`Deepseek:为什么这段代码出现了BUG? 🐛💻`。这可以帮助你分析代码并突出显示任何错误。

### 帮我解释这段代码？💬📖

打开任何文件,选择一段代码(如果没有选择代码,将会考虑文件的全部内容),然后右键选择菜单中的`Deepseek:讲解下面代码 💬📖`。这可以帮助解释你的代码。

### 重构这段代码并告诉我你改动了哪里🔧💻

打开任何文件,选择一段代码(如果没有选择代码,将会考虑文件的全部内容),然后右键选择菜单中的`Deepseek:重构下面代码并告诉我你改动了哪里? 🔧💻`。这可以帮助重构你的代码。

### 为我添加一些测试代码 ➕🧪💻

打开任何文件,选择一段代码(如果没有选择代码,将会考虑文件的全部内容),然后右键选择菜单中的`Deepseek:为我这段代码添加测试 ➕🧪`。这可以帮助为你的代码添加测试。

### 自定义问题 ✏️❓

打开任何文件,选择一段代码(如果没有选择代码,将会考虑文件的全部内容),然后右键选择菜单中的`Deepseek:自定义提问 ✏️❓`。会弹出一个输入框,输入你的问题,按 Enter 键,你就会得到答案。

### 增加预定义提示词 ➕

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:增加预定义提示词 ➕`, press Enter, and you can enter predefined prompts, which could be a title or content.
输入之后在提问输入框可以键入`/`弹出预定义选择框,然后按上下方向键可以选择预定义提示词,回车或点击可以确定并自动填入提问输入框

### 使用 JSON 文件編輯預定義提示詞 ✏️

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:編輯預定義提示詞 ✏️`, press Enter, and you can open a `prompts.json` configuration file to edit predefined prompts in one place.
輸入之後,在提問輸入框中輸入 `/`,會彈出預定義選擇框。接著按上下方向鍵選擇預定義提示詞,按 Enter 或點擊以確定並自動填入提問輸入框。

### 绑定自己的 API key🔀🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:绑定自己的API key🔀🔑`, press Enter, input the API key, press Enter again, and the API key will be updated.

### 验证 API key✔️🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:验证API key✔️🔑`, press Enter, and the API key will be validated.

### 解绑 API key🗑️🔑

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:解绑 API key🗑️🔑`, you can then unbind You Own API key

### 修改显示语言 🌍

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:修改显示语言 🌍`, press Enter, and select the language you want to set. The default is English.

### 设置自定义的代理服务器 🌐

Press the shortcut `Ctrl+Shift+P(Command + Shift + P )`, enter `Deepseek:设置自定义的代理服务器 🌐`, then input your own proxy server, you can use your own proxy server.

注意,你的代理服务器必须支持 HTTPS,否则它将无法工作。

### ❓ 設定

- [OpenAI 文件](https://platform.openai.com/docs/)
- [OpenAI API 指南](https://platform.openai.com/docs/api-reference)

用戶可以透過以下步驟配置 VS Code 插件的配置參數：

1. **開啟設定：**
   在 VS Code 中,按下快捷鍵`Ctrl+,`或者從頂部菜單列選擇`File > Preferences > Settings` (在 Mac 上是 `Code > Preferences > Settings`)。
2. **搜尋插件設定：**
   在設定的搜尋欄中,輸入插件的名稱或者配置參數的關鍵詞。VS Code 會動態顯示與你的輸入匹配的配置選項。
3. **修改配置參數：**
   點擊你想要修改的配置參數,然後輸入新的值或者選擇新的選項。你也可以通過點擊編輯圖標(鉛筆圖標)將配置參數添加到你的用戶設定或者工作區設定中,然後在那裡進行修改。
4. **儲存修改：**
   VS Code 會在你修改設定後自動儲存。關閉設定標籤頁或者點擊其他地方,新的配置就會生效。

#### 🧠 模型

OpenAI API 由一組具有不同功能和價格點的[模型](https://platform.openai.com/docs/models)驅動。你也可以透過微調對我們的原始基礎模型進行有限的定制,以適應你的特定使用場景。


#### 🌡️ 溫度

在 OpenAI API 中,`temperature`是一個控制生成文本隨機性的參數。它的值在 0 和 1 之間,包含兩端。

當`temperature`接近 1 時,模型生成的文本將更具隨機性。換句話說,當模型選擇下一個單詞時,它將在所有可能的單詞中做出更均勻的選擇,即使某些單詞的概率較低。這可能會產生更具

創新性的輸出,但也可能導致輸出的連貫性和一致性降低。

當`temperature`接近 0 時,模型生成的文本將更具確定性。也就是說,模型在選擸下一個單詞時,將更傾向於選擇概率最高的單詞。這可能會產生更連貫和一致的輸出,但可能缺乏創新性。

總的來說,`temperature`參數可以幫助你在創新性和連貫性之間找到平衡。如果你希望生成的文本更具創新性,你可以嘗詗增加`temperature`的值；如果你希希冀生成的文上更連貫,你可以嘗該降你`temperature`的值。

## 🗣️ 交流

- 歡迎加入

QQ 討論群進行討薦

- DeepseekQQ Grou 【957284835】 [點擊加入](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=KWl8ZyDCDrBRn4NCXUnr5MkyMTl0nwSK&authKey=iGZm2aZDWgj83khMCftofy7j8YIf0ulFSr4gaeXRbcOpTMWA1RRg%2BHRJ0A%2FVdPaa&noverify=0&group_code=957284835)

- 或通過掃描 QQ 二維碼加入<br/>
  <img src="https://static.docs-hub.com/qrcode.jpg" height="256">

- 或通過微信公眾號獲取架構設計技術分享<br/>
  <img src="https://vleedesigntheory.github.io/offical_accounts.jpg" height="256">
