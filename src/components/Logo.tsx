import { Typography } from "./Typography";


function Logo() {
  return (
    <div className="flex gap-1">
      <Typography type="h3" description={"SMART"} fontjura color="text-white" />
      <Typography type="h3" description={"GYM"} fontjura color="text-principal" />
      <Typography type="h3" description={"ADMIN"} fontjura color="text-white" />
    </div>
  );
}

export default Logo;
