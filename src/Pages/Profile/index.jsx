import { useState } from "react";
import { Link } from "react-router-dom";

import placeholderImg from "../../assets/avatar_placeholder.svg";
import {
  FiLock,
  FiArrowLeft,
  FiCamera,
  FiUser,
  FiMail,
  FiSend,
} from "react-icons/fi";

import { Button } from "../../components/Button";
import { Container, Avatar, Form } from "./style";
import { Input } from "../../components/Input";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export const Profile = () => {
  const { user, updateUserProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [newPassword, setPassword] = useState();
  const [oldPassword, setOldPassowrd] = useState();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : placeholderImg;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleAvatarUpload(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);

    setAvatar(imagePreview);
  }

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword,
    };
    await updateUserProfile({ user, avatarFile });
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={`foto de ${user.name}`} />

          <label htmlFor="avatar">
            <FiCamera className="cameraFi" />
            <input type="file" id="avatar" onChange={handleAvatarUpload} />
          </label>
        </Avatar>
        <Input
          placeholder="User name"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="User email"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha Antiga"
          onChange={(e) => setOldPassowrd(e.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Nova Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button title={"Enviar"} icon={FiSend} onClick={handleUpdate} />
      </Form>
    </Container>
  );
};
