import { create } from "zustand";
import { users } from "../seeds/table-data";
import { UserBody } from "@/interface/interfaces";

interface ResponseBody<T> {
  status: string;
  message: string;
  data: T[];
  error?: string | null;
}

const objectResponse = {
  status: "idle",
  message: "",
  data: users,
  error: null,
};

interface Actions {
  fnCreateUser: (userToCreate: any) => Promise<void>;
  fnDeleteUser: (userId: number) => Promise<void>;
  fnUpdateUser: (userId: number, userData: any) => Promise<void>;
  fnGetUsers: () => Promise<void>;
  fnGetUserById: (userId: string | number) => Promise<void>;
}

interface States {
  selectedUser: UserBody | null;
  users: UserBody[];
  usersResponse: ResponseBody<UserBody>;
}

export const useUserStore = create<States & Actions>()((set, get) => {
  return {
    // TODO: States
    selectedUser: null,
    users: [],
    usersResponse: objectResponse,

    // TODO: Actions
    fnGetUsers: async () => {
      try {
        const { usersResponse } = get();
        set({
          usersResponse: {
            status: "success",
            message: "Users fetched successfully",
            data: usersResponse.data, // 🛠 Mantiene los registros actuales en lugar de sobrescribirlos
            error: null,
          },
        });
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    fnGetUserById: async (userId) => {
      try {
        const { usersResponse } = get();
        const userFound = usersResponse.data.find(
          (user) => user._id === userId,
        );

        if (!userFound) {
          set({
            selectedUser: null,
            usersResponse: {
              status: "failure",
              message: "User not found",
              data: [],
              error: "El usurio no existe",
            },
          });
          return;
        }

        set({
          selectedUser: userFound,
        });
        console.log("User found and set -->", userFound);

      } catch (error) {
        console.error("Error fetching user by ID:", error);
      }
    },
    fnCreateUser: async (userToCreate: UserBody) => {
      try {
        // console.log("From Store userToCreate --> ", userToCreate);
        const { usersResponse } = get();
        const userFound = usersResponse.data.find(
          (user) => user.cedula === userToCreate.cedula,
        );
        if (userFound) {
          set({
            usersResponse: {
              status: "failure",
              message: "Ya existe un usuario con esa cédula",
              data: usersResponse.data,
              error: "El usurio ya existe",
            },
          });
          return;
        }
        const newUser: UserBody = {
          _id: usersResponse.data.length + 1,
          nombre: userToCreate.nombre,
          apellido: userToCreate.apellido,
          cedula: userToCreate.cedula,
          edad: userToCreate.edad,
          peso: userToCreate.peso,
          nombreTrainer: userToCreate.nombreTrainer,
          apellidoTrainer: userToCreate.apellidoTrainer,
          ultimoPago: new Date(),
          dniCode: userToCreate.dniCode,
          sexo: userToCreate.sexo,
          diasEnMora: 0,
          // plan: userToCreate.plan,
          fechaRegistro: new Date(),
          ultimaActualizacion: new Date(),
        };

        const newUsersArray = [...usersResponse.data, newUser];
        console.log("newUsersArray --> ", newUsersArray);

        set({
          users: newUsersArray,
          usersResponse: {
            status: "success",
            message: "User added successfully",
            data: newUsersArray,
            error: null,
          },
        });

        console.log("User updated:", users);
      } catch (error) {
        console.error("Error adding user:", error);
      }
    },
    fnUpdateUser: async (userId, userData) => {
      try {
        const { usersResponse } = get();

        console.log("from store userId --> ", userId);
        console.log("from store userId --> ", userData);

        if (!userId || !userData) {
          set({
            usersResponse: {
              status: "failure",
              message: "Invalid user ID or data",
              data: [],
              error: "ID o datos del usuario no válidos",
            },
          });
          return;
        }

        const userIndex = usersResponse.data.findIndex(
          (user) => user._id === userId,
        );

        if (userIndex === -1) {
          set({
            usersResponse: {
              status: "failure",
              message: "User not found",
              data: usersResponse.data,
              error: "El usurio no existe",
            },
          });
          return;
        }

        const updatedUser = {
          ...usersResponse.data[userIndex],
          ...userData,
          ultimaActualizacion: new Date(),
        };

        const newUsersArray = [...usersResponse.data];
        newUsersArray[userIndex] = updatedUser;

        set({
          users: newUsersArray,
          usersResponse: {
            status: "success",
            message: "User updated successfully",
            data: newUsersArray,
            error: null,
          },
        });

        console.log("User updated:", updatedUser);
      } catch (error) {
        console.error("Error updating user:", error);
        set({
          usersResponse: {
            status: "failure",
            message: "Error updating user",
            data: [],
            error: "Error al actualizar el usuario",
          },
        });
      }
    },
    fnDeleteUser: async (userId) => {
      try {
        const { usersResponse } = get();
        const newUsersArray = usersResponse.data.filter(
          (user) => user._id !== userId,
        );
        console.log(newUsersArray);
        if (!newUsersArray) {
          set({
            usersResponse: {
              status: "failure",
              message: "User not found",
              data: users,
              error: "El usurio no existe",
            },
          });
          return;
        }

        /* set((state) => ({
          users: state.users.filter((user) => user._id !== userId),
        })); */

        set({
          users: newUsersArray,
          usersResponse: {
            status: "success",
            message: "User deleted successfully",
            data: newUsersArray,
            error: null,
          },
        });
        console.log("User deleted:", usersResponse.data);
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
  };
});
