import React, { FC, ReactNode } from 'react';
import CodeBlock, { Props } from '@theme/CodeBlock';

// import CardSource from '!!raw-loader!./components/Card';

interface DocDemoComponentProps {
  title?: ReactNode;
  children: ReactNode;
  open?: boolean;
  language?: Props['language'];
}

export const DocDemoComponent: FC<DocDemoComponentProps> = (props) => {
  const { children, title, language = 'jsx' } = props;

  return (
    <details style={{ marginTop: 64 }}>
      <summary>{title}</summary>

      <p>
        <CodeBlock language={language}>{children}</CodeBlock>
      </p>
    </details>
  );
};
