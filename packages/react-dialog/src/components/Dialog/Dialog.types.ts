import type { ComponentProps, ComponentState, IntrinsicSlotProps } from '@fluentui/react-utilities';

export type DialogSlots = {
  root: IntrinsicSlotProps<'div'>;
};

export type DialogCommons = {
  isOpen: boolean;
  onClose?: Function;
  onOpen?: Function;
  shouldAutoFocus?: boolean;
};

/**
 * Dialog Props
 */
export type DialogProps = ComponentProps<DialogSlots> & DialogCommons;

/**
 * State used in rendering Dialog
 */
export type DialogState = ComponentState<DialogSlots> & DialogCommons;
