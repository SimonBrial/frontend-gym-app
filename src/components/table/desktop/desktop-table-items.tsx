import { TableCell, TableRow } from "@/components/ui/table";
import { capitalizeFirstLetter } from "@/utils/capitalize-first-letter";
import { UserBody } from "@/interface/interfaces";
import { DotsThree } from "@phosphor-icons/react/dist/ssr";
import BtnActions from "../../buttons/btn-actions";
import { format } from "date-fns";

export default function DesktopTableItems({
  dataArr,
}: {
  dataArr: UserBody[];
}) {
  return dataArr.map((inv: UserBody) => {
    const {
      ultimaActualizacion,
      apellidoTrainer,
      dniCode,
      nombreTrainer,
      sexo,
      fechaRegistro,
      diasEnMora,
      ultimoPago,
      apellido,
      cedula,
      nombre,
      edad,
      peso,
      _id,
    } = inv;

    {
      /* format(fechaRegistro, "MM/dd/yyyy") */
    }
    return (
      <TableRow key={_id}>
        <TableCell>{_id}</TableCell>
        <TableCell className="font-medium">
          {capitalizeFirstLetter(nombre)}
        </TableCell>
        <TableCell className="font-medium">
          {capitalizeFirstLetter(apellido)}
        </TableCell>
        <TableCell>{`${dniCode}${cedula}`}</TableCell>
        <TableCell>{edad}</TableCell>
        <TableCell>{peso}</TableCell>
        <TableCell>{sexo}</TableCell>
        <TableCell className="">
          {format(fechaRegistro, "MM/dd/yyyy")}
        </TableCell>
        <TableCell className="">
          {format(ultimaActualizacion, "MM/dd/yyyy")}
        </TableCell>
        <TableCell>{`${diasEnMora} días`}</TableCell>
        <TableCell>
          {capitalizeFirstLetter(`${nombreTrainer} ${apellidoTrainer}`)}
        </TableCell>
        <TableCell className="">{format(ultimoPago, "MM/dd/yyyy")}</TableCell>
        <TableCell className="flex gap-2.5">
          <BtnActions
            iconTrigger={<DotsThree size={32} />}
            id={_id}
            titleDescription="¿Eliminar cliente?"
          />
        </TableCell>
      </TableRow>
    );
  });
}

{
  /* ------------------------------------------------------- 
          <DropdownMenu /* open={menuOpen} onOpenChange={setMenuOpen} >
            {/* -------------------------------------------------------
            <DropdownMenuTrigger
              asChild
              className="hover:cursor-pointer hover:border-2 hover:border-slate-700 rounded-md hover:text-lg"
            >
              <DotsThreeVertical size={32} />
            </DropdownMenuTrigger>
            {/* ------------------------------------------------------- 
            <DropdownMenuContent className="bg-neutralBlack border border-slate-600">
              <DropdownMenuGroup className="hover:cursor-pointer hover:bg-principal/20 px-2 py-1 rounded-md text-principal">
                <Link
                  href={`/h//users/user/${_id}`}
                  className="flex gap-2 items-center"
                >
                  <Note />
                  <span>Ver</span>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuGroup className="hover:cursor-pointer hover:bg-orange-500/20 px-2 py-1 rounded-md text-orange-500">
                <Link
                  href={`/h/users/user/edit/${_id}`}
                  className="flex gap-2 items-center"
                >
                  <NotePencil />
                  <span>Editar</span>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator className="mx-2 bg-slate-600" />
              {/* <DropdownMenuGroup className="hover:cursor-pointer hover:bg-red-500/20 px-2 py-1 rounded-md text-red-500">
                <Link href={``} className="flex gap-2 items-center">
                  <Trash />
                  <span>Eliminar</span>
                </Link>
              </DropdownMenuGroup> 
              <DropdownMenuGroup onClick={() => setMenuOpen(true)}>
                {/* ------------------------------------------------------- 
                <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
                  {/* ------------------------------------------------------- 
                  <DialogTrigger className="flex gap-2 items-center">
                    <DropdownMenuGroup className="hover:cursor-pointer hover:bg-red-500/20 px-2 py-1 rounded-md text-red-500">
                      <Link href={``} className="flex gap-2 items-center">
                        <Trash />
                        <span>Eliminar</span>
                      </Link>
                    </DropdownMenuGroup>
                  </DialogTrigger>
                  {/* -------------------------------------------------------
                  <DialogContent className="bg-slate-900 border border-slate-700 w-[85%] rounded-md">
                    <DialogHeader className="flex flex-col text-white justify-center items-center">
                      <span>
                        <Trash size={40} weight="fill" />
                      </span>
                      <DialogTitle asChild>
                        <TypographyText
                          description="¿Eliminar cliente?"
                          fontjura={false}
                          type="h2"
                        />
                      </DialogTitle>
                      <DialogDescription className="text-white" asChild>
                        <TypographyText
                          description="Esta acción no se puede deshacer"
                          fontjura={false}
                          type="p"
                        />
                      </DialogDescription>
                    </DialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel
                        onClick={() => {
                          setMenuOpen(false);
                          console.log("second");
                        }}
                      >
                        <Button
                          onClick={() => setMenuOpen(false)}
                          variant="secondary"
                          className="bg-slate-800 w-full"
                        >
                          Cancelar
                        </Button>
                      </AlertDialogCancel>
                      <AlertDialogAction onClick={() => console.log("first")}>
                        <Button
                          variant="destructive"
                          className="bg-red-500 active:bg-red-600 hover:bg-red-600"
                        >
                          Eliminar
                        </Button>
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </DialogContent>
                  {/* ------------------------------------------------------- 
                </Dialog>
                {/* ------------------------------------------------------- 
              </DropdownMenuGroup>
              {/* ------------------------------------------------------- 
            </DropdownMenuContent>
            {/* ------------------------------------------------------- 
          </DropdownMenu>
          {/* ------------------------------------------------------- */
}

{
  /* <ToolTipLayout label="ver">
  <Link href={`/h//users/user/${_id}`}>
    <Button variant="userAction">
      <Note />
    </Button>
  </Link>
</ToolTipLayout> */
}
{
  /* <ToolTipLayout label="editar">
  <Link href={`/h/users/user/edit/${_id}`}>
    <Button variant="userAction">
      <NotePencil />
    </Button>
  </Link>
</ToolTipLayout> */
}
{
  /* <AlertDialog>
  <ToolTipLayout label="eliminar">
    <AlertDialogTrigger asChild>
      <Button variant="userAction">
        <Trash />
      </Button>
    </AlertDialogTrigger>
  </ToolTipLayout>
  <AlertDialogContent className="bg-slate-900 border border-slate-700 w-[85%] rounded-md">
    <AlertDialogHeader className="flex flex-col text-white justify-center items-center">
      <span>
        <Trash size={40} weight="fill" />
      </span>
      <AlertDialogTitle asChild>
        <TypographyText
          description="¿Eliminar cliente?"
          fontjura={false}
          type="h2"
        />
      </AlertDialogTitle>
      <AlertDialogDescription className="text-white" asChild>
        <TypographyText
          description="Esta acción no se puede deshacer"
          fontjura={false}
          type="p"
        />
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel asChild>
        <Button variant="secondary" className="bg-slate-800">
          Cancelar
        </Button>
      </AlertDialogCancel>
      <AlertDialogAction asChild>
        <Button
          variant="destructive"
          className="bg-red-500 active:bg-red-600 hover:bg-red-600"
        >
          Eliminar
        </Button>
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog> */
}
