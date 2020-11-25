import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="2 2 16 16" className={classes.svg}>
      <path d="M2.85355 2.14646C2.65829 1.9512 2.34171 1.9512 2.14645 2.14646C1.95118 2.34172 1.95118 2.65831 2.14645 2.85357L3.38819 4.09531C2.58287 4.35378 2 5.10882 2 6V13C2 14.1046 2.89543 15 4 15H9V14H4C3.44772 14 3 13.5523 3 13V6C3 5.44772 3.44772 5 4 5H4.29288L10 10.7071V17.5C10 17.7183 10.1415 17.9113 10.3497 17.9769C10.5578 18.0425 10.7845 17.9655 10.9096 17.7867L12.4813 15.5415L15.2622 15.9693L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1465L2.85355 2.14646ZM14.0665 14.7736L12.326 14.5058C12.1379 14.4769 11.9496 14.5573 11.8404 14.7133L11 15.9138V11.7071L14.0665 14.7736Z" />
      <path d="M16.9052 14.7839C17.5549 14.4536 18 13.7788 18 13V6C18 4.89543 17.1046 4 16 4H6.12134L7.12134 5H16C16.5523 5 17 5.44772 17 6V13C17 13.5135 16.613 13.9365 16.1148 13.9935L16.9052 14.7839Z" />
    </svg>
  ),
  styles: {},
  exportedAs: 'call-control-release',
} as TeamsProcessedSvgIconSpec;