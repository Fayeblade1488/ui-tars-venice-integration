import { UITarsModelVersion } from '@ui-tars/shared/constants';
import {
  Operator,
  SearchEngineForSettings,
  VLMProviderV2,
} from '../store/types';
import {
  getSystemPrompt,
  getSystemPromptDoubao_15_15B,
  getSystemPromptDoubao_15_20B,
  getSystemPromptV1_5,
  getSystemPromptVenice,
} from '../agent/prompts';
import {
  closeScreenMarker,
  hideScreenWaterFlow,
  hideWidgetWindow,
  showScreenWaterFlow,
  showWidgetWindow,
} from '../window/ScreenMarker';
import { hideMainWindow, showMainWindow } from '../window';
import { SearchEngine } from '@ui-tars/operator-browser';

export const getModelVersion = (
  provider: VLMProviderV2 | undefined,
): UITarsModelVersion => {
  switch (provider) {
    case VLMProviderV2.ui_tars_1_5:
      return UITarsModelVersion.V1_5;
    case VLMProviderV2.ui_tars_1_0:
      return UITarsModelVersion.V1_0;
    case VLMProviderV2.doubao_1_5:
      return UITarsModelVersion.DOUBAO_1_5_15B;
    case VLMProviderV2.doubao_1_5_vl:
      return UITarsModelVersion.DOUBAO_1_5_20B;
    case VLMProviderV2.venice_ai:
    case VLMProviderV2.venice_ai_vision:
      return UITarsModelVersion.V1_5;
    default:
      return UITarsModelVersion.V1_0;
  }
};

export const getSystemPromptByModelVersion = (
  modelVersion: UITarsModelVersion,
  language: 'zh' | 'en',
  operatorType?: Operator,
  provider?: VLMProviderV2,
) => {
  // Venice.ai specific prompts
  if (
    provider === VLMProviderV2.venice_ai ||
    provider === VLMProviderV2.venice_ai_vision
  ) {
    return getSystemPromptVenice(language, 'normal');
  }

  // Convert Operator enum to string type for Doubao prompt
  const operatorTypeString: 'browser' | 'computer' =
    operatorType === Operator.LocalBrowser ||
    operatorType === Operator.RemoteBrowser
      ? 'browser'
      : 'computer';

  switch (modelVersion) {
    case UITarsModelVersion.DOUBAO_1_5_20B:
      return getSystemPromptDoubao_15_20B(language, operatorTypeString);
    case UITarsModelVersion.DOUBAO_1_5_15B:
      return getSystemPromptDoubao_15_15B(language);
    case UITarsModelVersion.V1_5:
      return getSystemPromptV1_5(language, 'normal');
    default:
      return getSystemPrompt(language);
  }
};

export const getLocalBrowserSearchEngine = (
  engine?: SearchEngineForSettings,
) => {
  return (engine || SearchEngineForSettings.GOOGLE) as unknown as SearchEngine;
};

export const beforeAgentRun = async (operator: Operator) => {
  switch (operator) {
    case Operator.RemoteComputer:
      break;
    case Operator.RemoteBrowser:
      break;
    case Operator.LocalComputer:
      showWidgetWindow();
      showScreenWaterFlow();
      hideMainWindow();
      break;
    case Operator.LocalBrowser:
      hideMainWindow();
      showWidgetWindow();
      break;
    default:
      break;
  }
};

export const afterAgentRun = (operator: Operator) => {
  switch (operator) {
    case Operator.RemoteComputer:
      break;
    case Operator.RemoteBrowser:
      break;
    case Operator.LocalComputer:
      hideWidgetWindow();
      hideScreenWaterFlow();
      closeScreenMarker();
      showMainWindow();
      break;
    case Operator.LocalBrowser:
      hideWidgetWindow();
      showMainWindow();
      break;
    default:
      break;
  }
};
