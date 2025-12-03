export enum ModelType {
  FLASH_2_0 = 'gemini-2.0-flash',
  FLASH_1_5 = 'gemini-1.5-flash'
}

export enum AnalysisMode {
  MAP_EXTRACTION = 'Map & Survey Extraction',
  GENERAL = 'General Analysis',
  SUMMARIZE = 'Summarization',
  SENTIMENT = 'Sentiment Analysis',
  PROOFREAD = 'Proofreading & Grammar',
  FACT_CHECK = 'Fact Extraction',
  LOGIC_CHECK = 'Logical Consistency Check',
  CUSTOM = 'Custom Query'
}

export interface AnalysisConfig {
  model: ModelType;
  mode: AnalysisMode;
  customPrompt?: string;
  targetColumns?: string; // Comma-separated list of desired output columns
  extractionInstructions?: string; // Specific user formatting rules
  images?: {
    data: string;
    mimeType: string;
  }[];
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}