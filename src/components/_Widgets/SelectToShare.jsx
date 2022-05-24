import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';



import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function SelectToShare({video}) {

    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connectionsReducer);
    const [personName, setPersonName] = React.useState([]);
    const [selectedIDs, setSelectedIDs] = React.useState([]);
    const [selectedVideoIDs, setSelectedVideoIDs] = React.useState(0);
    const shareObj = {
        user_id : selectedIDs,
        video_id: selectedVideoIDs
    };


    const handleConnectionObj = (id) => {
        console.log("in handleConnectionObj", id);
        const updatedSelectedIDs = [];
        //if user already in array, then remove (splice, filter etc)
        selectedIDs.indexOf(id)

        setSelectedIDs([...selectedIDs, id])
        setSelectedVideoIDs(video.id)
        // dispatch({type: 'SHARE_VIDEO', payload: shareObj})
    }


    console.log("in shareObj", shareObj);

    const handleSelectedName = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        // setSelectedIDs(
        //     // FIXME how to grab "user_b" ID of connection? 
        // );
    };

    // console.log('selected people are:', personName);

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel
                    id="demo-multiple-checkbox-label">
                    Choose from your connections
                </InputLabel>

                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleSelectedName}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {/* FIXME make checkboxes stay checked... 
                    and what should go in params of personName.indexOf()??? can't figure out its effect */}
                    {connections.map((connection) => (
                        <MenuItem
                            key={connection.id}
                            value={connection.first_name + " " + connection.last_name}>

                            <Checkbox
                                onChange={() => handleConnectionObj(connection.id)}
                                checked={selectedIDs.indexOf(connection.id) > -1} />

                            <ListItemText
                                primary={connection.first_name + " " + connection.last_name}
                                secondary={connection.relationship} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}