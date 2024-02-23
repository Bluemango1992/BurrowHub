import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'mon': require('@/assets/fonts/Montserrat-Regular.ttf'),
    'mon-bold': require('@/assets/fonts/Montserrat-Bold.ttf'),
    'mon-medium': require('@/assets/fonts/Montserrat-Medium.ttf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="projects" options={{ headerShown: true }} />
      <Stack.Screen name="observations" options={{ headerShown: true }} />
      <Stack.Screen name="fieldreports" options={{ headerShown: true }} />
      <Stack.Screen name="collaborations" options={{ headerShown: true }} />
      <Stack.Screen name="contacts" options={{ headerShown: true }} />
      <Stack.Screen name="internalnotes" options={{ headerShown: true }} />
      <Stack.Screen name="internalpictures" options={{ headerShown: true }} />
    </Stack>
  );
}