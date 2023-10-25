import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const DayNightModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          borderRadius: '10px',
          top: '60%',
          left: '45%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          height: 300,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        {children}
        <Button onClick={onClose}>Close</Button>
      </Box>
    </Modal>
  );
};

export default DayNightModal;
