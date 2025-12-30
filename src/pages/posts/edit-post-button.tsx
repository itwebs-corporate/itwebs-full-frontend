'use client';
import { PostModalVariants, usePostModals } from '@/store/post-modal';

const EditPostButton = () => {
  const { setOpen, setModal } = usePostModals();
  const handleOpenEditModal = () => {
    setModal(PostModalVariants.editPost);
    setOpen(true);
  };
  return (
    <button onClick={handleOpenEditModal} type="button">
      Edit This Post
    </button>
  );
};

export default EditPostButton;
