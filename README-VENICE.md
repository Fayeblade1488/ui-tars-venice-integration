# UI-TARS Desktop with Venice.ai Integration

A powerful GUI automation tool with integrated Venice.ai support for uncensored, privacy-focused AI assistance.

## 🚀 Features

- **GUI Automation**: Control any application through natural language commands
- **Venice.ai Integration**: Uncensored AI without content restrictions
- **Multi-Platform**: Works on macOS, Windows, and Linux
- **Browser & Desktop**: Automate both web browsers and desktop applications
- **Privacy-Focused**: Local processing with Venice.ai's privacy-first approach

## 🎯 Venice.ai Integration

This fork includes full integration with Venice.ai, providing:

- **Uncensored AI**: No content restrictions or limitations
- **Privacy-Focused**: Your data stays private
- **Multiple Models**: Support for various Venice.ai models
- **Vision Capabilities**: Advanced image understanding

### Available Venice.ai Models:
- **llama-3.1-405b** - High-performance text model
- **llama-3.2-90b-vision** - Vision-enabled model for screenshots

## 📋 Prerequisites

- Node.js 18+ and pnpm
- Venice.ai API key (get from [Venice.ai](https://venice.ai))
- Chrome browser (for browser automation)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Fayeblade1488/ui-tars-venice-integration.git
   cd ui-tars-venice-integration
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Configure Venice.ai API Key:**

   **Option A: Using the preset file (Recommended)**
   ```bash
   # Edit venice-ai-preset.json and replace YOUR_VENICE_AI_API_KEY with your actual key
   cp venice-ai-preset.json your-preset.json
   # Then edit your-preset.json with your API key
   ```

   **Option B: Manual configuration in constants file**
   ```bash
   # Edit multimodal/model-provider/src/constants.ts
   # Replace YOUR_VENICE_AI_API_KEY with your actual key
   ```

4. **Build and start:**
   ```bash
   cd apps/ui-tars
   pnpm run dev
   ```

## ⚙️ Configuration

### Setting up Venice.ai

1. Get your API key from [Venice.ai](https://venice.ai)
2. Replace `YOUR_VENICE_AI_API_KEY` in either:
   - `venice-ai-preset.json` (recommended)
   - `multimodal/model-provider/src/constants.ts`

### Using the Application

1. Launch the app: `pnpm run dev` in the `apps/ui-tars` directory
2. In the app settings, select your Venice.ai provider:
   - "Venice.ai for UI-TARS" (text model)
   - "Venice.ai Vision for UI-TARS" (vision model)
3. Start giving natural language commands!

### Example Commands

- "Take a screenshot"
- "Open a web browser and go to google.com"
- "Click on the settings button"
- "Type 'hello world' in the search box"
- "Scroll down the page"

## 🏗️ Project Structure

```
UI-TARS-desktop/
├── apps/ui-tars/                 # Main Electron application
├── multimodal/                   # Core AI and agent functionality
├── packages/                     # Shared packages and utilities
├── venice-ai-preset.json         # Venice.ai configuration preset
├── VENICE_AI_INTEGRATION.md      # Detailed integration documentation
└── README.md                     # This file
```

## 🔧 Development

### Building the Application

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run development server
cd apps/ui-tars
pnpm run dev

# Build for production
pnpm run build
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run specific package tests
cd multimodal/model-provider
pnpm test
```

## 🔒 Security & Privacy

- **API Keys**: Never commit real API keys to version control
- **Local Processing**: Most processing happens locally
- **Venice.ai Privacy**: Venice.ai doesn't store or log your conversations
- **Permissions**: The app requires screen recording and accessibility permissions on macOS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original UI-TARS team for the amazing foundation
- Venice.ai for providing uncensored AI capabilities
- The open-source community for various tools and libraries

## 🐛 Troubleshooting

### Common Issues

1. **App won't start**: Ensure you have the correct Node.js version and all dependencies installed
2. **Permission errors**: Grant screen recording and accessibility permissions in macOS System Preferences
3. **Venice.ai not working**: Check that your API key is correctly configured
4. **Build failures**: Try `rm -rf node_modules && pnpm install` to clean and reinstall dependencies

### Getting Help

- Check the [Issues](https://github.com/Fayeblade1488/ui-tars-venice-integration/issues) page
- Review the `VENICE_AI_INTEGRATION.md` file for detailed integration information
- Contact the maintainers for support

---

**Made with ❤️ for the privacy-conscious automation community**
