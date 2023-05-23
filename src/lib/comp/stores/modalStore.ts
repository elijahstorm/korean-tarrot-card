import { writable, type Writable, type Unsubscriber } from 'svelte/store';

// Define the type for the modal store value
type ModalState = boolean;

// Create a writable store for the modal state
export const modalStore: Writable<ModalState> = writable(false);

// Function to update the modal state
export const setModalState = (value: ModalState): void => {
  modalStore.set(value);
};

// Function to subscribe to changes in the modal state
export const onStateChange = (callback: (value: ModalState) => void): Unsubscriber => {
  return modalStore.subscribe(callback);
};
