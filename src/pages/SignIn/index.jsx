/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  ButtonLogin,
  ContainerGeral,
  SubTitle,
  TextAccount,
  TextLogin,
  Title,
  ViewButton,
  ViewFooterr,
  ViewGlobal,
  ViewHeader,
  ViewInput,
  ViewSenha,
} from './styled';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../../components/Button';
import {Input} from '../../components/Inputs';
import api from '../../services/api';

const schema = yup.object().shape({
  username: yup
      .string()
      .required('Inform your Name'),
  email: yup.string().email().required('Informe Seu Email'),
  password: yup
    .string()
    .required('Inform your password')
    .min(5, '* Password must contain at least 5 digits'),
});

export default function SignIn({navigation}) {
  const {
    control,
    watch,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async input => {
    try {
      const newUser = {
        username: input.username,
        email: input.email,
        password: input.password,
      };

      const response = await api.post('/auth/local/register', newUser);
      navigation.navigate('Login');
    } catch (error) {
      console.log(error, 'deu erro');
    }
  };

  const [senhaa, setSenha] = useState(true);

  return (
    <ContainerGeral>
      <ViewHeader>
        <Title>Create New{'\n'}Account</Title>
        <SubTitle>
        Water is life. Water is a basic human need. In various lines of life, humans need water.
        </SubTitle>
      </ViewHeader>
      <ViewGlobal>
        <ViewInput>
          <Input
            placeholder="Full Name"
            colorPlaceholder="#000"
            name="username"
            control={control}
            errors={errors}
          />
          <Input
            placeholder="Email"
            colorPlaceholder="#000"
            name="email"
            control={control}
            errors={errors}
          />
        </ViewInput>
        <ViewSenha>
          <Input
            placeholder="Password"
            colorPlaceholder="#000"
            name="password"
            control={control}
            errors={errors}
            secureTextEntry={senhaa}
          />
        </ViewSenha>
      </ViewGlobal>
      <ViewButton>
        <ViewFooterr>
          <TextAccount>Have an account?</TextAccount>
          <ButtonLogin onPress={()=> navigation.navigate('Login')}>
            <TextLogin>Login</TextLogin>
          </ButtonLogin>
        </ViewFooterr>
        <Button
          disabled={false}
          onPress={handleSubmit(onSubmit)}
          name="Get Started"
          background={isValid ? '#7140FD' : '#E5E4E3'}
          border="#E5E4E3"
        />
      </ViewButton>
    </ContainerGeral>
  );
}
