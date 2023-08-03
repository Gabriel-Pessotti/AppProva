/* eslint-disable no-undef */
import React from 'react';
import {
  ContainerGeral,
  TextBold,
  ViewButtonFooter,
  ViewGlobal,
  ViewHeader,
} from './styled';
import TopHeader from '../../components/TopHeader';
import IconProfile from '../../components/IconProfile';
import Button from '../../components/Button';


export default function Profile({navigation}) {
  return (
    <ContainerGeral>
      <ViewHeader>
        <TopHeader
        onPress={()=> navigation.navigate= ""}
        text="Settings Page"
        />
      </ViewHeader>
      <ViewGlobal>
        <TextBold>Account</TextBold>
        <IconProfile
        name="person-outline"
        size={24}
        color="black"
        text="Account"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
        />
        <IconProfile
        name="home"
        size={24}
        color="black"
        text="Address"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
        />
        <IconProfile
        name="notifications-outline"
        size={24}
        color="black"
        text="Notification"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
        />
        <IconProfile
        name="wallet-outline"
        size={24}
        color="black"
        text="Payment Method"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
        />
        <IconProfile
        name="alert-circle-outline"
        size={24}
        color="black"
        text="Privacy"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
        />
        <IconProfile
        name="lock-closed-outline"
        size={24}
        color="black"
        text="Security"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
        />
      <TextBold>Help</TextBold>
      <IconProfile
        name="call-outline"
        size={24}
        color="black"
        text="Contact Us"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
        />
        <IconProfile
        name="document-text-outline"
        size={24}
        color="black"
        text="FAQ"
        nameR="chevron-forward"
        sizeR={24}
        colorR="black"
        />
      </ViewGlobal>
      <ViewButtonFooter>
      <Button
              onPress={() => navigation.navigate("ogin")}
              border="#7140FD"
              name="Log Out"
              color="#7140FD"
      />
      </ViewButtonFooter>
    </ContainerGeral>
  );
}