import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const ModalBox: ComponentStory<typeof Modal> = () => {
  const [tempState, setTempState] = useState<boolean>(false);
  return (
    <Modal modalState={true} modalStateControl={setTempState}>
      <div>안뇽</div>
    </Modal>
  );
};
