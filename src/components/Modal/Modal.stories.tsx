import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';
const [tempState, setTempState] = useState<boolean>(false);

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

export const ModalBox: ComponentStory<typeof Modal> = () => (
  <Modal modalState={tempState} modalStateControl={setTempState}>
    <div>안뇽</div>
  </Modal>
);
