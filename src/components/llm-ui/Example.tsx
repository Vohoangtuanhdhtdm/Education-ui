import {
  codeBlockLookBack,
  findCompleteCodeBlock,
  findPartialCodeBlock,
} from "@llm-ui/code";
import { markdownLookBack } from "@llm-ui/markdown";
import { useLLMOutput, useStreamExample } from "@llm-ui/react";
import MarkdownComponent from "./MarkdownComponent";
import CodeBlock from "./CodeBlock";

// Dữ liệu giả lập từ LLM
const example = `Chào mừng đến với llm-ui!

Đây là một thư viện mạnh mẽ để hiển thị đầu ra từ các mô hình ngôn ngữ.

### Ví dụ về Python
\`\`\`python
def factorial(n):
    # Hàm tính giai thừa của một số nguyên không âm
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

# In giai thừa của 5
print(f"Giai thừa của 5 là: {factorial(5)}")
\`\`\`

### Văn bản xen kẽ
Bạn có thể thấy, văn bản và code được hiển thị một cách liền mạch.

### Ví dụ về JavaScript
\`\`\`javascript
const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}
\`\`\`

Hoàn tất!
`;

const Example = () => {
  const { isStreamFinished, output } = useStreamExample(example); // Số 10 là tốc độ stream

  const { blockMatches } = useLLMOutput({
    llmOutput: output,
    fallbackBlock: {
      component: MarkdownComponent, // from Step 1
      lookBack: markdownLookBack(),
    },
    blocks: [
      {
        component: CodeBlock, // from Step 2
        findCompleteMatch: findCompleteCodeBlock(),
        findPartialMatch: findPartialCodeBlock(),
        lookBack: codeBlockLookBack(),
      },
    ],
    isStreamFinished,
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
export default Example;
