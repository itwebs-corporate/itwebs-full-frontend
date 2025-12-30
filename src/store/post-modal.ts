import { create } from 'zustand';

export enum PostModalVariants {
  createPost = 'createPost',
  deletePost = 'deletePost',
  editPost = 'editPost',
}

export type PostModalVariant = PostModalVariants | null;

type State = {
  modal: PostModalVariant;
  open: boolean;
  setModal: (modal: PostModalVariant) => void;
  setOpen: (open: boolean) => void;
  toggle: () => void;
};

export const usePostModals = create<State>()((set) => ({
  modal: null,
  open: false,
  setModal: (modal) => set({ modal }),
  setOpen: (open) => set({ open }),
  toggle: () => set((state) => ({ open: !state.open })),
}));
