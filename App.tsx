import React, { useState } from 'react';
import { TABS, INITIAL_MANUAL_PROMPT } from './constants';
import type { Tab, ApiKey, ManualPrompt } from './types';
import ScriptCreatorTab from './components/ScriptCreatorTab';
import ImagePromptTab from './components/ImagePromptTab';
import VeoPromptTab from './components/VeoPromptTab';
import ManualPromptBuilderTab from './components/ManualPromptBuilderTab';
import ApiKeysTab from './components/ApiKeysTab';
import TabButton from './components/common/TabButton';
import Modal from './components/common/Modal';
import CreditModalContent from './components/CreditModalContent';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Script');
  const [scriptText, setScriptText] = useState<string>('// Start by writing or pasting your script here...\n\nA lone astronaut drifts in the vast emptiness of space, tethered to her silent ship. A strange, shimmering nebula appears in the distance, pulsing with an unnatural light.');
  const [imagePrompt, setImagePrompt] = useState<string[]>([]);
  const [veoPrompt, setVeoPrompt] = useState<object[] | null>(null);
  const [manualPrompt, setManualPrompt] = useState<ManualPrompt>(INITIAL_MANUAL_PROMPT);
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false);

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Script':
        return <ScriptCreatorTab scriptText={scriptText} setScriptText={setScriptText} />;
      case 'Image':
        return <ImagePromptTab scriptText={scriptText} imagePrompt={imagePrompt} setImagePrompt={setImagePrompt} />;
      case 'Veo':
        return <VeoPromptTab scriptText={scriptText} veoPrompt={veoPrompt} setVeoPrompt={setVeoPrompt} />;
      case 'Manual':
        return <ManualPromptBuilderTab manualPrompt={manualPrompt} setManualPrompt={setManualPrompt} />;
      case 'API':
        return <ApiKeysTab apiKeys={apiKeys} setApiKeys={setApiKeys} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans flex flex-col">
      <header className="bg-brand-surface p-4 border-b border-brand-surface-light shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-brand-primary">InspireStudio</h1>
          <nav className="flex items-center space-x-2 bg-brand-surface-light p-1 rounded-lg">
            {TABS.map((tab) => (
              <TabButton
                key={tab}
                label={tab}
                isActive={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        {renderActiveTab()}
      </main>
      <footer className="text-center p-4 text-brand-text-secondary text-sm">
        <p>Built with React, Tailwind CSS, and Gemini API</p>
         <button
          onClick={() => setIsCreditModalOpen(true)}
          className="underline hover:text-brand-primary transition-colors"
        >
          Credit
        </button>
      </footer>
       <Modal
        isOpen={isCreditModalOpen}
        onClose={() => setIsCreditModalOpen(false)}
        title="About the Creator"
      >
        <CreditModalContent />
      </Modal>
    </div>
  );
};

export default App;