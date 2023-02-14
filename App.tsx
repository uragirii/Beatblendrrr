import { SafeAreaView } from "react-native";
import Player from "./src/screens/Player/Player";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, margin: 0 }}>
      <Player />
    </SafeAreaView>
  );
}
