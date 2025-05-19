import { InputProps } from "@/interface/interfaces";
import {
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
  Select,
  Label,
} from "../ui";

interface SelectInputProps extends InputProps {
  options: string[];
  inputContainerClasses?: string;
  optionsContainerClasses?: string;
  itemContainerClasses?: string;
}
export default function SelectInput({
  optionsContainerClasses,
  inputContainerClasses,
  itemContainerClasses,
  classNameContainer,
  options,
  ...props
}: SelectInputProps) {
  return (
    <div className={classNameContainer}>
      <Label htmlFor={props.label}>{props.label}</Label>
      <Select>
        <SelectTrigger className={inputContainerClasses}>
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent className={optionsContainerClasses}>
          {options.map((option, idx) => (
            <SelectItem
              className={itemContainerClasses}
              value={option}
              key={idx}
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
