import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './src/hooks/useCachedResources';
import Router from './src/router';
export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null
  }
  return (
    <SafeAreaProvider>
        <Router />
        <StatusBar backgroundColor="#ffff" />
    </SafeAreaProvider>
  );
}
