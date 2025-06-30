// --- COMPONENT CON ĐỂ HIỂN THỊ CÂU TRẢ LỜI CỦA MODEL ---

import { useLLMOutput } from "@llm-ui/react";
import MarkdownComponent from "./MarkdownComponent";
import { markdownLookBack } from "@llm-ui/markdown";
import {
  codeBlockLookBack,
  findCompleteCodeBlock,
  findPartialCodeBlock,
} from "@llm-ui/code";
import CodeBlock from "./CodeBlock";

// Mỗi câu trả lời của model sẽ được xử lý độc lập bởi llm-ui
export const ModelMessage = ({ content }: { content: string }) => {
  const { blockMatches } = useLLMOutput({
    llmOutput: content,
    isStreamFinished: true, // Vì ta chỉ render khi đã có đủ content
    fallbackBlock: {
      component: MarkdownComponent,
      lookBack: markdownLookBack(),
    },
    blocks: [
      {
        component: CodeBlock,
        findCompleteMatch: findCompleteCodeBlock(),
        findPartialMatch: findPartialCodeBlock(),
        lookBack: codeBlockLookBack(),
      },
    ],
  });

  return (
    <div>
      {blockMatches.map((blockMatch, index) => {
        const Component = blockMatch.block.component;
        return <Component key={index} blockMatch={blockMatch} />;
      })}
    </div>
  );
};
