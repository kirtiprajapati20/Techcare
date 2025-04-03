import React, { useState } from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';

const ListComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const listItems = [
    { id: 1, label: 'Blood Tests' },
    { id: 2, label: 'CT Scans' },
    { id: 3, label: 'Radiology Reports' },
    { id: 4, label: 'X-Ray' },
    { id: 5, label: 'Urine Test' },
  ];

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <List component="nav" aria-label="secondary mailbox folder">
      {listItems.map((item) => (
        <ListItemButton
          key={item.id}
          selected={selectedIndex === item.id}
          onClick={(event) => handleListItemClick(event, item.id)}
        >
          <ListItemText primary={item.label} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default ListComponent;
