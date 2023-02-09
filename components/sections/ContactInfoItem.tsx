import React, {useState} from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { IconButton } from '@mui/material';
import AlertSnack from '../ui/AlertSnack';

type Props = {
  icon: JSX.Element;
  href: string;
  target: string;
  label: string;
  copyValue: string;
  message: string;
};

const ContactInfoItem = ({ icon, href, target, label, copyValue, message }: Props) => {
  const [copied, setCopied] = useState(false);

  const copyHandler = async (value: string) => {
    if (!navigator.clipboard) return;

    await navigator.clipboard.writeText(value);
    setCopied(true);

    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <>
    <div className='flex items-center gap-2'>
      {icon}
      <a className='text-primary' href={href} target={target}>{label}</a>
      <IconButton 
        size='small' 
        aria-label="Copy value button"
        onClick={() => copyHandler(copyValue)}
        disabled={copied}
      >
        {copied ? <DoneAllIcon className='scale-[.8] opacity-80' fontSize='small' /> : <ContentCopyIcon className='scale-[.8] opacity-80' fontSize='small' />}
      </IconButton>
    </div>
    <AlertSnack
        open={copied}
        onClose={() => setCopied(false)}
        message={message}
        severity="success"
      />
    </>
  );
};

export default ContactInfoItem;