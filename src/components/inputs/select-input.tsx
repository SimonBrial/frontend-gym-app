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
import { SelectGroup, SelectLabel, SelectSeparator } from "../ui/select";

interface SelectInputProps extends InputProps {
  options: string[];
  inputContainerClasses?: string;
  selectLabel: string;
  textDefault: string;
  optionsContainerClasses?: string;
  itemContainerClasses?: string;
}
export default function SelectInput({
  optionsContainerClasses,
  inputContainerClasses,
  itemContainerClasses,
  classNameContainer,
  description,
  selectLabel,
  textDefault,
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
              defaultValue={textDefault}
              {...props}
            >
              <FormControl>
                <SelectTrigger className={inputContainerClasses}>
                  <SelectValue placeholder={textDefault} />
                </SelectTrigger>
              </FormControl>
              <SelectContent className={optionsContainerClasses}>
                <SelectGroup>
                  <SelectLabel className="text-[10px] text-principal">
                    {selectLabel}
                  </SelectLabel>
                  <SelectSeparator className="mx-2 bg-slate-600" />
                  {options.map((option, idx) => (
                    <SelectItem
                      className={itemContainerClasses}
                      value={option}
                      key={idx}
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectGroup>
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
