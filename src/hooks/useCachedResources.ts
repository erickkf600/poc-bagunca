
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        // Load icons
        await Font.loadAsync({
          'icomoon': require('../../assets/fonts/icomoon.ttf'),
        });

        // Load fonts
        await Font.loadAsync({
          'jost-bold': require('../../assets/fonts/Jost-Bold.ttf'),
        });
        await Font.loadAsync({
          'jost-semibold': require('../../assets/fonts/Jost-SemiBold.ttf'),
        });
        await Font.loadAsync({
          'jost-medium': require('../../assets/fonts/Jost-Medium.ttf'),
        });
        await Font.loadAsync({
          'jost-regular': require('../../assets/fonts/Jost-Regular.ttf'),
        });
        await Font.loadAsync({
          'jost-light': require('../../assets/fonts/Jost-Light.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
