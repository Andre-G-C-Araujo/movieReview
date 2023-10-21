import { FiLock, FiArrowLeft, FiCamera, FiUser, FiMail } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Container, Avatar, Form } from "./style";
import { Button } from "../../components/Button";

export const Profile = () => {
  return (
    <Container>
      <header>
        <FiArrowLeft />
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/Andre-G-C-Araujo.png"
            alt="foto do usuario"
          />

          <label htmlFor="avatar">
            <FiCamera className="cameraFi" />
            <input type="file" id="avatar" />
          </label>
        </Avatar>
        <Input placeholder="User name" icon={FiUser} />{" "}
        {/*futuramenet recebe um atributo da api, desestrurado */}
        <Input placeholder="User email" icon={FiMail} />
        <Input icon={FiLock} placeholder="Senha Antiga" />
        <Input icon={FiLock} placeholder="Nova Senha" />
        <Button title={"Salvar"} />
      </Form>
    </Container>
  );
};
