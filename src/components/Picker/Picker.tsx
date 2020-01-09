import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'

import { templateStyles } from './Picker.styles'
import { Grid } from '../grid/grid'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

export interface PickerFieldProps {
    options: string[]
    value: string
}

export interface PickerDispatchProps {
    onChange: (nextSubreddit: any) => void
}

interface Props extends PickerFieldProps, PickerDispatchProps, WithStyles<typeof templateStyles> { }
interface State { }

class Component extends React.Component<Props, State> {
    render() {
        const { value, onChange, options, classes } = this.props
        return <Grid container spacing={16} className={classes.picker}>
            <Grid item xs={12} ><h1>
                {value}
            </h1></Grid>
            <Grid item xs={12} className={classes.picker__Container}>
                {/* <Select
                    aria-labelledby="ay-label"
                    onInputChange={() => onChange(e.target.in)}
                    placeholder="Select"
                    // value={{ "ReactJS": "ReactJS" }}
                    // onChange={e => onChange(e.target.value)}
                    // name="subject"
                    options={[
                        { value: 'ReactJS', label: 'ReactJS' },
                        { value: 'Frontend', label: 'Frontend' },
                        { value: 'ReduxJS', label: 'ReduxJS' },
                    ]}
                    // options={options.map(option => }
                    className={classes.optionContainer}
                    components={animatedComponents}
                    classNamePrefix="select"
                // menuIsOpen={true}
                /> */}
                <select onChange={e => onChange(e.target.value)} value={value}>
                    {options.map(option => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </Grid>
            {/* <FormControl variant="outlined"
            // className={classes.formControl}
            >
                <InputLabel
                    // ref={inputLabel}
                    id="demo-simple-select-outlined-label">
                    Age
        </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={value}
                    onChange={e => onChange(e.target.value)}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>ReactJS</MenuItem>
                    <MenuItem value={20}>Frontend</MenuItem>
                    <MenuItem value={30}>ReduxJs</MenuItem>
                </Select>
            </FormControl> */}
        </Grid>
    }
}

export const Picker = withStyles(templateStyles)(Component)