import { TFabricPlatformPageProps } from '../../../interfaces/Platforms';
import { ContextualMenuPageProps as ExternalProps } from '@fluentui/react-examples/lib/office-ui-fabric-react/ContextualMenu/ContextualMenu.doc';

// const componentUrl =
//   'https://github.com/microsoft/fluentui/tree/7.0/apps/fabric-website/src/pages/Controls/ContextualMenuPage';
const related = require('!raw-loader!@uifabric/fabric-website/src/pages/Controls/ContextualMenuPage/docs/ContextualMenuRelated.md') as string;

export const ContextualMenuPageProps: TFabricPlatformPageProps = {
  web: {
    ...(ExternalProps as any),
    related,
  },
};