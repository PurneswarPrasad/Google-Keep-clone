import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const NavList = () => {

    const navList = [
        { id: 1, name: "Notes", icon: <LightbulbOutlinedIcon /> },
        { id: 2, name: "Archive", icon: <ArchiveOutlinedIcon /> },
        { id: 3, name: "Trash", icon: <DeleteOutlinedIcon /> },
    ]
    return (
        <List>
            {navList.map((list) => (
                <ListItem button key={list.id}>
                    <ListItemIcon>
                        {list.icon}
                    </ListItemIcon>
                    <ListItemText primary={list.name} />
                </ListItem>
            ))}
        </List>
    )
}

export default NavList