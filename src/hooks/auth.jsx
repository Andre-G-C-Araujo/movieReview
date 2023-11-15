import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});
  console.log(data);

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/session", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      localStorage.setItem("@moviesreview:user", JSON.stringify(user));
      localStorage.setItem("@moviesreview:token", token);

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possivel fazer a autenticação");
      }
    }
  }

  async function updateUserProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);

        user.avatar = response.data.avatar;
      }
      console.log(user);
      await api.put("/users", user);
      localStorage.setItem("@moviesreview:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Usuario atualizado");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi póssivel atualizar");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@moviesreview:token");
    localStorage.removeItem("@moviesreview:user");

    setData({});
  }

  async function getInfoNotes() {
    const response = await api.get("/movies_notes/1");
    const { title, rating, description } = response.data;
    // parei aqui, preciso pegar todas as notas referente ao user_id com o note_id
    console.log(title, rating, description);
  }

  useEffect(() => {
    const token = localStorage.getItem("@moviesreview:token");
    const user = localStorage.getItem("@moviesreview:user");

    if (user && token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    setData({
      token,
      user: JSON.parse(user),
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: data.user,
        signOut,
        updateUserProfile,
        getInfoNotes,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
