import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';

interface Props {
  screenName: string;
}
const EmptyScreen: React.FC<Props> = ({ screenName }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>{`This is ${screenName} screen`}</Text>
    </SafeAreaView>
  );
};

export default EmptyScreen;
