import Checkbox from "@mui/material/Checkbox";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";

const Form = () => {
  const [text, setText] = useState<string | null>("");
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const InputRef = useRef<HTMLInputElement | null>(null);

  const handleSelect = (e: SelectChangeEvent<HTMLDivElement>) => {
    (InputRef.current as HTMLInputElement).style.background = (
      e.target as HTMLInputElement
    ).value;
  };
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    (titleRef.current as HTMLSpanElement).style.color = (
      e.target as HTMLInputElement
    ).value;
  };
  const handleClick = () => {
    return setText((InputRef.current as HTMLInputElement).value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "3px black solid",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" ref={titleRef}>
        {text}
      </Typography>
      <TextField
        inputRef={InputRef}
        placeholder="enter text for title"
      ></TextField>
      <FormControl>
        <FormLabel>choose color for the text</FormLabel>
        <RadioGroup
          defaultValue="white"
          onChange={handleRadioChange}
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="red"
            sx={{ borderBlock: "45px" }}
            control={<Radio />}
            label="red"
          />
          <FormControlLabel value="blue" control={<Radio />} label="blue" />
        </RadioGroup>
      </FormControl>
      <InputLabel>select background color</InputLabel>
      <Select onChange={handleSelect} value={""}>
        <MenuItem value={"red"}>red</MenuItem>
        <MenuItem value={"blue"}>blue</MenuItem>
      </Select>
      <Checkbox />
      <Button onClick={handleClick}>Click To Add Title</Button>
    </Box>
  );
};
export default Form;
