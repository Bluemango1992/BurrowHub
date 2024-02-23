// Import StyleSheet from React Native
import { StyleSheet } from 'react-native';

// Define your color palette
const colors = {
  primary: '#ffffff',
  secondary: '#2ecc71',
  background: '#d3d3d3',
  text: '#2c3e50',
  button: '#2980b9',
  buttonText: '#ffffff',
  inputBorder: '#ced4da',
  inputBackground: '#ffffff',
};

// Define common spacing units
const spacing = {
  small: 8,
  medium: 16,
  large: 24,
};

// Define common font sizes
const fontSizes = {
  small: 12,
  medium: 18,
  large: 24,
};

// Create the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    marginBottom: spacing.medium,
  },
  contents: {
    padding: spacing.medium,
  },
  text: {
    color: colors.text,
    fontSize: fontSizes.medium,
    marginBottom: spacing.medium,
  },
  headerText: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    marginBottom: spacing.medium,
  },
  button: {
    backgroundColor: colors.button,
    padding: spacing.medium,
    borderRadius: spacing.small,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: fontSizes.medium,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.inputBorder,
    backgroundColor: colors.inputBackground,
    padding: spacing.small,
    borderRadius: spacing.small,
    width: '100%',
    marginBottom: spacing.medium,
  },
  seperator: {
    marginVertical: spacing.medium,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  projectCard: {
    backgroundColor: colors.background,
    padding: spacing.medium,
    marginVertical: spacing.small,
    borderRadius: spacing.small,
    shadowColor: colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  paper: {
    backgroundColor: colors.primary,
    padding: spacing.medium,
    marginVertical: spacing.small,
  },

});

export default styles;