import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';

const NavList = () => {

    const navList = [
        { id: 1, name: "Notes", icon: <LightbulbOutlinedIcon />, route: "/" },
        { id: 2, name: "Archive", icon: <ArchiveOutlinedIcon />, route: "/archive" },
        { id: 3, name: "Trash", icon: <DeleteOutlinedIcon />, route: "/trash" },
    ]
    return (
        <List>
            {navList.map((list) => (
                <ListItem button key={list.id}>
                    <Link to={list.route} style={{ display: 'flex', textDecoration: 'none', color: 'inherit' }}>
                        <ListItemIcon style={{ alignItems: 'center' }}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                    </Link>
                </ListItem>
            ))}
        </List>
    )
}

export default NavList