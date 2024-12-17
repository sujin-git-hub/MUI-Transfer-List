import { useDispatch, useSelector } from "react-redux";

import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function not(a, b) {
    a = a.map(obj => obj?.FootnoteId || obj);
    b = b.map(obj => obj?.FootnoteId || obj);
    return a.filter((value) => !b.includes(value));
}

function intersection(a, b) {
    a = a.map(obj => obj?.FootnoteId || obj);
    b = b.map(obj => obj?.FootnoteId || obj);
    return a.filter((value) => b.includes(value));
}

export default function Footnote() {

    const AvailableFootNotes = useSelector((state) => state.footNote);
    const AssignFootNotes = useSelector((state) => state.assignFootNote);
    debugger;
    const dispatch = useDispatch()
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([...AvailableFootNotes.map(obj => obj?.FootnoteId || obj)]);
    const [right, setRight] = React.useState([...AssignFootNotes.map(obj => obj?.FootnoteId || obj)]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value.FootnoteId);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value.FootnoteId);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };

    const customList = (items) => (
        <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    let val = [...AvailableFootNotes,...AssignFootNotes].find(i => i.FootnoteId == value);
                    const labelId = `transfer-list-item-${val.FootnoteId}-label`;

                    return (
                        <ListItemButton
                            key={val.FootnoteId}
                            role="listitem"
                            onClick={handleToggle(val)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.includes(val.FootnoteId)}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`${val.FootNote}`} />
                        </ListItemButton>
                    );
                })}
            </List>
        </Paper>
    );

    return (
        <Grid
            container
            spacing={2}
            sx={{ justifyContent: 'center', alignItems: 'center' }}
        >
            <Grid item>{customList(left)}</Grid>
            <Grid item>
                <Grid container direction="column" sx={{ alignItems: 'center' }}>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleAllRight}
                        disabled={left.length === 0}
                        aria-label="move all right"
                    >
                        ≫
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                    <Button
                        sx={{ my: 0.5 }}
                        variant="outlined"
                        size="small"
                        onClick={handleAllLeft}
                        disabled={right.length === 0}
                        aria-label="move all left"
                    >
                        ≪
                    </Button>
                </Grid>
            </Grid>
            <Grid item>{customList(right)}</Grid>
        </Grid>
    );
}
