import { Sheet, FormControl, Checkbox, FormLabel } from "@mui/joy";

const InputGroup = ({ children, onChange, checked, name, disabled, label }) => {
  return (
    <Sheet sx={{ my: 3 }}>
      <FormControl orientation="horizontal" sx={{ gap: 1, my: 1 }}>
        <Checkbox
          onChange={onChange}
          checked={checked}
          name={name}
          disabled={disabled}
        />
        <FormLabel sx={{ opacity: `${!checked ? 0.5 : 1}` }}>{label}</FormLabel>
      </FormControl>
      <FormControl>{children}</FormControl>
    </Sheet>
  );
};

export default InputGroup;
