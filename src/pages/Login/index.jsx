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
  identifier: yup.string().email().required('Informe Seu Email'),
  password: yup
    .string()
    .required('Inform your password')
    .min(5, '* Password must contain at least 5 digits'),
});

export default function Login({navigation}) {
  const {
    control,
    watch,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (input) => {
    try {
      const newUser = {
        identifier: input.identifier,
        password: input.password,
      };

      const response = await api.post("/auth/local", newUser);
      console.log(response);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error, "Erro novamente");
    }
  };

  const [senhaa, setSenha] = useState(true);

  return (
    <ContainerGeral>
      <ViewHeader>
        <Title>Hello,{'\n'}Welcome Back!</Title>
        <SubTitle>
          Water is life. Water is a basic human need. In various lines of life,
          humans need water.
        </SubTitle>
      </ViewHeader>
      <ViewGlobal>
        <ViewInput>
          <Input
            placeholder="Email"
            colorPlaceholder="#000"
            name="identifier"
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
          <TextAccount>Don’t have an account?</TextAccount>
          <ButtonLogin onPress={()=> navigation.navigate('SignIn')}>
            <TextLogin>Create Account</TextLogin>
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
