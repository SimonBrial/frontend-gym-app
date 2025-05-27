import { InputProps } from "@/interface/interfaces";
import {
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
  Select,
  Label,
} from "../ui";
import {
  FormDescription,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
} from "../ui/form";

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
  description,
  inputName,
  options,
  control,
  ...props
}: SelectInputProps) {
  return (
    <div className={classNameContainer}>
      <Label htmlFor={props.label}>{props.label}</Label>
      <FormField
        control={control}
        name={inputName}
        render={({ field }) => (
          <FormItem>
            <FormLabel />
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              {...props}
            >
              <FormControl>
                <SelectTrigger className={inputContainerClasses}>
                  <SelectValue placeholder={props.placeholder} />
                </SelectTrigger>
              </FormControl>
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
            <FormDescription>{description}</FormDescription>
            {/* <FormMessage></FormMessage> */}
          </FormItem>
        )}
      />
    </div>
  );
}
