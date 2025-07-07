# Venice.ai Integration for UI-TARS Desktop

## 🚀 Installation Complete

Venice.ai has been successfully integrated into UI-TARS Desktop with the following modifications:

### 📁 Modified Files:
1. `apps/ui-tars/src/main/store/types.ts` - Added Venice.ai provider enums
2. `multimodal/model-provider/src/constants.ts` - Added Venice.ai configuration with hardcoded API key
3. `apps/ui-tars/src/main/utils/agent.ts` - Added Venice.ai model version mapping and system prompt routing
4. `apps/ui-tars/src/main/agent/prompts.ts` - Added Venice.ai-specific system prompt

### 🔧 Venice.ai Configuration:
- **API Key**: `YOUR_VENICE_AI_API_KEY` (replace with your actual key)
- **Base URL**: `https://api.venice.ai/api/v1`
- **Provider Options**: 
  - `Venice.ai for UI-TARS` (text-based)
  - `Venice.ai Vision for UI-TARS` (vision-capable)

### 🎯 Available Venice.ai Models:
- **mistral-31-24b** (Venice Medium) - **RECOMMENDED** ✨
  - Vision support: ✅
  - Function calling: ✅
  - 131K context tokens
  - Best for GUI automation

- **qwen-2.5-vl** (Qwen 2.5 VL 72B) - **VISION SPECIALIST** 👁️
  - Vision support: ✅
  - Best for visual understanding

- **llama-3.3-70b** (Default) - **BALANCED** ⚖️
  - Function calling: ✅
  - Most reliable

- **venice-uncensored** - **UNRESTRICTED** 🔓
  - No content restrictions
  - For sensitive automation tasks

### 🛠️ Setup Instructions:

1. **Build the Application**:
   ```bash
   cd UI-TARS-desktop
   pnpm install
   pnpm run dev:ui-tars
   ```

2. **Configure in UI**:
   - Open UI-TARS Desktop
   - Go to Settings → VLM Provider
   - Select "Venice.ai for UI-TARS"
   - API Key: Already hardcoded ✅
   - Base URL: `https://api.venice.ai/api/v1`
   - Model Name: `mistral-31-24b` (recommended)

3. **For Vision Tasks**:
   - Select "Venice.ai Vision for UI-TARS"
   - Model Name: `qwen-2.5-vl`

### 🔄 Fallback Strategy:

If Venice.ai fails, the system will:
1. Try alternative Venice.ai models
2. Fall back to original UI-TARS providers
3. Display clear error messages

### 🎨 Venice.ai Advantages:
- **Uncensored**: No content restrictions
- **Vision Support**: Multiple vision-capable models
- **Cost Effective**: Competitive pricing
- **High Context**: Up to 131K tokens
- **Function Calling**: Advanced tool usage

### 🚨 Important Notes:
- API key is hardcoded for convenience
- Venice.ai uses OpenAI-compatible API format
- Custom system prompts optimized for Venice.ai
- Vision models automatically selected for visual tasks

### 🧪 Testing:
1. Start with simple tasks (click, type)
2. Test vision capabilities with screenshots
3. Try complex multi-step workflows
4. Verify fallback mechanisms

The integration is now complete and ready for use! 🎉
