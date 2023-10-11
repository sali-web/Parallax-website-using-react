import React from 'react';
// import { Icon as FeatherIcon } from 'react-feather';
import { Icon as IconifyIcon } from '@iconify/react';
// import '@iconify/icons-ic'; 
const Icon = ({ type, name }) => {
  // if (type === 'feather') {
  //   return <FeatherIcon name={name} />;
  // } else if (type === 'iconify') {
    return <IconifyIcon icon={name} />;
  // }

  // return null;
};

export default Icon;
