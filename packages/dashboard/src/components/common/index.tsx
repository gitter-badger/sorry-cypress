import React from 'react';
import { Paper as UIPaper, useStyles, Tag } from 'bold-ui';

export const Paper: React.FC = props => {
  const { css } = useStyles();
  return (
    <UIPaper
      style={css`
         {
          margin: 12px 0;
          padding: 12px;
        }
      `}
      {...props}
    />
  );
};

type TestStates = 'failed' | 'passed' | 'pending' | 'skipped';

export const TestState: React.FC<{ state: TestStates }> = ({ state }) => {
  switch (state) {
    case 'failed':
      return <Tag type="danger">Failed</Tag>;
    case 'passed':
      return <Tag type="success">Passed</Tag>;
    case 'pending':
      return <Tag type="normal">Pending</Tag>;
    case 'skipped':
      return <Tag type="alert">Skipped</Tag>;
    default:
      return <Tag type="normal">Unknown</Tag>;
  }
};
