import { Code } from '@mantine/core';
import { MANTINE_LINK } from '~/app/config';
import { CodeBlock } from '~/components/CodeBlock';
import { ExternalLink } from '~/components/ExternalLink';
import { PageNavigation } from '~/components/PageNavigation';
import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { readCodeFile } from '~/lib/code';
import { allPromiseProps, getRouteMetadata } from '~/lib/utils';
import { BasicConfigurationExample } from './BasicConfigurationExample';

const PATH = '/examples/basic-configuration';

export const metadata = getRouteMetadata(PATH);

export default async function BasicConfigurationExamplePage() {
  const code = await allPromiseProps({
    'ProviderPropsExample.tsx': readCodeFile<string>(`${PATH}/ProviderPropsExample.tsx`),
    'BasicConfigurationExample.tsx': readCodeFile<string>(`${PATH}/BasicConfigurationExample.tsx`),
  });

  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        The <Code>ContextMenuProvider</Code> component accepts the following props that are used as default values for
        the context menu container:
      </Txt>
      <ul>
        <li>
          <Code>zIndex: number</Code> → defaults to <Code>9999</Code>
        </li>
        <li>
          <Code>shadow: MantineShadow</Code> value (see{' '}
          <ExternalLink to={`${MANTINE_LINK}/core/paper/`}>Mantine Paper</ExternalLink> docs) → defaults to{' '}
          <Code>sm</Code>
        </li>
        <li>
          <Code>borderRadius: MantineSize</Code> value (see{' '}
          <ExternalLink to={`${MANTINE_LINK}/core/paper/`}>Mantine Paper</ExternalLink> docs) → defaults to{' '}
          <Code>xs</Code>
        </li>
      </ul>
      <CodeBlock code={code['ProviderPropsExample.tsx']} />
      <Txt>
        You can override these values by passing an object with the same keys as the second argument to the{' '}
        <Code>showContextMenu</Code> function returned by the <Code>useContextMenu</Code> hook:
      </Txt>
      <CodeBlock code={code['BasicConfigurationExample.tsx']} />
      <Txt>Right-click on the image to trigger the context menu:</Txt>
      <BasicConfigurationExample />
      <PageNavigation of={PATH} />
    </>
  );
}
