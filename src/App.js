import React from 'react';
// import * as yup from 'yup';
import { userSchema } from './UserValidation';
import './App.css';
import { Container, Button, Form, FormGroup, Label, Input, Jumbotron } from 'reactstrap';


function App() {

  // const [ name, setName ] = useState('');
  // const [ address, setAddress ] = useState('');
  // const [ phone, setPhone ] = useState('');
  // const [ email, setEmail ] = useState('');
  // const [ born, setBorn ] = useState('');

  const createUser = async (event) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value,
      address: event.target[1].value, 
      phone: event.target[2].value,
      email: event.target[3].value,
      born: event.target[4].value 
    }
    const isValid = await userSchema.isValid(formData)
    console.log(isValid);
  }

  function handleName(value) {
    return value.replace(/\d/g, '');
  }
  function handlePhone(value) {
    return value.replace(/\D/g, '');
  }
  

  return (
    <div className="App mt-4">
      <Jumbotron>
        <Container>
          <Form onSubmit={createUser}>
            <FormGroup>
              <Label>Nome</Label>
              <Input type="text" onChange={(e) => {e.target.value = handleName(e.target.value)}} name="name" id="name" placeholder="Digite seu nome" />
            </FormGroup>
            <FormGroup>
              <Label>Endereço</Label>
              <Input type="text" name="address" id="address" placeholder="Digite seu endereço" />
            </FormGroup>
            <FormGroup>
              <Label>Telefone</Label>
              <Input type="text" onChange={(e) => {e.target.value = handlePhone(e.target.value)}} name="phone" id="phone" placeholder="Digite seu telefone" />
            </FormGroup>
            <FormGroup>
              <Label>E-mail</Label>
              <Input type="email"  name="email" id="email" placeholder="Digite seu e-mail" />
            </FormGroup>
            <FormGroup>
              <Label>Data de Nascimento</Label>
              <Input type="text" data-mask="00/00/0000" maxlength="10" name="born" id="born" placeholder="Digite sua data de nascimento" />
            </FormGroup>

            <Button className="primary" type="submit">Enviar</Button>
          </Form>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
