import { InputProps } from "@/interface/interfaces";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function TextInput({
  classNameContainer,
  description,
  inputType,
  inputName,
  control,
  ...props
}: InputProps) {
  return (
    <div className={classNameContainer}>
      <Label htmlFor={props.label}>{props.label}</Label>
      <FormField
        control={control}
        name={inputName}
        render={({ field }) => (
          <FormItem>
            <FormLabel />
            <FormControl>
              <Input
                placeholder={props.label}
                type={inputType}
                {...props}
                {...field}
              />
            </FormControl>
            <FormDescription>{description}</FormDescription>
            {/* <FormMessage></FormMessage> */}
          </FormItem>
        )}
      />
    </div>
  );
}
