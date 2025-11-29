"use client";

import ClassicTemplate from '@/components/templates/ClassicTemplate';
import ModernTemplate from '@/components/templates/ModernTemplate';
import CreativeTemplate from '@/components/templates/CreativeTemplate';
import { sampleData } from '@/lib/sample-data';

const TemplatePreview = ({ templateId }: { templateId: string }) => {
  const renderTemplate = () => {
    switch (templateId) {
      case 'classic':
        return <ClassicTemplate data={sampleData} id="sample" />;
      case 'modern':
        return <ModernTemplate data={sampleData} id="sample" />;
      case 'creative':
        return <CreativeTemplate data={sampleData} id="sample" />;
      default:
        return <div className="text-center py-20">Template not found</div>;
    }
  };

  return (
    <div>
      {renderTemplate()}
    </div>
  );
};

export default TemplatePreview;
