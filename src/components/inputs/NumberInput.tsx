import { InputProps } from "@/interface/interfaces";
import { Input, Label } from "../ui";
export default function NumberInput({
  classNameContainer,
  ...props
}: InputProps) {
  return (
    <div className={classNameContainer}>
      <Label htmlFor={props.label}>{props.label}</Label>
      <Input {...props} type="number" placeholder={props.label} />
    </div>
  );
}
