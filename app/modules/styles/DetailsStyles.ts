import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../theme';

export const styles = StyleSheet.create({
  container: { flex: 1 },
  detailsView: {
    alignItems: 'center',
    backgroundColor: Colors.detailsBackground,
    height: Metrics.screenHeight,
  },
});
