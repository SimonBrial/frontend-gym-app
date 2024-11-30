import Typography from "./Typography";

function Logo() {
  return (
    <div className="flex items-center justify-center pt-3 pb-1 gap-1 w-full">
      <Typography type="h3" description={"SMART"} fontjura color="text-white" />
      <Typography
        type="h3"
        description={"GYM"}
        fontjura
        color="text-principal"
      />
      <Typography type="h3" description={"ADMIN"} fontjura color="text-white" />
    </div>
  );
}

export default Logo;
