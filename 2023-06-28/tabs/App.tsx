import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { Routes } from './src/routes';


export default function App() {
  return (
    <>
      <Routes/>
      <StatusBar style="auto" />
    </>
  );
}