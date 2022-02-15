import * as Font from 'expo-font';
export default useFonts = async () =>
  await Font.loadAsync({
    DancingScript: require('../assets/fonts/DancingScript-Bold.ttf'),
    NotoSerif: require('../assets/fonts/NotoSerif-Bold.ttf'),
  });