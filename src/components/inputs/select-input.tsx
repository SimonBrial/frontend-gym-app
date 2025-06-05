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
  FormControl,
  FormField,
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
  selectLabel,
  textDefault,
  inputName,
  options,
  control,
  ...props
}: SelectInputProps) {
  console.log("textDefault --> ", textDefault);
  return (
    <div className={classNameContainer}>
      <Label htmlFor={props.label}>{props.label}</Label>
      <FormField
        control={control}
        name={inputName}
        render={({ field }) => (
          <FormItem>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value !== "" ? field.value : textDefault}
              value={field.value !== "" ? field.value : undefined}
            >
              <FormControl className="bg-red-500">
                <SelectTrigger className={inputContainerClasses}>
                  <SelectValue placeholder={textDefault} className="ml-2"/>
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
            {/* <FormMessage /> */}
          </FormItem>
        )}
      />
    </div>
  );
}

{
  /*
  <FormItem>
            <Select onValueChange={field.onChange} defaultValue={field.value} {...props}>
              <FormControl>
                <SelectTrigger className={inputContainerClasses}>
                  <SelectValue
                    placeholder={textDefault}
                    // className="text-black"
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent className={optionsContainerClasses}>
                <SelectItem value="m@example.com">m@example.com</SelectItem>
                <SelectItem value="m@google.com">m@google.com</SelectItem>
                <SelectItem value="m@support.com">m@support.com</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
  */
}

{
  /* <FormItem>
  <FormLabel />
  <Select
    onValueChange={field.onChange}
    defaultValue={textDefault}
    {...field}
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
  {/* <FormMessage></FormMessage> 
</FormItem> */
}
