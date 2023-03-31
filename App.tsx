import { StatusBar } from 'expo-status-bar';

import { ThemeProvider } from 'styled-components';

import { 
  useFonts, 
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';

import { 
  useFonts as useFontsRacing, 
  RacingSansOne_400Regular 
} from '@expo-google-fonts/racing-sans-one';

import {
  useFonts as useFontsSans,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';

import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

import theme from './src/global/styles/theme';

export default function App() {
  let [fontsLoaded] = useFontsRacing({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  let [fontsLoadedRacing] = useFonts({
    RacingSansOne_400Regular,
  });


  let [fontsLoadedSans] = useFontsSans({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded || !fontsLoadedRacing || !fontsLoadedSans) {
    return <Loading/>;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Home />
    </ThemeProvider>
  );
}
