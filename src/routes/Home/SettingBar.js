import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

export default function Setting (props) {
  const { country, category } = props.setting
  return (
    <List
      style={{
        maxWidth: '300px',
        cursor: 'pointer',
        marginBottom: '10px'
      }}
      subheader="Preference"
      dense
      onClick={props.onClick}
    >
      <ListItem>
        <ListItemText primary="Country" />
        <ListItemText primary={country} />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="Category" />
        <ListItemText primary={category} />
      </ListItem>
      <Divider />
    </List>
  )
}
