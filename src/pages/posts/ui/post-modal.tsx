'use client';

import { useRef } from 'react';

import styles from './post-modal.module.css';

import { useClickOutside } from '@/hooks/use-click-outside';

import { Button } from '@/components/ui/button/button';

import { usePostModals } from '@/store/post-modal';

const PostModal = () => {
  const { modal, open, setModal } = usePostModals();
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, () => setModal(null));
  return (
    <div ref={modalRef}>
      {modal === 'createPost' && open && (
        <div className={styles.block}>
          createPost
          <Button onClick={() => setModal(null)}>X</Button>
        </div>
      )}
      {modal === 'editPost' && open && (
        <div className={styles.block}>
          EditPost
          <Button onClick={() => setModal(null)}>X</Button>
        </div>
      )}
      {modal === 'deletePost' && open && (
        <div className={styles.block}>
          deletePost
          <Button onClick={() => setModal(null)}>X</Button>
        </div>
      )}
    </div>
  );
};

export default PostModal;
